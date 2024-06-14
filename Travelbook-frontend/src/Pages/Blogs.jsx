import React, { useEffect, useState } from "react";
import CommonSection from "../Shared/CommonSection";
import "../styles/Tour.css";
import Newsletter from "../Shared/Newsletter";
import { Container, Row, Col } from "reactstrap";
import BlogCard from "../Shared/BlogCard";
import axios from "axios";
import { BASE_URL } from "../utils/config";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [ error, setError]=useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/blogs`);
        setBlogs(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    };

    fetchBlogs();
  }, []);

  if (loading ) {
    return (
      <div className="loader-container">
        <div className="loader" />
        <div className="loading-text">Загрузка...</div>
      </div>
    );
  }

  if (error) {
    return <div className="error__msg">Ошибка при загрузке блогов. Проверьте интернет соединение</div>;
  }


  return (
    <div>
      <CommonSection title={"Блог"} />
      <section className="mt-4">
        <Container>
          <Row>
            {loading ? (
              <div className="loader-container">
                <div className="loader" />
                <div className="loading-text">Загрузка...</div>
              </div>
            ) : (
              blogs.map((blog) => (
                <Col lg="4" md="6" sm="6" className="mb-4" key={blog._id}>
                  <BlogCard blog={blog} />
                </Col>
              ))
            )}
          </Row>
        </Container>
      </section>
      <Newsletter />
    </div>
  );
};

export default Blogs;
