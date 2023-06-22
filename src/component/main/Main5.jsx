import React from "react";

const Main5 = () => {
  const data5 = {
    titel: "Improve the lives of millions. ",
    titel2: "Change yours forever.",
    para: "More than 2800 team mates share our same vision, goals and passion. With offices in Warsaw, Barcelona, Munich, Istanbul, Rome, Rio, Bologna, Mexico City and Curitiba, our search for great talent never stops. ",
  };
  return (
    <div className="divv">
      <h3
        style={{
          color: "#00b39b",
          fontSize: "30px",
          fontWeight: "300",

          height: "100%",
          textAlign: "center",
        }}
      >
        {data5.titel}
      </h3>
      <h3
        style={{
          color: "#00b39b",
          fontSize: "30px",
          fontWeight: "300",

          height: "100%",
          textAlign: "center",
        }}
      >
        {data5.titel2}
      </h3>
      <p
        style={{
          color: "#747474",
          fontSize: "14px",
          fontWeight: "300",
          width: "460px",
          height: "100%",
          textAlign: "center",
          marginLeft: "450px",
        }}
      >
        {" "}
        {data5.para}
      </p>
    </div>
  );
};

export default Main5;
