import HeaderIcons from '../HeaderIcons';
import HeaderOptions from '../HeaderOptions';
import Logo from '../Logo'
import styled from 'styled-components';

const HearderContainer = styled.header`
    background-color: #fff;
    display: flex;
    justify-content: center;
  `

function Header(){
    return(
        <HearderContainer>
            <Logo/>
            <HeaderOptions/>
            <HeaderIcons/>  
        </HearderContainer>
    )
}

export default Header;