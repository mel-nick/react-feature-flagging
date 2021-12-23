import React from 'react';

const Button = ({ userPermission, buttonText, backgroundColor, textColor }) => {
  const style = {
    color: userPermission === false ? 'grey' : textColor,
    backgroundColor: userPermission === false ? 'transparent' : backgroundColor,
    padding: '10px 20px',
    display: 'block',
    margin: '20px',
    fontWeight: 'bold',
  };
  return (
    <button
      disabled={userPermission !== undefined && !userPermission}
      style={style}
    >
      {buttonText}
    </button>
  );
};

export default Button;
