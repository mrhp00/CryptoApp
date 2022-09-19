import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Container, Form, Row, InputGroup, Col } from "react-bootstrap";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useDispatch } from "react-redux";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SingleChart from "../charts/SingleChart.js";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

//Chart Register
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CoinMarkets = () => {
  const dispatch = useDispatch();
  const currency = new Intl.NumberFormat("en-US");

  //States and Refs
  const [usdPrice] = useState(33000);
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [currentSlide, setCurrentSide] = useState(1);
  const [maxSlide, setMaxSlide] = useState(1);
  const [LineChartArray, setLinneChartArray] = useState([]);

  // SEARCH
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  // DATA GATHER (COIN GECKO API)
  const fetchCoinChart = useCallback(() => {
    const charts = [];
    filteredCoins.map((value) => {
      charts.push({
        crypto: value.name,
        chart: (
          <SingleChart
            crypto={value.name}
            width={"30%"}
            options={{ maintainAspectRatio: false }}
          />
        ),
      });
      return 0;
    });
    setLinneChartArray(charts);
  }, [filteredCoins]);

  //  ON STARTUP
  useEffect(() => {
    fetchCoinChart();
    dispatch({
      type: "SET_PAGE",
      page: "Market",
    });
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=250&page=1&sparkline=false",
        {
          headers: {
            Accept: "application/json",
          },
        }
      )
      .then((response) => {
        setCoins(response.data.slice(0, 20));
      })
      .catch();
  }, [fetchCoinChart, dispatch]);

  // ON CHANGE STATE
  useEffect(() => {
    fetchCoinChart();
  }, [currentSlide, filteredCoins, fetchCoinChart]);
  useEffect(() => {
    let total = ((filteredCoins.length / 7) >> 0) + 1;
    setMaxSlide(total);
  }, [filteredCoins]);

  // PAGINATION
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

  // Main Section
  return (
    <Container
      dir="rtl"
      className="main-container "
      style={{ paddingBottom: "50px" }}
    >
      <Row>
        <Col>
          <p className="ilia-header d-none d-md-block d-lg-block d-xl-block d-xxl-block">
            بازار
          </p>
          <p className="ilia-header d-block d-md-none d-lg-none d-xl-none d-xxl-none text-center">
            بازار
          </p>
        </Col>
        {/* PC MODE */}
        <Col className="d-none d-md-inline d-lg-inline d-xl-inline d-xxl-inline">
          <div style={{ float: "left" }}>
            <InputGroup>
              <Form.Control
                className="section-pass-left6 wide-input"
                style={{ textAlign: "right", maxWidth: "200px" }}
                type="text"
                placeholder="جستجو"
                onChange={handleChange}
              />
              <InputGroup.Text className="section-pass-right6">
                <SearchOutlinedIcon />
              </InputGroup.Text>
            </InputGroup>
          </div>
        </Col>
      </Row>
      <Row>
        <Col
          className=" section2 d-none d-md-block d-lg-block d-xl-block d-xxl-block mt-4 dashboard-linechart"
          dir="rtl"
        >
          <Row className="mx-auto my-auto mt-3">
            <Col className="col-3 ">
              <p className="coin-market-header">ارز</p>
            </Col>
            <Col className="col-2 text-center">
              <p className="coin-market-header">قیمت به تومان</p>
            </Col>
            <Col className="col-2 text-center">
              <p className="coin-market-header">قیمت به تتر</p>
            </Col>
            <Col className="col-2 text-center">
              <p className="coin-market-header">قیمت روزانه</p>
            </Col>
            <Col className="col-3 text-center">
              <p className="coin-market-header">نمودار هفتگی</p>
            </Col>
          </Row>
          <hr />
          {filteredCoins
            .slice(handleMinSlice(), handleMaxSlice())
            .map((value) => (
              <>
                <Row
                  style={{ height: "68px" }}
                  id={value.name}
                  className=" my-auto align-items-center"
                >
                  <Col className="col-3">
                    <div className="me-3">
                      <img
                        src={value.image}
                        alt=""
                        style={{ height: "30px", width: "30px" }}
                      />
                      &nbsp; &nbsp;
                      {value.name}
                    </div>
                  </Col>
                  <Col className="col-2 text-center">
                    {currency.format(value.current_price.toFixed(0) * usdPrice)}
                  </Col>
                  <Col className="col-2 text-center">
                    {currency.format(value.current_price.toFixed(0))}
                  </Col>
                  <Col className="col-2 text-center">
                    {((value.current_price -
                      (value.current_price - value.price_change_24h)) /
                      Math.abs(value.current_price - value.price_change_24h)) *
                      100 >
                    0 ? (
                      <>
                        <p style={{ color: "#43C357" }}>
                          {(
                            ((value.current_price -
                              (value.current_price - value.price_change_24h)) /
                              Math.abs(
                                value.current_price - value.price_change_24h
                              )) *
                            100
                          ).toFixed(2)}
                          {"%"}
                          {" + "}
                        </p>
                      </>
                    ) : null}
                    {((value.current_price -
                      (value.current_price - value.price_change_24h)) /
                      Math.abs(value.current_price - value.price_change_24h)) *
                      100 <
                    0 ? (
                      <>
                        <p style={{ color: "#F74660" }}>
                          {Math.abs(
                            (
                              ((value.current_price -
                                (value.current_price -
                                  value.price_change_24h)) /
                                Math.abs(
                                  value.current_price - value.price_change_24h
                                )) *
                              100
                            ).toFixed(2)
                          )}
                          {"%"}
                          {" - "}
                        </p>
                      </>
                    ) : null}
                    {((value.current_price -
                      (value.current_price - value.price_change_24h)) /
                      Math.abs(value.current_price - value.price_change_24h)) *
                      100 ===
                    0 ? (
                      <>
                        <p>
                          {"0"}
                          {"%"}
                        </p>
                      </>
                    ) : null}
                  </Col>
                  <Col className="col-3 text-center ">
                    <div style={{ width: "60%" }} className="mx-auto">
                      {LineChartArray.map((items) => (
                        <>{items.crypto === value.name ? items.chart : null}</>
                      ))}
                    </div>
                  </Col>
                  <hr />
                </Row>
              </>
            ))}

          <Row className="mt-2">
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
          </Row>
        </Col>
        {/* MOBILE MODE */}
        <Col className="section-292929 d-block d-md-none d-lg-none d-xl-none d-xxl-none mt-4 dashboard-linechart">
          <Row
            className="mx-auto my-auto d-flex mt-3 font-12"
            style={{ height: "26px" }}
          >
            <Col className="col-5">
              <p className="coin-market-header">ارز</p>
            </Col>
            <Col className="col-5">
              <p className="text-center coin-market-header">قیمت به تومان</p>
            </Col>
            <Col className="col-2">
              <p className="text-center coin-market-header">بیشتر</p>
            </Col>
          </Row>
          <hr />
          <Row>
            {filteredCoins
              .slice(handleMinSlice(), handleMaxSlice())
              .map((value) => (
                <>
                  <Accordion className="color-292929" id={value.name}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon className="wallet-more" />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Col className="col-5">
                        <img
                          src={value.image}
                          alt=""
                          style={{ height: "30px", width: "30px" }}
                        />
                        <p className="d-inline me-2">{value.name}</p>
                      </Col>
                      <Col className="col-5 text-center">
                        {currency.format(
                          value.current_price.toFixed(0) * usdPrice
                        )}
                      </Col>
                      <Col className="col-2" />
                    </AccordionSummary>
                    <AccordionDetails>
                      <Row className="text-center">
                        <Col>
                          <p className="coin-market-header">قیمت به تتر</p>
                          <p>
                            {currency.format(value.current_price.toFixed(0))}
                          </p>
                        </Col>
                        <Col>
                          <p className="coin-market-header">تغییرات روزانه</p>
                          {((value.current_price -
                            (value.current_price - value.price_change_24h)) /
                            Math.abs(
                              value.current_price - value.price_change_24h
                            )) *
                            100 >
                          0 ? (
                            <>
                              <p style={{ color: "#43C357" }}>
                                {(
                                  ((value.current_price -
                                    (value.current_price -
                                      value.price_change_24h)) /
                                    Math.abs(
                                      value.current_price -
                                        value.price_change_24h
                                    )) *
                                  100
                                ).toFixed(2)}
                                {"%"}
                                {" + "}
                              </p>
                            </>
                          ) : null}
                          {((value.current_price -
                            (value.current_price - value.price_change_24h)) /
                            Math.abs(
                              value.current_price - value.price_change_24h
                            )) *
                            100 <
                          0 ? (
                            <>
                              <p style={{ color: "#F74660" }}>
                                {Math.abs(
                                  (
                                    ((value.current_price -
                                      (value.current_price -
                                        value.price_change_24h)) /
                                      Math.abs(
                                        value.current_price -
                                          value.price_change_24h
                                      )) *
                                    100
                                  ).toFixed(2)
                                )}
                                {"%"}
                                {" - "}
                              </p>
                            </>
                          ) : null}
                          {
                            (value.price_change_percentage_24h = 0 ? (
                              <>
                                <p>
                                  {"0"}
                                  {"%"}
                                </p>
                              </>
                            ) : null)
                          }
                        </Col>
                        <Col className="col-12 mt-5">
                          <p className="coin-market-header">نمودار هفتگی</p>
                          <div style={{ width: "70%" }} className="mx-auto">
                            {LineChartArray.map((items) => (
                              <>
                                {items.crypto === value.name
                                  ? items.chart
                                  : null}
                              </>
                            ))}
                          </div>
                        </Col>
                      </Row>
                    </AccordionDetails>
                  </Accordion>
                  <hr />
                </>
              ))}
          </Row>

          <Row className="mt-4">
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
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default CoinMarkets;
