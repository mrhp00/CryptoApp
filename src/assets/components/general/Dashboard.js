import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import BarChart from "../charts/BarChart";
import Buy from "../trade/Buy";
import Sell from "../trade/Sell";
import DoughnutChart from "../charts/DoughnutChart";
import RecentDeal from "../trade/RecentDeal";

const Dashboard = (props) => {
  const dispatch = useDispatch();

  //States and Refs
  const [tab, setTab] = useState("buy");
  const dark = useSelector((state) => state.dark);

  //START UP
  useEffect(() => {
    dispatch({
      type: "SET_PAGE",
      page: "Dashboard",
    });
  }, [dispatch]);

  //Tab Switcher
  const switchQuickTrade = () => {
    if (tab === "buy") {
      setTab("sell");
    } else {
      setTab("buy");
    }
  };

  // Main Section
  return (
    <>
      <div dir="ltr" className="section pb-4">
        <Row>
          <Col
            className="col-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 "
            dir="rtl"
          >
            <div className="main-container pb-3 mt-2">
              <div style={{ paddingTop: "16px" }}>
                <p className="text-center ilia-header">سفارش سریع</p>
              </div>
              <Container className="main-container">
                <div className="color-292929 rounded-8px">
                  {tab === "buy" ? (
                    <>
                      <Button
                        className="btn-warning"
                        style={{ width: "50%" }}
                        onClick={switchQuickTrade}
                      >
                        خرید
                      </Button>
                      <Button
                        className="btn btn-flat"
                        style={{ width: "50%" }}
                        onClick={switchQuickTrade}
                      >
                        فروش
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button
                        className="btn btn-flat"
                        style={{ width: "50%" }}
                        onClick={switchQuickTrade}
                      >
                        خرید
                      </Button>
                      <Button
                        className="btn-warning"
                        style={{ width: "50%" }}
                        onClick={switchQuickTrade}
                      >
                        فروش
                      </Button>
                    </>
                  )}
                </div>
                <div
                  style={{ marginTop: "18px" }}
                  className="d-none d-md-block d-lg-block d-xl-block d-xxl-block"
                >
                  {tab === "buy" ? (
                    <Buy backgroundCSS="main-container" />
                  ) : (
                    <Sell backgroundCSS="main-container" />
                  )}
                </div>
                <div
                  style={{ marginTop: "18px" }}
                  className="d-block d-md-none d-lg-none d-xl-none d-xxl-none"
                >
                  {tab === "buy" ? (
                    <Buy backgroundCSS="main-container" space="64px" />
                  ) : (
                    <Sell backgroundCSS="main-container" space="64px" />
                  )}
                </div>
              </Container>
            </div>
          </Col>
          <Col
            className="col-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8 mt-3 mt-md-2 mt-lg-2 mt-xl-2 mt-xxl-2"
            dir="rtl"
          >
            {dark ? (
              <BarChart backgoundCSS="dashboard-linechart" bgColor="#1E1E1E" />
            ) : (
              <BarChart backgoundCSS="dashboard-linechart" bgColor="#FFFFFF" />
            )}
          </Col>
          <Col
            className="main-container pb-3 col-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 order-4 order-md-3 order-lg-3 order-xl-3 order-xxl-3"
            dir="rtl"
            style={{ marginTop: "20px" }}
          >
            <RecentDeal
              deals={[
                ["BTC/BUSD", "بیت کوین", "buy", "$54,382.64"],
                ["BTC/BUSD", "بیت کوین", "sell", "$54,382.64"],
                ["BTC/BUSD", "بیت کوین", "buy", "$54,382.64"],
              ]}
            />
          </Col>
          <Col
            className="col-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8 order-3 order-md-4 order-lg-4 order-xl-4 order-xxl-4 mt-3 mt-md-0 mt-lg-0 mt-xl-0 mt-xxl-0 pt-2 pt-md-4 pt-lg-4 pt-xl-4 pt-xxl-4"
            dir="rtl"
          >
            <DoughnutChart
              labels={[
                "بیت کوین",
                "بیت کوین",
                "بیت کوین",
                "بیت کوین",
                "بیت کوین",
                "بیت کوین",
              ]}
              data={[12, 8, 9, 1, 5, 10]}
            />
          </Col>
        </Row>
      </div>
    </>
  );
};
export default Dashboard;
