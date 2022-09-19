import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import axios from "axios";
import { Line } from "react-chartjs-2";
import { useDispatch } from "react-redux";

const SingleChart = (props) => {
  // States and Refs
  const dispatch = useDispatch();
  const [days] = useState(7);
  const [interval] = useState("daily");

  //Chart Options
  const options = {
    elements: {
      point: {
        radius: 0,
      },
    },

    scales: {
      "x-axis-1": {
        display: false,
        gridLines: {
          display: false,
        },
      },
      "y-axis-1": {
        display: false,
        gridLines: {
          display: false,
        },
      },
    },
    responsive: true,
    plugins: {
      tooltip: {
        enabled: false,
      },
      legend: {
        position: "top",
        display: false,
      },
      title: {
        display: false,
      },
    },
  };

  //Chart Labels
  const [labels] = useState(["0", "1", "2", "3", "4", "5", "6", "7"]);

  //Chart Data
  const [data, setData] = useState({
    labels,
    datasets: [
      {
        label: props.crypto,
        data: [],
        borderColor: "#004CF8",
        backgroundColor: "#004CF8",
      },
    ],
  });

  //START UP
  useEffect(() => {
    const fetchCoinChart = (crypto) => {
      axios
        .get(
          "https://api.coingecko.com/api/v3/coins/" +
            props.crypto.toLowerCase() +
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
                label: props.crypto,
                data: p,
                borderColor: "rgb(53, 162, 235)",
                backgroundColor: "rgba(53, 162, 235, 0.5)",
              },
            ],
          });
        });
    };
    fetchCoinChart(props.crypto);
    dispatch({
      type: "SET_props.crypto",
      selectedCrypto: props.crypto,
    });
  }, [dispatch, props.crypto, days, interval, labels]);

  // Main Section
  return (
    <>
      <Container className="section2" style={{ paddingTop: "5px" }}>
        <Row>
          <Col className="d-flex align-items-center">
            <Line options={options} data={data} />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default SingleChart;
