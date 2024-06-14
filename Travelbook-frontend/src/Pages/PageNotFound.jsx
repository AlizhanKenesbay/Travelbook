import React from "react";
import { Container, Row, Button } from "reactstrap";
import "../styles/NotFound.css";

const PageNotFound = () => {
  return (
    <div className="not-found">
      <Container>
        <Row>
          <div md={7} className="not-found-content">
            <h1 className="display-4">404</h1>
            <p className="lead">Мы не можем найти страницу, которую вы ищете.</p>
            <Button color="primary" onClick={() => window.history.back()}>
              Назад
            </Button>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default PageNotFound;
