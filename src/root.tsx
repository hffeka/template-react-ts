import "$/root.css";
import Index from "$routes/Index.tsx";
import React from "react";
import ReactDOM from "react-dom/client";
import { Route, Switch } from "wouter";

// biome-ignore lint/style/noNonNullAssertion: <required>
ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Switch>
			<Route path="/" component={Index} />
		</Switch>
	</React.StrictMode>,
);
