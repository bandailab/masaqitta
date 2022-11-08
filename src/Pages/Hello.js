import axios from "axios";
import React from "react";

// FIXME: これはあとで App.js にまとめる．
const baseURL = "http://localhost:8000"

const Hello = () => {
  const [summary, setSummary] = React.useState([]);

  React.useEffect(() => {
    axios.get(baseURL + "/hello").then((response) => {
      setSummary(response.data);
    });
  }, []);

  return (
    <div>
      {console.log(summary)}
      <div>{summary.Hello}</div>
    </div>
  );
}

export default Hello;
