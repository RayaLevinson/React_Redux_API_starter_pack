import { Provider } from 'react-redux'; // redux
import store from 'redux/store/store'; // Redux
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserList from 'components/users/UserList';
import UserDetails from 'components/users/UserDetails';
import './App.css';
import Header from 'components/layout/Header';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      {/* Basename is used due to deployment in subfolder on my web site */}
      <Provider store={store}>
        <div className='container'>
          <Header />
          <Switch>
            <Route exact path='/' component={UserList} />
            <Route exact path='/users/:id' component={UserDetails} />
            <Route path='*' component={UserList} />
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
