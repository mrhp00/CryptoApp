import React, { useState } from "react";
import { Button, InputGroup, Col, Container, Row, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

const Password = (props) => {
  const navigate = useNavigate();

  //States and Refs
  const [userID] = useState("0");
  const [currentUserToken] = useState("ABC");
  const [passwordFieldType, setPasswordFieldType] = useState("password");

  //Show & Hide Password
  const handlePasswordField = () => {
    if (passwordFieldType === "password") {
      setPasswordFieldType("text");
    } else {
      setPasswordFieldType("password");
    }
  };

  // Main Section
  return (
    <>
      {/* PC MODE */}
      <Container
        dir="rtl"
        className="main-container d-none d-md-block d-lg-block d-xl-block d-xxl-block"
        style={{ height: "760px" }}
      >
        <Container
          className="main-container pb-4"
          style={{ minHeight: "670px" }}
        >
          <Row>
            <Col className="col-12 " xxl xl lg={4}>
              <div className="d-flex section-292929 mt-4" dir="ltr">
                <Button
                  style={{ width: "33%" }}
                  className="btn btn-warning btn-flat "
                  onClick={() => {
                    navigate("/password/" + userID + "/" + currentUserToken);
                  }}
                >
                  رمز عبور
                </Button>

                <Button
                  style={{ width: "34%" }}
                  className="btn btn-flat "
                  onClick={() => {
                    navigate("/setting/" + userID + "/" + currentUserToken);
                  }}
                >
                  تنظیمات
                </Button>

                <Button
                  style={{ width: "33%" }}
                  className="btn btn-flat"
                  onClick={() => {
                    navigate("/profile/" + userID + "/" + currentUserToken);
                  }}
                >
                  پروفایل
                </Button>
              </div>
            </Col>
            <Col className="col-0" xxl xl lg={4} />
            <Col className="col-0" xxl xl lg={4} />
          </Row>

          <Row className="col-12 section-292929 mx-0 mt-4">
            <Row>
              <Col className="col-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 ">
                <Form>
                  <Form.Group className="mt-4">
                    <Form.Label>رمز عبور فعلی</Form.Label>
                    <Form.Control
                      type="text"
                      className="color-292929 border-606060 wide-input"
                    />
                  </Form.Group>

                  <Form.Group className="mt-4">
                    <Form.Label>رمز جدید را وارد کنید</Form.Label>
                    <InputGroup>
                      <InputGroup.Text
                        onClick={handlePasswordField}
                        className="section-pass-left3 color-292929 border-606060"
                      >
                        <VisibilityOutlinedIcon />
                      </InputGroup.Text>
                      <Form.Control
                        required
                        type={passwordFieldType}
                        className="section-pass-right3 color-292929 border-606060 wide-input"
                      />
                    </InputGroup>
                  </Form.Group>
                </Form>
              </Col>
              <Col className="col-0" xxl xl lg={4}></Col>
              <Col className="col-0" xxl xl lg={4}></Col>
            </Row>

            <Row>
              <Col className="d-grid col-12 pb-5" xxl xl lg={4}>
                <Button className="btn btn-warning btn-flat mt-5">ذخیره</Button>
              </Col>
              <Col className="col-0" xxl xl lg={4}></Col>
              <Col className="col-0" xxl xl lg={4}></Col>
              <Col className="col-0" xxl xl lg={4}></Col>
            </Row>
          </Row>
        </Container>
      </Container>
      {/* MOBILE MODE */}
      <div
        dir="rtl"
        className="main-container d-block d-md-none d-lg-none d-xl-none d-xxl-none pb-4"
        style={{ height: "760px" }}
      >
        <Row>
          <Col className="col-12" xxl xl lg={4}>
            <div className="d-flex section-292929 mt-4" dir="ltr">
              <Button
                style={{ width: "33%" }}
                className="btn btn-warning btn-flat "
                onClick={() => {
                  navigate("/password/" + userID + "/" + currentUserToken);
                }}
              >
                رمز عبور
              </Button>

              <Button
                style={{ width: "34%" }}
                className="btn  btn-flat "
                onClick={() => {
                  navigate("/setting/" + userID + "/" + currentUserToken);
                }}
              >
                تنظیمات
              </Button>

              <Button
                style={{ width: "33%" }}
                className="btn btn-flat"
                onClick={() => {
                  navigate("/profile/" + userID + "/" + currentUserToken);
                }}
              >
                پروفایل
              </Button>
            </div>
          </Col>
          <Col className="col-0" xxl xl lg={4} />
          <Col className="col-0" xxl xl lg={4} />
        </Row>

        <Row className="col-12 section-292929 mx-0 mt-4">
          <Row>
            <Col className="col-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 ">
              <Form>
                <Form.Group className="mt-4">
                  <Form.Label>رمز عبور فعلی</Form.Label>
                  <Form.Control
                    type="text"
                    className="color-292929 border-606060 wide-input"
                  />
                </Form.Group>

                <Form.Group className="mt-4">
                  <Form.Label>رمز جدید را وارد کنید</Form.Label>
                  <InputGroup>
                    <InputGroup.Text
                      onClick={handlePasswordField}
                      className="section-pass-left3 color-292929 border-606060"
                    >
                      <VisibilityOutlinedIcon />
                    </InputGroup.Text>
                    <Form.Control
                      required
                      type={passwordFieldType}
                      className="section-pass-right3 color-292929 border-606060 wide-input"
                    />
                  </InputGroup>
                </Form.Group>
              </Form>
            </Col>
            <Col className="col-0" xxl xl lg={4}></Col>
            <Col className="col-0" xxl xl lg={4}></Col>
          </Row>

          <Row ClassName="mt-4">
            <Col className="d-grid col-12 pb-4" xxl xl lg={4}>
              <Button className="btn btn-warning btn-flat mt-5">ذخیره</Button>
            </Col>
            <Col className="col-0" xxl xl lg={4}></Col>
            <Col className="col-0" xxl xl lg={4}></Col>
            <Col className="col-0" xxl xl lg={4}></Col>
          </Row>
        </Row>
      </div>
    </>
  );
};
export default Password;
