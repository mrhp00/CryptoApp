import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Row,
  ButtonGroup,
  Modal,
  Container,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import bitCoinImage from "../../images/bitcoin.png";

const OpenOrder = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //States and Refs
  const [delete_confirm, setDeleteConfirm] = useState(false);
  const handleDeleteClose = () => setDeleteConfirm(false);
  const handleDeleteShow = () => setDeleteConfirm(true);

  //RAW DATA
  const rawData = [
    {
      id: "1",
      title: "BTC",
      image: bitCoinImage,
      type: "فروش",
      canceled: false,
      order_number: "234567",
      amount: "1379.764532",
      same_as: "1126.8879",
      market: "تتر",
      in_price: "1",
      status: "deposit",
    },
    {
      id: "2",
      title: "BTC",
      image: bitCoinImage,
      type: "فروش",
      canceled: false,
      order_number: "234567",
      amount: "1379.764532",
      same_as: "1126.8879",
      market: "تتر",
      in_price: "1",
      status: "deposited",
    },
    {
      id: "3",
      title: "BTC",
      image: bitCoinImage,
      type: "فروش",
      canceled: true,
      order_number: "234567",
      amount: "1379.764532",
      same_as: "1126.8879",
      market: "تتر",
      in_price: "1",
      status: "canceled",
    },
    {
      id: "4",
      title: "BTC",
      image: bitCoinImage,
      type: "فروش",
      canceled: true,
      order_number: "234567",
      amount: "1379.764532",
      same_as: "1126.8879",
      market: "تتر",
      in_price: "1",
      status: "canceled",
    },
    {
      id: "5",
      title: "BTC",
      image: bitCoinImage,
      type: "فروش",
      canceled: true,
      order_number: "234567",
      amount: "1379.764532",
      same_as: "1126.8879",
      market: "تتر",
      in_price: "1",
      status: "canceled",
    },
    {
      id: "6",
      title: "BTC",
      image: bitCoinImage,
      type: "فروش",
      canceled: true,
      order_number: "234567",
      amount: "1379.764532",
      same_as: "1126.8879",
      market: "تتر",
      in_price: "1",
      status: "canceled",
    },
    {
      id: "7",
      title: "BTC",
      image: bitCoinImage,
      type: "فروش",
      canceled: true,
      order_number: "234567",
      amount: "1379.764532",
      same_as: "1126.8879",
      market: "تتر",
      in_price: "1",
      status: "canceled",
    },
    {
      id: "8",
      title: "BTC",
      image: bitCoinImage,
      type: "فروش",
      canceled: true,
      order_number: "234567",
      amount: "1379.764532",
      same_as: "1126.8879",
      market: "تتر",
      in_price: "1",
      status: "canceled",
    },
  ];

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
      <Container dir="rtl" className="main-container">
        <Col lg xl xxl md={6} className="main-col">
          <Row className="main-row mt-4">
            <p
              style={{ textAlign: "center", display: "block" }}
              className="d-sm-inline d-md-inline d-lg-inline d-xl-none d-xxl-none ilia-header main-row"
            >
              خرید و فروش
            </p>
          </Row>
          <ButtonGroup dir="ltr" className="btn-container d-flex">
            <Button
              className="btn-flat btn-warning"
              onClick={() => {
                navigate("/open_orders");
              }}
            >
              سفارشات باز
            </Button>
            <Button
              className="btn-flat "
              onClick={() => {
                dispatch({
                  type: "SET_orderCurrentTab",
                  tab: "sell",
                });
                navigate("/trade");
              }}
            >
              فروش
            </Button>
            <Button
              className="btn-flat"
              onClick={() => {
                dispatch({
                  type: "SET_orderCurrentTab",
                  tab: "buy",
                });
                navigate("/trade");
              }}
            >
              خرید
            </Button>
          </ButtonGroup>
        </Col>
        <p className=" col-12 section d-flex justify-content-center mt-4">
          <Row
            className="custom-scrollbars__content gap-3 d-flex justify-content-between module col-12 p-4"
            style={{ height: "550px", paddingTop: "32px" }}
          >
            {rawData.map((value) => (
              <Col className="order-container col-12 col-sm-12 col-xs-12 col-md-6 col-xxl-6 col-xl-6 col-lg-6">
                <Row style={{ paddingTop: "18px", paddingBottom: "18px" }}>
                  <Col>
                    <img
                      key={value.id}
                      src={value.image}
                      alt={value.title}
                      style={{ float: "right", paddingLeft: "5px" }}
                    />
                    <div className="order-title">{value.title}</div>
                    <div className="order-title">{value.type}</div>
                  </Col>
                  <Col className="d-flex flex-row-reverse">
                    {value.status === "canceled" ? null : (
                      <Button
                        className="btn-flat btn-delete"
                        onClick={handleDeleteShow}
                      >
                        لغو سفارش
                      </Button>
                    )}
                  </Col>
                </Row>
                <Row className="col-12">
                  <Col className="col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-3">
                    <p className="order-title d-inline">شماره سفارش</p>
                    <p className="order-info d-inline me-2">
                      {value.order_number}
                    </p>
                  </Col>
                  <Col className="col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-3">
                    <p className="order-title d-inline">مقدار</p>
                    <p className="order-info d-inline me-2">{value.amount}</p>
                  </Col>
                </Row>
                <Row>
                  <Col className="col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-3">
                    <p className="order-title d-inline">معادل</p>
                    <p className="order-info d-inline me-2">{value.same_as}</p>
                  </Col>
                  <Col className="col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-3">
                    <p className="order-title d-inline">در بازار</p>
                    <p className="order-info d-inline me-2">{value.market}</p>
                  </Col>
                </Row>
                <Row style={{ paddingBottom: "19px" }}>
                  <Col className="col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-3">
                    <p className="order-title d-inline">در قیمت</p>
                    <p className="order-info d-inline me-2">{value.in_price}</p>
                  </Col>
                  <Col className="col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-3">
                    <p className="order-title d-inline">وضعیت</p>
                    {value.status === "canceled" ? (
                      <p
                        className="order-info"
                        style={{ display: "inline", color: "#FF5505" }}
                      >
                        {value.status}
                      </p>
                    ) : (
                      <p className="order-info d-inline me-2">{value.status}</p>
                    )}
                  </Col>
                </Row>
              </Col>
            ))}
          </Row>
        </p>

        {/* MODALS */}
        <Modal
          show={delete_confirm}
          onHide={handleDeleteClose}
          style={{ borderRadius: "12px" }}
        >
          <Modal.Body dir="rtl" className="delete-dialog">
            <Col>
              <Row>
                <Col className="d-flex justify-content-center">لغو سفارش</Col>
              </Row>

              <Row className="mt-4">
                <Col className="d-flex justify-content-center">
                  آیا اطمینان دارید که میخواهید این سفارش را حذف کنید؟
                </Col>
              </Row>

              <Row className="mt-4">
                <Col className="d-flex justify-content-center">
                  <Button
                    className="btn-flat btn-delete"
                    style={{ width: "139px" }}
                  >
                    حذف
                  </Button>
                </Col>
                <Col className="d-flex justify-content-center">
                  <Button
                    className="btn-flat btn-delete"
                    style={{ width: "139px" }}
                    onClick={handleDeleteClose}
                  >
                    لغو
                  </Button>
                </Col>
              </Row>
            </Col>
          </Modal.Body>
        </Modal>
      </Container>
    </>
  );
};
export default OpenOrder;
