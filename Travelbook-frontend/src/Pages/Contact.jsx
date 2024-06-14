import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup, Button, Alert } from "reactstrap";
import axios from "axios";
import "../styles/Contact.css";
import Subtitle from "../Shared/Subtitle";
import { BASE_URL } from "../utils/config";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [alertVisible, setAlertVisible] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${BASE_URL}/contact`, formData)
      .then((response) => {
        setAlertType("success");
        setAlertMessage("Сообщение отправлено!");
        setAlertVisible(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      })
      .catch((error) => {
        setAlertType("danger");
        setAlertMessage("Не удалось заполнить данные.");
        setAlertVisible(true);
      });
  };

  return (
    <section>
      <Container>
        <Row>
          <Col sm={12} md={{ size: 6, offset: 3 }}>
            <Subtitle subtitle={"Свяжитесь с нами"} />
            <div className="contact-info">
              <p>Телефон: +8 888 892 1252</p>
              <p>Почта: contact@travelbook.com</p>
            </div>
            {alertVisible && (
              <Alert color={alertType} className="mt-3">
                {alertMessage}
              </Alert>
            )}
            <Form onSubmit={handleSubmit}>
              <FormGroup className="form__group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Имя"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup className="form__group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Почта"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup className="form__group">
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Телефон"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup className="form__group">
              <input
                type="textarea"
                id="message"
                name="message"
                placeholder="Сообщение"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <Button type="submit" className="btn primary__btn">
                Отправить
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
