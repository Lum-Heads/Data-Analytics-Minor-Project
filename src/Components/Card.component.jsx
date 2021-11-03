import React from "react";
import jobInfo from "../data.json";

function Card() {
  return (
    <div className="align-item-center">
      <div className="row">
        {jobInfo.map((x, index) => (
          <div className="col-lg-4 col-md-6 col-sm-12 pb-4">
            <div
              className="card bg-dark"
              style={{ "width": "18rem", color: "#fff" }}
            >
              <div className="card-body">
                <h4 className="card-title">{x.Title}</h4>
                <h5 className="card-subtitle mb-2 text-muted">{x.Compnay}</h5>
                <h6 className="card-text">Loctaion : {x.Location}</h6>
                <h6 className="card-text">Salary: {x.Salary}</h6>
                <div class="d-grid gap-2 col-6 mx-auto pt-3">
                  <button type="button" class="btn btn-outline-primary">
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
}

export default Card;
