import React, { useRef, useState } from "react";
import { Button, Col, Collapse, Container, Form, Row } from "react-bootstrap";
import SidePicture from "../../images/side-image.png";
import SidePictureMobile from "../../images/side-image-mobile.png";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "iconsax-react";
import { useSelector } from "react-redux";

const ResetPassword = (props) => {
  //States and Refs
  const navigate = useNavigate();
  const [userID] = useState("0");
  const [validMobile, setValidMobile] = useState(false);
  const mobileField = useRef();
  const mobileActivation = useSelector((state) => state.mobileActivation);

  // Main Section
  return (
    <>
      <div className="section" style={{ height: "100vh" }}>
        <Container dir="rtl">
          <Row>
            <Col lg={4} md={12}>
              <div
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                <picture className="mt-3 pb-5">
                  <source
                    media="(max-width:767px)"
                    sizes="100px"
                    srcSet={SidePictureMobile}
                  />
                  <source
                    media="(min-width:768px)"
                    sizes="0px"
                    srcset="blank.gif"
                  />
                  <img src={SidePicture} alt="" />
                </picture>
              </div>

              <p
                className="user_section_header mt-5"
                style={{ display: "inline" }}
              >
                بازیابی رمز عبور
              </p>
              <ArrowLeft
                size="32"
                style={{ display: "inline" }}
                className="fl pointer-cursor user_section_header"
                onClick={() => {
                  if (mobileActivation === "forget") {
                    navigate("/login");
                  } else if (mobileActivation === "login") {
                    navigate("/login");
                  } else {
                    navigate("/register");
                  }
                }}
              />

              <Form className="mt-4">
                <Form.Group>
                  <Form.Label className="user_section_label">
                    شماره موبایل خود را وارد کنید
                  </Form.Label>
                  <Form.Control
                    className="color-292929 border-606060 wide-input"
                    required
                    type="text"
                    aria-expanded={validMobile}
                    ref={mobileField}
                    onChange={(e) => {
                      setValidMobile(false);
                      if (isNaN(e.currentTarget.value)) {
                        setValidMobile(true);
                      }
                    }}
                  />
                  <Collapse in={validMobile} className={"text-danger"}>
                    <div>
                      لطفا شماره موبایل را با دقت به صورت 09123456789 وارد
                      نمایید
                    </div>
                  </Collapse>
                </Form.Group>

                <Form.Group className="d-grid mt-4">
                  <Button
                    variant="warning"
                    onClick={() => {
                      if (mobileField.current.value === "") {
                        setValidMobile(true);
                        return;
                      }
                      if (mobileField.current.value.length < 11) {
                        setValidMobile(true);
                        return;
                      }

                      navigate("/activate/" + userID);
                    }}
                  >
                    ارسال کد فعالسازی
                  </Button>
                </Form.Group>
              </Form>
            </Col>
            <Col lg={2} md={0} />
            <Col lg={6} md={0}>
              <picture>
                <source
                  media="(max-width:767px)"
                  sizes="0px"
                  srcset="blank.gif 1w"
                />
                <source
                  media="(min-width:768px)"
                  sizes="300px"
                  srcset={SidePicture}
                />
                <img src={SidePicture} alt="" />
              </picture>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default ResetPassword;
