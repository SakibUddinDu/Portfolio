import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { FaApple, FaCircleNotch, FaGithub } from "react-icons/fa";
import "./Services.css";

const Services = () => {
  const [header] = useState({
    mainHeader: "SERVICES",
    subHeading: "My Services",
  });
  const [state] = useState([
    {
      id: 1,
      icon: <FaGithub className="commonIcons" />,
      heading: "Web Development",
      text:
        "Lorem Ipsum is simply dummy text of the printing typesetting\
      industry. simply dummy",
    },
    {
      id: 2,
      icon: <FaCircleNotch className="commonIcons" />,
      heading: "Web Design",
      text:
        "Lorem Ipsum is simply dummy text of the printing typesetting\
        industry. simply dummy",
    },
    {
      id: 3,
      icon: <FaApple className="commonIcons" />,
      heading: "App Devlopment",
      text:
        "Lorem Ipsum is simply dummy text of the printing typesetting\
        industry. simply dummy",
    },
  ]);
  return (
    <div className="services" id="Services">
          <div className="text-center">
            <h3 className="heading">{header.mainHeader}</h3>
            <h1 className="mainHeader">{header.subHeading}</h1>
            <div className="commonBorder"></div>
          </div>

          <div className="row bgMain">
            {state.map((info) => (
              <Card
                className="col-md-4 mt-3  container zoom"
                style={{ width: "20rem" }}
              >
                <Card.Body>
                  <Card.Title>{info.icon}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                  {info.heading}
                  </Card.Subtitle>
                  <Card.Text  className="text-muted">{info.text}</Card.Text>
                </Card.Body>
              </Card>
              ))}
              </div>
                 {/* //   <div className="col-md-4 bgMain zoom">
              //     <div className="services__box">
              //       {info.icon}
              //       <div className="services__box-header">{info.heading}</div>
              //       <div className="services__box-p">{info.text}</div>
              //     </div>
              //   </div> */}
    </div>
  );
};

export default Services;
