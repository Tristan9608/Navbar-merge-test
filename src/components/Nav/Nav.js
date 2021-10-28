import * as PropTypes from 'prop-types';
import * as React from 'react';
import NavStyles from './Nav.styles';

const Nav = (props) => (
    <NavStyles {...props}>
      {props.icon}
      {props.children}
    </NavStyles>
  );

  Nav.propTypes = {
    icon: PropTypes.node,
    stretched: PropTypes.bool,
    onClick: PropTypes.func,
  };

  Nav.defaultProps = {
    stretched: true,
  };

  export { Nav as default };