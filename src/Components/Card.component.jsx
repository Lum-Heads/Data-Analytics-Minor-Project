import React from "react";

const Card = ({ posts }) => {
  return (
    <div className="align-item-center">
      <div className="row">
        {posts.map((x, index) => (
          <div className="d-flex col-lg-4 col-md-6 col-sm-12 pb-4">
            <div
              className="card custom-background "
              style={{ "width": "18rem", color: "#fff" }}
            >
              <div className="card-body">
                <h4 className="card-title">{x.JobTitle}</h4>
                <h5 className="card-subtitle mb-2">{x.CompanyName}</h5>
                <h6 className="card-text">Loctaion : {x.JobLocation}</h6>
                {/* <h6 className="card-text">Salary: {x.Salary}</h6> */}
                <div class="d-grid gap-2 col-6 mx-auto pt-3">
                  <button
                    type="button"
                    className="btn bg-light"
                    onClick={() => window.open(`${x.JobLink}`, "_blank")}
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
