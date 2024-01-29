import React from "react";

const Tour = ({ id, image, date, title, info, location, duration, cost }) => {
  return (
    <article className="tour">
      <div className="tour-image">
        <h4>{id}</h4>
        <img src={image} alt={title} />
      </div>
      <div className="tour-info">
        <div className="tour-title">
          <h4>{title}</h4>
          <h4>{date}</h4>
        </div>
        <p>{info}</p>
        <div className="tour-footer">
          <p>
            <span>
              <i className="fas fa-map"></i>
            </span>
            {location}
          </p>
          <p>{`from ${cost}`}</p>
          <p>{`${duration} days`}</p>
        </div>
      </div>
    </article>
  );
};

export default Tour;
