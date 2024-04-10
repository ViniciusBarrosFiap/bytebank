import { render, screen } from '@testing-library/react';
import Extrato from './index'

test('Deve rederizar o componente extrato', () => {
    const transacoes = [
        {
            transacao: 'Depósito',
            valor: 100
        }
    ]
    
    render(<Extrato transacoes={transacoes}/>);
    const lista = screen.getByRole('listitem');
    expect(lista).toBeInTheDocument();
})