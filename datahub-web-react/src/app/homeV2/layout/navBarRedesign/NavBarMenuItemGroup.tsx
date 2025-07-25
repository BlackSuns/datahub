import { Menu } from 'antd';
import styled from 'styled-components';

const NavBarMenuItemGroup = styled(Menu.ItemGroup)`
    .ant-menu-item-group-title {
        margin-top: 8px;
        padding: 8px 0;
        color: #8088a3;
        font-family: Mulish;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        min-height: 38px;

        @media (max-height: 935px) {
            margin-top: 4px;
        }
        @media (max-height: 890px) {
            margin-top: 2px;
        }
        @media (max-height: 835px) {
            margin-top: 0px;
        }
    }
`;

export default NavBarMenuItemGroup;
