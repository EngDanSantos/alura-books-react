import './style.css'

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

function HeaderOptions(){
    return(
        <ul className='opcoes'>
            {textoOpcoes.map((texto)=>(
            <li className='opcao'><p>{texto}</p></li>
            ))}
        </ul>
    )
}

export default HeaderOptions;