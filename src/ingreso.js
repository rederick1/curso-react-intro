import './ingreso.css';
import logo from './coomeva.png';


function Ingreso(){
    return(
        <div className='ingreso'><form action='./Micuenta/index.js'>
            <img src={logo} height={200} alt="logo"></img>
            <input type="text" id="user" name="user" value={"Usuario"}></input>
            <input type="text" id="pass" name="pass" value={"Contraseña"}></input><br></br><br></br>
            <a href='olvido'>Olvide mi contraseña</a>
            <input className='submit' type='submit' id='submit' value={"Ingresar"}></input>
        </form>
        </div>
    )
}

export{Ingreso}