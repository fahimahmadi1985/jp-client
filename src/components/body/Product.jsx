import React from "react";

function Product({title, category, price, image, description}) {
	return (
		<div>
      <section style={{backgroundColor: "#eee;", }}>
        <div className="py-2 col-md-4 col-lg-3 col-sm-10 " style={{minWidth: "400px", maxWidth: "600px"}}>
          <div className="justify-content-center">
            <div className="col-12">
              <div className="card text-black">
                <i className="fab fa-apple fa-lg pt-3 pb-1 px-3"></i>
                <img
                  src={image}
                  className="card-img-top"
                  alt={title}
                />
                <div className="card-body">
                  <div className="text-center">
                    <h5 className="card-title">{title}</h5>
                    <p className="text-muted mb-4">{title}</p>
                  </div>
                  <div>
                    <div className="d-flex justify-content-between">
                      <span className="fw-bold me-5">Category</span>
                      <span>{category}</span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span className="fw-bold me-5">Description</span>
                      <span className="text-end">{description}</span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between total font-weight-bold mt-4">
                    <span className="fw-bold me-5">Price</span>
                    <span className="text-danger fw-bold">{price}$</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
	);
}

export default Product;
