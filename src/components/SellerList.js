import React from 'react';

const SellerList = ({ sellers }) => {
  return (
    <div className="container mt-4">
      <h3 className="text-light">Sellers</h3>
      <div className="row">
        {sellers.map((seller, index) => (
          <div key={index} className="col-md-4 mb-3">
            <div className="card bg-dark text-light shadow">
              <div className="card-body">
                <h5 className="card-title">{seller.name}</h5>
                <p className="card-text">Rating: {seller.rating} / 5</p>
                <p className="card-text">Review: {seller.review}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SellerList;
