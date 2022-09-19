import React, { useEffect, useState } from "react";
import { Button, Col, InputGroup, Row } from "react-bootstrap";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import RotateLeftOutlinedIcon from "@mui/icons-material/RotateLeftOutlined";
import { useSelector } from "react-redux";

const WalletTransactionHistory = (props) => {
  //States and Refs
  const [currentSlide, setCurrentSide] = useState(1);
  const [maxSlide, setMaxSlide] = useState(1);
  const darkTheme = useSelector((state) => state.dark);

  //Slide Creator
  const handleMinSlice = () => {
    if (currentSlide === 1) {
      return 0;
    } else {
      let min = (currentSlide - 1) * 7;
      return min;
    }
  };
  const handleMaxSlice = () => {
    if (currentSlide === 1) {
      return 7;
    } else {
      let max = currentSlide * 7;
      return max;
    }
  };

  //Class and Styles Creator
  const generateLineStyle = (line) => {
    if (parseInt(line) % 2 !== 0) {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme:dark)").matches
      ) {
        return {
          height: "68px",
          lineHeight: "68px",
          backgroundColor: "#272727",
        };
      } else {
        return {
          height: "68px",
          lineHeight: "68px",
          backgroundColor: "#F8F8F8",
        };
      }
    } else {
      return { height: "68px", lineHeight: "68px" };
    }
  };
  const generateClass = (line) => {
    if (parseInt(line) % 2 !== 0) {
      if (darkTheme === true) {
        return "color-272727";
      } else {
        return "color-272727";
      }
    } else {
      return "color-303030";
    }
  };

  //RAW DATA
  const rawData = [
    {
      line: 1,
      id: 1,
      tnumber: 45678,
      type: "خرید",
      timedate: "1400/09/09  23:23",
      source: "2.314.89 TRX",
      destination: "2.314.89 TRX",
      status: "موفق",
    },
    {
      line: 2,
      id: 2,
      tnumber: 45678,
      type: "فروش",
      timedate: "1400/09/09  23:23",
      source: "2.314.89 TRX",
      destination: "2.314.89 TRX",
      status: "ناموفق",
    },
    {
      line: 3,
      id: 3,
      tnumber: 45678,
      type: "خرید",
      timedate: "1400/09/09  23:23",
      source: "2.314.89 TRX",
      destination: "2.314.89 TRX",
      status: "در حال بررسی",
    },
    {
      line: 4,
      id: 4,
      tnumber: 45678,
      type: "خرید",
      timedate: "1400/09/09  23:23",
      source: "2.314.89 TRX",
      destination: "2.314.89 TRX",
      status: "موفق",
    },
    {
      line: 5,
      id: 5,
      tnumber: 45678,
      type: "خرید",
      timedate: "1400/09/09  23:23",
      source: "2.314.89 TRX",
      destination: "2.314.89 TRX",
      status: "موفق",
    },
    {
      line: 6,
      id: 6,
      tnumber: 45678,
      type: "خرید",
      timedate: "1400/09/09  23:23",
      source: "2.314.89 TRX",
      destination: "2.314.89 TRX",
      status: "ناموفق",
    },
    {
      line: 7,
      id: 7,
      tnumber: 45678,
      type: "خرید",
      timedate: "1400/09/09  23:23",
      source: "2.314.89 TRX",
      destination: "2.314.89 TRX",
      status: "موفق",
    },
    {
      line: 8,
      id: 8,
      tnumber: 45678,
      type: "خرید",
      timedate: "1400/09/09  23:23",
      source: "2.314.89 TRX",
      destination: "2.314.89 TRX",
      status: "در حال بررسی",
    },
    {
      line: 9,
      id: 9,
      tnumber: 45678,
      type: "فروش",
      timedate: "1400/09/09  23:23",
      source: "2.314.89 TRX",
      destination: "2.314.89 TRX",
      status: "موفق",
    },
    {
      line: 10,
      id: 10,
      tnumber: 45678,
      type: "خرید",
      timedate: "1400/09/09  23:23",
      source: "2.314.89 TRX",
      destination: "2.314.89 TRX",
      status: "ناموفق",
    },
    {
      line: 11,
      id: 11,
      tnumber: 45678,
      type: "خرید",
      timedate: "1400/09/09  23:23",
      source: "2.314.89 TRX",
      destination: "2.314.89 TRX",
      status: "موفق",
    },
    {
      line: 12,
      id: 12,
      tnumber: 45678,
      type: "خرید",
      timedate: "1400/09/09  23:23",
      source: "2.314.89 TRX",
      destination: "2.314.89 TRX",
      status: "موفق",
    },
    {
      line: 13,
      id: 13,
      tnumber: 45678,
      type: "خرید",
      timedate: "1400/09/09  23:23",
      source: "2.314.89 TRX",
      destination: "2.314.89 TRX",
      status: "موفق",
    },
    {
      line: 14,
      id: 14,
      tnumber: 45678,
      type: "فروش",
      timedate: "1400/09/09  23:23",
      source: "2.314.89 TRX",
      destination: "2.314.89 TRX",
      status: "در حال بررسی",
    },
    {
      line: 15,
      id: 15,
      tnumber: 45678,
      type: "خرید",
      timedate: "1400/09/09  23:23",
      source: "2.314.89 TRX",
      destination: "2.314.89 TRX",
      status: "موفق",
    },
    {
      line: 16,
      id: 16,
      tnumber: 45678,
      type: "خرید",
      timedate: "1400/09/09  23:23",
      source: "2.314.89 TRX",
      destination: "2.314.89 TRX",
      status: "موفق",
    },
  ];

  //START UP
  useEffect(() => {
    let total = ((rawData.length / 7) >> 0) + 1;
    setMaxSlide(total);
  }, [rawData.length]);

  // Main Section
  return (
    <>
      <Row>
        {/* PC MODE */}
        <Col className=" section-303030 d-none d-lg-block d-xl-block d-xxl-block mt-4">
          <Row
            className=" d-flex align-items-center"
            style={{ height: "56px", lineHeight: "56px" }}
          >
            <Col className="col-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
              <p className="text-center">شماره تراکنش</p>
            </Col>
            <Col className="col-2 text-center col-md-2 col-lg-3 col-xl-2 col-xxl-2">
              <p className="text-center">نوع معامله</p>
            </Col>
            <Col className="col-2 text-center col-md-2 col-lg-3 col-xl-2 col-xxl-2">
              <p className="text-center">تاریخ و ساعت</p>
            </Col>
            <Col className="col-2 text-center d-none d-md-block d-lg-block d-xl-block d-xxl-block">
              <p className="text-center">مبدا</p>
            </Col>
            <Col className="col-2 text-center d-none d-md-block d-lg-block d-xl-block d-xxl-block">
              <p className="text-center">مقصد</p>
            </Col>
            <Col className="col-2 text-center d-none d-md-block d-lg-block d-xl-block d-xxl-block">
              <p className="text-center">وضعیت</p>
            </Col>
            <Col className="col-2 text-center d-block d-md-none d-lg-none d-xl-none d-xxl-none">
              <p className="text-center">بیشتر</p>
            </Col>
          </Row>
          <hr />
          {rawData.length === 0 ? (
            <>
              <p className="text-center mt-4 py-5">
                هنوز هیچ تراکنشی ثبت نشده است
              </p>
            </>
          ) : (
            <>
              {rawData
                .slice(handleMinSlice(), handleMaxSlice())
                .map((value) => (
                  <Row
                    className=" d-flex align-items-center align-content-center"
                    style={generateLineStyle(value.line)}
                  >
                    <Col className="col-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2 ">
                      <p className="text-center font-14">{value.tnumber}</p>
                    </Col>
                    <Col className="col-2 text-center col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                      {value.type === "خرید" ? (
                        <p className="text-center" style={{ color: "#0FC76E" }}>
                          {value.type}
                        </p>
                      ) : (
                        <p className="text-center" style={{ color: "#E71616" }}>
                          {value.type}
                        </p>
                      )}
                    </Col>
                    <Col className="col-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                      <p className="text-center font-14">{value.timedate}</p>
                    </Col>
                    <Col className="col-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                      <p className="text-center font-14">{value.source}</p>
                    </Col>
                    <Col className="col-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                      <p className="text-center font-14">{value.destination}</p>
                    </Col>
                    <Col className="col-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2 ">
                      {value.status === "موفق" ? (
                        <>
                          <Button
                            className="t-history-success"
                            style={{ width: "95px" }}
                          >
                            {value.status}
                          </Button>
                          <RotateLeftOutlinedIcon
                            style={{ marginRight: "18px" }}
                          />
                        </>
                      ) : null}
                      {value.status === "ناموفق" ? (
                        <>
                          <Button
                            className="t-history-failed"
                            style={{ width: "95px" }}
                          >
                            {value.status}
                          </Button>
                          <RotateLeftOutlinedIcon
                            style={{ marginRight: "18px" }}
                          />
                        </>
                      ) : null}
                      {value.status === "در حال بررسی" ? (
                        <>
                          <Button
                            className="t-history-pending"
                            style={{ width: "95px" }}
                          >
                            {value.status}
                          </Button>
                          <RotateLeftOutlinedIcon
                            style={{ marginRight: "18px" }}
                          />
                        </>
                      ) : null}
                    </Col>
                  </Row>
                ))}
            </>
          )}

          <Row className="mt-4">
            {rawData.length === 0 ? null : (
              <>
                <InputGroup className="d-flex justify-content-center align-content-center justify-items-center ">
                  {currentSlide === maxSlide ? (
                    <ArrowCircleRightOutlinedIcon
                      style={{ marginLeft: "8px" }}
                      className="directions-off"
                    />
                  ) : (
                    <ArrowCircleRightOutlinedIcon
                      style={{ marginLeft: "8px" }}
                      className="directions-on"
                      onClick={() => {
                        setCurrentSide(currentSlide + 1);
                      }}
                    />
                  )}

                  <p>
                    {maxSlide} / {currentSlide}
                  </p>

                  {currentSlide === 1 ? (
                    <ArrowCircleLeftOutlinedIcon
                      style={{ marginRight: "8px" }}
                      className="directions-off"
                    />
                  ) : (
                    <ArrowCircleLeftOutlinedIcon
                      style={{ marginRight: "8px" }}
                      className="directions-on"
                      onClick={() => {
                        setCurrentSide(currentSlide - 1);
                      }}
                    />
                  )}
                </InputGroup>
              </>
            )}
          </Row>
        </Col>
        {/* MOBILE MODE */}
        <Col className="section-303030 d-block d-lg-none d-xl-none d-xxl-none mt-4">
          <Row
            className="d-flex align-items-center font-12 d-flex align-items-center justify-content-center align-content-center font-12"
            style={{ height: "56px" }}
          >
            <Col className="mt-4">
              <p className="text-center">شماره تراکنش</p>
            </Col>
            <Col className="mt-4">
              <p className="text-center">نوع معامله</p>
            </Col>
            <Col className="mt-4">
              <p className="text-center">تاریخ و ساعت</p>
            </Col>
            <Col className="mt-4">
              <p className="text-center">بیشتر</p>
            </Col>
          </Row>
          <hr />
          <Row>
            {rawData.length === 0 ? (
              <>
                <p className="text-center mt-4 py-5">
                  هنوز هیچ تراکنشی ثبت نشده است
                </p>
              </>
            ) : (
              <>
                {rawData
                  .slice(handleMinSlice(), handleMaxSlice())
                  .map((value) => (
                    <>
                      <Accordion className={generateClass(value.line)}>
                        <AccordionSummary
                          expandIcon={
                            <ExpandMoreIcon className="wallet-more" />
                          }
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Col className="col-3">
                            <p>{value.tnumber}</p>
                          </Col>
                          <Col className="col-3 text-center">
                            {value.type === "خرید" ? (
                              <p style={{ color: "#0FC76E" }}>{value.type}</p>
                            ) : (
                              <p style={{ color: "#E71616" }}>{value.type}</p>
                            )}
                          </Col>
                          <Col className="text-center">
                            <p>{value.timedate}</p>
                          </Col>
                          <Col className="col-2" />
                        </AccordionSummary>
                        <AccordionDetails>
                          <Row className="text-center">
                            <Col>
                              <p>مبدا</p>
                              <p>{value.source}</p>
                            </Col>
                            <Col>
                              <p>مقصد</p>
                              <p>{value.destination}</p>
                            </Col>
                            <Col className="d-grid">
                              <p>وضعیت</p>
                              {value.status === "موفق" ? (
                                <Button className="t-history-success" size="sm">
                                  {value.status}
                                </Button>
                              ) : null}
                              {value.status === "ناموفق" ? (
                                <Button className="t-history-failed" size="sm">
                                  {value.status}
                                </Button>
                              ) : null}
                              {value.status === "در حال بررسی" ? (
                                <Button className="t-history-pending" size="sm">
                                  {value.status}
                                </Button>
                              ) : null}
                            </Col>
                          </Row>
                        </AccordionDetails>
                      </Accordion>
                    </>
                  ))}
                <Row className="mt-5">
                  {rawData.length === 0 ? null : (
                    <>
                      <InputGroup className="d-flex justify-content-center align-content-center justify-items-center ">
                        {currentSlide === maxSlide ? (
                          <ArrowCircleRightOutlinedIcon
                            style={{ marginLeft: "8px" }}
                            className="directions-off"
                          />
                        ) : (
                          <ArrowCircleRightOutlinedIcon
                            style={{ marginLeft: "8px" }}
                            className="directions-on"
                            onClick={() => {
                              setCurrentSide(currentSlide + 1);
                            }}
                          />
                        )}

                        <p>
                          {maxSlide} / {currentSlide}
                        </p>

                        {currentSlide === 1 ? (
                          <ArrowCircleLeftOutlinedIcon
                            style={{ marginRight: "8px" }}
                            className="directions-off"
                          />
                        ) : (
                          <ArrowCircleLeftOutlinedIcon
                            style={{ marginRight: "8px" }}
                            className="directions-on"
                            onClick={() => {
                              setCurrentSide(currentSlide - 1);
                            }}
                          />
                        )}
                      </InputGroup>
                    </>
                  )}
                </Row>
              </>
            )}
          </Row>
        </Col>
      </Row>
    </>
  );
};
export default WalletTransactionHistory;
