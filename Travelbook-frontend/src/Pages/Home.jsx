import React from 'react'
import "../styles/Home.css"
import {Container,Row, Col} from 'reactstrap'
import heroImg1 from "../assets/images/hero-img01.jpg"
import heroImg2 from "../assets/images/hero-img02.jpg"
import heroImg3 from "../assets/images/hero-img03.jpg"
import Subtitle from '../Shared/Subtitle'
import worldImg from "../assets/images/world.png"
import experienceImage from "../assets/images/experience.png"
import SearchBar from '../Shared/SearchBar'
import ServiceList from '../Services/ServiceList'
import FeaturedToursList from '../Components/FeaturedTours/FeaturedToursList'
import MasonryImagesGallery from '../Components/Image-gallery/MasonryImagesGallery'
import Testimonials from '../Components/Testimonials/Testimonials'
import Newsletter from '../Shared/Newsletter'
import Contact from './Contact'
import FeaturedBlogsList from '../Components/FeaturedBlogs.jsx/FeaturedBlogsList'

const Home = () => {
  return (
    <>
    <section>
      <Container>
        <Row>
          <Col lg="6">
            <div className="hero__content">
              <div className="hero__subtitle d-flex align-items-center">
                <Subtitle subtitle={"Открой для себя чудеса путешествий"}/>
                <img src={worldImg} alt="" />
              </div>
              <h1>
                Путешествуй и создавай {" "}
                <span className="highlight">Воспоминания</span>
              </h1>
              <p>
                Откройте для себя Казахстан по новому — страну величественных гор, бескрайних степей и древних городов.
                Наслаждайтесь спокойствием природы и гостеприимством местных жителей.
                Каждое путешествие здесь — это незабываемое приключение.
              </p>
            </div>
          </Col>
          <Col lg="2">
            <div className="hero__img-box">
              <img src={heroImg1} alt="" />
            </div>
          </Col>
          <Col lg="2">
            <div className="hero__img-box mt-4">
              <img src={heroImg2} alt="" />
            </div>
          </Col>
          <Col lg="2">
            <div className="hero__img-box mt-5">
              <img src={heroImg3} alt="" />
            </div>
          </Col>
          <SearchBar/>
        </Row>
      </Container>
    </section>
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <h5 className="services__subtitle">Наши услуги</h5>
            <h2 className="services__title">Мы Предлагаем Наши Лучшие Услуги</h2>
          </Col>
          </Row>
          <ServiceList/>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col lg="12" className='mb-5'>
            <Subtitle subtitle={"Исследуй"}/>
            <h2 className="featured__tour-title">Популярные места посещения</h2>
          </Col>
          <FeaturedToursList/>
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col lg="6">
            <div className="experience__content">
              <Subtitle subtitle={"Опыт"}/>
              <h2>С нашим опытом мы <br />предоставим вам лучший сервис</h2>
              <p>Наши путешествия создают незабываемые впечатления.
                <br />
                Мы предлагаем надежный и профессиональный подход к каждому клиенту.
              </p>
            </div>

            <div className="couter__wrapper d-flex align-items-center gap-5">
              <div className="counter__box">
                <span>5k+</span>
                <h6>Успешных поездок</h6>
              </div>
              <div className="counter__box">
                <span>1k+</span>
                <h6>Постоянных клиентов</h6>
              </div>
              <div className="counter__box">
                <span>2+</span>
                <h6>Года опыта</h6>
              </div>
            </div>

          </Col>
          <Col lg="6">
            <div className="experience__img">
              <img src={experienceImage} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col lg="12">
            <Subtitle subtitle={"Галерея"}/>
            <h2 className="gallery__title">
              Туристическая галерея наших клиентов
            </h2>
          </Col>
          <Col lg="12">
            <MasonryImagesGallery/>
          </Col>
        </Row>
      </Container>
    </section>
    <section>
      <Container>
        <div className="title">
          <Subtitle subtitle={"Популярные блоги"} />
        </div>
        <Row>
      <FeaturedBlogsList lg={4} md={6} sm={6}/>
        </Row>
      </Container>
    </section>
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <Subtitle subtitle={"Отзывы наших клиентов"}/>
            <h2 className="testmonials__title">Что говорят о нас Наши клиенты</h2>
          </Col>
          <Testimonials/>
        </Row>
      </Container>
    </section>
    <Contact/>
    <Newsletter/>
    </>
  )
}

export default Home