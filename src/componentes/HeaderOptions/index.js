import styled from 'styled-components';


const OptionsNav = styled.ul `
    display: flex;
`
const TextNav = styled.li `
    min-width: 120px;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer
`

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

function HeaderOptions(){
    return(
        <OptionsNav>
            {textoOpcoes.map((texto)=>(
            <TextNav><p>{texto}</p></TextNav>
            ))}
        </OptionsNav>
    )
}

export default HeaderOptions;