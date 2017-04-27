import React from 'react';
import './Button.css';

const Button = ({loading, icon, children, ...others}) => {

  const clsIcon = icon && loading ? 'fa fa-spinner fa-pulse' : icon;

  return (
    <button className='btn' {...others}>
      {clsIcon && <i className={clsIcon} />}
      {children}
    </button>
  )
}

export default Button;