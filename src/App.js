import { Switch, Route, BrowserRouter  } from "react-router-dom";
import Home from "./components/Home"
import About from "./components/About"
import Post from "./components/Posts"
import Project from "./components/Projects"
import SinglePost from "./components/SinglePost"
import NavBar from "./components/NavBar"

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Switch>
      <Route component={Home} path='/' exact/>
      <Route component={About} path='/about'/>
      <Route component={SinglePost} path='/post/:slug'/>
      <Route component={Post} path='/post'/>
      <Route component={Project} path='/project'/>
     
     
    </Switch>
    </BrowserRouter>

  )
}

export default App;
