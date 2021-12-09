import React, { useState } from "react";
import useGoogleSheets from "use-google-sheets";
import Card from "./Card.component";
import Pagination from "./Pagination";

function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);

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
    //Get current Posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = jobInfo.slice(indexOfFirstPost, indexOfLastPost);

    //change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
      <div className="container">
        <h1 className="text-center p-3">Get your dream job now !</h1>
        <Card posts={currentPosts} />
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={jobInfo.length}
          paginate={paginate}
        />
      </div>
    );
  }
}

export default Home;
