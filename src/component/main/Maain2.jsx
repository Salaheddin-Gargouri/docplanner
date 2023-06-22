import React from "react";

const Maain2 = () => {
  const data2 = [
    {
      imagURL: " https://www.docplanner.com/icons/icon-patients.svg",
      title: "For patients",
      para1: "Find a doctor, book a visit and solve any health-related doubt",
      options: [
        "choose Country",
        "argentina",
        "brazil",
        "chilie",
        "colombia",
        "Check",
        "Germany",
      ],
      bgcolor: "#00CCB1",
    },
    {
      imagURL: " https://www.docplanner.com/icons/icon-doctors.svg",
      title: "For doctors",
      para1: "Save time managing visits and cut no-shows by half",
      options: [
        "choose Country",
        "argentina",
        "brazil",
        "chilie",
        "colombia",
        "Check",
        "Germany",
      ],
      bgcolor: "#3D83DF",
    },
    {
      imagURL: " https://www.docplanner.com/icons/icon-clinics.svg",
      title: "For clinics",
      para1: "Deliver an exceptional patient experience in your clinic",
      options: [
        "2 to 20 specialiste",
        "argentina",
        "brazil",
        "chilie",
        "colombia",
        "Check",
        "Germany",
      ],

      options2: [
        "More then specialiste",
        "argentina",
        "brazil",
        "chilie",
        "colombia",
        "Check",
        "Germany",
      ],
      bgcolor: "#1B2734",
    },
  ];

  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      {data2.map((el) => (
        <div
          style={{
            backgroundColor: el.bgcolor,
            width: "312px",
            height: "345px",
            borderRadius: "10px",
          }}
        >
          <img src={el.imagURL} alt="log" />
          <h3 style={{ color: "white" }}> {el.title} </h3>
          <p style={{ color: "white" }}>{el.para1} </p>
          <select name="" id="">
            {el.options.map((optel) => (
              <option>{optel}</option>
            ))}
          </select>
          {el.options2 ? (
            <select>
              {""}
              {el.options2.map((optel2) => (
                <option>{optel2}</option>
              ))}
              {""}
            </select>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default Maain2;
