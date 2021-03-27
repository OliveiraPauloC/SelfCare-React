import React from 'react'
import styled from 'styled-components'

import Item1 from './../img/item1.jpg'
import Item2 from './../img/item2.jpg'
import Item3 from './../img/item3.jpg'
import Item4 from './../img/item4.jpg'
import Item5 from './../img/item5.jpg'
import Item6 from './../img/item6.jpg'
import Item7 from './../img/item7.jpg'
import Item8 from './../img/item8.jpg'
import Item9 from './../img/item9.jpg'

const DivContainer = styled.div`
`

const FirstDiv = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 30px 65px;
    border-bottom: 0.2px solid #A5A1A1;
    font-weight: bold;
`

const MainDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 157px;
    padding: 60px 65px;
    border-bottom: 0.2px solid #A5A1A1;

    div {
        margin-bottom: 30px;
        height: 400px;

        img {
            width: 300px;
        }

        div {

            padding-top: 20px;

            p {
                font-size: 1.20rem;
                font-weight: bold;
                padding-bottom: 8px;
            }

            span {
                color: #5CA720;
            }

        }

        

    } 
`


export default class Container extends React.Component {

    render() {

        return (
            <DivContainer>
                <FirstDiv>
                    <h3>PROMOÇÃO</h3>
                    <p>9 Produtos</p>
                </FirstDiv>
                <MainDiv>
                    <div>
                        <img src={Item1} />
                        <div>
                            <p>Lorem ipsum dolor sit</p>
                            <p>R$ <span>50,00</span></p>
                        </div>
                    </div>
                    <div>
                        <img src={Item2}/>
                        <div>
                            <p>Lorem ipsum dolor sit</p>
                            <p>R$ <span>50,00</span></p>
                        </div>
                    </div>
                    <div>
                        <img src={Item3}/>
                        <div>
                        <p>Lorem ipsum dolor sit</p>
                        <p>R$ <span>50,00</span></p>
                    </div>
                    </div>
                    <div>
                        <img src={Item4}/>
                        <div>
                            <p>Lorem ipsum dolor sit</p>
                            <p>R$ <span>50,00</span></p>
                        </div>
                    </div>
                    <div>
                        <img src={Item5}/>
                        <div>
                            <p>Lorem ipsum dolor sit</p>
                            <p>R$ <span>50,00</span></p>
                        </div>
                    </div>
                    <div>
                        <img src={Item6}/>
                        <div>
                            <p>Lorem ipsum dolor sit</p>
                            <p>R$ <span>50,00</span></p>
                        </div>
                    </div>
                    <div>
                        <img src={Item7}/>
                        <div>
                            <p>Lorem ipsum dolor sit</p>
                            <p>R$ <span>50,00</span></p>
                        </div>
                    </div>
                    <div>
                        <img src={Item8}/>
                        <div>
                            <p>Lorem ipsum dolor sit</p>
                            <p>R$ <span>50,00</span></p>
                        </div>
                    </div>
                    <div>
                        <img src={Item9}/>
                        <div>
                            <p>Lorem ipsum dolor sit</p>
                            <p>R$ <span>50,00</span></p>
                        </div>
                    </div>
                </MainDiv>
            </DivContainer>
        )
    }
}