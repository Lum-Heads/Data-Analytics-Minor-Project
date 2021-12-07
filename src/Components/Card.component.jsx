import React from "react";
import useGoogleSheets from "use-google-sheets";

function Card() {
  const {
    data: response,
    loading,
    error,
  } = useGoogleSheets({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    sheetId: process.env.REACT_APP_GOOGLE_SHEETS_ID,
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error!</div>;
  }

  if (response) {
    const jobInfo = response[0].data;
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
                  <h4 className="card-title">{x.JobTitle}</h4>
                  <h5 className="card-subtitle mb-2 text-muted">
                    {x.CompnayName}
                  </h5>
                  <h6 className="card-text">Loctaion : {x.JobLocation}</h6>
                  {/* <h6 className="card-text">Salary: {x.Salary}</h6> */}
                  <div class="d-grid gap-2 col-6 mx-auto pt-3">
                    <button
                      type="button"
                      className="btn btn-outline-primary"
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
  }
}

export default Card;
