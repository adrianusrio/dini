import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getContent }  from '../actions';
import { useDispatch } from 'react-redux'
export default function RouteWrapper({
	component: Component,
	isPrivate,
	...rest
}) {
	// const signed = true;
	// /**
	//  * Redirect user to SignIn page if he tries to access a private route
	//  * without authentication.
	//  */
	// if (isPrivate && !signed) {
	// 	return <Redirect to="/" />;
	// }
	// /**
	//  * Redirect user to Main page if he tries to access a non private route
	//  * (SignIn or SignUp) after being authenticated.
	//  */
	// if (!isPrivate && signed) {
	// 	return <Redirect to="/dashboard" />;
	// }
	/**
	 * If not included on both previous cases, redirect user to the desired route.
	 */
	const dispatch = useDispatch();

	dispatch(getContent(rest.path));
	
	return <Route {...rest} component={Component} />;
}
