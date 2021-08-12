import React from "react";

//stateless
const Header = () => ( <
    header >
    <
    div style = {
        {
            backgroundImage: `url(${process.env.PUBLIC_URL + 'src/imagens/pagina segunda torre'})`
        }
    } >
    <
    /div> <
    h1 className = "title" > Teste Front - end JR HVEX < /h1> <
    /header>
);

export default Header;