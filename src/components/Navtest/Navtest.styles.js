import { css } from '@emotion/core';
import styled from '@emotion/styled';
import withProps from 'recompose/withProps';
import borders from '../../styles/borders.json';
import colors from '../../styles/colors.json';
import shadow from '../../styles/shadows.json';
import sizes from '../../styles/sizes.json';
import typography from '../../styles/typography.json';
import Icon from '../Icon/Icon';

const NavStyles = styled('style')`
body{
margin: 0;
font-family: "Lato", sans-serif;
}
.navbar{
margin: 0;
padding-top: 80px;
width: 200px;
background-color: #232152;
position: fixed;
height: 100%;
overflow: auto;
}
.navbar a{
display: block;
color: white;
padding-left: 68px;
padding-top: 13px;
padding-bottom: 13px;
text-decoration: none;
}
.navbar a.active{
display: block;
color: white;
padding-left: 68px;
padding-top: 13px;
padding-bottom: 13px;
text-decoration: none;
}
.navbar a:hover:not(.active){
background-color: #648ed1;
color: white;
}
`;
/*
const NavSelectedStyles = styled('.navbar a')`
display: block;
color: white;
padding-left: 68px;
padding-top: 13px;
padding-bottom: 13px;
text-decoration: none;
`;

const NavActiveStyles = styled('.navbar a.active')`
background-color: #648ed1;
  color: white;
`;

const NavHoverStyles = styled('.navbar a:hover:not(.active)')`
background-color: #648ed1;
  color: white;
`;

const firstNavItem = styled('a')`icon(chart) 주문 관리`;
const secondNavItem = styled('a')`icon(paymentcard) 수금 관리`;
const thirdNavItem = styled('a')`icon(pagelist) 견적 관리`;
const forthNavItem = styled('a')`icon(repeatall) 갱신 관리`;
const fifthNavItem = styled('a')`icon(addgroup) 공통 업무`;
*/

export{
    NavStyles,
    /*
    NavSelectedStyles, NavActiveStyles, NavHoverStyles, 
    firstNavItem, secondNavItem,thirdNavItem,forthNavItem,fifthNavItem,
    */
};