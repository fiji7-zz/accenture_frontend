
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { MainForm } from './components/MainForm'
import { Modal } from './components/Modal'
import { Main, HeadLine, Header } from './styles'

function App() {
  return (
    <Main>
      <HeadLine></HeadLine>
      <Header>New event</Header>
      <Router>
        <Switch>
          <Route exact path="/">
            <MainForm />
          </Route>
          <Route path="/success" >
            <Modal />
          </Route>
        </Switch>
      </Router>
    </Main>
  );
}

export default App;

