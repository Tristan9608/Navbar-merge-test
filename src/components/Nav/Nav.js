import * as PropTypes from 'prop-types';
import * as React from 'react';
import {chart,paymentcard,pagelist,repeatall,addgroup } from '@fluentui/react/lib/Icon';
//import Icon from '../Icon/Icon';
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

    _onItemClick(item) {

        if (!item)
            return;

        //The item's key is already its 1-based index.
        let index = item.key;

        if (index !== this.state.selectedIndex) {
            this.setState(
                { selectedIndex: index }
            )

            //Raise this event to UXPin. We'll send them info about which item was clicked on.
            if (this.props[`onLink${index}Click`]) {
                this.props[`onLink${index}Click`](index);
            }
        }
    }
     render() {
         return(
            <div class="navbar">
                <chart/>
                <a onClick1  class="active">주문관리</a>
                <paymentcard/>
                <a onClick2 Icon="paymentcard">수금관리</a>
                <pagelist/>
                <a onClick3 Icon="pagelist">견적관리</a>
                <repeatall/>
                <a onClick4 Icon="repeatall">갱신관리</a>
                <addgroup/>
                <a onClick5 Icon="addgroup">공통업무</a>
            </div>
         )
     }
}

Nav.propTypes = {
    height: PropTypes.string,
    width: PropTypes.string,
    onClick1: PropTypes.func,
    onClick2: PropTypes.func,
    onClick3: PropTypes.func,
    onClick4: PropTypes.func,
    onClick5: PropTypes.func,
};

Nav.defaultProps = {
    height: '960px',
    width: '200px',
};
