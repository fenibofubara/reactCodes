import Navbar from './components/Navbar'
import {BrowserRouter,Route,Switch}  from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Post from './components/Post'


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <div className="container">
    <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/about' component={About}/>
    <Route path='/contact' component={Contact}/>
    <Route path='/:post_id' component={Post}/>
    </Switch>
    </div>
    </BrowserRouter>
  
  );
}

export default App;
