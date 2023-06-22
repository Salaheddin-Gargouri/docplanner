import React from "react";

const Maiin1 = () => {
  const desdata = {
    imge: "https://www.docplanner.com/img/sygnet.png",
    title: "Making the healthcare experience more human",
    para1:
      "We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere. ",
    para2:
      "We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients.",
  };

  return (
    <div
      className="a"
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "100px",

        width: "1015px",
        height: "380px",
      }}
    >
      <div>
        <img src={desdata.imge} alt="logo" />
        <div
          style={{
            color: "#00b39b",
          }}
        >
          <h1> {desdata.title}</h1>{" "}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          color: "#747474",
        }}
      >
        <p>{desdata.para1} </p>
        <p>{desdata.para2}</p>
      </div>
    </div>
  );
};

export default Maiin1;
