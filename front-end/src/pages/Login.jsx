import React from "react";
import '../style/Login.css';
import { Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import iconLogin from '../assets/login/user.png';
import Col from 'react-bootstrap/Col';

function Login() {
    return (
      <>
        <div className="Form">
          <form className="container-inputs">
            <Image className="icon-login-img" src={ iconLogin} roundedCircle />   
            
            <input type="email" placeholder="E-mail" name="" />

            <input type="password" placeholder="Senha" name="" />

            <Button variant="outline-light">Enviar</Button>
          </form>
        </div>
      </>
    );
}


export default Login;