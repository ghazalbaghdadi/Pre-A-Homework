import React from "react";

function LayOut({ data }) {
  return (
    <div className="card m-5">
      <img className="card-img-top" src={data.image} alt="Card image cap" />
      <div className="card-body">
        <h5 className={data.cardTitle}>Card title</h5>
        <p className={data.cardDescription}>
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </p>
        <a href={data.button.url} className="btn btn-primary">
          {data.button.label}
        </a>
      </div>
    </div>
  );
}

export default LayOut;
