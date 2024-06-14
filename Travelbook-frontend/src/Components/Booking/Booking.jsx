import React, { useState, useContext } from "react";
import "./Booking.css";
import { Form, FormGroup, ListGroup, Button, ListGroupItem, Alert } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { BASE_URL } from "../../utils/config";

const Booking = ({ tour, avgRating, totalRating, reviews }) => {
  const { price, title } = tour;
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);

  const [booking, setBooking] = useState({
    userId: user && user.username,
    userEmail: user && user.email,
    tourName: title,
    fullName: "",
    phone: "",
    bookAt: "",
    groupSize: "",
  });

  const [isBookingSuccessful, setIsBookingSuccessful] = useState(false);
  const [isBookingFailed, setIsBookingFailed] = useState(false);
  const [isLoginAlertVisible, setIsLoginAlertVisible] = useState(false);

  const handleChange = async (e) => {
    setBooking((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      if (!user) {
        setIsLoginAlertVisible(true);
        return;
      }

      const response = await fetch(`${BASE_URL}/booking`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(booking),
      });

      if (response.ok) {
        setIsBookingSuccessful(true);
        setIsBookingFailed(false);
        setBooking({
          ...booking,
          fullName: "",
          phone: "",
          bookAt: "",
          groupSize: "",
        });
        setTimeout(() => {
          navigate("/thank-you");
        }, 1000);
      } else {
        setIsBookingSuccessful(false);
        setIsBookingFailed(true);
      }
    } catch (error) {
      setIsBookingSuccessful(false);
      setIsBookingFailed(true);
    }
  };

  const currentDate = new Date().toISOString().split("T")[0];

  const taxes = (0.05 * price * (booking.groupSize || 1)).toFixed(2);
  const total = (price * (booking.groupSize || 1) * 1.05).toFixed(2);

  return (
    <div className="booking">
      {isBookingSuccessful && (
        <Alert color="success">
          Поездка оформлена
        </Alert>
      )}

      {isBookingFailed && (
        <Alert color="danger">
          Ошибка бронивания. Попробуйте еще раз
        </Alert>
      )}

      {isLoginAlertVisible && (
        <Alert color="warning">
          Войдите в систему
        </Alert>
      )}

      <div className="booking__top d-flex align-items-center justify-content-between">
        <h3>
          {price}₸ <span>/За человека</span>
        </h3>
        <span className="tour__rating d-flex align-items-center gap-1">
          <i className="ri-star-fill"></i>
          {avgRating === 0 ? null : avgRating}
          {totalRating === 0 ? (
            <span>Not Rated</span>
          ) : (
            <span>({reviews.length || 0})</span>
          )}
        </span>
      </div>

      <div className="booking__form">
        <h5>Информация</h5>
        <Form className="booking__info-form" onSubmit={handleClick}>
          <FormGroup>
            <input
              type="text"
              placeholder="Фамилия Имя"
              id="fullName"
              required
              onChange={handleChange}
              value={booking.fullName}
            />
          </FormGroup>
          <FormGroup>
            <input
              type="number"
              placeholder="Телефон"
              id="phone"
              required
              onChange={handleChange}
              value={booking.phone}
            />
          </FormGroup>
          <FormGroup className="d-flex align-items-center gap-3">
            <input
              type="date"
              placeholder="Date"
              id="bookAt"
              required
              onChange={handleChange}
              value={booking.bookAt}
              min={currentDate}
            />
            <input
              type="number"
              placeholder="Кол-во людей"
              id="groupSize"
              required
              onChange={handleChange}
              value={booking.groupSize}
            />
          </FormGroup>
        </Form>
      </div>

      <div className="booking__bottom">
        <ListGroup>
          <ListGroupItem className="border-0 px-0">
            <h5 className="d-flex align-items-center gap-1">
              {price}₸ <i className="ri-close-line"></i>
              {booking.groupSize || 1} Человек
            </h5>
            <span>{price * (booking.groupSize || 1)}₸</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0">
            <h5>НДС</h5>
            <span>{taxes}₸</span>
          </ListGroupItem>

          <ListGroupItem className="border-0 px-0 total">
            <h5>Общее</h5>
            <span>{total}₸</span>
          </ListGroupItem>
        </ListGroup>
        <Button className="btn primary__btn w-100 mt-4" onClick={handleClick}>
          Оформить
        </Button>
      </div>
    </div>
  );
};

export default Booking;
