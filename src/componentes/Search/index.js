import Input from "../Input"
import styled from "styled-components"
import { useState } from "react"
import { livros } from "./DadosPesquisa"

const SearchContainer = styled.section `
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`
const SearchTitle = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`
const SearchSubtitle = styled.h3`
    font-size: 16px;
    font-weith: 500px;
    margin-bottom: 40px;
`
const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;

    p{
        width: 200px;    
    }
    
    img{
        width 100px;
    }

    &:hover{
        border: 1px solid white;
    }
`

function Search(){
    const [livroPesquisado, setLivroPesquisado] = useState([])
    return(
        <SearchContainer>
            <SearchTitle>Por onde começar?</SearchTitle>
            <SearchSubtitle>Encontre o seu livro.</SearchSubtitle>
            <Input
                placeholder = "Escreva sua próxima leitura"
                onBlur = {evento =>{
                    const textoDigitado = evento.target.value
                    const resultadoPesquisa = livros.filter(livro => livro.nome.includes(textoDigitado))
                    setLivroPesquisado(resultadoPesquisa)
                }} />  
                {livroPesquisado.map(livro => (
                    <Resultado>
                        <img src = {livro.src}/>
                        <p>{livro.nome}</p>
                        
                    </Resultado>
                ))}              
        </SearchContainer>
    )
}

export default Search