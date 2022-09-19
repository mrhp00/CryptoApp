import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, ButtonGroup } from "react-bootstrap";
import NewTicket from "./NewTicket";
import AllTickets from "./AllTickets";
import { useDispatch } from "react-redux";

const Support = () => {
  //States and Refs
  const [page, setPage] = useState("new");
  const dispatch = useDispatch();

  //START UP
  useEffect(() => {
    dispatch({
      type: "SET_PAGE",
      page: "Support",
    });
  }, [dispatch]);

  // Main Section
  return (
    <>
      <Container>
        <Container
          className="main-container d-none d-md-block d-lg-block d-xl-block d-xxl-block"
          style={{ padding: "40px", marginLeft: "32px" }}
        >
          {/* PC MODE */}
          <Container className="section-292929 ">
            <Row>
              <Col className="col-2 d-none d-md-block d-lg-block d-xl-block d-xxl-block" />
              <Col
                className="col-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8 d-grid"
                dir="ltr"
              >
                <ButtonGroup
                  style={{ marginTop: "32px" }}
                  className="color-3F3F3F"
                >
                  {page === "new" ? (
                    <>
                      <Button
                        onClick={() => {
                          setPage("all");
                        }}
                        className="inactive-btn-copy"
                      >
                        تیکت ها
                      </Button>
                      <Button
                        onClick={() => {
                          setPage("new");
                        }}
                        className="btn-copy"
                      >
                        ایجاد تیکت
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button
                        onClick={() => {
                          setPage("all");
                        }}
                        className="btn-copy"
                      >
                        تیکت ها
                      </Button>
                      <Button
                        onClick={() => {
                          setPage("new");
                        }}
                        className="inactive-btn-copy"
                      >
                        ایجاد تیکت
                      </Button>
                    </>
                  )}
                </ButtonGroup>
              </Col>
              <Col className="col-2 d-none d-md-block d-lg-block d-xl-block d-xxl-block" />
            </Row>
            <Row>
              <Col className="col-2 d-none d-md-block d-lg-block d-xl-block d-xxl-block" />
              <Col>{page === "new" ? <NewTicket /> : <AllTickets />}</Col>
              <Col className="col-2 d-none d-md-block d-lg-block d-xl-block d-xxl-block" />
            </Row>
          </Container>
        </Container>
      </Container>

      {/* MOBILE MODE */}
      <div className="main-container d-block d-md-none d-lg-none d-xl-none d-xxl-none mx-0">
        <Row>
          <Col className="col-2 d-none d-md-block d-lg-block d-xl-block d-xxl-block" />
          <Col
            className="col-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8 d-grid"
            dir="ltr"
          >
            <ButtonGroup style={{ marginTop: "32px" }} className="color-3F3F3F">
              {page === "new" ? (
                <>
                  <Button
                    onClick={() => {
                      setPage("all");
                    }}
                    className="inactive-btn-copy"
                  >
                    تیکت ها
                  </Button>
                  <Button
                    onClick={() => {
                      setPage("new");
                    }}
                    className="btn-copy"
                  >
                    ایجاد تیکت
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    onClick={() => {
                      setPage("all");
                    }}
                    className="btn-copy"
                  >
                    تیکت ها
                  </Button>
                  <Button
                    onClick={() => {
                      setPage("new");
                    }}
                    className="inactive-btn-copy"
                  >
                    ایجاد تیکت
                  </Button>
                </>
              )}
            </ButtonGroup>
          </Col>
          <Col className="col-2 d-none d-md-block d-lg-block d-xl-block d-xxl-block" />
        </Row>
        <Row>
          <Col className="col-2 d-none d-md-block d-lg-block d-xl-block d-xxl-block" />
          <Col>{page === "new" ? <NewTicket /> : <AllTickets />}</Col>
          <Col className="col-2 d-none d-md-block d-lg-block d-xl-block d-xxl-block" />
        </Row>
      </div>
    </>
  );
};
export default Support;
