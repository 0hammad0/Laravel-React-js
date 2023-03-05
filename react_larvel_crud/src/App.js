import React, { Fragment } from "react";
import Form from "./components/Form";
import CustomerList from "./components/CustomerList";
import "./App.css";

export default function App() {
    return (
        <Fragment>
            <div className="ui fixed inverted menu">
                <div className="ui container">
                    <a href="/#" className="header item">
                        React Js CRUD with Laravel API
                    </a>
                </div>
            </div>
            <div className="ui main container">
                <Form />

                <CustomerList />
            </div>
        </Fragment>
    );
}
