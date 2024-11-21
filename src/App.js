// src/App.js
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Products from './pages/Products/Products';
import Cart from './components/Cart/Cart';
import ErrorBoundary from './components/ErrorBoundary';
function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Switch>
          <Route path="/" exact component={Products} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </Router>
    </ErrorBoundary>
  );
}

export default App;