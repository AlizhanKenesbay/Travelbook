import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import "./Blogcard.css";

const BlogCard = ({ blog}) => {
  const { _id, title, author, createdAt, photo, comments } = blog;

  return (
    <div className="blog__card">
      <Card>
        <Link to={`/blogs/${_id}`}>
          <div className="blog__img">
            <img src={photo} alt="blog" />
          </div>
        </Link>
        <CardBody>
          <div className="card__top d-flex align-items-center justify-content-between">
            <span className="blog__location d-flex align-items-center gap-1">
              <i className="ri-user-line"></i>
              {author}
            </span>
            <span className="blog__rating d-flex align-items-center gap-1">
              <span>{new Date(createdAt).toLocaleDateString("ru-in")}</span>
            </span>
          </div>

          <h5 className="blog__title">
          <Link to={`/blogs/${_id}`}>
              <div>{title}</div>
          </Link>
          </h5>

          <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
            <h5>
              {comments.length} <span>{comments?.length === 1 ? "Комментарий" : (comments?.length > 1 && comments?.length < 5 ? "Комментария" : "Комментариев")}</span>
            </h5>
            <button className="btn booking__btn">
            <Link to={`/blogs/${_id}`}>
                <div>Подробнее</div>
                </Link>
            </button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default BlogCard;
