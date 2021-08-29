import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './containers/Header'
import ProductsListing from './containers/ProductsListing'
import ProductDetail from './containers/ProductDetail'

function App() {
  return (
    <div className="App">
      <Router>
        <h1>App</h1>
        <Header />
        <Switch>
          <Route exact path='/' component={ProductsListing} />
          <Route path='/products/:id' component={ProductDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

