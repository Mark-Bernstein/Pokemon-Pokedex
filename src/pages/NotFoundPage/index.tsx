import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate("/")}>HOME</button>
      <h1>404</h1>
      <h2>Slowpoke thinks you got lost...</h2>
      <img id="errorPageImage" src="http://i.stack.imgur.com/SBv4T.gif" alt="slowpoke-error-page" width="100%" />
    </>
  );
};

export default NotFoundPage;
