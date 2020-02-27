import React from "react";
import "./App.css";
import { Menu } from "./components/layouts/Menu";
import {BrowserRouter as Router, Switch, Redirect} from "react-router-dom";
import Route from "./routes/Route";
import Home from "./components/home";
import GoldenAge from "./components/goldenAge";
import SpeechDelay from "./components/speechDelay";

function App() {
	
	return (
		<React.Fragment>
			<Router>
				<Menu/>
				<Switch>
					<Route exact path="/" component={ Home } />
					<Route path="/golden-age" component={ GoldenAge } />
					<Route path="/speech-delay" component={ SpeechDelay } />
					<Redirect to="/" />
				</Switch>
			</Router>
		</React.Fragment>
	);
}

export default App;
