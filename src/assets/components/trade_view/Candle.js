import { createChart, CrosshairMode } from "lightweight-charts";
import { useEffect, useRef, useState } from "react";
import {
  Button,
  ButtonGroup,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import { priceData } from "./priceData";

export default function Candle() {
  const chartContainerRef = useRef();
  const chart = useRef();
  const resizeObserver = useRef();
  const [crypto] = useState(["BitCoin", "Ethereum"]);
  const [setDays] = useState(7);
  const [setInterval] = useState("daily");
  const [currentRange, setCurrentRange] = useState("weekly");
  const page = useSelector((state) => state.page);
  const [selectorBg, setSelectorBg] = useState();

  useEffect(() => {
    let bg,
      txt,
      lines,
      up,
      down = "";
    if (localStorage.getItem("dark") !== "true") {
      bg = "#FFFFFF";
      txt = "#455A64";
      lines = "#FAFAFA";
      up = "#00CCFF";
      down = "#F51093";
      if (page === "Dashboard") {
        setSelectorBg("#FFFFFF");
      } else {
        setSelectorBg("#FFFFFF");
      }
    } else {
      bg = "#292929";
      txt = "#FAFAFA";
      lines = "#303030";
      up = "#32BD84";
      down = "#F84761";
      if (page === "Dashboard") {
        setSelectorBg("#292929");
      } else {
        setSelectorBg("#1E1E1E");
      }
    }
    chart.current = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: 400, //"300px", //chartContainerRef.current.clientHeight,
      layout: {
        backgroundColor: bg,
        textColor: txt,
      },
      grid: {
        vertLines: {
          color: lines,
        },
        horzLines: {
          color: lines,
        },
      },
      crosshair: {
        mode: CrosshairMode.Normal,
      },
      priceScale: {
        borderColor: "#485c7b",
      },
      timeScale: {
        borderColor: "#485c7b",
      },
    });

    const candleSeries = chart.current.addCandlestickSeries({
      upColor: up,
      downColor: down,
      borderDownColor: down,
      borderUpColor: up,
      wickDownColor: down,
      wickUpColor: up,
    });

    candleSeries.setData(priceData);

    // const volumeSeries = chart.current.addHistogramSeries({
    //   color: "#182233",
    //   lineWidth: 2,
    //   priceFormat: {
    //     type: "volume",
    //   },
    //   overlay: true,
    //   scaleMargins: {
    //     top: 0.8,
    //     bottom: 0,
    //   },
    // });

    // volumeSeries.setData(volumeData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Resize chart on container resizes.
  useEffect(() => {
    resizeObserver.current = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      chart.current.applyOptions({ width, height });
      setTimeout(() => {
        chart.current.timeScale().fitContent();
      }, 0);
    });

    resizeObserver.current.observe(chartContainerRef.current);

    return () => resizeObserver.current.disconnect();
  }, []);
 
  // Main Section
  return (
    <Container className="section-292929">
      <Row className="big-screen-mode pt-3" style={{ marginTop: "20px" }}>
        <Row>
          <Col className="col-8 align-items-center">
            <ButtonGroup
              dir={"ltr"}
              className=""
              style={{ display: "inline", width: "100px" }}
            >
              {currentRange === "daily" ? (
                <Button
                  className="coin-chart-range-active"
                  onClick={() => {
                    setCurrentRange("daily");
                    setDays(30);
                    // eslint-disable-next-line no-implied-eval
                    setInterval("hourly");
                    let numbers = [];
                    for (let counter = 0; counter <= 24; counter++) {
                      numbers.push(counter.toString());
                    }
                  }}
                >
                  روزانه
                </Button>
              ) : (
                <Button
                  className="coin-chart-range-inactive"
                  onClick={() => {
                    setCurrentRange("daily");
                    setDays(30);
                    // eslint-disable-next-line no-implied-eval
                    setInterval("hourly");
                    let numbers = [];
                    for (let counter = 0; counter <= 24; counter++) {
                      numbers.push(counter.toString());
                    }
                  }}
                >
                  روزانه
                </Button>
              )}
              {currentRange === "weekly" ? (
                <Button
                  className="coin-chart-range-active"
                  onClick={() => {
                    setCurrentRange("weekly");
                    setDays(7);
                    // eslint-disable-next-line no-implied-eval
                    setInterval("daily");
                    let numbers = [];
                    for (let counter = 0; counter <= 7; counter++) {
                      numbers.push(counter.toString());
                    }
                  }}
                >
                  هفتگی
                </Button>
              ) : (
                <Button
                  className="coin-chart-range-inactive"
                  onClick={() => {
                    setCurrentRange("weekly");
                    setDays(7);
                    // eslint-disable-next-line no-implied-eval
                    setInterval("daily");
                    let numbers = [];
                    for (let counter = 0; counter <= 7; counter++) {
                      numbers.push(counter.toString());
                    }
                  }}
                >
                  هفتگی
                </Button>
              )}
              {currentRange === "montly" ? (
                <Button
                  className="coin-chart-range-active"
                  onClick={() => {
                    setCurrentRange("montly");
                    setDays(30);
                    // eslint-disable-next-line no-implied-eval
                    setInterval("daily");
                    let numbers = [];
                    for (let counter = 0; counter <= 30; counter++) {
                      numbers.push(counter.toString());
                    }
                  }}
                >
                  ماهانه
                </Button>
              ) : (
                <Button
                  className="coin-chart-range-inactive"
                  onClick={() => {
                    setCurrentRange("montly");
                    setDays(30);
                    // eslint-disable-next-line no-implied-eval
                    setInterval("daily");
                    let numbers = [];
                    for (let counter = 0; counter <= 30; counter++) {
                      numbers.push(counter.toString());
                    }
                  }}
                >
                  ماهانه
                </Button>
              )}
              {currentRange === "6month" ? (
                <Button
                  className="coin-chart-range-active"
                  onClick={() => {
                    setCurrentRange("6month");
                    setDays(30);
                    // eslint-disable-next-line no-implied-eval
                    setInterval("montly");
                    let numbers = [];
                    for (let counter = 0; counter <= 6; counter++) {
                      numbers.push(counter.toString());
                    }
                  }}
                >
                  شش ماهه
                </Button>
              ) : (
                <Button
                  className="coin-chart-range-inactive"
                  onClick={() => {
                    setCurrentRange("6month");
                    setDays(30);
                    // eslint-disable-next-line no-implied-eval
                    setInterval("montly");
                    let numbers = [];
                    for (let counter = 0; counter <= 6; counter++) {
                      numbers.push(counter.toString());
                    }
                  }}
                >
                  شش ماهه
                </Button>
              )}
              {currentRange === "yearly" ? (
                <Button
                  className="coin-chart-range-active"
                  onClick={() => {
                    setCurrentRange("yearly");
                    setDays(30);
                    // eslint-disable-next-line no-implied-eval
                    setInterval("montly");
                    let numbers = [];
                    for (let counter = 0; counter <= 12; counter++) {
                      numbers.push(counter.toString());
                    }
                  }}
                >
                  سالانه
                </Button>
              ) : (
                <Button
                  className="coin-chart-range-inactive"
                  onClick={() => {
                    setCurrentRange("yearly");
                    setDays(30);
                    // eslint-disable-next-line no-implied-eval
                    setInterval("montly");
                    let numbers = [];
                    for (let counter = 0; counter <= 12; counter++) {
                      numbers.push(counter.toString());
                    }
                  }}
                >
                  سالانه
                </Button>
              )}
            </ButtonGroup>
          </Col>
          <Col className="col-4">
            <Form.Select
              className="coin-selection pointer-cursor"
              style={{
                display: "inline",
                width: "150px",
                float: "left",
                marginLeft: "20px",
                background: selectorBg,
              }}
              onChange={(e) => {
                // setSelected_crypto(e.currentTarget.value);
              }}
            >
              {crypto.map((value) => (
                <option value={value}>{value}</option>
              ))}
            </Form.Select>
          </Col>
        </Row>
      </Row>

      {/* MOBILE MODE */}
      <Row className="small-screen-mode pt-3" dir="rtl">
        <Row className="justify-content-around">
          {/* COIN */}
          <Col className="col-6 d-grid">
            <Form.Select
              className="coin-selection pointer-cursor"
              style={{
                display: "inline",
                width: "150px",
                float: "left",
                marginLeft: "20px",
                background: selectorBg,
              }}
              onChange={(e) => {
                // setSelected_crypto(e.currentTarget.value);
              }}
            >
              {crypto.map((value) => (
                <option value={value}>{value}</option>
              ))}
            </Form.Select>
          </Col>
          {/* GAP */}
          <Col className="col-2" />
          {/* RANGE */}
          <Col className="col-4 d-grid">
            <Form.Select
              className="coin-range-selection pointer-cursor"
              dir={"rtl"}
              style={{
                display: "inline",
                width: "100px",
                float: "left",
                marginLeft: "20px",
                background: selectorBg,
              }}
              onChange={(e) => {
                if (e.currentTarget.value === "daily") {
                  setCurrentRange("daily");
                  setDays(30);
                  // eslint-disable-next-line no-implied-eval
                  setInterval("hourly");
                  let numbers = [];
                  for (let counter = 0; counter <= 24; counter++) {
                    numbers.push(counter.toString());
                  }
                } else if (e.currentTarget.value === "weekly") {
                  setCurrentRange("weekly");
                  setDays(7);
                  // eslint-disable-next-line no-implied-eval
                  setInterval("daily");
                  let numbers = [];
                  for (let counter = 0; counter <= 7; counter++) {
                    numbers.push(counter.toString());
                  }
                } else if (e.currentTarget.value === "montly") {
                  setCurrentRange("montly");
                  setDays(30);
                  // eslint-disable-next-line no-implied-eval
                  setInterval("daily");
                  let numbers = [];
                  for (let counter = 0; counter <= 30; counter++) {
                    numbers.push(counter.toString());
                  }
                } else if (e.currentTarget.value === "6month") {
                  setCurrentRange("6month");
                  setDays(30);
                  // eslint-disable-next-line no-implied-eval
                  setInterval("montly");
                  let numbers = [];
                  for (let counter = 0; counter <= 6; counter++) {
                    numbers.push(counter.toString());
                  }
                }
                if (e.currentTarget.value === "yearly") {
                  setCurrentRange("yearly");
                  setDays(30);
                  // eslint-disable-next-line no-implied-eval
                  setInterval("montly");
                  let numbers = [];
                  for (let counter = 0; counter <= 12; counter++) {
                    numbers.push(counter.toString());
                  }
                }
              }}
            >
              <option selected value={"daily"}>
                روزانه
              </option>
              <option value={"weekly"}>هفتگی</option>
              <option value={"montly"}>ماهانه</option>
              <option value={"6month"}>شش ماهه</option>
              <option value={"yearly"}>سالانه</option>
            </Form.Select>
          </Col>
        </Row>
      </Row>
      <Row className="mt-4">
        <div
          ref={chartContainerRef}
          className="chart-container section-292929"
        />
      </Row>
    </Container>
  );
}
