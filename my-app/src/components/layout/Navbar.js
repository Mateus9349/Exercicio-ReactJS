import { Link } from 'react-router-dom'
import Logo from './logo.png'
import styles from '../layout/Navbar.module.css'
import Quemsomos from "../pages/QuemSomos"
import Contato from '../pages/Contato'
import Cadastro from '../pages/Cadastro'
import Login from '../pages/Login'



function Navbar(){
    return(
            <container className={styles.navbar}>
           
                <Link to="/" className={styles.lin}>
                <img src={Logo} alt="logomarca" className={styles.logos}/>
                </Link>

                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to='/quemsomos'>Quem Somos</Link>
                    </li>

                    <li className={styles.item}>
                        <Link to='contato'>Contato</Link>
                    </li>

                    <li className={styles.item}>
                        <Link to='cadastro'>Cadastro</Link>
                    </li>

                    <li className={styles.item}>
                        <Link to='login'>Login</Link>
                    </li>
                </ul>
                
            </container>
    )
}

export default Navbar