import React from "react";

const Mainn3 = () => {
  const data3 = {
    para1: "We are a global company with local culture",
    imageURL: [
      "https://www.docplanner.com/logos/logo-tuotempo.svg",
      "https://www.docplanner.com/logos/logo-gipo-primary.svg",
      "https://clinic-cloud.com/",
      "https://www.docplanner.com/logos/logo-clinicloud.svg",
      "https://www.docplanner.com/logos/logo-tuotempo.svg",
      "https://www.docplanner.com/logos/logo-gipo-primary.svg",
      "https://clinic-cloud.com/",
      "https://www.docplanner.com/logos/logo-clinicloud.svg",
      " https://www.docplanner.com/logos/logo-jameda.svg",
      "https://www.docplanner.com/logos/logo-feegow.svg",
    ],
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        margin: "50px",
      }}
    >
      <h3 style={{ width: "300px" }}> {data3.para1}</h3>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          height: "159px",
          width: "660px",
        }}
      >
        {data3.imageURL.map((el) => (
          <img
            className="hov"
            src={el}
            alt="logo"
            style={{ width: "auto", height: "25px", margin: "25px" }}
          />
        ))}
      </div>
    </div>
  );
};

export default Mainn3;
