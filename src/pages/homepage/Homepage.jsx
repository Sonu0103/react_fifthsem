import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import { testApi } from "../../apis/Api";

const Homepage = () => {
  // print hello

  useEffect(() => {
    console.log("hello");
    testApi().then((res) => {
      console.log(res);
    });
  });
  return <div>HomePage</div>;
};

export default Homepage;
