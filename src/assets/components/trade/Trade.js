import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Order from "./Order";
import Candle from "../trade_view/Candle";

const Trade = (props) => {
  //States and Refs
  const dispatch = useDispatch();
  const dark = useSelector((state) => state.dark);
  const selectedCrypto = useSelector((state) => state.selectedCrypto);

  //Bills
  const [bills] = useState([
    {
      amount: "500",
      method: "تتر",
      static_wage: "0.15",
      transaction_wage: "0.15",
      total_wage: "0.15",
      transaction: "0.15",
      recieved: "0.15",
    },
  ]);

  //START UP
  useEffect(() => {
    dispatch({
      type: "SET_PAGE",
      page: "Trade",
    });
  }, [dispatch]);

  // Main Section
  return (
    <>
      <Container dir="rtl" className="section">
        {/* GENERAL SECTION */}
        <Row className="main-container" style={{ paddingBottom: "20px" }}>
          <Col className="main-col col-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
            <Order backgoundCSS="main-container" />
          </Col>
          <Col
            className="main-col col-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8 main-container"
            style={{ marginTop: "20px" }}
          >
            <div className="section-292929 dashboard-linechart">
              {dark ? (
                <Candle backgoundCSS="section-292929" bgColor="#292929" />
              ) : (
                <Candle backgoundCSS="section-292929" bgColor="#FFFFFF" />
              )}
            </div>
          </Col>
        </Row>

        {/* BILL PC MODE */}
        <Row
          style={{ marginTop: "25px" }}
          className="main-container d-none d-md-block d-lg-block d-xl-block d-xxl-block"
        >
          <Col lg={12} md={12}>
            <h6 className="py-4">فاکتور خرید {selectedCrypto}</h6>

            {bills.map((value) => (
              <div className="section-292929" style={{ padding: "10px" }}>
                <Row>
                  <Col className="col-12 col-md-1 col-lg-1 col-xl-1 col-xxl-1 text-center">
                    <Row>
                      <Col className="col-6 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <p className="trade-bill-title">مقدار</p>
                      </Col>
                      <Col className="col-6 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <p className="trade-bill-text">{value.amount}</p>
                      </Col>
                    </Row>
                  </Col>
                  <Col className="col-12 col-md-2 col-lg-2 col-xl-2 col-xxl-2 text-center">
                    <Row>
                      <Col className="col-6 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <p className="trade-bill-title">روش پرداخت</p>
                      </Col>
                      <Col className="col-6 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <p trade-bill-text>{value.method}</p>
                      </Col>
                    </Row>
                  </Col>
                  <Col className="col-12 col-md-2 col-lg-2 col-xl-2 col-xxl-2 text-center">
                    <Row>
                      <Col className="col-6 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <p className="trade-bill-title">کارمزد ثابت</p>
                      </Col>
                      <Col className="col-6 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <p className="trade-bill-text">{value.static_wage}</p>
                        <p className="buy-bill"> معادل 1457890 SHIB</p>
                      </Col>
                    </Row>
                  </Col>
                  <Col className="col-12 col-md-2 col-lg-2 col-xl-2 col-xxl-2 text-center">
                    <Row>
                      <Col className="col-6 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <p className="trade-bill-title">کارمزد تراکنش</p>
                      </Col>
                      <Col className="col-6 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <p className="trade-bill-text">
                          {value.transaction_wage}
                        </p>
                        <p className="buy-bill"> معادل 1457890 SHIB</p>
                      </Col>
                    </Row>
                  </Col>
                  <Col className="col-12 col-md-2 col-lg-2 col-xl-2 col-xxl-2 text-center">
                    <Row>
                      <Col className="col-6 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <p className="trade-bill-title">مجموع کارمزد</p>
                      </Col>
                      <Col className="col-6 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <p className="trade-bill-text">{value.total_wage}</p>
                        <p className="buy-bill"> معادل 1457890 SHIB</p>
                      </Col>
                    </Row>
                  </Col>
                  <Col className="col-12 col-md-1 col-lg-1 col-xl-1 col-xxl-1 text-center">
                    <Row>
                      <Col className="col-6 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <p className="trade-bill-title">مبلغ تراکنش</p>
                      </Col>
                      <Col className="col-6 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <p className="trade-bill-text">{value.transaction}</p>
                      </Col>
                    </Row>
                  </Col>
                  <Col className="col-12 col-md-2 col-lg-2 col-xl-2 col-xxl-2 text-center">
                    <Row>
                      <Col className="col-6 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <p className="trade-bill-title">میزان دریافتی شما</p>
                      </Col>
                      <Col className="col-6 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <p className="trade-bill-text">{value.recieved}</p>
                        <p className="buy-bill"> معادل 1457890 SHIB</p>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
            ))}

            <p className="mt-4 pb-4">
              کاربر گرامی، لطفا در خرید و فروش خود نهایت دقت را داشته باشید.
              صرافی های اکسچنج هیچ مسئولیتی در قبال سود و زیان شما در معاملات
              ندارد.ضمنا توجه کنید که در روزهای پر نوسان، مقدار نمایش‌ داده شده
              تقریبی بوده و مقدار دقیق پس از تایید کارشناسان مشخص می‌شود.
            </p>
          </Col>
        </Row>

        {/* BILL MOBILE MODE */}
        <div className="pb-3">
          <Row
            style={{ marginTop: "25px" }}
            className="main-container d-block d-md-none d-lg-none d-xl-none d-xxl-none "
          >
            <Col lg={12} md={12}>
              <h6 className="py-4">فاکتور خرید {selectedCrypto}</h6>

              {bills.map((value) => (
                <Row style={{ fontSize: "13px" }}>
                  <Col className="col-12 col-md-1 col-lg-1 col-xl-1 col-xxl-1">
                    <Row>
                      <Col className="col-5 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <p style={{ fontSize: "13px" }}>مقدار</p>
                      </Col>
                      <Col className="col-7 col-md-12 col-lg-12 col-xl-12 col-xxl-12 text-start">
                        <p style={{ fontSize: "14px" }}>{value.amount}</p>
                      </Col>
                    </Row>
                  </Col>
                  <Col className="col-12 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                    <Row>
                      <Col className="col-5 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <p style={{ fontSize: "13px" }}>روش پرداخت</p>
                      </Col>
                      <Col className="col-7 col-md-12 col-lg-12 col-xl-12 col-xxl-12 text-start">
                        <p style={{ fontSize: "14px" }}>{value.method}</p>
                      </Col>
                    </Row>
                  </Col>
                  <Col className="col-12 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                    <Row>
                      <Col className="col-5 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <p style={{ fontSize: "13px" }}>کارمزد ثابت</p>
                      </Col>
                      <Col className="col-7 col-md-12 col-lg-12 col-xl-12 col-xxl-12 text-start">
                        <p
                          style={{
                            fontSize: "14px",
                            display: "inline",
                            float: "left",
                          }}
                        >
                          &nbsp; &nbsp; &nbsp;
                          {value.static_wage}
                        </p>
                        <p
                          className="buy-bill"
                          style={{ fontSize: "14px", display: "inline" }}
                        >
                          معادل 1457890 SHIB
                        </p>
                      </Col>
                    </Row>
                  </Col>
                  <Col className="col-12 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                    <Row>
                      <Col className="col-5 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <p style={{ fontSize: "13px" }}>کارمزد تراکنش</p>
                      </Col>
                      <Col className="col-7 col-md-12 col-lg-12 col-xl-12 col-xxl-12 text-start">
                        <p
                          style={{
                            fontSize: "14px",
                            display: "inline",
                            float: "left",
                          }}
                        >
                          &nbsp; &nbsp; &nbsp;
                          {value.transaction_wage}
                        </p>
                        <p
                          className="buy-bill"
                          style={{ fontSize: "14px", display: "inline" }}
                        >
                          معادل 1457890 SHIB
                        </p>
                      </Col>
                    </Row>
                  </Col>
                  <Col className="col-12 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                    <Row>
                      <Col className="col-5 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <p style={{ fontSize: "13px" }}>مجموع کارمزد</p>
                      </Col>
                      <Col className="col-7 col-md-12 col-lg-12 col-xl-12 col-xxl-12 text-start">
                        <p
                          style={{
                            fontSize: "14px",
                            display: "inline",
                            float: "left",
                          }}
                        >
                          &nbsp; &nbsp; &nbsp;
                          {value.total_wage}
                        </p>
                        <p
                          className="buy-bill"
                          style={{ fontSize: "14px", display: "inline" }}
                        >
                          معادل 1457890 SHIB
                        </p>
                      </Col>
                    </Row>
                  </Col>
                  <Col className="col-12 col-md-1 col-lg-1 col-xl-1 col-xxl-1">
                    <Row>
                      <Col className="col-5 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <p style={{ fontSize: "13px" }}>مبلغ تراکنش</p>
                      </Col>
                      <Col className="col-7 col-md-12 col-lg-12 col-xl-12 col-xxl-12 text-start">
                        <p>{value.transaction}</p>
                      </Col>
                    </Row>
                  </Col>
                  <Col className="col-12 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                    <Row>
                      <Col className="col-5 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <p style={{ fontSize: "13px" }}>میزان دریافتی شما</p>
                      </Col>
                      <Col className="col-7 col-md-12 col-lg-12 col-xl-12 col-xxl-12 text-start">
                        <p
                          style={{
                            fontSize: "14px",
                            display: "inline",
                            float: "left",
                          }}
                        >
                          &nbsp; &nbsp; &nbsp;
                          {value.recieved}
                        </p>
                        <p
                          className="buy-bill"
                          style={{ fontSize: "14px", display: "inline" }}
                        >
                          معادل 1457890 SHIB
                        </p>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              ))}
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};
export default Trade;
