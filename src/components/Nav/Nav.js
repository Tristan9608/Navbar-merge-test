import * as PropTypes from 'prop-types';
import * as React from 'react';
//import { NavStyles } from './Nav.styles';
import './Nav.css';
//import Button from '../Button/Button';
/*
import{
    NavStyles, NavSelectedStyles, NavActiveStyles, NavHoverStyles, firstNavItem, secondNavItem,thirdNavItem,forthNavItem,fifthNavItem,
} from './Nav.styles';
*/
export default class Nav extends React.Component{
/*
    static getDerivedStateFromProps(props) {
        return {
          body: props.data.body,
          header: props.data.header,
        };
      }

    constructor(props) {
       super(props);
       this.state = {
         body: this.props.data.body,
         header: this.props.data.header,
       };
     }
*/
     render() {
         return(
             /*
            <html>
                <head>
                    <NavStyles/>
                </head>
                <body>*/
                    <div class="navbar">
                        <a class="active">주문 관리</a>
                        <a>수금 관리</a>
                        <a>견적 관리</a>
                        <a>갱신 관리</a>
                        <a>공통 업무</a>
                    </div>
               /* </body>
            </html>*/
         )
     }
}

Nav.propTypes = {
}

Nav.defaultProps = {
    width: '200px',
};
