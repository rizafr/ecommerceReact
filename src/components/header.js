import React from 'react';

const Header = (props) => {
  return (
    <h1 className="page-title">
      {props.title }
    </h1>
  );
};

export default Header;