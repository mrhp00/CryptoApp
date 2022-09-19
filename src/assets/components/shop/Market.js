import React, { useEffect } from "react";
import { Container, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import CoinMarket from "./CoinMarkets";

const Market = (props) => {
  const dispatch = useDispatch();

  // START UP
  useEffect(() => {
    dispatch({
      type: "SET_PAGE",
      page: "Market",
    });
  }, [dispatch]);

  // Main Section
  return (
    <>
      <div className="main-container" style={{ paddingBottom: "30px" }}>
        <Container
          dir="rtl"
          className="main-container"
          style={{ paddingBottom: "27px", paddingTop: "20px" }}
        >
          <Col>
            <CoinMarket />
          </Col>
        </Container>
      </div>
    </>
  );
};
export default Market;
