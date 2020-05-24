import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './pages/home'
import Veiculos from './pages/veiculos'

const App = () => {
  const routes = [
    {component: Home, path:"/", exact: true, name: 'Inicio'},
    {component: Veiculos, path:"/veiculo", name: 'Veiculos'}
  ]
  return (
   <Router>
    {
      routes.map(i => <Route key={i.path} component={i.component} exact={i.exact} path={i.path} />)
    }
   </Router>
  )
}

export default App