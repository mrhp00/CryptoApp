import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import AddCard from "./AddCard";
import AllCards from "./AllCards";

const Cards = (props) => {
  const dispatch = useDispatch();

  //START UP
  useEffect(() => {
    dispatch({
      type: "SET_PAGE",
      page: "Cards",
    });
  }, [dispatch]);

  //Main Section
  return (
    <>
      <div style={{ paddingBottom: "500px" }}>
        <Container
          dir="rtl"
          className="main-container"
          style={{ paddingBottom: "27px" }}
        >
          <Row className="d-flex justify-content-center">
            <Col style={{ paddingRight: "30px" }}></Col>
            <Col></Col>
          </Row>
          <Row>
            <Col
              className="col-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 mt-4"
              style={{ paddingBottom: "20px" }}
            >
              <AddCard />
            </Col>
            <Col className="col-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
              <AllCards />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Cards;
