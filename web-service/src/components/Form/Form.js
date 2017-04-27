import React from 'react';
import './Form.css';

const Form = ({ children }) => {

  return (
    <form className="form">
      { children }
    </form>
  )
}

export default Form;