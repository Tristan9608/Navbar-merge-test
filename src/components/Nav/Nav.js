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
    
    
    /** @uxpinignoreprop */
    title: PropTypes.string,
    /** @uxpinignoreprop */
    background: PropTypes.string,
    /**
     * @uxpinpropname Label
     */
    children: PropTypes.string,
    icon: PropTypes.node,
    stretched: PropTypes.bool,
    onClick: PropTypes.func,
  };

  Nav.defaultProps = {
    mode: 'filled',
    size: 'm',
    stretched: true,
  };

  export { Nav as default };