
import React from "react";

const SingleUserRegistration=({item}) =>(

    <div className="row">
        <div className="col s12 m6">
            <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                    <span className="card-title">UserRegistration Id : {item.id} </span>

                </div>
                <div className="card-action">
                    <p>Created By : {item.createdBy}</p>
                    <p>User E-mail : {item.email}</p>
                    <p>Password: {item.password}</p>
                </div>

            </div>
        </div>
    </div>

);

export default SingleUserRegistration;