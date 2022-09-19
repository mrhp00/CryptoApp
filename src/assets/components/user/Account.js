import React, { useState } from "react";
import { Button, ButtonGroup, Col, Container, Row } from "react-bootstrap";
import { Route, Routes, useNavigate } from "react-router-dom";
import Profile from "./Profile";
import Setting from "./Setting";
import Password from "./Password";

const Account = (props) => {
  const navigate = useNavigate();

  //States and Refs
  const [userID] = useState("0");
  const [currentUserToken] = useState("abc");

  // Main Section
  return (
    <>
      <Container dir="rtl">
        <Row>
          <Col className="col-12" xxl xl lg={4}>
            <ButtonGroup className="gap-2 d-flex">
              <Button
                className="btn btn-warning btn-flat "
                onClick={() => {
                  navigate("/account/" + userID + "/" + currentUserToken + "/profile");
                }}
              >
                پروفایل
              </Button>
              <Button
                className="btn btn-warning btn-flat "
                onClick={() => {
                  navigate("/account/" + userID + "/" + currentUserToken + "/setting");
                }}
              >
                تنظیمات
              </Button>
              <Button
                className="btn btn-warning btn-flat "
                onClick={() => {
                  navigate("/account/" + userID + "/" + currentUserToken + "/password");
                }}
              >
                رمز عبور
              </Button>
            </ButtonGroup>
          </Col>
          <Col className="col-0" xxl xl lg={4} />
          <Col className="col-0" xxl xl lg={4} />
        </Row>
        <Row>
          <Routes xxl xl={10}>
            <Route path="/account/:id/:token/profile" element={<Profile />} />
            <Route path="/account/:id/:token/setting" element={<Setting />} />
            <Route path="/account/:id/:token/password" element={<Password />} />
          </Routes>
        </Row>
      </Container>
    </>
  );
};
export default Account;
