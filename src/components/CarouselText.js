import React from 'react';
import Button from "react-bootstrap/Button";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import './CarouselText.css';

const MyTitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 22rem;
  z-index: 1;
  margin-top: -125px;
  text-align: center;
  strong {
    font-size: 1.25em;
  }
  div {
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 100;
    letter-spacing: 7px;
    .main {
      font-size: 50px;
    }
    .sub {
      font-size: 35px;
      letter-spacing: 2px;
    }
  }
`;

const CarouselText = () => {
    return (
        <MyTitleMessage>
        <div className="titleMessage  textColor">
        <div className="heading">
            <div className="main text-center mb-3">
            Hi, I am
            <br />
            <span>
                <strong>Sakib Uddin</strong>
            </span>
            </div>
            <div className="sub">
            <Typewriter
                options={{
                strings: ["Web Developer", "Web Designer", "Learner"],
                autoStart: true,
                loop: true,
                delay: 50
                }}
            />
            <a href="https://drive.google.com/file/d/1N8Ng91R9-Qv4RyMhV8Lfio97-eRDkI2B/view?usp=sharing" target="_blank" rel="noreferrer">
            <Button className="m-2 px-3" variant="danger" size="md"
            >See My Resume </Button>
            </a>
            
            </div>
        </div>
        </div>
  </MyTitleMessage>
    );
};

export default CarouselText;