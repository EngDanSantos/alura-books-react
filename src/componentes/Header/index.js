import './style.css'
import HeaderIcons from '../HeaderIcons';
import HeaderOptions from '../HeaderOptions';
import Logo from '../Logo'

function Header(){
    return(
        <header className="App-header">
            <Logo/>
            <HeaderOptions/>
            <HeaderIcons/>  
        </header>
    )
}

export default Header;