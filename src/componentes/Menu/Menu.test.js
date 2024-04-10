import {render, screen} from "@testing-library/react"
import Menu from "./index"

test("Deve renderizar um link para a página inicial", ()=> {
    render(<Menu/>)
    const linkPaginaInicial = screen.getByText("Inicial")
    expect(linkPaginaInicial).toBeInTheDocument()
})

test("Deve renderizar uma lista de link para a página inicial", ()=> {
    render(<Menu/>)
    const listaDeLink = screen.getAllByRole("link")
    expect(listaDeLink).toHaveLength(4)
})

test("Não deve renderizar o link de extrato", ()=> {
    render(<Menu/>)
    const linkExtrato = screen.queryByText("Extrato")
    expect(linkExtrato).not.toBeInTheDocument()
})

test("Deve renderizar uma lista de links com a classe link", ()=> {
    render(<Menu/>)
    const links = screen.getAllByRole("link")
    links.forEach((link) => expect(link).toHaveClass("link"));
    expect(links).toMatchSnapshot()
})