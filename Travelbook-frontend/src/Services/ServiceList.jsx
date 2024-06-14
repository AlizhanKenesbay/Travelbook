import React from 'react'
import ServiceCard from './ServiceCard'
import { Col,Row } from 'reactstrap'
import exchangeImg from "../assets/images/exchangeIcon.png"
import infoImg from "../assets/images/infoIcon.png"
import blogImg from "../assets/images/blogIcon.png"
import supportImg from "../assets/images/supportIcon.png"

const serviceData =[
    {
        imgUrl: exchangeImg,
        title: "Обмен опытом",
        desc: "Обмен опытом со всем сообществом туристов"
    },
    {
        imgUrl: infoImg,
        title: "Информция о поездках",
        desc: "Получите информацию обо всех интересных местах для поездки"
    },
    {
        imgUrl: blogImg,
        title: "Интересные блоги",
        desc: "Наши редакторы пишут свои отзывы или предложения по поездкам"
    },
    {
        imgUrl: supportImg,
        title: "Поддержка клиентов",
        desc: "Мы поможем вам с оформлением поездки"
      }
]

const ServiceList = () => {
  return (
    <div>
        {
              <Row>
              {serviceData.map((item, index) => (
                <Col lg="3" md="6" sm="12" className='mb-4' key={index}>
                  <ServiceCard item={item} />
                </Col>
              ))}
            </Row>
        }
    </div>
  )
}

export default ServiceList