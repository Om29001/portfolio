import "./App.css"
import Header from "./Mycomp/Header"
import Footer from "./Mycomp/Footer"
import Home from "./Mycomp/Home"
import Portfoliopage from "./Mycomp/Portfoliopage"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Error from "./Mycomp/Error"
import Admin from "./Mycomp/Admin"

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        {/* <Route exact path="/about">
          <About />
        </Route> */}
        <Route exact path="/portfolio">
          <Portfoliopage />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/admin">
          <Admin />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>

      <Footer />
    </Router>
  )
}
export default App
