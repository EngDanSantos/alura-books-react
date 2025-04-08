import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'
import styled from 'styled-components'

const Icons = styled.ul `
    display: flex;
    align-items: center;
`
const Icon = styled.li `
    margin-right: 40px;
    width: 25px;
`

const icones = [perfil, sacola]

function HeaderIcons(){
    return(
        <Icons>
            {icones.map((icone)=>(
            <Icon><img src={icone}></img></Icon>
            ))}
        </Icons>
    )
}

export default HeaderIcons;