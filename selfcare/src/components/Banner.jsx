import React from 'react'
import styled from 'styled-components'

import BannerImg from './../img/banner.png'

const DivBanner = styled.div`

    img {
        width: 100%;  
    }
`

export default class Banner extends React.Component {

    render() {

        return (
            <DivBanner>
                <img src={BannerImg} />
            </DivBanner>
        )
    }
}