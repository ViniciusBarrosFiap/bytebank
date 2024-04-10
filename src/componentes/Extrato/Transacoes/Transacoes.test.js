import { render, screen } from '@testing-library/react';
import Transacoes from './index';
import estilos from '../Extrato.module.css'
test('Deve renderizar o mesmo componente com as props atualizadas', ()=> {
    const transacao = {
        transacao: 'Depósito',
        valor: 100
    }
    const {rerender} = render(<Transacoes estilos={estilos} transacao={transacao}/>)
    const tipoTransacao = screen.getByTestId('tipoTransacao')
    const valorTransacao = screen.getByTestId('valorTransacao')

    expect(tipoTransacao).toHaveTextContent('Depósito')
    expect(valorTransacao).toHaveTextContent('R$ 100')

    
    const transacao2 = {
        transacao: 'Transferência',
        valor: 50
    }
    rerender(<Transacoes estilos={estilos} transacao={transacao2}/>)
    const tipoTransacao2 = screen.getByTestId('tipoTransacao')
    const valorTransacao2 = screen.getByTestId('valorTransacao')

    expect(tipoTransacao2).toHaveTextContent('Transferência')
    expect(valorTransacao2).toHaveTextContent('- R$ 50')
})