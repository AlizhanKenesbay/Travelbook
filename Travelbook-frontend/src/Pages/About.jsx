import React from "react";
import { Container, Row, Col } from "reactstrap";
import Subtitle from "../Shared/Subtitle";
import '../styles/About.css';
import worldImg from "../assets/images/world.png"
import logo1 from "../assets/images/logo1.png"
import Newsletter from "../Shared/Newsletter";
import Contact from "./Contact";

const About = () => {
  return (
    <><section className="about">
      <Container>
        <Row>
          <Col lg="6">
            <div className="hero__content">
              <div className="hero__subtitle d-flex align-items-center">
                <Subtitle subtitle={"О нас"} />
                <img src={worldImg} alt="" />
              </div>
              <h1>
                Путешествуй и создавай {" "}
                <span className="highlight">Воспоминания</span>
              </h1>
              <p>
                Это дипломный проект, созданный студентом 3 курса колледжа
                Astana IT University, группы ПО2021. Кенесбай Алижан вложил
                свою душу и знания в этот проект, чтобы поделиться с вами
                удивительными возможностями для путешествий и открытия новых
                горизонтов по всему Казахстану!
              </p>
            </div>
          </Col>
          <div className="about__image d-flex align-items-center">
            <img src={logo1} height={400} width={400} alt="" />
          </div>
        </Row>
      </Container>
    </section>
    <Contact/>
    <Newsletter /></>
  );
};

export default About;
