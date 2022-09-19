import React from "react";
import { Image, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// ICONS
import SideImage from "../../images/side-image-mobile.png";
import Supportdark from "../../images/support-dark.svg";
import SupportLight from "../../images/support-light.svg";
import SupportLightL2 from "../../images/support-light-l2.svg";
import {
  HomeHashtag,
  Trade,
  ConvertCard,
  ShoppingCart,
  Wallet2,
  Card,
  ProfileCircle,
  UserAdd,
} from "iconsax-react";

const Sidebar = () => {
  //Style
  const sideTextStyle = {
    fontSize: "14px",
    textAlign: "center",
    display: "block",
    textDecoration: "none",
    color: "#BBBBBB",
    backgroundColor: "#1E1E1E;",
  };

  //States and Refs
  const currentUserToken = useSelector((state) => state.currentUserToken);
  const currentUser = useSelector((state) => state.currentUser);
  const page = useSelector((state) => state.page);
  const darkTheme = useSelector((state) => state.dark);

  // Main Section
  return (
    <>
      <div
        className="ilia-sidebar-container"
        dir="rtl"
        style={{
          width: "262px",
          position: "absolute",
          alignContent: "center",
        }}
      >
        <Row className="justify-content-center  mt-4">
          <Image src={SideImage} style={{ width: "200px" }} />
        </Row>

        <Row className="mt-5">
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
                    <Card className="sideMenuStyleSelected" />
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
                    <Card className="sideMenuStyle" />
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

        <Row className="text-center mt-5 pb-5">
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
    </>
  );
};
export default Sidebar;
