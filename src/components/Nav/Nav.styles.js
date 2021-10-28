import { css } from '@emotion/core';
import styled from '@emotion/styled';
import withProps from 'recompose/withProps';
import borders from '../../styles/borders.json';
import colors from '../../styles/colors.json';
import shadow from '../../styles/shadows.json';
import sizes from '../../styles/sizes.json';
import typography from '../../styles/typography.json';

const onItemClick = (item) => {

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

const NavCommon = withProps({
    createProps: (props) => props.disabled,
})(styled('button')`
display: flex;
align-items: center;
width: 200px;
height: 960px;
background-color: #232152;
`);

const defaultNavItems = `icon(chart) 주문 관리
icon(paymentcard) 수금 관리
icon(pagelist) 견적 관리
icon(repeatall) 갱신 관리
icon(addgroup) 공통 업무`;

const NavStyles = styled(NavCommon)`
  
`;

export default NavStyles;