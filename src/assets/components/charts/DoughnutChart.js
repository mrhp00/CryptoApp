import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useNavigate } from "react-router-dom";
import { ArrowLeft2 } from "iconsax-react";

//Chart Register
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = (props) => {
  const navigate = useNavigate();

  //Chart Options
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

  //Chart Data
  const data = {
    labels: props.labels,
    datasets: [
      {
        data: props.data,
        backgroundColor: [
          "#517BA6",
          "#32BD84",
          "#F0B90B",
          "#54D4B8",
          "#FBD1A2",
          "#F32A2A",
        ],
        borderColor: [
          "#517BA6",
          "#32BD84",
          "#F0B90B",
          "#54D4B8",
          "#FBD1A2",
          "#F32A2A",
        ],
        borderWidth: 1,
      },
    ],
  };

  // Main Section
  return (
    <>
      <Container dir="rtl">
        <Row className="col-12">
          <Col>
            <p>موجودی</p>
          </Col>
          <Col>
            <p
              className="text-start"
              onClick={() => {
                navigate("/wallet");
              }}
              style={{ cursor: "pointer" }}
            >
              {" مشاهده همه "}
              <ArrowLeft2 size="20" className="header-menu-icon" />
            </p>
          </Col>
        </Row>
        <Row Row className="col-12 ">
          <Col className="col-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 mt-md-3 mt-lg-3 mt-xl-3 mt-xxl-3 order-2 order-md-1 order-lg-1 order-xl-1 order-xxl-1">
            <Row className="main-container mx-1" style={{ marginTop: "10px" }}>
              <Col className="col-1 col-md-2 col-lg-2 col-xl-2 col-xxl-2 mt-3">
                <div>
                  <div
                    className="color-pallete"
                    style={{ backgroundColor: "#0784B5", marginRight: "5px" }}
                  />
                </div>
              </Col>
              &nbsp;&nbsp;
              <Col className="col-6 col-md-5 col-lg-5 col-xl-5 col-xxl-5 mt-3">
                <p style={{ marginRight: "5px" }}>{props.labels[0]}</p>
              </Col>
              <Col className="mt-3">
                <p className="text-start">{props.data[0]}</p>
              </Col>
            </Row>
            <Row className="main-container mx-1" style={{ marginTop: "10px" }}>
              <Col className="col-1 col-md-2 col-lg-2 col-xl-2 col-xxl-2 mt-3">
                <div>
                  <div
                    className="color-pallete"
                    style={{ backgroundColor: "#54D4B8", marginRight: "5px" }}
                  />
                </div>
              </Col>
              &nbsp;&nbsp;
              <Col className="col-6 col-md-5 col-lg-5 col-xl-5 col-xxl-5 mt-3">
                <p style={{ marginRight: "5px" }}>{props.labels[1]}</p>
              </Col>
              <Col className="mt-3">
                <p className="text-start">{props.data[1]}</p>
              </Col>
            </Row>
            <Row className="main-container mx-1" style={{ marginTop: "10px" }}>
              <Col className="col-1 col-md-2 col-lg-2 col-xl-2 col-xxl-2 mt-3">
                <div>
                  <div
                    className="color-pallete"
                    style={{ backgroundColor: "#FBD1A2", marginRight: "5px" }}
                  />
                </div>
              </Col>
              &nbsp;&nbsp;
              <Col className="col-6 col-md-5 col-lg-5 col-xl-5 col-xxl-5 mt-3">
                <p style={{ marginRight: "5px" }}>{props.labels[2]}</p>
              </Col>
              <Col className="mt-3">
                <p className="text-start">{props.data[2]}</p>
              </Col>
            </Row>
          </Col>
          <Col className="col-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 mt-md-3 mt-lg-3 mt-xl-3 mt-xxl-3 order-3 order-md-2 order-lg-2 order-xl-2 order-xxl-2">
            <Row className="main-container mx-1" style={{ marginTop: "10px" }}>
              <Col className="col-1 col-md-2 col-lg-2 col-xl-2 col-xxl-2 mt-3">
                <div>
                  <div
                    className="color-pallete"
                    style={{ backgroundColor: "#32BD84", marginRight: "5px" }}
                  />
                </div>
              </Col>
              &nbsp;&nbsp;
              <Col className="col-6 col-md-5 col-lg-5 col-xl-5 col-xxl-5 mt-3">
                <p style={{ marginRight: "5px" }}>{props.labels[3]}</p>
              </Col>
              <Col className="mt-3">
                <p className="text-start">{props.data[3]}</p>
              </Col>
            </Row>
            <Row className="main-container mx-1" style={{ marginTop: "10px" }}>
              <Col className="col-1 col-md-2 col-lg-2 col-xl-2 col-xxl-2 mt-3">
                <div>
                  <div
                    className="color-pallete"
                    style={{ backgroundColor: "#F0B90B", marginRight: "5px" }}
                  />
                </div>
              </Col>
              &nbsp;&nbsp;
              <Col className="col-6 col-md-5 col-lg-5 col-xl-5 col-xxl-5 mt-3">
                <p style={{ marginRight: "5px" }}>{props.labels[4]}</p>
              </Col>
              <Col className="mt-3">
                <p className="text-start">{props.data[4]}</p>
              </Col>
            </Row>
            <Row className="main-container mx-1" style={{ marginTop: "10px" }}>
              <Col className="col-1 col-md-2 col-lg-2 col-xl-2 col-xxl-2 mt-3">
                <div>
                  <div
                    className="color-pallete"
                    style={{ backgroundColor: "#F32A2A", marginRight: "5px" }}
                  />
                </div>
              </Col>
              &nbsp;&nbsp;
              <Col className="col-6 col-md-5 col-lg-5 col-xl-5 col-xxl-5 mt-3">
                <p style={{ marginRight: "5px" }}>{props.labels[5]}</p>
              </Col>
              <Col className="mt-3">
                <p className="text-start">{props.data[5]}</p>
              </Col>
            </Row>
          </Col>
          <Col className="col-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 order-1 order-md-3 order-lg-3 order-xl-3 order-xxl-3">
            <Row>
              <p className="text-center">موجودی کل</p>
              <p className="text-center" style={{ color: "#0784B5" }}>
                {props.data.reduce((a, b) => a + b, 0)}
              </p>
            </Row>
            <Row>
              <Col className="d-flex justify-content-center">
                <div style={{ width: "146px", height: "146px" }}>
                  <Doughnut data={data} options={options} />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default DoughnutChart;
