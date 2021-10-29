import * as PropTypes from 'prop-types';
import * as React from 'react';
import Icon from '@fluentui/react/lib/Icon';

import './Navtest.css';

export default class Navtest extends React.Component{
     render() {
         return(
            <div class="navbar">
                <a><i Icon iconName="chart"/>주문관리</a>
                <a><i Icon iconName="paymentcard"/>수금관리</a>
                <a><i Icon iconName="pagelist"/>견적관리</a>
                <a><i Icon iconName="repeatall"/>갱신관리</a>
                <a><i Icon iconName="addgroup"/>공통업무</a>
            </div>
         )
     }
}

Navtest.propTypes = {
    topPadding: PropTypes.string,
    height: PropTypes.string,
    width: PropTypes.string,
    onClick1: PropTypes.func,
    onClick2: PropTypes.func,
    onClick3: PropTypes.func,
    onClick4: PropTypes.func,
    onClick5: PropTypes.func,
};

Navtest.defaultProps = {
    topPadding: '80px',
    height: '960px',
    width: '200px',
};
