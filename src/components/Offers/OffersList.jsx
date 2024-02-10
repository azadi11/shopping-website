import React from 'react'
import OffersCards from './OffersCards'
import { Container,Row } from 'react-bootstrap'

function OffersList() {
    const OffersData=[
        {
            id:1,
            title:'40% off',
            text:'Cots',
            image:''
        },
        {
            id:2,
            title:'50% off',
            text:'Blazers',
            image:''
        },
        {
            id:3,
            title:'70% off',
            text:'Puffers',
            image:''
        },
        {
            id:4,
            title:'60% off',
            text:'Jackets',
            image:''
        }
    ]
  return (
    <Container>
        <h1>OFFERS</h1>
        <Row>
            {OffersData.map((item)=>(
                <OffersCards id={item.id} title={item.title} text={item.text}
                image={item.image}></OffersCards>
            ))}
        </Row>
    </Container>
  )
}

export default OffersList