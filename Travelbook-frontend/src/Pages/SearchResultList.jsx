import React from "react";
import CommonSection from "../Shared/CommonSection";
import { Container, Row, Col, Button } from "reactstrap";
import TourCard from "../Shared/TourCard";
import { useLocation, Link } from "react-router-dom";
import "../Shared/searchbar.css";
import Newsletter from "../Shared/Newsletter";

const SearchResultList = () => {
  const location = useLocation();
  const searchResult = location.state?.searchResult || [];

  return (
    <div>
      <CommonSection title={"Результаты поиска"} />
      <section>
        <Container>
          <Row>
            {searchResult.length === 0 ? (
              <Col lg="12">
                <div className="no-results">
                  <p>Ничего не найдено.</p>
                  <Button className="btn primary__btn w-25 align-items-center">
                    <Link to="/tours">Вернуться</Link>
                  </Button>
                </div>
              </Col>
            ) : (
              searchResult.map((tour) => (
                <Col lg="3" md="6" sm="6" className="mb-4" key={tour._id}>
                  <TourCard tour={tour} />
                </Col>
              ))
            )}
          </Row>
        </Container>
      </section>
      <Newsletter/>
    </div>
  );
};

export default SearchResultList;
