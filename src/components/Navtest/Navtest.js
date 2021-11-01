import * as PropTypes from 'prop-types';
import * as React from 'react';
import './Navtest.css';

export default class Navtest extends React.Component{
     render() {
         return(
                <div class="navbar">
                    <link type="text/css" rel="stylesheet" href="https://static2.sharepointonline.com/files/fabric/office-ui-fabric-core/11.0.0/css/fabric.min.css"></link>
                    <a><i class="ms-Icon ms-Icon--Chart" aria-hidden="true" style=""></i> 주문관리</a>
                    <a><i class="ms-Icon ms-Icon--PaymentCard" aria-hidden="true"></i> 수금관리</a>
                    <a><i class="ms-Icon ms-Icon--PageList" aria-hidden="true"></i> 견적관리</a>
                    <a><i class="ms-Icon ms-Icon--RepeatAll" aria-hidden="true"></i> 갱신관리</a>
                    <a><i class="ms-Icon ms-Icon--AddGroup" aria-hidden="true"></i> 공통업무</a>
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
