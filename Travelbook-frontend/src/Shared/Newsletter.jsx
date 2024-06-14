import React from 'react'
import "./Newsletter.css"

import { Container,Row,Col } from 'reactstrap'
import MaleTourist from "../assets/images/male-tourist.png"


const Newsletter = () => {
  return (
    <section className='newsletter'>
        <Container>
            <Row>
                <Col lg="6">
                    <div className="newsletter__content">
                        <h2>Подпишитесь, чтобы получать инетерсные новости о поездках</h2>

                        <div className="newsletter__input">
                            <input type="email" placeholder='Введите почту'/>
                            <button className='btn newsletter__btn'>Подписаться</button>
                        </div>

                        <p>Оставайтесь в курсе последних новостей о лучших направлениях для поездок,
                            блогах от наших авторов и специальных предложений!
                        </p>
                    </div>
                </Col>
                <Col lg="6">
                    <div className="newsletter__img">
                        <img src={MaleTourist} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Newsletter