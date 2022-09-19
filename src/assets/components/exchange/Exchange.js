import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import Change from "./Change";
import ChangeBill from "./ChangeBill";

const Exchange = (props) => {
  const dispatch = useDispatch();

  //START UP
  useEffect(() => {
    dispatch({
      type: "SET_PAGE",
      page: "Exchange",
    });
  }, [dispatch]);

  // Main Section
  return (
    <>
      {/* PC MODE */}
      <div
        style={{ paddingBottom: "500px" }}
        className="d-none d-md-block d-lg-block d-xl-block d-xxl-block"
      >
        <Container
          dir="rtl"
          className="main-container"
          style={{ paddingBottom: "27px" }}
        >
          <Row className="d-flex justify-content-center">
            <Col style={{ paddingRight: "30px" }}>
              <p className="ilia-header mt-3">تبدیل</p>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col
              className="col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6"
              style={{ paddingBottom: "20px" }}
            >
              <Change />
            </Col>
            <Col className="col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <ChangeBill />
            </Col>
          </Row>
        </Container>
      </div>
      {/* MOBILE MODE */}
      <div
        style={{ paddingBottom: "40px" }}
        className="d-block d-md-none d-lg-none d-xl-none d-xxl-none main-container"
      >
        <Row className="d-flex justify-content-center">
          <Col style={{ paddingRight: "30px" }}>
            <p className="ilia-header mt-3 text-center">تبدیل</p>
          </Col>
        </Row>
        <Row>
          <Col
            className="col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6"
            style={{ paddingBottom: "20px" }}
          >
            <Change />
          </Col>
          <Col className="col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <ChangeBill />
          </Col>
        </Row>
      </div>
    </>
  );
};
export default Exchange;
