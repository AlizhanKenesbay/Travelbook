import React from "react";
import CommonSection from "../Shared/CommonSection";
import "../styles/Tour.css";
import useFetch from "../hooks/useFetch";
import TourCard from "./../Shared/TourCard";
import SearchBar from "../Shared/SearchBar";
import Newsletter from "../Shared/Newsletter";
import { Container, Row, Col } from "reactstrap";

const Tours = () => {
  const { data: tours, loading, error } = useFetch("tours");

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader" />
        <div className="loading-text">Загрузка...</div>
      </div>
    );
  }

  if (loading ) {
    return (
      <div className="loader-container">
        <div className="loader" />
        <div className="loading-text">Загрузка...</div>
      </div>
    );
  }

  if (error) {
    return <div className="error__msg">Ошибка при загрузке поездок. Проверьте интернет соединение</div>;
  }


  return (
    <div>
      <CommonSection title={"Поездки"} />
      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          <Row>
            {Array.isArray(tours) &&
              tours.map((tour) => (
                <Col lg="3" md="6" sm="6" className="mb-4" key={tour._id}>
                  <TourCard tour={tour} />
                </Col>
              ))}
          </Row>
        </Container>
      </section>
      <Newsletter />
    </div>
  );
};

export default Tours;
