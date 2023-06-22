import React from "react";

const aa = () => {
  const data2 = [
    {
      imagURL:
        "https://media.discordapp.net/attachments/1093497830917816403/1108684129622564955/Sans_titre-2.png?width=1025&height=323",
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
    },
  ];

  return (
    <div style={{ display: "flex" }}>
      {data2.map((el) => (
        <div style={{}}>
          <img src={el.imagURL} alt="log" />
          <h3> {el.title} </h3>
          <p>{el.para1} </p>
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

export default aa;
