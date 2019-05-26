import React from 'react';

const TextArea = (props) => (  
  <div className="form-group mb-5">
    <label className="form-label">{props.title}</label>
    <textarea
      className="form-control"
      style={props.resize ? null : {resize: 'none'}}
      name={props.name}
      rows={props.rows}
      value={props.content}
      onChange={props.controlFunc}
      placeholder={props.placeholder}/>
  </div>
);

export default TextArea;