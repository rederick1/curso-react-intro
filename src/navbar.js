import './navbar.css';
import React from 'react';
import logo from './coomeva.png';
import { Link } from 'react-router-dom';

const links=[
  {name: "home",href: "https://www.coomeva.com.co/"},
  {name: "MyAccount",href:"/Micuenta/MyAccount"},
  {name:"ingreso",href:"/ingreso"},
];
/*
function Navbar({}){
  return(
<nav class="barra">
      <div><img src={logo} height={60} alt="logo"/></div>
      {links.map(i =>(
        <Link to={i.href}>{i.name}</Link>
      ))}
      </nav>
  );
}*/

function Navbar({}){
  return(
    <nav class="barra">
    <div><img src={logo} height={60} alt="logo"/></div>
    <a href='https://www.coomeva.com.co/'>Inicio</a>
    <a href='./ingreso'>Ingreso</a>
    <a href='./MyAccount'>Mi coomeva</a>
    </nav>
  )
}
export{Navbar};