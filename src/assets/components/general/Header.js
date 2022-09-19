import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Dropdown,
  Row,
  Image,
  Offcanvas,
  InputGroup,
  Modal,
  Form,
  Card,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import TradeHistory from "../trade/TradeHistory";
import TrannsactionHistory from "../wallets/TransactionHistory";

//ICONS
import ProfilePic from "../../images/profile.png";
import Supportdark from "../../images/support-dark.svg";
import SupportLight from "../../images/support-light.svg";
import SupportLightL2 from "../../images/support-light-l2.svg";
import SideImage from "../../images/side-image-mobile.png";
import ImageThumb from "../../images/image-thumb.png";
import SearchIcon from "@mui/icons-material/Search";
import SearchIconOutlined from "@mui/icons-material/SearchOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import ReportGmailerrorredOutlinedIcon from "@mui/icons-material/ReportGmailerrorredOutlined";

import {
  HomeHashtag,
  Trade,
  ConvertCard,
  ShoppingCart,
  Wallet2,
  Card as CardIcon,
  ProfileCircle,
  UserAdd,
  HambergerMenu,
  CloseSquare,
  Notification,
  Moon,
  Sun1,
} from "iconsax-react";

const Header = (props) => {
  const dispatch = useDispatch();

  //States and Refs
  const currentUserName = useSelector((state) => state.currentUserName);
  const [verifyCode, setVerifyCode] = useState("");
  const page = useSelector((state) => state.page);
  const [show, setShow] = useState(false);
  const currentUserToken = useSelector((state) => state.currentUserToken);
  const currentUser = useSelector((state) => state.currentUser);
  const currentUserVerified = useSelector((state) => state.currentUserVerified);
  const validation = useSelector((state) => state.userValidationStart);
  const darkTheme = useSelector((state) => state.dark);
  const [enableSearch, setEnableSearch] = useState(false);

  // Verification Sequence Start
  const stepOneHide = () => {
    dispatch({
      type: "START_VALIDATION",
      start: false,
    });
  };

  // Modals Manegment
  const [stepTwo, setStepTwo] = useState(false);
  const stepTwoShow = () => setStepTwo(true);
  const stepTwoHide = () => setStepTwo(false);

  const [stepThree, setStepThree] = useState(false);
  const stepThreeShow = () => setStepThree(true);
  const stepThreeHide = () => setStepThree(false);

  const [stepFour, setStepFour] = useState(false);
  const stepFourShow = () => setStepFour(true);
  const stepFourHide = () => setStepFour(false);

  const trade_history = useSelector((state) => state.tradeModal);

  const [transaction_history, setTransactionHistory] = useState(false);
  const TrannsactionHistoryShow = () => setTransactionHistory(true);
  const TrannsactionHistoryHide = () => setTransactionHistory(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  //STYLES
  const sideTextStyle = {
    fontSize: "14px",
    textAlign: "center",
    display: "block",
    textDecoration: "none",
    color: "#BBBBBB",
    backgroundColor: "#1E1E1E;",
  };

  // Main Section
  return (
    <>
      <Container
        dir="rtl"
        className={
          "justify-content-center align-content-center align-items-center"
        }
        style={{ zIndex: "11" }}
      >
        <Row>
          {/* PC MODE */}
          <Col
            className="d-none d-sm-none d-md-none d-xs-none d-lg-none d-xl-inline d-xxl-inline"
            style={{ padding: "20px" }}
          >
            <Row>
              <Col>
                <InputGroup style={{ marginRight: "-10px" }} className="">
                  <input
                    type="text"
                    style={{ float: "right", width: "60%" }}
                    className="search-input-left"
                    placeholder={"   جستجو   "}
                  />
                  <InputGroup.Text className="search-input-right">
                    {darkTheme ? (
                      <SearchIcon
                        style={{
                          width: 30,
                          float: "left",
                          paddingLeft: "10px",
                        }}
                      />
                    ) : (
                      <SearchIconOutlined
                        style={{
                          width: 30,
                          float: "left",
                          paddingLeft: "10px",
                        }}
                      />
                    )}
                  </InputGroup.Text>
                </InputGroup>
              </Col>
              <Col className="align-items-center">
                <div className="">
                  <Dropdown className="mt-2 fl">
                    <Dropdown.Toggle
                      className=" ilia-drop section align-items-center"
                      id="dropdown-autoclose-true"
                    >
                      &nbsp;&nbsp;&nbsp;{currentUserName}&nbsp;&nbsp;&nbsp;
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="ilia-drop-submenu">
                      <Dropdown.Item onClick={TrannsactionHistoryShow}>
                        تاریخچه واریز و برداشت
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => {
                          dispatch({
                            type: "SET_tradeModal",
                            status: true,
                          });
                        }}
                      >
                        تاریخچه معاملات
                      </Dropdown.Item>
                      <hr />
                      <Dropdown.Item>خروج</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <Image src={ProfilePic} className="profile-pic-desktop" />

                {darkTheme ? (
                  <Notification
                    size="20"
                    variant="Bold"
                    className="fl mx-2 mt-2"
                  />
                ) : (
                  <Notification size="20" className="fl mx-2 mt-2" />
                )}
                {darkTheme ? (
                  <Sun1
                    size="20"
                    variant="Bold"
                    className="fl mx-2 mt-2"
                    onClick={() => {
                      localStorage.setItem("dark", "false");
                      dispatch({
                        type: "SET_DARK",
                        dark: false,
                      });
                      window.location.reload(false);
                    }}
                  />
                ) : (
                  <Moon
                    size="20"
                    className="fl mx-2 mt-2"
                    onClick={() => {
                      localStorage.setItem("dark", "true");
                      dispatch({
                        type: "SET_DARK",
                        dark: true,
                      });
                      window.location.reload(false);
                    }}
                  />
                )}
                <div style={{ float: "left", paddingLeft: "10px" }}>
                  {currentUserVerified === false ? (
                    <Button
                      size="sm"
                      className="not-verify-buttom d-flex align-items-center mt-1"
                      style={{
                        color: "#FFFFFF",
                        backgroundColor: "#ECAA00",
                      }}
                      onClick={() => {
                        dispatch({
                          type: "START_VALIDATION",
                          start: true,
                        });
                      }}
                    >
                      <ReportGmailerrorredOutlinedIcon />
                      &nbsp; شما &nbsp;
                      <u>احراز هویت</u>&nbsp; نشده اید
                    </Button>
                  ) : null}
                </div>
              </Col>
            </Row>
          </Col>

          {/* Moblile Mode */}
          <Col className="d-sm-inline d-md-inline d-lg-inline d-xl-none d-xxl-none">
            <Row>
              {enableSearch ? (
                <>
                  <Col>
                    <InputGroup className="">
                      <input
                        type="text"
                        style={{ width: "88%" }}
                        className="search-input-left"
                        placeholder={"   جستجو   "}
                      />
                      <InputGroup.Text className="search-input-right">
                        <CloseSquare
                          size="32"
                          className="header-menu-icon pointer-cursor"
                          onClick={() => {
                            setEnableSearch(false);
                          }}
                        />
                      </InputGroup.Text>
                    </InputGroup>
                  </Col>
                </>
              ) : (
                <>
                  <Col className="d-flex justify-content-start align-items-center col-1">
                    <div
                      dir="rtl"
                      className="d-sm-inline d-md-inline d-lg-inline d-xl-none d-xxl-none"
                    >
                      <div
                        style={{ width: "50px", height: "30px" }}
                        onClick={handleShow}
                        className="pointer-cursor text-end"
                      >
                        <HambergerMenu size="35" />
                      </div>
                      <Offcanvas
                        show={show}
                        onHide={handleClose}
                        placement="end"
                        dir="rtl"
                        onEscapeKeyDown={handleClose}
                        className="ilia-sidebar-container"
                        collapseOnSelect
                      >
                        <Offcanvas.Header className="justify-content-center">
                          <Image src={SideImage} style={{ width: "180px" }} />
                          <CancelOutlinedIcon
                            style={{ marginRight: "20px" }}
                            onClick={handleClose}
                          />
                        </Offcanvas.Header>
                        <Offcanvas.Body className="text-center align-items-center align-content-center justify-content-center">
                          <div>
                            <Row>
                              <Col>
                                {page === "Dashboard" ? (
                                  <Link to="/" style={sideTextStyle}>
                                    <div
                                      className="d-flex align-items-center justify-items-center justify-content-center"
                                      style={{ position: "relative" }}
                                    >
                                      <div
                                        style={{
                                          position: "absolute",
                                          zIndex: "2",
                                        }}
                                      >
                                        <HomeHashtag className="sideMenuStyleSelected" />
                                      </div>
                                      <div
                                        style={{ zIndex: "1" }}
                                        className="icons-container"
                                      ></div>
                                    </div>
                                    داشبورد
                                  </Link>
                                ) : (
                                  <Link to="/" style={sideTextStyle}>
                                    <div
                                      className="d-flex align-items-center justify-items-center justify-content-center"
                                      style={{ position: "relative" }}
                                    >
                                      <div
                                        style={{
                                          position: "absolute",
                                          zIndex: "2",
                                        }}
                                      >
                                        <HomeHashtag className="sideMenuStyle" />
                                      </div>
                                      <div
                                        style={{ zIndex: "1" }}
                                        className="icons-container2"
                                      ></div>
                                    </div>
                                    داشبورد
                                  </Link>
                                )}
                              </Col>

                              <Col>
                                {page === "Trade" ? (
                                  <Link to="/trade" style={sideTextStyle}>
                                    <div
                                      className="d-flex align-items-center justify-items-center justify-content-center"
                                      style={{ position: "relative" }}
                                    >
                                      <div
                                        style={{
                                          position: "absolute",
                                          zIndex: "2",
                                        }}
                                      >
                                        <Trade className="sideMenuStyleSelected" />
                                      </div>
                                      <div
                                        style={{ zIndex: "1" }}
                                        className="icons-container"
                                      ></div>
                                    </div>
                                    خرید / فروش
                                  </Link>
                                ) : (
                                  <Link to="/trade" style={sideTextStyle}>
                                    <div
                                      className="d-flex align-items-center justify-items-center justify-content-center"
                                      style={{ position: "relative" }}
                                    >
                                      <div
                                        style={{
                                          position: "absolute",
                                          zIndex: "2",
                                        }}
                                      >
                                        <Trade className="sideMenuStyle" />
                                      </div>
                                      <div
                                        style={{ zIndex: "1" }}
                                        className="icons-container2"
                                      ></div>
                                    </div>
                                    خرید / فروش
                                  </Link>
                                )}
                              </Col>
                            </Row>

                            <Row className="mt-5">
                              <Col>
                                {page === "Exchange" ? (
                                  <Link to="/exchange" style={sideTextStyle}>
                                    <div
                                      className="d-flex align-items-center justify-items-center justify-content-center"
                                      style={{ position: "relative" }}
                                    >
                                      <div
                                        style={{
                                          position: "absolute",
                                          zIndex: "2",
                                        }}
                                      >
                                        <ConvertCard className="sideMenuStyleSelected" />
                                      </div>
                                      <div
                                        style={{ zIndex: "1" }}
                                        className="icons-container"
                                      ></div>
                                    </div>
                                    تبدیل ارز
                                  </Link>
                                ) : (
                                  <Link to="/exchange" style={sideTextStyle}>
                                    <div
                                      className="d-flex align-items-center justify-items-center justify-content-center"
                                      style={{ position: "relative" }}
                                    >
                                      <div
                                        style={{
                                          position: "absolute",
                                          zIndex: "2",
                                        }}
                                      >
                                        <ConvertCard className="sideMenuStyle" />
                                      </div>
                                      <div
                                        style={{ zIndex: "1" }}
                                        className="icons-container2"
                                      ></div>
                                    </div>
                                    تبدیل ارز
                                  </Link>
                                )}
                              </Col>

                              <Col>
                                {page === "Market" ? (
                                  <Link to="/market" style={sideTextStyle}>
                                    <div
                                      className="d-flex align-items-center justify-items-center justify-content-center"
                                      style={{ position: "relative" }}
                                    >
                                      <div
                                        style={{
                                          position: "absolute",
                                          zIndex: "2",
                                        }}
                                      >
                                        <ShoppingCart className="sideMenuStyleSelected" />
                                      </div>
                                      <div
                                        style={{ zIndex: "1" }}
                                        className="icons-container"
                                      ></div>
                                    </div>
                                    بازار
                                  </Link>
                                ) : (
                                  <Link to="/market" style={sideTextStyle}>
                                    <div
                                      className="d-flex align-items-center justify-items-center justify-content-center"
                                      style={{ position: "relative" }}
                                    >
                                      <div
                                        style={{
                                          position: "absolute",
                                          zIndex: "2",
                                        }}
                                      >
                                        <ShoppingCart className="sideMenuStyle" />
                                      </div>
                                      <div
                                        style={{ zIndex: "1" }}
                                        className="icons-container2"
                                      ></div>
                                    </div>
                                    بازار
                                  </Link>
                                )}
                              </Col>
                            </Row>

                            <Row className="mt-5">
                              <Col>
                                {page === "Wallet" ? (
                                  <Link to="/wallet" style={sideTextStyle}>
                                    <div
                                      className="d-flex align-items-center justify-items-center justify-content-center"
                                      style={{ position: "relative" }}
                                    >
                                      <div
                                        style={{
                                          position: "absolute",
                                          zIndex: "2",
                                        }}
                                      >
                                        <Wallet2 className="sideMenuStyleSelected" />
                                      </div>
                                      <div
                                        style={{ zIndex: "1" }}
                                        className="icons-container"
                                      ></div>
                                    </div>
                                    کیف پول
                                  </Link>
                                ) : (
                                  <Link to="/wallet" style={sideTextStyle}>
                                    <div
                                      className="d-flex align-items-center justify-items-center justify-content-center"
                                      style={{ position: "relative" }}
                                    >
                                      <div
                                        style={{
                                          position: "absolute",
                                          zIndex: "2",
                                        }}
                                      >
                                        <Wallet2 className="sideMenuStyle" />
                                      </div>
                                      <div
                                        style={{ zIndex: "1" }}
                                        className="icons-container2"
                                      ></div>
                                    </div>
                                    کیف پول
                                  </Link>
                                )}
                              </Col>

                              <Col>
                                {page === "Cards" ? (
                                  <Link to="/cards" style={sideTextStyle}>
                                    <div
                                      className="d-flex align-items-center justify-items-center justify-content-center"
                                      style={{ position: "relative" }}
                                    >
                                      <div
                                        style={{
                                          position: "absolute",
                                          zIndex: "2",
                                        }}
                                      >
                                        <CardIcon className="sideMenuStyleSelected" />
                                      </div>
                                      <div
                                        style={{ zIndex: "1" }}
                                        className="icons-container"
                                      ></div>
                                    </div>
                                    کارتهای بانکی
                                  </Link>
                                ) : (
                                  <Link to="/cards" style={sideTextStyle}>
                                    <div
                                      className="d-flex align-items-center justify-items-center justify-content-center"
                                      style={{ position: "relative" }}
                                    >
                                      <div
                                        style={{
                                          position: "absolute",
                                          zIndex: "2",
                                        }}
                                      >
                                        <CardIcon className="sideMenuStyle" />
                                      </div>
                                      <div
                                        style={{ zIndex: "1" }}
                                        className="icons-container2"
                                      ></div>
                                    </div>
                                    کارتهای بانکی
                                  </Link>
                                )}
                              </Col>
                            </Row>

                            <Row className="mt-5">
                              <Col>
                                {page === "Profile" ? (
                                  <Link
                                    to={"/profile/" + currentUser + "/" + currentUserToken}
                                    style={sideTextStyle}
                                  >
                                    <div
                                      className="d-flex align-items-center justify-items-center justify-content-center"
                                      style={{ position: "relative" }}
                                    >
                                      <div
                                        style={{
                                          position: "absolute",
                                          zIndex: "2",
                                        }}
                                      >
                                        <ProfileCircle className="sideMenuStyleSelected" />
                                      </div>
                                      <div
                                        style={{ zIndex: "1" }}
                                        className="icons-container"
                                      ></div>
                                    </div>
                                    حساب کاربری
                                  </Link>
                                ) : (
                                  <Link
                                    to={"/profile/" + currentUser + "/" + currentUserToken}
                                    style={sideTextStyle}
                                  >
                                    <div
                                      className="d-flex align-items-center justify-items-center justify-content-center"
                                      style={{ position: "relative" }}
                                    >
                                      <div
                                        style={{
                                          position: "absolute",
                                          zIndex: "2",
                                        }}
                                      >
                                        <ProfileCircle className="sideMenuStyle" />
                                      </div>
                                      <div
                                        style={{ zIndex: "1" }}
                                        className="icons-container2"
                                      ></div>
                                    </div>
                                    حساب کاربری
                                  </Link>
                                )}
                              </Col>

                              <Col>
                                {page === "Invite" ? (
                                  <Link to="/invite" style={sideTextStyle}>
                                    <div
                                      className="d-flex align-items-center justify-items-center justify-content-center"
                                      style={{ position: "relative" }}
                                    >
                                      <div
                                        style={{
                                          position: "absolute",
                                          zIndex: "2",
                                        }}
                                      >
                                        <UserAdd className="sideMenuStyleSelected" />
                                      </div>
                                      <div
                                        style={{ zIndex: "1" }}
                                        className="icons-container"
                                      ></div>
                                    </div>
                                    معرفی دوستان
                                  </Link>
                                ) : (
                                  <Link to="/invite" style={sideTextStyle}>
                                    <div
                                      className="d-flex align-items-center justify-items-center justify-content-center"
                                      style={{ position: "relative" }}
                                    >
                                      <div
                                        style={{
                                          position: "absolute",
                                          zIndex: "2",
                                        }}
                                      >
                                        <UserAdd className="sideMenuStyle" />
                                      </div>
                                      <div
                                        style={{ zIndex: "1" }}
                                        className="icons-container2"
                                      ></div>
                                    </div>
                                    معرفی دوستان
                                  </Link>
                                )}
                              </Col>
                            </Row>

                            <Row className="text-center mt-5">
                              {darkTheme ? (
                                <>
                                  <Link to={"/support"}>
                                    <Image
                                      src={Supportdark}
                                      style={{ width: "90%", height: "90%" }}
                                    />
                                  </Link>
                                </>
                              ) : (
                                <>
                                  <Link to={"/support"}>
                                    <div
                                      className="d-flex align-items-center justify-items-center justify-content-center mt-5"
                                      style={{ position: "relative" }}
                                    >
                                      <div
                                        style={{
                                          position: "absolute",
                                          zIndex: "2",
                                          marginBottom: "60px",
                                        }}
                                      >
                                        <Image src={SupportLightL2} />
                                      </div>
                                      <div style={{ zIndex: "1" }}>
                                        <Image src={SupportLight} />
                                      </div>
                                    </div>
                                  </Link>
                                </>
                              )}
                            </Row>
                          </div>
                        </Offcanvas.Body>
                      </Offcanvas>
                    </div>
                  </Col>
                  <Col className=" d-flex col-8 justify-content-center justify-items-center text-center">
                    <div>
                      {currentUserVerified === false ? (
                        <Button
                          size="sm"
                          className="not-verify-buttom d-flex align-items-center mt-1"
                          style={{
                            color: "#FFFFFF",
                            backgroundColor: "#ECAA00",
                          }}
                          onClick={() => {
                            dispatch({
                              type: "START_VALIDATION",
                              start: true,
                            });
                          }}
                        >
                          <ReportGmailerrorredOutlinedIcon />
                          &nbsp; شما &nbsp;
                          <u>احراز هویت</u>&nbsp; نشده اید
                        </Button>
                      ) : (
                        <InputGroup className="d-flex align-items-center">
                          <Image src={ProfilePic} className="profile-pic" />
                          <div className="d-flex align-items-center mt-1">
                            <Dropdown>
                              <Dropdown.Toggle
                                className="d-flex ilia-drop section align-items-center"
                                id="dropdown-autoclose-true"
                              >
                                &nbsp;&nbsp;&nbsp;{currentUserName}&nbsp;&nbsp;&nbsp;
                              </Dropdown.Toggle>
                              <Dropdown.Menu className="ilia-drop-submenu">
                                <Dropdown.Item
                                  onClick={TrannsactionHistoryShow}
                                >
                                  تاریخچه واریز و برداشت
                                </Dropdown.Item>
                                <Dropdown.Item
                                  onClick={() => {
                                    dispatch({
                                      type: "SET_tradeModal",
                                      status: true,
                                    });
                                  }}
                                >
                                  تاریخچه معاملات
                                </Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="/" className="">
                                  خروج
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </div>
                        </InputGroup>
                      )}
                    </div>
                  </Col>
                  <Col className=" d-flex justify-content-start align-items-center text-end col-1 g-0">
                    {darkTheme ? (
                      <Sun1
                        size="35"
                        variant="Bold"
                        className="header-icons"
                        onClick={() => {
                          localStorage.setItem("dark", "false");
                          dispatch({
                            type: "SET_DARK",
                            dark: false,
                          });
                          window.location.reload(false);
                        }}
                      />
                    ) : (
                      <Moon
                        size="35"
                        className="header-icons"
                        onClick={() => {
                          localStorage.setItem("dark", "true");
                          dispatch({
                            type: "SET_DARK",
                            dark: true,
                          });
                          window.location.reload(false);
                        }}
                      />
                    )}
                  </Col>
                  <Col className="col-1 g-0" />
                  <Col className=" d-flex justify-content-start align-items-center text-end col-1 g-0">
                    {darkTheme ? (
                      <Notification
                        size="35"
                        className="header-icons"
                        variant="Bold"
                      />
                    ) : (
                      <Notification size="35" className="header-icons" />
                    )}
                  </Col>
                </>
              )}
            </Row>
          </Col>
        </Row>
        <Modal
          show={validation}
          onHide={stepOneHide}
          dir="rtl"
          contentClassName="verify-modal-normal"
        >
          <Modal.Body className="section-modal ">
            <Row className="d-flex justify-content-center">
              <Col className="text-center">
                <Image
                  src={SideImage}
                  style={{ width: "140px" }}
                  className="text-center"
                />
                <CancelOutlinedIcon
                  onClick={() => {
                    dispatch({
                      type: "START_VALIDATION",
                      start: false,
                    });
                  }}
                  style={{ display: "inline", float: "left" }}
                />
              </Col>
            </Row>
            <Row style={{ marginTop: "20px" }} className="text-center">
              <p className="ilia-header">احراز هویت</p>
            </Row>
            <Row className="section-modal">
              <p style={{ paddingTop: "32px" }}>اطلاعات شخصی</p>
              <br className="d-none d-lg-block d-xl-block d-xxl-block" />
              <Col className="col-12">
                <Form>
                  <Form.Group style={{ paddingTop: "10px" }}>
                    <Form.Label>نام و نام خانوادگی</Form.Label>
                    <Form.Control
                      type="text"
                      className="color-303030 border-606060 wide-input"
                    />
                  </Form.Group>
                </Form>
              </Col>
              <br className="d-block d-lg-none d-xl-none d-xxl-none" />
              <Col className="col-12">
                <Form>
                  <Form.Group style={{ paddingTop: "10px" }}>
                    <Form.Label>کد ملی</Form.Label>
                    <Form.Control
                      type="text"
                      className="color-303030 border-606060 wide-input"
                    />
                  </Form.Group>
                </Form>
              </Col>
              <br className="d-block d-lg-none d-xl-none d-xxl-none" />
              <Col className="col-12">
                <Form>
                  <Form.Group style={{ paddingTop: "10px" }}>
                    <Form.Label>شماره شناسنامه</Form.Label>
                    <Form.Control
                      type="text"
                      className="color-303030 border-606060 wide-input"
                    />
                  </Form.Group>
                </Form>
              </Col>
              <br className="d-block d-lg-none d-xl-none d-xxl-none" />
              <Col className="col-12">
                <Form>
                  <Form.Group style={{ paddingTop: "10px" }}>
                    <Form.Label>تاریخ تولد</Form.Label>
                    <Form.Control
                      type="text"
                      className="color-303030 border-606060 wide-input"
                    />
                  </Form.Group>
                </Form>
              </Col>
              <br className="d-block d-lg-none d-xl-none d-xxl-none" />
              <Col className="col-12">
                <Form>
                  <Form.Group style={{ paddingTop: "10px" }}>
                    <Form.Label>شماره تلفن ثابت</Form.Label>
                    <Form.Control
                      type="text"
                      className="color-303030 border-606060 wide-input"
                    />
                  </Form.Group>
                </Form>
              </Col>
              <br className="d-block d-lg-none d-xl-none d-xxl-none" />
              <Col className="col-12">
                <Form>
                  <Form.Group style={{ paddingTop: "10px" }}>
                    <Form.Label>کد پستی</Form.Label>
                    <Form.Control
                      type="text"
                      className="color-303030 border-606060 wide-input"
                    />
                  </Form.Group>
                </Form>
              </Col>
              <Col className="d-grid col-12">
                <Form>
                  <Form.Group style={{ paddingTop: "10px" }}>
                    <Form.Label>آدرس</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      className="color-303030 border-606060"
                    />
                  </Form.Group>
                </Form>
              </Col>

              <Col className="d-grid col-12 mt-4 pb-4">
                <Button
                  className="btn btn-warning btn-flat mt-4"
                  onClick={() => {
                    dispatch({
                      type: "START_VALIDATION",
                      start: false,
                    });
                    stepTwoShow();
                  }}
                >
                  ادامه
                </Button>
              </Col>
            </Row>
          </Modal.Body>
        </Modal>
        <Modal
          show={stepTwo}
          onHide={stepTwoHide}
          dir="rtl"
          contentClassName="verify-modal-normal"
        >
          <Modal.Body className="section-modal">
            <Row className="d-flex justify-content-center">
              <Col className="text-center">
                <Image
                  src={SideImage}
                  style={{ width: "140px" }}
                  className="text-center"
                />
                <CancelOutlinedIcon
                  onClick={stepTwoHide}
                  style={{ display: "inline", float: "left" }}
                />
              </Col>
            </Row>
            <Row style={{ marginTop: "20px" }} className="text-center">
              <p className="ilia-header">احراز هویت</p>
            </Row>
            <p className="text-center mt-4">
              کد خوانده شده در تماس تلفنی را در این محل وارد کنید
            </p>
            <Form.Control
              type="text"
              className="color-303030 border-606060 wide-input"
              onChange={(e) => {
                setVerifyCode(e.currentTarget.value);
              }}
            />

            <Row>
              <Col className="d-grid mt-4">
                {verifyCode === "" ? (
                  <Button
                    disabled
                    className="btn btn-warning btn-flat btn-disabled"
                    onClick={() => {
                      stepTwoHide();
                      stepThreeShow();
                    }}
                  >
                    ادامه
                  </Button>
                ) : (
                  <Button
                    className="btn btn-warning btn-flat"
                    onClick={() => {
                      stepTwoHide();
                      stepThreeShow();
                    }}
                  >
                    ادامه
                  </Button>
                )}
              </Col>
            </Row>
          </Modal.Body>
        </Modal>
        <Modal
          show={stepThree}
          onHide={stepThreeHide}
          dir="rtl"
          contentClassName="verify-modal-wide"
        >
          <Modal.Body className="section-modal">
            <Row className="d-flex justify-content-center">
              <Col className="text-center">
                <Image
                  src={SideImage}
                  style={{ width: "140px" }}
                  className="text-center "
                />
                <CancelOutlinedIcon
                  onClick={stepThreeHide}
                  style={{ display: "inline", float: "left" }}
                />
              </Col>
            </Row>
            <Row style={{ marginTop: "20px" }} className="text-center">
              <p className="ilia-header">احراز هویت</p>
            </Row>
            <Row className="color-303030 ">
              <Col>
                <Row>
                  <p className="mt-4">
                    <p className="ilia-header" style={{ display: "inline" }}>
                      آپلود تصاویر
                    </p>
                    <p>(حداکثر سایز مجاز 1 مگابایت)</p>
                  </p>
                </Row>

                <Row>
                  <Col className="col-12 col-md-3 col-xl-3 col-xxl-3">
                    <Card
                      onClick={() => {}}
                      className="color-303030 border-606060"
                    >
                      <Card.Img src={ImageThumb} />
                      <hr />
                      <Card.Body style={{ cursor: "pointer" }}>
                        <p className="non-header-font text-center">
                          آپلود تصویر پرسنلی یا سلفی
                        </p>
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col className="col-12 col-md-3 col-xl-3 col-xxl-3 mt-3 mt-md-0 mt-lg-0 mt-xl-0 mt-xxl-0 mt-4">
                    <Card
                      onClick={() => {}}
                      className="color-303030 border-606060"
                    >
                      <Card.Img src={ImageThumb} />
                      <hr />
                      <Card.Body style={{ cursor: "pointer" }}>
                        <p className="non-header-font text-warning text-center">
                          آپلود تصویر کارت ملی
                        </p>
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col className="col-12 col-md-3 col-xl-3 col-xxl-3 mt-3 mt-md-0 mt-lg-0 mt-xl-0 mt-xxl-0 mt-4">
                    <Card
                      onClick={() => {}}
                      className="color-303030 border-606060"
                    >
                      <Card.Img src={ImageThumb} />
                      <hr />
                      <Card.Body style={{ cursor: "pointer" }}>
                        <p className="non-header-font text-warning text-center">
                          آپلود تصویر شناسنامه
                        </p>
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col className="col-12 col-md-3 col-xl-3 col-xxl-3 mt-3 mt-md-0 mt-lg-0 mt-xl-0 mt-xxl-0  mt-4">
                    <Card
                      onClick={() => {}}
                      className="color-303030 border-606060"
                    >
                      <Card.Img src={ImageThumb} />
                      <hr />
                      <Card.Body style={{ cursor: "pointer" }}>
                        <p className="non-header-font text-warning text-center">
                          آپلود تصویر قبض (اختیاری)
                        </p>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row>
              <Col className="d-grid  mt-4">
                <Button
                  className="btn btn-warning btn-flat "
                  onClick={() => {
                    stepThreeHide();
                    stepFourShow();
                  }}
                >
                  ادامه
                </Button>
              </Col>
            </Row>
          </Modal.Body>
        </Modal>
        <Modal
          show={stepFour}
          onHide={stepFourHide}
          dir="rtl"
          contentClassName="verify-modal-normal"
        >
          <Modal.Body className="section-modal">
            <Row className="d-flex justify-content-center">
              <Col className="text-center">
                <Image
                  src={SideImage}
                  style={{ width: "140px" }}
                  className="text-center"
                />
                <CancelOutlinedIcon
                  onClick={stepFourHide}
                  style={{ display: "inline", float: "left" }}
                />
              </Col>
            </Row>
            <Row style={{ marginTop: "20px" }} className="text-center">
              <p className="ilia-header">موفق</p>
            </Row>
            <p className="text-center mt-4">
              اطلاعات با موفقیت ثبت شد و بعد ار بررسی در پروفایل شما منظور میشود
            </p>
            <Row>
              <Col className="d-grid">
                <Button
                  className="btn btn-warning btn-flat "
                  onClick={() => {
                    dispatch({
                      type: "SET_USER_VERIFIED",
                      verified: true,
                    });
                    stepFourHide();
                  }}
                >
                  متوجه شدم
                </Button>
              </Col>
            </Row>
          </Modal.Body>
        </Modal>
        <Modal
          backdrop="static"
          keyboard={false}
          show={trade_history}
          dir="rtl"
          contentClassName="verify-modal-wide"
        >
          <Modal.Body className="trade-history">
            <Row className="d-flex justify-content-center">
              <Col>
                <p style={{ display: "inline", fontSize: "18px" }}>
                  تاریخچه معاملات
                </p>
                <CancelOutlinedIcon
                  onClick={() => {
                    dispatch({
                      type: "SET_tradeModal",
                      status: false,
                    });
                  }}
                  style={{ display: "inline", float: "left" }}
                />
              </Col>
            </Row>
            <Row className="mt-5 justify-content-center">
              <Col>
                <TradeHistory />
              </Col>
            </Row>
          </Modal.Body>
        </Modal>
        <Modal
          backdrop="static"
          keyboard={false}
          show={transaction_history}
          onHide={TrannsactionHistoryHide}
          dir="rtl"
          contentClassName="verify-modal-wide"
        >
          <Modal.Body className="trade-history">
            <Row className="d-flex justify-content-center">
              <Col>
                <p style={{ display: "inline", fontSize: "18px" }}>
                  تاریخچه واریز و برداشت
                </p>
                <CancelOutlinedIcon
                  onClick={TrannsactionHistoryHide}
                  style={{ display: "inline", float: "left" }}
                />
              </Col>
            </Row>
            <Row className="mt-5 justify-content-center">
              <Col>
                <TrannsactionHistory />
              </Col>
            </Row>
          </Modal.Body>
        </Modal>
      </Container>
    </>
  );
};
export default Header;
