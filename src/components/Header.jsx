import React from 'react';
import '../assets/styles/components/Header.scss'
//vamos a crear un componente presentacional, este componente no tiene logica
//solo van a empujar una seccion de html dentro de nuestra construccion

//cuando usamos parentesis dentro de la flecha usamos un return explicito
const Header = () => (
    <header className="header">
        <img className="header__img" src="../assets/logo-platzi-video-BW2.png" alt="Platzi Video"/>
        <div className="header__menu">
            <div className="header__menu--profile">
                <img src="../assets/user-icon.png" alt=""/>
                <p>Perfil</p>
            </div>
            <ul>
                <li><a href="/">Cuenta</a></li>
                <li><a href="/">Cerrar Sesión</a></li>
            </ul>
        </div>
    </header>
);

export default Header;