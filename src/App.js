import './App.css';
import ListItems from './Component/ListItems';
import { BrowserRouter, Switch, Route } from "react-router-dom";

export default function App() {
  return (
          <BrowserRouter>
          <Switch>
          <Route path="/" exact component={ListItems} />
        </Switch>
        </BrowserRouter>
        );
}


