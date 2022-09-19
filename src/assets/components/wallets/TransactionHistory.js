import React, { useEffect, useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useSelector } from "react-redux";

const TrannsactionHistory = (props) => {
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

  //RAW DATA
  const rawData = [
    {
      line: 1,
      id: 1,
      tnumber: 45678,
      type: "خرید",
      currency: "ریالی",
      timedate: "1400/09/09  23:23",
      amount: "2.314.89 TRX",
      status: "موفق",
      refrence: "L5GHEY7IOL9UJJ00",
    },
    {
      line: 2,
      id: 2,
      tnumber: 45678,
      type: "خرید",
      currency: "رمز ارز",
      timedate: "1400/09/09  23:23",
      amount: "2.314.89 TRX",
      status: "ناموفق",
      refrence: "L5GHEY7IOL9UJJ00",
    },
    {
      line: 3,
      id: 3,
      tnumber: 45678,
      type: "فروش",
      currency: "رمز ارز",
      timedate: "1400/09/09  23:23",
      amount: "2.314.89 TRX",
      status: "در حال بررسی",
      refrence: "L5GHEY7IOL9UJJ00",
    },
    {
      line: 4,
      id: 4,
      tnumber: 45678,
      type: "خرید",
      currency: "ریالی",
      timedate: "1400/09/09  23:23",
      amount: "2.314.89 TRX",
      status: "موفق",
      refrence: "L5GHEY7IOL9UJJ00",
    },
    {
      line: 5,
      id: 5,
      tnumber: 45678,
      type: "فروش",
      currency: "ریالی",
      timedate: "1400/09/09  23:23",
      amount: "2.314.89 TRX",
      status: "ناموفق",
      refrence: "L5GHEY7IOL9UJJ00",
    },
    {
      line: 6,
      id: 6,
      tnumber: 45678,
      type: "خرید",
      currency: "ریالی",
      timedate: "1400/09/09  23:23",
      amount: "2.314.89 TRX",
      status: "موفق",
      refrence: "L5GHEY7IOL9UJJ00",
    },
    {
      line: 7,
      id: 7,
      tnumber: 45678,
      type: "فروش",
      currency: "رمز ارز",
      timedate: "1400/09/09  23:23",
      amount: "2.314.89 TRX",
      status: "موفق",
      refrence: "L5GHEY7IOL9UJJ00",
    },
    {
      line: 8,
      id: 8,
      tnumber: 45678,
      type: "فروش",
      currency: "ریالی",
      timedate: "1400/09/09  23:23",
      amount: "2.314.89 TRX",
      status: "در حال بررسی",
      refrence: "L5GHEY7IOL9UJJ00",
    },
    {
      line: 9,
      id: 9,
      tnumber: 45678,
      type: "خرید",
      currency: "رمز ارز",
      timedate: "1400/09/09  23:23",
      amount: "2.314.89 TRX",
      status: "موفق",
      refrence: "L5GHEY7IOL9UJJ00",
    },
    {
      line: 10,
      id: 10,
      tnumber: 45678,
      type: "خرید",
      currency: "ریالی",
      timedate: "1400/09/09  23:23",
      amount: "2.314.89 TRX",
      status: "موفق",
      refrence: "L5GHEY7IOL9UJJ00",
    },
    {
      line: 11,
      id: 11,
      tnumber: 45678,
      type: "خرید",
      currency: "رمز ارز",
      timedate: "1400/09/09  23:23",
      amount: "2.314.89 TRX",
      status: "ناموفق",
      refrence: "L5GHEY7IOL9UJJ00",
    },
    {
      line: 12,
      id: 12,
      tnumber: 45678,
      type: "فروش",
      currency: "ریالی",
      timedate: "1400/09/09  23:23",
      amount: "2.314.89 TRX",
      status: "موفق",
      refrence: "L5GHEY7IOL9UJJ00",
    },
    {
      line: 13,
      id: 13,
      tnumber: 45678,
      type: "خرید",
      currency: "رمز ارز",
      timedate: "1400/09/09  23:23",
      amount: "2.314.89 TRX",
      status: "موفق",
      refrence: "L5GHEY7IOL9UJJ00",
    },
    {
      line: 14,
      id: 14,
      tnumber: 45678,
      type: "فروش",
      currency: "ریالی",
      timedate: "1400/09/09  23:23",
      amount: "2.314.89 TRX",
      status: "در حال بررسی",
      refrence: "L5GHEY7IOL9UJJ00",
    },
    {
      line: 15,
      id: 15,
      tnumber: 45678,
      type: "خرید",
      currency: "ریالی",
      timedate: "1400/09/09  23:23",
      amount: "2.314.89 TRX",
      status: "موفق",
      refrence: "L5GHEY7IOL9UJJ00",
    },
  ];

  //Class and Styles Creator
  const generateLineStyle = (line) => {
    if (parseInt(line) % 2 === 0) {
      if (
        // eslint-disable-next-line eqeqeq
        localStorage.getItem("dark") === "true"
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

  //START UP
  useEffect(() => {
    let total = ((rawData.length / 7) >> 0) + 1;
    setMaxSlide(total);
  }, [rawData.length]);

  // Main Section
  return (
    <>
      <Row className="px-md-4 px-lg-4 px-xl-4 px-xxl-4">
        {/* GENERAL SECTION */}
        <Col className="col-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
          <p>نوع تراکنش</p>
          <Form.Select className="trade-history-boxes">
            <option>همه</option>
          </Form.Select>
        </Col>
        <Col className="col-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 mt-3 mt-md-0 mt-lg-0 mt-xl-0 mt-xxl-0 d-grid">
          <p>از تاریخ</p>
          <InputGroup>
            <Form.Control
              required
              type="text"
              className="section-303030 section-pass-left3 wide-input"
            />
            <InputGroup.Text className="section-303030 section-pass-right3">
              <CalendarMonthOutlinedIcon />
            </InputGroup.Text>
          </InputGroup>
        </Col>
        <Col className="col-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 mt-3 mt-md-0 mt-lg-0 mt-xl-0 mt-xxl-0 d-grid">
          <p>تا تاریخ</p>
          <InputGroup>
            <Form.Control
              required
              type="text"
              className="section-303030 section-pass-left3 wide-input"
            />
            <InputGroup.Text className="section-303030 section-pass-right3">
              <CalendarMonthOutlinedIcon />
            </InputGroup.Text>
          </InputGroup>
        </Col>
        <Col className="col-12 col-md-1 col-lg-1 col-xl-1 col-xxl-1 d-none d-md-block d-lg-block d-xl-block d-xxl-block" />
        <Col className="col-12 col-md-2 col-lg-2 col-xl-2 col-xxl-2 mt-3 mt-md-0 mt-lg-0 mt-xl-0 mt-xxl-0 d-grid">
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row>
            <Col className="d-grid">
              <Button className="btn-copy">جستجو</Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="px-md-4 px-lg-4 px-xl-4 px-xxl-4">
        {/* PC MODE */}
        <Col className=" section-303030 d-none d-md-block d-lg-block d-xl-block d-xxl-block mt-4">
          <Row
            className=" d-flex align-items-center"
            style={{ height: "56px", lineHeight: "56px" }}
          >
            <Col className="col-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
              <p className="text-center">شماره تراکنش</p>
            </Col>
            <Col className="col-2 text-center col-md-2 col-lg-3 col-xl-2 col-xxl-2">
              <p className="text-center">نوع تراکنش</p>
            </Col>
            <Col className="col-2 text-center col-md-2 col-lg-3 col-xl-2 col-xxl-2">
              <p className="text-center">تاریخ و ساعت</p>
            </Col>
            <Col className="col-2 text-center d-none d-md-block d-lg-block d-xl-block d-xxl-block">
              <p className="text-center">مقدار تراکنش</p>
            </Col>
            <Col className="col-2 text-center d-none d-md-block d-lg-block d-xl-block d-xxl-block">
              <p className="text-center">وضعیت</p>
            </Col>
            <Col className="col-2 text-center d-none d-md-block d-lg-block d-xl-block d-xxl-block">
              <p className="text-center">کد پیگیری</p>
            </Col>
            <Col className="col-2 text-center d-block d-md-none d-lg-none d-xl-none d-xxl-none">
              <p className="text-center">بیشتر</p>
            </Col>
          </Row>
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
                        <p
                          className="text-center"
                          style={{ color: "#0FC76E", display: "inline" }}
                        >
                          {value.type}
                        </p>
                      ) : (
                        <p
                          className="text-center"
                          style={{ color: "#E71616", display: "inline" }}
                        >
                          {value.type}
                        </p>
                      )}
                      &nbsp;
                      <p style={{ display: "inline", marginRight: "5px" }}>
                        {value.currency}
                      </p>
                    </Col>
                    <Col className="col-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                      <p className="text-center font-14">{value.timedate}</p>
                    </Col>
                    <Col className="col-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                      <p className="text-center font-14">{value.amount}</p>
                    </Col>

                    <Col className="col-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2 d-grid">
                      {value.status === "موفق" ? (
                        <Button className="t-history-success">
                          {value.status}
                        </Button>
                      ) : null}
                      {value.status === "ناموفق" ? (
                        <Button className="t-history-failed">
                          {value.status}
                        </Button>
                      ) : null}
                      {value.status === "در حال بررسی" ? (
                        <Button className="t-history-pending">
                          {value.status}
                        </Button>
                      ) : null}
                    </Col>
                    <Col className="col-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                      <p className="text-center font-14">{value.refrence}</p>
                    </Col>
                  </Row>
                ))}
            </>
          )}

          <Row className="mt-4">
            {rawData.length === 0 ? null : (
              <>
                <InputGroup className="d-flex justify-content-center align-content-center justify-items-center ">
                  {currentSlide === 1 ? (
                    <ArrowCircleRightIcon
                      style={{ marginLeft: "8px" }}
                      className="directions-off disabled-dir"
                    />
                  ) : (
                    <ArrowCircleRightIcon
                      style={{ marginLeft: "8px" }}
                      className="directions-on enabled-dir"
                      onClick={() => {
                        setCurrentSide(currentSlide - 1);
                      }}
                    />
                  )}

                  <p className="text-dir">
                    {currentSlide} {" از "} {maxSlide}
                  </p>
                  {currentSlide === maxSlide ? (
                    <ArrowCircleLeftIcon
                      style={{ marginRight: "8px" }}
                      className="directions-off disabled-dir"
                    />
                  ) : (
                    <ArrowCircleLeftIcon
                      style={{ marginRight: "8px" }}
                      className="directions-on enabled-dir"
                      onClick={() => {
                        setCurrentSide(currentSlide + 1);
                      }}
                    />
                  )}
                </InputGroup>
              </>
            )}
          </Row>
        </Col>

        {/* MOBILE MODE */}
        <Col className="section-303030 d-block d-md-none d-lg-none d-xl-none d-xxl-none mt-4">
          <Row
            className="d-flex align-items-center justify-content-center align-content-center font-12"
            style={{ height: "56px" }}
          >
            <Col className="mt-4">
              <p className="text-center">شماره تراکنش</p>
            </Col>
            <Col className="mt-4">
              <p className="text-center">نوع تراکنش</p>
            </Col>
            <Col className="mt-4">
              <p className="text-center">تاریخ و ساعت</p>
            </Col>
            <Col className="mt-4">
              <p className="text-center">بیشتر</p>
            </Col>
          </Row>
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
                              <p
                                className="text-center"
                                style={{ color: "#0FC76E", display: "inline" }}
                              >
                                {value.type}
                              </p>
                            ) : (
                              <p
                                className="text-center"
                                style={{ color: "#E71616", display: "inline" }}
                              >
                                {value.type}
                              </p>
                            )}
                            &nbsp;
                            <p
                              style={{ display: "inline", marginRight: "5px" }}
                            >
                              {value.currency}
                            </p>
                          </Col>
                          <Col className="text-center">
                            <p>{value.timedate}</p>
                          </Col>
                          <Col className="col-2" />
                        </AccordionSummary>
                        <AccordionDetails>
                          <Row className="text-center">
                            <Col>
                              <p>مقدار تراکنش</p>
                              <p>{value.amount}</p>
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
                            <Col className="col-12 mt-5">
                              <p>کد پیگیری</p>
                              <p>{value.refrence}</p>
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
                        {currentSlide === 1 ? (
                          <ArrowCircleRightIcon
                            style={{ marginLeft: "8px" }}
                            className="directions-off disabled-dir"
                          />
                        ) : (
                          <ArrowCircleRightIcon
                            style={{ marginLeft: "8px" }}
                            className="directions-on enabled-dir"
                            onClick={() => {
                              setCurrentSide(currentSlide - 1);
                            }}
                          />
                        )}

                        <p className="text-dir">
                          {currentSlide} {" از "} {maxSlide}
                        </p>
                        {currentSlide === maxSlide ? (
                          <ArrowCircleLeftIcon
                            style={{ marginRight: "8px" }}
                            className="directions-off disabled-dir"
                          />
                        ) : (
                          <ArrowCircleLeftIcon
                            style={{ marginRight: "8px" }}
                            className="directions-on enabled-dir"
                            onClick={() => {
                              setCurrentSide(currentSlide + 1);
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
export default TrannsactionHistory;
