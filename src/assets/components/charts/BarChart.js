import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  ButtonGroup,
  Form,
  Button,
  Container,
} from "react-bootstrap";
import axios from "axios";
import { Line } from "react-chartjs-2";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const BarChart = (props) => {
  const dispatch = useDispatch();

  //States and Refs
  const [crypto] = useState(["BitCoin", "Ethereum"]);
  const [selectedCrypto, setSelectedCrypto] = useState(crypto[0]);
  const [days, setDays] = useState(7);
  const [interval, setInterval] = useState("daily");
  const [currentRange, setCurrentRange] = useState("weekly");
  const page = useSelector((state) => state.page);
  const dark = useSelector((state) => state.dark);
  const [, setBg] = useState("");

  // CHART OPTION
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        display: false,
      },
      title: {
        display: false,
      },
    },
  };

  //Chart Label
  const [labels, setLabels] = useState([
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
  ]);

  // Chart Data
  const [data, setData] = useState({
    labels,
    datasets: [
      {
        label: selectedCrypto,
        data: [],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  });

  // ON STARTUP
  useEffect(() => {
    const coinSelectBg = () => {
      if (page === "Dashboard") {
        if (dark === true) {
          setBg("#292929");
        } else {
          setBg("#FFFFFF");
        }
      } else {
        if (dark === true) {
          setBg("#1E1E1E");
        } else {
          setBg("#FFFFFF");
        }
      }
    };
    coinSelectBg();
  }, [dark, page]);

  //ON CHANGE
  useEffect(() => {
    const fetchCoinChart = (selectedCrypto) => {
      axios
        .get(
          "https://api.coingecko.com/api/v3/coins/" +
            selectedCrypto.toLowerCase() +
            "/market_chart?vs_currency=usd&days=" +
            days +
            "&interval=" +
            interval,
          {
            header: {
              Accept: "application/json",
            },
          }
        )
        .then((response) => {
          let p = [];
          // eslint-disable-next-line array-callback-return
          response.data.prices.map((value) => {
            p.push(value[1].toFixed(2));
          });
          setData({
            labels,
            datasets: [
              {
                label: selectedCrypto,
                data: p,
                borderColor: "rgb(53, 162, 235)",
                backgroundColor: "rgba(53, 162, 235, 0.5)",
              },
            ],
          });
        });
    };
    fetchCoinChart(selectedCrypto);
    dispatch({
      type: "SET_selectedCrypto",
      selectedCrypto: selectedCrypto,
    });
  }, [selectedCrypto, days, interval, labels, dispatch]);

  // Main Section
  return (
    <>
      <Container className={props.backgoundCSS} style={{ paddingTop: "5px" }}>
        {/* PC MODE */}
        <Row className="big-screen-mode" style={{ marginTop: "20px" }}>
          <Row>
            <Col className="col-8 align-items-center">
              <ButtonGroup
                dir={"ltr"}
                className="d-inline"
                style={{ width: "100px" }}
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
                      setLabels(numbers);
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
                      setLabels(numbers);
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
                      setLabels(numbers);
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
                      setLabels(numbers);
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
                      setLabels(numbers);
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
                      setLabels(numbers);
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
                      setLabels(numbers);
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
                      setLabels(numbers);
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
                      setLabels(numbers);
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
                      setLabels(numbers);
                    }}
                  >
                    سالانه
                  </Button>
                )}
              </ButtonGroup>
            </Col>
            <Col className="col-4">
              <Form.Select
                className="coin-selection"
                style={{
                  display: "inline",
                  width: "150px",
                  float: "left",
                  marginLeft: "20px",
                  background: props.bgColor,
                }}
                onChange={(e) => {
                  setSelectedCrypto(e.currentTarget.value);
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
        <Row className="small-screen-mode mt-2" dir="rtl">
          <Row className="justify-content-around">
            {/* COIN */}
            <Col className="col-6 d-grid">
              <Form.Select
                className="coin-selection"
                style={{
                  display: "inline",
                  width: "150px",
                  float: "left",
                  marginLeft: "20px",
                  background: props.bgColor,
                }}
                onChange={(e) => {
                  setSelectedCrypto(e.currentTarget.value);
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
                className="coin-range-selection"
                dir={"rtl"}
                style={{
                  display: "inline",
                  width: "100px",
                  float: "left",
                  marginLeft: "20px",
                  background: props.bgColor,
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
                    setLabels(numbers);
                  } else if (e.currentTarget.value === "weekly") {
                    setCurrentRange("weekly");
                    setDays(7);
                    // eslint-disable-next-line no-implied-eval
                    setInterval("daily");
                    let numbers = [];
                    for (let counter = 0; counter <= 7; counter++) {
                      numbers.push(counter.toString());
                    }
                    setLabels(numbers);
                  } else if (e.currentTarget.value === "montly") {
                    setCurrentRange("montly");
                    setDays(30);
                    // eslint-disable-next-line no-implied-eval
                    setInterval("daily");
                    let numbers = [];
                    for (let counter = 0; counter <= 30; counter++) {
                      numbers.push(counter.toString());
                    }
                    setLabels(numbers);
                  } else if (e.currentTarget.value === "6month") {
                    setCurrentRange("6month");
                    setDays(30);
                    // eslint-disable-next-line no-implied-eval
                    setInterval("montly");
                    let numbers = [];
                    for (let counter = 0; counter <= 6; counter++) {
                      numbers.push(counter.toString());
                    }
                    setLabels(numbers);
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
                    setLabels(numbers);
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
          <Col className="d-flex align-items-center">
            <Line options={options} data={data} />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default BarChart;
