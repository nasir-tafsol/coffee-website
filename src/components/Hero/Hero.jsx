import React from "react";
import bannerImage from "../../assets/hero/banner.png";
import { FaCartArrowDown } from "react-icons/fa";
import classes from "./hero.module.css";
import { IoStopwatchSharp } from "react-icons/io5";
import { FaBoxOpen } from "react-icons/fa";
import { PiChatTeardropDotsFill } from "react-icons/pi";
import { Col, Container, Row } from "react-bootstrap";

function Hero() {
  return (
    <>
      <Container>
        <Row className={classes.itemRow}>
          <Col xs={12} md={12} lg={6} className={classes.columnItem}>
            <div>
              <h1 className={classes.bannerHeading}>
                Encontre o café perfeito para qualquer hora do dia
              </h1>
              <p className={classes.bannerParaHead}>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </p>
              <div className={classes.mainUlDiv}>
                <ul className={classes.mainUl}>
                  <li className={classes.UlListStyle}>
                    <FaCartArrowDown className={classes.homeFirstIcon} />{" "}
                    <p>Compra simples e segura</p>
                  </li>
                  <li className={classes.UlListStyle}>
                    <IoStopwatchSharp className={classes.homeSecondIcon} />{" "}
                    <p>Entrega rápida e rastreada</p>
                  </li>
                </ul>
                <ul className={classes.mainUlSecond}>
                  <li className={classes.UlListStyle}>
                    <FaBoxOpen className={classes.homeThirdIcon} />{" "}
                    <p>Embalagem mantém o café intacto</p>
                  </li>
                  <li className={classes.UlListStyle}>
                    <PiChatTeardropDotsFill className={classes.homeFourIcon} />{" "}
                    <p>O café chega fresquinho até você</p>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col xs={12} md={12} lg={6} className={classes.columnItem}>
            <div>
              <img
                src={bannerImage}
                className="d-block mx-lg-auto img-fluid"
                alt="Coffee Themes"
                loading="lazy"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Hero;

/* <div className="row flex-lg-row-reverse align-items-center g-5 py-5 justify-content-center"> */

// className="col-lg-6 py-1"
