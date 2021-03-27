import React from 'react'
import styled from 'styled-components'

import Logo from './../img/logo.png'
import Menu from './../img/menu.png'

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 30px 65px;

    > div {

        img {
            width: 150px;
        }
    }
`

export default class Header extends React.Component {

    render() {

        return (
            <HeaderContainer>
                <img src={Logo} />
                <div>
                <img src={Menu} />
                </div>
            </HeaderContainer>
        )
    }
}