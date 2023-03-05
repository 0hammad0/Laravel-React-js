import React, { Fragment, Component } from "react";

class Form extends Component {
    render() {
        return (
            <Fragment>
                <form className="ui form">
                    <div className="fields">
                        <div className="four wide field">
                            <label>First name</label>
                            <input
                                type="text"
                                name="first_name"
                                placeholder="first mame..."
                            />
                        </div>

                        <div className="four wide field">
                            <label>Last name</label>
                            <input
                                type="text"
                                name="last_name"
                                placeholder="last name..."
                            />
                        </div>

                        <div className="six wide field">
                            <label>E-mail</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="jhondoe@gamil.com"
                            />
                        </div>

                        <div className="two wide field">
                            <button className="ui primary button submit-button">
                                Save
                            </button>
                        </div>
                    </div>
                </form>
            </Fragment>
        );
    }
}

export default Form;
