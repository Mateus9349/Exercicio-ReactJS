import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './components/pages/Home'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import QuemSomos from'./components/pages/QuemSomos'
import Contato from './components/pages/Contato'
import Cadastro  from './components/pages/Cadastro'
import Login from './components/pages/Login'


function App() {
  return (
    <Router>

      <Navbar/>  

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/QuemSomos">
          <QuemSomos/>
        </Route>
        <Route path="/contato">
          <Contato />
        </Route>
        <Route path="/Cadastro">
          <Cadastro/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
      </Switch>

      <Footer/>
       
        
    </Router>
  )
}

export default App
