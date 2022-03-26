import React, { Component } from "react";

const Input = ({ /*type, value, onChange,*/ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        {...rest}
        // value={value}
        // onChange={onChange}
        name={name}
        // type={type}
        // autoFocus
        // ref={this.username}
        id={name}
        className="form-control"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
