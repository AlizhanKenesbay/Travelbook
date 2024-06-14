import React, { useRef } from "react";
import "./searchbar.css";
import { Col, Form, FormGroup } from "reactstrap";
import axios from "axios";
import { BASE_URL } from "../utils/config";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const locationRef = useRef("");
  const cityRef = useRef("");
  const maxGroupSizeRef = useRef(0);
  const navigate = useNavigate();

  const searchHandler = async () => {
    const location = locationRef.current.value;
    const city = cityRef.current.value;
    const maxGroupSize = maxGroupSizeRef.current.value;

    const searchParams = new URLSearchParams();
    if (location) searchParams.append("title", location);
    if (city) searchParams.append("city", city);
    if (maxGroupSize) searchParams.append("maxGroupSize", maxGroupSize);
  
    try {
      const response = await axios.get(`${BASE_URL}/search?${searchParams}`);
  
      navigate(`/search?${searchParams}`, { state: { searchResult: response.data.data } });
    } catch (error) {
      alert("Failed to fetch search results: " + error.message);
    }
  };

  return (
    <Col lg="12">
      <div className="search__bar">
        <Form className="d-flex align-items-center gap-4">
          <FormGroup className="d-flex gap-3 form__group form__group-fast">
            <span>
              <i className="ri-map-pin-line" />
            </span>
            <div>
              <h6>Локация</h6>
              <input
                type="text"
                placeholder="Куда Вы едете?"
                ref={locationRef}
              />
            </div>
          </FormGroup>
          <FormGroup className="d-flex gap-3 form__group form__group-fast">
            <span>
              <i className="ri-building-2-line"></i>
            </span>
            <div>
              <h6>Город</h6>
              <input
                type="text"
                placeholder="В какой город?"
                ref={cityRef}
              />
            </div>
          </FormGroup>
          <FormGroup className="d-flex gap-3 form__group form__group-fast">
            <span>
              <i className="ri-group-line" />
            </span>
            <div>
              <h6>Кол-во людей</h6>
              <input type="number" placeholder="0" ref={maxGroupSizeRef} />
            </div>
          </FormGroup>

          <span className="search__icon" type="submit" onClick={searchHandler}>
            <i className="ri-search-line" />
          </span>
        </Form>
      </div>
    </Col>
  );
};

export default SearchBar;
