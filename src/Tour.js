import React from "react";

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [readMore, setReadMore] = React.useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">$ {price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 100)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "show less" : "read more"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          Not Intersted
        </button>
      </footer>
    </article>
  );
};

export default Tour;
