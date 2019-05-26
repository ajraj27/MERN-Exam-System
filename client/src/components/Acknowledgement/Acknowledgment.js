import React from 'react';
import {Link} from 'react-router-dom';

const Acknowledgement=() => (
            <div className="row bg-danger" style={{height:"100vh"}}>
                <div className="col-md-8 offset-md-2">
                    <div className="card mt-5 bg-success ">
                        <div className="card-body">
                            <h1>Response submitted successfully!</h1>
                            <Link className="text-white" to="/">See previous response</Link>
                        </div>
                    </div>
                </div>
            </div>
       
);

export default Acknowledgement;