import { Switch, Route, BrowserRouter  } from "react-router-dom";
import Home from "./components/Home"
import About from "./components/About"
import Posts from "./components/Posts"
import Projects from "./components/Projects"
import SinglePost from "./components/SinglePost"
import NavBar from "./components/NavBar"

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Switch>
      <Route component={Home} path='/' exact/>
      <Route component={About} path='/about'/>
      <Route component={Posts} path='/posts'/>
      <Route component={Projects} path='/projects'/>
      <Route component={SinglePost} path='/posts/:slug'/>
     
    </Switch>
    </BrowserRouter>

  )
}

export default App;
