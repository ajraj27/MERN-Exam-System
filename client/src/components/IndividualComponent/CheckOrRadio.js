import React from 'react';

const CheckOrRadio =(props) => (
    <div className="mb-5">
        <label className="form-label">{props.title}</label>
        {props.options.map(opt => {
            return (
            <div>
                <label key={opt}>
                    <input
                    name={props.setName}
                    onChange={props.controlFunc}
                    value={opt}
                    checked={ props.selectedOptions.indexOf(opt) > -1 }
                    type={props.type}/> {opt}
                </label>
            </div>    
           
            );
        })}

  </div>
)

export default CheckOrRadio;