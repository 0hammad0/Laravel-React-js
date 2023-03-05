import React, { Component, Fragment } from "react";

class Customer extends Component {
    render() {
        return (
            <Fragment>
                <tr>
                    <td style={{ textAlign: "center" }}>1</td>
                    <td>Jhon Doe</td>
                    <td>jhondoe@gamil.com</td>
                    <td>
                        <button className="mini ui blue button">Edit</button>
                        <button className="mini ui red button">Delete</button>
                    </td>
                </tr>
            </Fragment>
        );
    }
}

export default Customer;
