import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.css';


import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import BlogDetails from './pages/BlogDetails';



function App() {
  return (

    <div className="App">
      
      <Router>
        <Header/>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>

            <Route exact path='/blogs'>
                <Blogs/>
            </Route>
            <Route exact path='/blog-details'>
              <BlogDetails/>
              
            </Route>
          </Switch>
        <Footer/>
      </Router>
     
      
    </div>
  );
}

export default App
