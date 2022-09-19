import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Row,
  Col,
  Modal,
  Button,
  Image,
  InputGroup,
  ModalBody,
  Form,
  FormGroup,
  Collapse,
} from "react-bootstrap";
import bitCoinImage from "../../images/bitcoin.png";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { useNavigate } from "react-router-dom";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CoinIcon from "../../images/coin.png";
import WalletTrannsactionHistory from "./WalletTransactionHistory";

const Wallet = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //States and Refs
  const [noCardModal, setNoCardModal] = useState(false);
  const [notVerifiedAccountModal, setNotVerifiedAccountModal] = useState(false);
  const [currentWalletSlide, setCurrentWalletSide] = useState(1);
  const [maxWalletSlide, setMaxWalletSlide] = useState(1);
  const cards = useSelector((state) => state.cards);
  const currentUserVerified = useSelector((state) => state.currentUserVerified);
  const noCardHide = () => {
    setNoCardModal(false);
  };
  const noVerifiedHide = () => {
    setNotVerifiedAccountModal(false);
  };

  //Slide Creator
  const handleMinWalletSlice = () => {
    if (currentWalletSlide === 1) {
      return 0;
    } else {
      let min = (currentWalletSlide - 1) * 7;
      return min;
    }
  };
  const handleMaxWalletSlice = () => {
    if (currentWalletSlide === 1) {
      return 7;
    } else {
      let max = currentWalletSlide * 7;
      return max;
    }
  };

  //Wallet Data
  const [walletsData] = useState([
    {
      id: 1,
      name: "تومان",
      amount: 123456789,
      change: 20,
      image: bitCoinImage,
    },
    {
      id: 2,
      name: "bitcoin",
      amount: 123456789,
      change: -20,
      image: bitCoinImage,
    },
    {
      id: 3,
      name: "bitcoin",
      amount: 123456789,
      change: 20,
      image: bitCoinImage,
    },
    {
      id: 4,
      name: "bitcoin",
      amount: 123456789,
      change: 20,
      image: bitCoinImage,
    },
    {
      id: 5,
      name: "bitcoin",
      amount: 123456789,
      change: 20,
      image: bitCoinImage,
    },
    {
      id: 6,
      name: "bitcoin",
      amount: 123456789,
      change: 20,
      image: bitCoinImage,
    },
    {
      id: 7,
      name: "bitcoin",
      amount: 123456789,
      change: 20,
      image: bitCoinImage,
    },
    { id: 8, name: "Shib", amount: 123456789, change: 20, image: bitCoinImage },
    { id: 9, name: "Shib", amount: 123456789, change: 20, image: bitCoinImage },
  ]);

  //Rial Deposit
  const [rialDeposit, setRialDeposit] = useState(false);
  const rialDepositHide = () => {
    setRialDeposit(false);
  };
  const rialDepositShow = () => {
    setRialDeposit(true);
  };

  //Rial Widraw
  const [rialWidrawStep1, setRialWidrawStep1] = useState(false);
  const rialWidrawHideStep1 = () => {
    setRialWidrawStep1(false);
  };
  const rialWidrawShowStep1 = () => {
    setRialWidrawStep1(true);
  };
  const [rialWidrawStep2, setRialWidrawStep2] = useState(false);
  const rialWidrawHideStep2 = () => {
    setRialWidrawStep2(false);
  };
  const rialWidrawShowStep2 = () => {
    setRialWidrawStep2(true);
    counter(60);
  };

  // crypto Deposit
  const [cryptoDepositStep1, setCryptoDepositStep1] = useState(false);
  const cryptoDepositStep1Hide = () => {
    setCryptoDepositStep1(false);
  };
  const cryptoDepositStep1Show = () => {
    setCryptoDepositStep1(true);
  };
  const [cryptoDepositStep2, setCryptoDepositStep2] = useState(false);
  const cryptoDepositStep2Hide = () => {
    setCryptoDepositStep2(false);
  };
  const cryptoDepositStep2Show = () => {
    setCryptoDepositStep2(true);
  };
  const [destinationWallet] = useState("123165465461asasd65sd231asd654asd32a");
  const [cryptoDepositStep3, setCryptoDepositStep3] = useState(false);
  const cryptoDepositStep3Hide = () => {
    setCryptoDepositStep3(false);
  };
  const cryptoDepositStep3Show = () => {
    setCryptoDepositStep3(true);
  };

  //Transaction Info
  const [validTransactionID, setValidTransactionID] = useState(false);
  const [validTransactionAmount, setValidTransactionAmount] = useState(false);
  const transactionIDField = useRef();
  const transactionAmountField = useRef();

  // Crypto Widraw
  const [cryptoWidraw, setCryptoWidraw] = useState(false);
  const cryptoWidrawHide = () => {
    setCryptoWidraw(false);
  };
  const cryptoWidrawShow = () => {
    setCryptoWidraw(true);
  };

  // TRANSACTION HISTORY
  const [transactionHistory, setTransactionHistory] = useState(false);
  const TrannsactionHistoryShow = () => setTransactionHistory(true);
  const TrannsactionHistoryHide = () => setTransactionHistory(false);

  // TIMER
  const [countdown, setCountdown] = useState(60);
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  async function counter(secounds) {
    for (let i = secounds; i >= 0; i--) {
      await sleep(1000);
      setCountdown(i);
    }
  }

  // START UP
  useEffect(() => {
    let total = ((walletsData.length / 7) >> 0) + 1;
    setMaxWalletSlide(total);
    dispatch({
      type: "SET_PAGE",
      page: "Wallet",
    });
  }, [walletsData.length, dispatch]);

  // Main Section
  return (
    <>
      <div
        className="main-container"
        dir="rtl"
        style={{ paddingBottom: "60px" }}
      >
        <Container
          className="main-container"
          dir="rtl"
          style={{ paddingBottom: "30px" }}
        >
          <p className="mt-4 pb-4" style={{ fontSize: "18px" }}>
            کیف پول
          </p>

          <div>
            {/* PC MODE */}
            <Col className="d-none d-md-block d-lg-block d-xl-block d-xxl-block">
              <Row
                className="section-292929 d-flex align-items-center"
                style={{ height: "56px", lineHeight: "56px" }}
              >
                <Col className="col-4 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                  <p className="wallets-title">ارز</p>
                </Col>
                <Col className="col-4 text-center col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                  <p className="wallets-title">کل دارایی</p>
                </Col>
                <Col className="col-3 text-center d-none d-md-block d-lg-block d-xl-block d-xxl-block">
                  <p className="wallets-title">تغییر 24 ساعته</p>
                </Col>
                <Col className="col-4 text-center d-none d-md-block d-lg-block d-xl-block d-xxl-block">
                  <p className="wallets-title">عملیات</p>
                </Col>
                <Col className="col-4 text-center d-block d-md-none d-lg-none d-xl-none d-xxl-none">
                  <p className="wallets-title">بیشتر</p>
                </Col>
              </Row>
              {walletsData.length === 0 ? null : (
                <>
                  {walletsData
                    .slice(handleMinWalletSlice(), handleMaxWalletSlice())
                    .map((value) => (
                      <Row
                        className="section-292929 d-flex align-items-center"
                        style={{
                          marginTop: "16px",
                          height: "68px",
                          lineHeight: "68px",
                        }}
                      >
                        <Col className="col-4 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                          <Image
                            src={value.image}
                            style={{
                              width: "28px",
                              height: "28px",
                              display: "inline",
                            }}
                          />
                          <p style={{ display: "inline", marginRight: "10px" }}>
                            {value.name}
                          </p>
                        </Col>
                        <Col className="col-4 text-center col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                          <p className="text-center">{value.amount}</p>
                        </Col>
                        <Col className="col-3 text-center d-none d-md-block d-lg-block d-xl-block d-xxl-block">
                          {value.change > 0 ? (
                            <>
                              <p
                                className="text-center"
                                style={{ color: "#71BE34" }}
                              >
                                {Math.abs(value.change)}
                                {"%"}
                                {" + "}
                              </p>
                            </>
                          ) : null}
                          {value.change < 0 ? (
                            <>
                              <p
                                className="text-center"
                                style={{ color: "#F62C2C" }}
                              >
                                {Math.abs(value.change)}
                                {"%"}
                                {" - "}
                              </p>
                            </>
                          ) : null}

                          {value.change === 0 ? (
                            <p className="text-center">{value.change}</p>
                          ) : null}
                        </Col>
                        <Col className="col-4 text-center d-none d-md-block d-lg-block d-xl-block d-xxl-block">
                          <Row>
                            <Col>
                              <p
                                style={{ color: "#0FC76E", cursor: "pointer" }}
                                onClick={() => {
                                  if (!currentUserVerified) {
                                    setNotVerifiedAccountModal(true);
                                    return;
                                  }
                                  if (value.name === "تومان") {
                                    if (cards.length === 0) {
                                      setNoCardModal(true);
                                      return;
                                    }
                                    rialDepositShow();
                                  } else {
                                    cryptoDepositStep1Show();
                                  }
                                }}
                              >
                                واریز
                              </p>
                            </Col>
                            <Col>
                              <p
                                style={{ color: "#F62C2C", cursor: "pointer" }}
                                onClick={() => {
                                  if (value.name === "تومان") {
                                    if (cards.length === 0) {
                                      setNoCardModal(true);
                                      return;
                                    }
                                    rialWidrawShowStep1();
                                  } else {
                                    cryptoWidrawShow();
                                  }
                                }}
                              >
                                برداشت
                              </p>
                            </Col>
                            <Col>
                              <p
                                style={{ color: "#418BCA", cursor: "pointer" }}
                                onClick={TrannsactionHistoryShow}
                              >
                                تاریخچه
                              </p>
                            </Col>
                          </Row>
                        </Col>
                        <Col className="col-4 text-center d-block d-md-none d-lg-none d-xl-none d-xxl-none">
                          <KeyboardArrowDownOutlinedIcon onClick={(e) => {}} />
                        </Col>
                      </Row>
                    ))}
                </>
              )}

              <Row className="mt-4">
                <InputGroup className="d-flex justify-content-center align-content-center justify-items-center ">
                  {currentWalletSlide === maxWalletSlide ? (
                    <ArrowCircleRightOutlinedIcon
                      style={{ marginLeft: "8px" }}
                      className="directions-off"
                    />
                  ) : (
                    <ArrowCircleRightOutlinedIcon
                      style={{ marginLeft: "8px" }}
                      className="directions-on"
                      onClick={() => {
                        setCurrentWalletSide(currentWalletSlide + 1);
                      }}
                    />
                  )}

                  <p>
                    {maxWalletSlide} / {currentWalletSlide}
                  </p>

                  {currentWalletSlide === 1 ? (
                    <ArrowCircleLeftOutlinedIcon
                      style={{ marginRight: "8px" }}
                      className="directions-off"
                    />
                  ) : (
                    <ArrowCircleLeftOutlinedIcon
                      style={{ marginRight: "8px" }}
                      className="directions-on"
                      onClick={() => {
                        setCurrentWalletSide(currentWalletSlide - 1);
                      }}
                    />
                  )}
                </InputGroup>
              </Row>
            </Col>
            {/* MOBILE MODE */}
            <Col className="d-block d-md-none d-lg-none d-xl-none d-xxl-none">
              <Row
                className="section-292929 d-flex align-items-center"
                style={{ height: "56px", lineHeight: "56px" }}
              >
                <Col className="">
                  <p className="wallets-title-mobile">ارز</p>
                </Col>
                <Col className="">
                  <p
                    className="wallets-title-mobile"
                    style={{ marginRight: "25px" }}
                  >
                    کل دارایی
                  </p>
                </Col>
                <Col className="col-2">
                  <p className="wallets-title-mobile">بیشتر</p>
                </Col>
              </Row>
              <Row>
                {walletsData.length === 0 ? null : (
                  <>
                    {walletsData
                      .slice(handleMinWalletSlice(), handleMaxWalletSlice())
                      .map((value) => (
                        <>
                          <Accordion className="section-292929 support-shadow mt-2">
                            <AccordionSummary
                              expandIcon={
                                <ExpandMoreIcon className="wallet-more" />
                              }
                              aria-controls="panel1a-content"
                              id="panel1a-header"
                            >
                              <Col className="">
                                <Image
                                  src={value.image}
                                  style={{
                                    width: "28px",
                                    height: "28px",
                                    display: "inline",
                                  }}
                                />
                                <p
                                  style={{
                                    display: "inline",
                                    marginRight: "10px",
                                  }}
                                >
                                  {value.name}
                                </p>
                              </Col>
                              <Col className="">
                                <p>{value.amount}</p>
                              </Col>
                            </AccordionSummary>
                            <AccordionDetails>
                              <p
                                style={{ display: "inline" }}
                                className="wallets-title-mobile"
                              >
                                تغییر 24 ساعته
                              </p>
                              {value.change > 0 ? (
                                <>
                                  <p
                                    style={{
                                      color: "#71BE34",
                                      display: "inline",
                                    }}
                                    className="m-4"
                                  >
                                    {"%"}
                                    {Math.abs(value.change)}

                                    {" + "}
                                  </p>
                                </>
                              ) : null}
                              {value.change < 0 ? (
                                <>
                                  <p
                                    style={{
                                      color: "#F62C2C",
                                      display: "inline",
                                    }}
                                    className="m-4"
                                  >
                                    {"%"}
                                    {Math.abs(value.change)}

                                    {" - "}
                                  </p>
                                </>
                              ) : null}

                              {value.change === 0 ? (
                                <p
                                  style={{ display: "inline" }}
                                  className="m-4"
                                >
                                  {value.change}
                                </p>
                              ) : null}

                              <Row className="mt-4">
                                <Col>
                                  <p
                                    style={{ display: "inline" }}
                                    className="wallets-title-mobile"
                                  >
                                    عملیات
                                  </p>
                                </Col>
                                <Col>
                                  <p
                                    style={{
                                      color: "#0FC76E",
                                      display: "inline",
                                      cursor: "pointer",
                                    }}
                                    onClick={() => {
                                      if (!currentUserVerified) {
                                        setNotVerifiedAccountModal(true);
                                        return;
                                      }
                                      if (value.name === "تومان") {
                                        if (cards.length === 0) {
                                          setNoCardModal(true);
                                          return;
                                        }
                                        rialDepositShow();
                                      } else {
                                        cryptoDepositStep1Show();
                                      }
                                    }}
                                  >
                                    واریز
                                  </p>
                                </Col>
                                <Col>
                                  <p
                                    style={{
                                      color: "#F62C2C",
                                      display: "inline",
                                      cursor: "pointer",
                                    }}
                                    onClick={() => {
                                      if (value.name === "تومان") {
                                        if (cards.length === 0) {
                                          setNoCardModal(true);
                                          return;
                                        }
                                        rialWidrawShowStep1();
                                      } else {
                                        cryptoWidrawShow();
                                      }
                                    }}
                                  >
                                    برداشت
                                  </p>
                                </Col>
                                <Col>
                                  <p
                                    style={{
                                      color: "#418BCA",
                                      display: "inline",
                                      cursor: "pointer",
                                    }}
                                    onClick={TrannsactionHistoryShow}
                                  >
                                    تاریخچه
                                  </p>
                                </Col>
                              </Row>
                            </AccordionDetails>
                          </Accordion>
                        </>
                      ))}
                    <Row className="mt-5">
                      <InputGroup className="d-flex justify-content-center align-content-center justify-items-center ">
                        {currentWalletSlide === maxWalletSlide ? (
                          <ArrowCircleRightOutlinedIcon
                            style={{ marginLeft: "8px" }}
                            className="directions-off"
                          />
                        ) : (
                          <ArrowCircleRightOutlinedIcon
                            style={{ marginLeft: "8px" }}
                            className="directions-on"
                            onClick={() => {
                              setCurrentWalletSide(currentWalletSlide + 1);
                            }}
                          />
                        )}

                        <p>
                          {maxWalletSlide} / {currentWalletSlide}
                        </p>

                        {currentWalletSlide === 1 ? (
                          <ArrowCircleLeftOutlinedIcon
                            style={{ marginRight: "8px" }}
                            className="directions-off"
                          />
                        ) : (
                          <ArrowCircleLeftOutlinedIcon
                            style={{ marginRight: "8px" }}
                            className="directions-on"
                            onClick={() => {
                              setCurrentWalletSide(currentWalletSlide - 1);
                            }}
                          />
                        )}
                      </InputGroup>
                    </Row>
                  </>
                )}
              </Row>
            </Col>
          </div>
          <Modal
            show={noCardModal}
            onHide={noCardHide}
            contentClassName="verify-modal-normal"
            dir="rtl"
          >
            <Modal.Body>
              <Row>
                <Col className="col-12 text-center">
                  <p
                    className="text-center ilia-header"
                    style={{ display: "inline" }}
                  >
                    عدم وجود کارت فعال
                  </p>
                  <CancelOutlinedIcon
                    onClick={noCardHide}
                    style={{ display: "inline", float: "left" }}
                  />
                </Col>
              </Row>
              <Row className="mt-4">
                <p className="text-center">
                  برای ادامه باید کارت بانکی خود را ثبت کنید
                </p>
              </Row>
              <Row className="d-flex justify-content-center">
                <Col className="col-3" />
                <Col className="col-6 d-grid mt-5">
                  <Button
                    className="btn-copy"
                    onClick={() => {
                      navigate("/cards");
                    }}
                  >
                    ثبت کارت بانکی
                  </Button>
                </Col>
                <Col className="col-3" />
              </Row>
            </Modal.Body>
          </Modal>
          <Modal
            show={notVerifiedAccountModal}
            onHide={noVerifiedHide}
            contentClassName="verify-modal-normal"
            dir="rtl"
          >
            <Modal.Body>
              <Row>
                <Col className="col-12 text-center">
                  <p
                    className="text-center ilia-header"
                    style={{ display: "inline" }}
                  >
                    حساب احراز هویت نشده
                  </p>

                  <CancelOutlinedIcon
                    onClick={noVerifiedHide}
                    style={{ display: "inline", float: "left" }}
                  />
                </Col>
              </Row>
              <Row className="mt-4">
                <p className="text-center">
                  برای انجام واریز و برداشت نسبت به احراز هویت اقدام کنید
                </p>
              </Row>
              <Row>
                <Col className="col-3" />
                <Col className="col-6 d-grid mt-5">
                  <Button
                    className="btn-copy"
                    onClick={() => {
                      dispatch({
                        type: "START_VALIDATION",
                        start: true,
                      });
                      noVerifiedHide();
                    }}
                  >
                    احراز هویت
                  </Button>
                </Col>
                <Col className="col-3" />
              </Row>
            </Modal.Body>
          </Modal>
          <Modal
            show={rialDeposit}
            onHide={rialDepositHide}
            contentClassName="verify-modal-half "
            dir="rtl"
          >
            <ModalBody className=" d-grid">
              <Row className="d-flex justify-content-center">
                <Col className="col-12">
                  <p
                    className="ilia-header"
                    style={{ display: "inline", fontSize: "15px" }}
                  >
                    واریز
                  </p>
                  <CancelOutlinedIcon
                    onClick={rialDepositHide}
                    style={{ display: "inline", float: "left" }}
                  />
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col>
                  <FormGroup className="mt-4">
                    انتخاب کارت
                    <Form.Select
                      className="section-303030 mt-1"
                      style={{ boxShadow: "none", outLine: "none" }}
                    >
                      <option value="-" selected disabled>
                        انتخاب کنید
                      </option>
                      {cards.length === 0 ? null : (
                        <>
                          {cards.map((value) => (
                            <option value={value.shaba}>{value.card}</option>
                          ))}
                        </>
                      )}
                    </Form.Select>
                  </FormGroup>
                  <FormGroup className="mt-4">
                    {"مقدار (تومان)"}
                    <Form.Control
                      type="text"
                      className="section-303030 mt-1 wide-input"
                      placeholder="0"
                      dir="ltr"
                      style={{ boxShadow: "none", outLine: "none" }}
                    ></Form.Control>
                  </FormGroup>
                  <FormGroup className="d-grid mt-4 pb-2">
                    <Button className="btn-copy">واریز</Button>
                  </FormGroup>
                </Col>
              </Row>
            </ModalBody>
          </Modal>
          <Modal
            show={rialWidrawStep1}
            onHide={rialWidrawHideStep1}
            contentClassName="verify-modal-half "
            dir="rtl"
          >
            <ModalBody className=" d-grid">
              <Row className="d-flex justify-content-center">
                <Col className="col-12">
                  <p
                    className="ilia-header"
                    style={{ display: "inline", fontSize: "15px" }}
                  >
                    برداشت
                  </p>
                  <CancelOutlinedIcon
                    onClick={rialWidrawHideStep1}
                    style={{ display: "inline", float: "left" }}
                  />
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col>
                  <FormGroup className="mt-4">
                    انتخاب کارت
                    <Form.Select
                      className="section-303030 mt-1"
                      style={{ boxShadow: "none", outLine: "none" }}
                    >
                      <option value="-" selected disabled>
                        انتخاب کنید
                      </option>
                      {cards.length === 0 ? null : (
                        <>
                          {cards.map((value) => (
                            <option value={value.shaba}>{value.card}</option>
                          ))}
                        </>
                      )}
                    </Form.Select>
                  </FormGroup>
                  <FormGroup className="mt-4">
                    {"مقدار (تومان)"}
                    <Form.Control
                      type="text"
                      className="section-303030 mt-1 wide-input"
                      placeholder="0"
                      dir="ltr"
                      style={{ boxShadow: "none", outLine: "none" }}
                    />
                  </FormGroup>
                  <FormGroup className="mt-3">
                    <p style={{ display: "inline" }} onClick={() => {}}>
                      <Image src={CoinIcon} />
                      {" انتخاب همه موجودی "}
                    </p>
                  </FormGroup>
                  <FormGroup className="d-grid mt-4 pb-2">
                    <Button
                      className="btn-copy"
                      onClick={() => {
                        rialWidrawHideStep1();
                        rialWidrawShowStep2();
                      }}
                    >
                      ادامه
                    </Button>
                  </FormGroup>
                </Col>
              </Row>
            </ModalBody>
          </Modal>
          <Modal
            show={rialWidrawStep2}
            onHide={rialWidrawHideStep2}
            contentClassName="verify-modal-half "
            dir="rtl"
          >
            <ModalBody className=" d-grid">
              <Row className="d-flex justify-content-center">
                <Col className="col-12">
                  <p
                    className="ilia-header"
                    style={{ display: "inline", fontSize: "15px" }}
                  >
                    کد تایید
                  </p>
                  <ArrowBackIcon
                    onClick={() => {
                      rialWidrawHideStep2();
                      rialWidrawShowStep1();
                    }}
                    style={{ display: "inline", float: "left" }}
                  />
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col>
                  <FormGroup className="mt-4">
                    {"کد ارسال شده را وارد کنید"}
                    <Form.Control
                      type="text"
                      className="section-303030 mt-1 text-center wide-input"
                      dir="ltr"
                      style={{ boxShadow: "none", outLine: "none" }}
                    />
                    {countdown !== 0 ? (
                      <p className="mt-2 text-start">{countdown}</p>
                    ) : (
                      <p
                        className="mt-2 text-start"
                        onClick={() => {
                          setCountdown(60);
                          counter(60);
                        }}
                      >
                        ارسال مجدد
                      </p>
                    )}
                  </FormGroup>
                  <FormGroup className="d-grid mt-4 pb-2">
                    <Button
                      className="btn-copy"
                      onClick={() => {
                        rialWidrawHideStep2();
                      }}
                    >
                      بررسی
                    </Button>
                  </FormGroup>
                </Col>
              </Row>
            </ModalBody>
          </Modal>
          <Modal
            backdrop="static"
            keyboard={false}
            show={transactionHistory}
            onHide={TrannsactionHistoryHide}
            dir="rtl"
            contentClassName="verify-modal-wide"
          >
            <Modal.Body className="trade-history">
              <Row className="justify-content-center">
                <Col>
                  <p style={{ display: "inline" }}>تاریخچه</p>
                  <CancelOutlinedIcon
                    onClick={TrannsactionHistoryHide}
                    style={{ display: "inline", float: "left" }}
                  />
                </Col>
              </Row>
              <Row className="mt-5">
                <Col className="px-4">
                  <WalletTrannsactionHistory />
                </Col>
              </Row>
            </Modal.Body>
          </Modal>
          <Modal
            show={cryptoWidraw}
            onHide={cryptoWidrawHide}
            contentClassName="verify-modal-half "
            dir="rtl"
          >
            <ModalBody className=" d-grid">
              <Row className="d-flex justify-content-center">
                <Col className="col-12">
                  <p
                    className="ilia-header"
                    style={{ display: "inline", fontSize: "18px" }}
                  >
                    {"برداشت (کارمزد: 1 تتر)"}
                  </p>
                  <ArrowBackIcon
                    onClick={cryptoWidrawHide}
                    style={{ display: "inline", float: "left" }}
                  />
                </Col>
              </Row>
              <Row>
                <FormGroup style={{ marginTop: "32px" }}>
                  <Form.Label>آدرس کیف پول</Form.Label>
                  <Form.Control
                    type="text"
                    className="section-303030 wide-input"
                    dir="ltr"
                    style={{ boxShadow: "none", outLine: "none" }}
                  />
                </FormGroup>
                <FormGroup style={{ marginTop: "24px" }}>
                  <Form.Label>انتخاب شبکه</Form.Label>
                  <Form.Select
                    className="section-303030"
                    style={{ boxShadow: "none", outLine: "none" }}
                  >
                    <option selected disabled>
                      انتخاب کنید
                    </option>
                  </Form.Select>
                </FormGroup>
                <FormGroup style={{ marginTop: "32px" }}>
                  <Form.Label>Name Tag</Form.Label>
                  <Form.Control
                    type="text"
                    className="section-303030 wide-input"
                    dir="ltr"
                    style={{ boxShadow: "none", outLine: "none" }}
                  />
                </FormGroup>
                <FormGroup style={{ marginTop: "24px" }}>
                  <Form.Label>مقدار برداشت از تتر</Form.Label>
                  <Form.Control
                    type="text"
                    className="section-303030 wide-input"
                    dir="ltr"
                    style={{ boxShadow: "none", outLine: "none" }}
                  />
                </FormGroup>
                <FormGroup className="mt-3">
                  <p style={{ display: "inline" }} onClick={() => {}}>
                    <Image src={CoinIcon} />
                    {" انتخاب همه موجودی "}
                  </p>
                </FormGroup>
                <FormGroup className="d-grid" style={{ marginTop: "32px" }}>
                  <Button
                    type="text"
                    className="btn-copy"
                    dir="ltr"
                    style={{ boxShadow: "none", outLine: "none" }}
                  >
                    برداشت
                  </Button>
                </FormGroup>
              </Row>
            </ModalBody>
          </Modal>
          <Modal
            show={cryptoDepositStep1}
            onHide={cryptoDepositStep1Hide}
            contentClassName="verify-modal-half "
            dir="rtl"
          >
            <ModalBody className=" d-grid">
              <Row className="d-flex justify-content-center">
                <Col className="col-12">
                  <p
                    className="ilia-header"
                    style={{ display: "inline", fontSize: "18px" }}
                  >
                    واریز
                  </p>
                  <CancelOutlinedIcon
                    onClick={cryptoDepositStep1Hide}
                    style={{ display: "inline", float: "left" }}
                  />
                </Col>
              </Row>
              <Row>
                <FormGroup style={{ marginTop: "32px" }}>
                  <Form.Label>انتخاب شبکه</Form.Label>
                  <Form.Select
                    className="section-303030"
                    style={{ boxShadow: "none", outLine: "none" }}
                  >
                    <option selected disabled>
                      انتخاب کنید
                    </option>
                  </Form.Select>
                </FormGroup>
                <FormGroup className="d-grid" style={{ marginTop: "40px" }}>
                  <Button
                    type="text"
                    className="btn-copy"
                    dir="ltr"
                    style={{ boxShadow: "none", outLine: "none" }}
                    onClick={() => {
                      cryptoDepositStep1Hide();
                      cryptoDepositStep2Show();
                    }}
                  >
                    ادامه
                  </Button>
                </FormGroup>
              </Row>
            </ModalBody>
          </Modal>
          <Modal
            show={cryptoDepositStep2}
            onHide={cryptoDepositStep2Hide}
            contentClassName="verify-modal-half "
            dir="rtl"
          >
            <ModalBody className=" d-grid">
              <Row className="d-flex justify-content-center">
                <Col className="col-12">
                  <p
                    className="ilia-header"
                    style={{ display: "inline", fontSize: "18px" }}
                  >
                    واریز
                  </p>
                  <ArrowBackIcon
                    onClick={() => {
                      cryptoDepositStep2Hide();
                      cryptoDepositStep1Show();
                    }}
                    style={{ display: "inline", float: "left" }}
                  />
                </Col>
              </Row>
              <Row>
                <p style={{ marginTop: "12px" }}>
                  لطفا تتر مورد نظر را در کیف پول زیر در شبکه اتخابی واریز کرده
                  و سپس گزینه "ادامه" را بزنید
                </p>
                <FormGroup style={{ marginTop: "20px" }}>
                  <Form.Control
                    type="text"
                    className="section-303030 linkbox-303030 wide-input"
                    dir="ltr"
                    value={destinationWallet}
                    style={{
                      boxShadow: "none",
                      outLine: "none",
                      display: "inline",
                      width: "80%",
                    }}
                  />
                  <Button
                    type="text"
                    className="btn-copy"
                    dir="ltr"
                    style={{
                      boxShadow: "none",
                      outLine: "none",
                      display: "inline",
                      width: "70px",
                      marginRight: "12px",
                    }}
                    onClick={() => {
                      navigator.clipboard.writeText(destinationWallet);
                    }}
                  >
                    کپی
                  </Button>
                </FormGroup>
                <FormGroup className="d-grid" style={{ marginTop: "40px" }}>
                  <Button
                    type="text"
                    className="btn-copy"
                    dir="ltr"
                    style={{ boxShadow: "none", outLine: "none" }}
                    onClick={() => {
                      cryptoDepositStep2Hide();
                      cryptoDepositStep3Show();
                    }}
                  >
                    ادامه
                  </Button>
                </FormGroup>
              </Row>
            </ModalBody>
          </Modal>
          <Modal
            show={cryptoDepositStep3}
            onHide={cryptoDepositStep3Hide}
            contentClassName="verify-modal-half "
            dir="rtl"
          >
            <ModalBody className=" d-grid">
              <Row className="d-flex justify-content-center">
                <Col className="col-12">
                  <p
                    className="ilia-header"
                    style={{ display: "inline", fontSize: "18px" }}
                  >
                    واریز
                  </p>
                  <ArrowBackIcon
                    onClick={() => {
                      cryptoDepositStep3Hide();
                      cryptoDepositStep2Show();
                    }}
                    style={{ display: "inline", float: "left" }}
                  />
                </Col>
              </Row>
              <Row>
                <p style={{ marginTop: "12px" }}>
                  لطفا شماره تراکنش واریز را به همراه مبلغی که واریز کرده اید را
                  وارد کنید.
                </p>
                <FormGroup style={{ marginTop: "32px" }}>
                  <Form.Label>{"  شماره تراکنش (Transaction Id)"}</Form.Label>
                  <Form.Control
                    ref={transactionIDField}
                    type="text"
                    className="section-303030 wide-input"
                    dir="ltr"
                    style={{ boxShadow: "none", outLine: "none" }}
                    onChange={(e) => {
                      if (e.currentTarget.value !== "") {
                        setValidTransactionID(false);
                      } else {
                        setValidTransactionID(true);
                      }
                    }}
                  />
                  <Collapse in={validTransactionID} className={"text-danger"}>
                    <div>کد تراکنش را وارد نمایید</div>
                  </Collapse>
                </FormGroup>
                <FormGroup style={{ marginTop: "24px" }}>
                  <Form.Label>مبلغ تراکنش</Form.Label>
                  <Form.Control
                    ref={transactionAmountField}
                    type="text"
                    className="section-303030 wide-input"
                    dir="ltr"
                    style={{ boxShadow: "none", outLine: "none" }}
                    onChange={(e) => {
                      if (e.currentTarget.value !== "") {
                        setValidTransactionAmount(false);
                      } else {
                        setValidTransactionAmount(true);
                      }
                    }}
                  />
                  <Collapse in={validTransactionAmount} className={"text-danger"}>
                    <div>مبلغ تراکنش را وارد نمایید</div>
                  </Collapse>
                </FormGroup>
                <FormGroup className="d-grid" style={{ marginTop: "32px" }}>
                  <Button
                    type="text"
                    className="btn-copy"
                    dir="ltr"
                    style={{ boxShadow: "none", outLine: "none" }}
                    onClick={() => {
                      if (transactionIDField.current.value === "") {
                        setValidTransactionID(true);
                        return;
                      }
                      if (transactionAmountField.current.value === "") {
                        setValidTransactionAmount(true);
                        return;
                      }
                    }}
                  >
                    بررسی صحت تراکنش
                  </Button>
                </FormGroup>
              </Row>
            </ModalBody>
          </Modal>
        </Container>
      </div>
    </>
  );
};
export default Wallet;
