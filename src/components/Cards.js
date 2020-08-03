import React from 'react';

export default function Cards({ title, content, imgUrl, star, price }) {
  return (
    <div className="col-lg-12">
      <div className="card d-flex flex-row">
        <img 
          className="image card-img-top" 
          src={imgUrl}
          alt="Cool card "/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h6 className="card-subtitle text-muted star">
            {star}
            <span className="material-icons star-icon">
              star_rate
            </span>
          </h6>
          <p className="card-text">{content}</p>
          <span className="card-price">${price}</span>
          {/* <a href="/" className="btn btn-primary">Go somewhere</a> */}
        </div>
      </div>
    </div>
  )
};