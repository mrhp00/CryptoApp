import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Trade from "./assets/components/trade/Trade";
import Exchange from "./assets/components/exchange/Exchange";
import Market from "./assets/components/shop/Market";
import Wallet from "./assets/components/wallets/Wallet";
import Cards from "./assets/components/card/Cards";
import Profile from "./assets/components/user/Profile";
import Setting from "./assets/components/user/Setting";
import Password from "./assets/components/user/Password";
import Invite from "./assets/components/user/Invite";
import { Col, Row } from "react-bootstrap";
import Sidebar from "./assets/components/general/Sidebar";
import Header from "./assets/components/general/Header";
import { ThemeProvider } from "react-bootstrap";
import OpenOrder from "./assets/components/trade/OpenOrder";
import Account from "./assets/components/user/Account";
import Dashboard from "./assets/components//general/Dashboard";
import { useDispatch } from "react-redux";
import Support from "./assets/components/supports/Support";

const App = (props) => {
  const dispatch = useDispatch();

  // Dark-Light Theme Check and Store Set
  useEffect(() => {
    if (localStorage.getItem("dark") === "true") {
      dispatch({
        type: "SET_DARK",
        dark: true,
      });
    } else {
      dispatch({
        type: "SET_DARK",
        dark: false,
      });
    }
  });

  //Main Section
  return (
    <>
      <ThemeProvider breakpoints={["xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}>
        <div dir="rtl" className="custom-scrollbars__content section">
          <Row style={{ marginTop: "12px" }} className="m-0">
            <Col
              className="d-none d-sm-none  d-lg-none d-xl-inline d-xxl-inline col-2"
              style={{ zIndex: "5" }}
            >
              <Sidebar />
            </Col>
            <Col className="mx-0 me-md-4 me-lg-4 me-xl-4 me-xxl-4">
              <Row
                className="col-12 d-flex align-items-center justify-content-center  mx-0 mt-3 mt-md-0 mt-lg-0 mt-xl-0 mt-xxl-0"
                style={{ zIndex: "5000" }}
              >
                <Header />
              </Row>
              <Row className="col-12 mx-0 mt-2" style={{ zIndex: "1" }}>
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/trade" element={<Trade />} />
                  <Route path="/exchange" element={<Exchange />} />
                  <Route path="/market" element={<Market />} />
                  <Route path="/wallet" element={<Wallet />} />
                  <Route path="/cards" element={<Cards />} />
                  <Route path="/profile/:id/:token" element={<Profile />} />
                  <Route path="/account/*" element={<Account />} />
                  <Route path="/invite" element={<Invite />} />
                  <Route path="/setting/:id/:token" element={<Setting />} />
                  <Route path="/password/:id/:token" element={<Password />} />
                  <Route path="/open_orders" element={<OpenOrder />} />
                  <Route path="/support" element={<Support />} />
                </Routes>
              </Row>
            </Col>
          </Row>
        </div>
      </ThemeProvider>
    </>
  );
};
export default App;
