import React, { useState, useRef, useEffect } from "react";
import { Button, Col, Collapse, Container, Form, Row } from "react-bootstrap";
import SidePicture from "../../images/side-image.png";
import SidePictureMobile from "../../images/side-image-mobile.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ArrowLeft } from "iconsax-react";

const Activate = (props) => {
  const navigate = useNavigate();

  //States and Refs
  const [activationVerification, setActivationVerification] = useState(false);
  const [activation, setActivation] = useState("");
  const [buttonVariant, setButtonVariant] = useState("secondary");
  const activationReference = useRef();
  const buttonReference = useRef();
  const mobileActivation = useSelector((state) => state.mobileActivation);
  const currentUserToken = useSelector((state) => state.currentUserToken);
  const currentUser = useSelector((state) => state.currentUser);
  const [buttonLabel, setButtonLabel] = useState("ایجاد حساب");
  const [btn, setBtn] = useState(true);

  //START UP
  useEffect(() => {
    if (mobileActivation === "forget") {
      setButtonLabel("ادامه");
    } else if (mobileActivation === "login") {
      setButtonLabel("ورود");
    } else {
      setButtonLabel("ایجاد حساب");
    }
  }, [mobileActivation]);

  //Button Navigation
  const handler = () => {
    if (mobileActivation === "forget") {
      navigate("/new_password/" + currentUser + "/" + currentUserToken);
    }
  };

  //Button Disabler
  useEffect(() => {
    if (activation !== "") {
      setButtonVariant("btn-warning");
      setBtn(false);
    } else {
      setButtonVariant("btn-disabled");
      setBtn(true);
    }
  }, [activation]);

  // Main Section
  return (
    <>
      <div className="section" style={{ height: "100vh" }}>
        <Container dir="rtl">
          <Row>
            <Col lg={4} md={12} style={{ height: "100vh" }}>
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
                    srcset={SidePictureMobile}
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
                style={{ display: "inline" }}
                className="user_section_header mt-5"
              >
                کد تایید
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

              <Form className="mt-4 user_section_label">
                <Form.Group>
                  <Form.Label>کد ارسال شده به موبایل را وارد کنید</Form.Label>
                  <Form.Control
                    style={{ borderRadius: "8px" }}
                    className="text-start color-292929 border-606060 wide-input"
                    required
                    type="text"
                    aria-expanded={activationVerification}
                    ref={activationReference}
                    onChange={(e) => {
                      setActivationVerification(false);
                      setActivation(e.currentTarget.value);
                      if (e.currentTarget.value !== "") {
                        buttonReference.current.disabled = false;
                      } else {
                        buttonReference.current.disabled = true;
                      }
                    }}
                  />
                  <Collapse in={activationVerification} className={"text-danger"}>
                    <div>لطفا کد فعالسازی را با دقت وارد نمایید</div>
                  </Collapse>
                  <Form.Text
                    style={{ float: "left" }}
                    onClick={() => {
                      navigate("/activate/" + currentUser);
                    }}
                    className="user_section_label pointer-cursor "
                  >
                    ارسال مجدد کد
                  </Form.Text>
                </Form.Group>

                <Form.Group className="d-grid mt-5">
                  <Button
                    className={buttonVariant}
                    ref={buttonReference}
                    aria-disabled={btn}
                    onClick={handler}
                  >
                    {buttonLabel}
                  </Button>
                </Form.Group>
              </Form>
            </Col>
            <Col lg={2} md={0} />
            <Col lg={6} md={0} className="">
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
export default Activate;
