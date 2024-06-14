import React, { useState, useContext } from "react";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";
import registerImg from "../assets/images/register.png";
import userIcon from "../assets/images/user.png";
import { AuthContext } from "../context/AuthContext";
import { BASE_URL } from "../utils/config";

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [id]: value,
    }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    dispatch({ type: "REGISTER_START" });
    setError(null);
    setIsEmailValid(true);
    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(credentials),
      });

      const result = await res.json();
      if (!res.ok) {
        setError(result.message);
        dispatch({ type: "REGISTER_FAILURE", payload: result.message });
      } else {
        setSuccess("Регистрация прошла успешно!");
        dispatch({ type: "REGISTER_SUCCESS", payload: result });
        setTimeout(() => {
          navigate("/login");
        }, 1000);      }
    } catch (error) {
      setError("Возникла ошибка при регистрации.");
      dispatch({ type: "REGISTER_FAILURE", payload: error.message });
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    const { value } = e.target;
    setIsEmailValid(validateEmail(value));
    handleChange(e);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={registerImg} alt="" />
              </div>

              <div className="login__form">
                <div className="user">
                  <img src={userIcon} alt="" />
                </div>
                <h2>Регистрация</h2>
                {error && <div className="alert alert-danger">{error}</div>}
                {success && <div className="alert alert-success">{success}</div>}
                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input
                      type="text"
                      placeholder="Логин"
                      required
                      id="username"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="email"
                      placeholder="Почта"
                      required
                      autoComplete="true"
                      id="email"
                      onChange={handleEmailChange}
                    />
                    {!isEmailValid && <div className="alert alert-danger">Please enter a valid email address</div>}
                  </FormGroup>
                  <FormGroup>
                    <div className="password__input">
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Пароль"
                        required
                        autoComplete="true"
                        id="password"
                        onChange={handleChange}
                      />
                      <i
                        className={`ri-eye-line${showPassword ? "-slash" : ""}`}
                        onClick={togglePasswordVisibility}
                      ></i>
                    </div>
                  </FormGroup>
                  <Button
                    className="btn secondary__btn auth__btn"
                    type="submit"
                    onClick={handleClick}
                  >
                    Создать аккаунт
                  </Button>
                </Form>
                <p>
                  <Link to="/forgotpassword">Забыли пароль?</Link>
                </p>
                <p>
                  Уже есть аккаунт? <Link to="/login">Войти</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register;
