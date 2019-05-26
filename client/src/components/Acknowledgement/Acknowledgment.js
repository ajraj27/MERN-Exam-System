import React from 'react';
import {Link} from 'react-router-dom';

const Acknowledgement=() => (
    <div className="container">
        <div className="row">
            <div className="col-md-8 offset-md-2">
                <div className="card">
                    <div className="card-body">
                        <h1>Response submitted successfully!</h1>
                        <Link to="/">See previous response</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Acknowledgement;