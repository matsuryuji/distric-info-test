import {
  BrowserRouter as Router,
  Route,
  Routes as Switch
} from "react-router-dom";
import { Main } from "pages/Main";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" element={<Main />} />
      </Switch>
    </Router>
  );
}
