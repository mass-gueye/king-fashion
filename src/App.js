import './App.css';
import Homepage from './pages/homepage/Homepage';
import { Route, Switch } from 'react-router-dom';


const App = () => {
  const Hats = () => {
    return(
      <div>
        <h1>HATS PAGE</h1>
      </div>
    )
  }
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop/hats' component={Hats} />
      </Switch>
    </div>
  )
}

export default App
