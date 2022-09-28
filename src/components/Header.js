import PropTypes from 'prop-types'
import React from 'react';

const Header = (props) => {
  return (
    <header>
      <h1>{props.title}</h1>
    </header>
  );
}
Header.prototypes={
  title:PropTypes.string.isRequired,
}
export default Header;
