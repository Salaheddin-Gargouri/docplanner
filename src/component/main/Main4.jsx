import React from "react";
import "./Main4.css";

const Main4 = () => {
  const data = {
    title: "The world's bigges healthcare platform",
    para1:
      "We work from 9 offices all over the world, bringing Docplanner Group to life in 13 countries.",
  };
  const cart1 = [
    {
      imagURL: "https://www.docplanner.com/img/flag.png",
      title: "Leader in 13 countries",
      para: "Poland, Brazil, Mexico, Spain, Italy, Germany, Turkey, Colombia, Czech Republic, Portugal, Argentina, Peru and Chile",
    },
    {
      imagURL: "https://www.docplanner.com/img/patients.png",
      title: "90,000,00 patients",
      para: "visit our websites each month",
    },
  ];
  const cart2 = [
    {
      imagURL: "https://www.docplanner.com/img/visits.png",
      title: "15,000,000 appointments",
      para: "booked last month",
    },
    {
      imagURL: "https://www.docplanner.com/img/doctors.png",
      title: "210,000 active doctors",
      para: "trust our solutions",
    },
  ];
  return (
    <div className="back">
      <div className="im">
        <h3 style={{ color: "#00B39B" }}>{data.title}</h3>
        <h6 style={{ color: "#747474" }}>{data.para1}</h6>
      </div>
      <div className="AA">
        <div style={{ width: "50%" }}>
          {cart1.map((el) => (
            <div
              className="cart1"
              style={{
                backgroundColor: "#FFFFFF",
              }}
            >
              <img src={el.imagURL} alt="logo" />
              <h3
                style={{
                  color: "#00b39b",
                  fontSize: "24px",
                  fontWeight: "300",
                }}
              >
                {el.title}
              </h3>
              <h6
                style={{
                  color: "#747474",
                  fontSize: "20px",
                  fontWeight: "300",
                }}
              >
                {el.para}
              </h6>
            </div>
          ))}
        </div>
        <div style={{ width: "50%" }}>
          {cart2.map((el) => (
            <div
              className="cart2"
              style={{
                backgroundColor: "#FFFFFF",
              }}
            >
              <img src={el.imagURL} alt="logo" />
              <h3
                style={{
                  color: "#00b39b",
                  fontSize: "24px",
                  fontWeight: "300",
                }}
              >
                {el.title}
              </h3>
              <h6
                style={{
                  color: "#747474",
                  fontSize: "20px",
                  fontWeight: "300",
                }}
              >
                {el.para}
              </h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main4;
