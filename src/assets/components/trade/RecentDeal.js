import { ArrowLeft2 } from "iconsax-react";
import React from "react";
import { Col, Container, Image, InputGroup, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import bitCoinImage from "../../images/bitcoin.png";

const RecentDeal = (props) => {
  const dispatch = useDispatch();

  // Main Section
  return (
    <Container className="section-292929 ">
      <Row
        className="d-flex justify-content-between"
        style={{ marginTop: "16px" }}
      >
        <Col style={{ marginTop: "16px" }}>
          <p className="text-end">آخرین معاملات شما</p>
        </Col>
        <Col style={{ marginTop: "16px" }}>
          <p
            className="text-start"
            onClick={() => {
              dispatch({
                type: "SET_tradeModal",
                status: true,
              });
            }}
            style={{ cursor: "pointer" }}
          >
            {" مشاهده همه "}
            <ArrowLeft2 size="20" className="header-menu-icon" />
          </p>
        </Col>
      </Row>
      {props.deals.map((value) => (
        <>
          <Row className="d-flex justify-content-between">
            <Col>
              <InputGroup>
                <Image
                  src={bitCoinImage}
                  style={{ width: "25px", height: "25px" }}
                />
                <p style={{ display: "inine" }} className="me-2">
                  <p style={{ lineHeight: "4px" }}>{value[0]}</p>
                  <p style={{ lineHeight: "4px" }}>{value[1]}</p>
                </p>
              </InputGroup>
            </Col>
            <Col>
              <p className="text-start">
                <p style={{ lineHeight: "10px" }}>{value[3]}</p>

                {value[2] === "buy" ? (
                  <p style={{ color: "#33D587", lineHeight: "4px" }}>خرید</p>
                ) : (
                  <p style={{ lineHeight: "10px" }} className="text-danger">
                    فروش
                  </p>
                )}
              </p>
            </Col>
          </Row>
        </>
      ))}
    </Container>
  );
};
export default RecentDeal;
