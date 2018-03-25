import React, { Component } from 'react';
import logo from './logo.svg';
//to import logo.svg into the app.js if it is in src
import './../styles/App.css';
import Blog from './../components/blogs/blog';
import home from './../components/home/home';
import map from './../components/maps/map';
import notfound from './../components/notfound/notfound';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'

import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Router history={history}>
                <div>
                    <header className="header">
                        <nav className="navbar container">
                            <div className="navbar-brand">
                                <Link to="/">
                                    <span className="navbar-item">Lazy Loading Routes</span>
                                </Link>
                            </div>

                            <div className="navbar-end">
                                <Link to="/maps">
                                    <span className="navbar-item">Maps</span>
                                </Link>
                                <Link to="/blog">
                                    <span className="navbar-item">Blog</span>
                                </Link>
                            </div>
                        </nav>
                    </header>
                    <section className="content">
                        <Switch>
                            <Route exact path="/" component={home} />
                            <Route path="/maps" component={map} />
                            <Route path="/blog" component={Blog} />
                            <Route path="*" component={notfound} />
                        </Switch>
                    </section>
                </div>
            </Router>
    );
  }
}

export default App;
