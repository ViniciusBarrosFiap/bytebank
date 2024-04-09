import {render, screen} from "@testing-library/react"
import Menu from "./index"

test("Deve renderizar um link para a página inicial", ()=> {
    render(<Menu/>)
    const linkPaginaInicial = screen.getByText("Inicial")
    expect(linkPaginaInicial).toBeInTheDocument()
})