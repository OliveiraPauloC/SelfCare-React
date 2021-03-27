import React from 'react'
import styled from 'styled-components'

import Header from './components/Header'
import Banner from './components/Banner'
import Container from './components/Container'
import Footer from './components/Footer'

export default class App extends React.Component {

  render() {

    return (
      <div>
        <Header />
        <Banner />
        <Container />
        <Footer />
      </div>
    )
  }
}