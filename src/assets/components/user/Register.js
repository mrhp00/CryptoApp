import React, { useState, useRef, useEffect } from "react";
import {
  Button,
  Col,
  Collapse,
  Container,
  Form,
  Row,
  InputGroup,
} from "react-bootstrap";
import SidePicture from "../../images/side-image.png";
import SidePictureMobile from "../../images/side-image-mobile.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

const Register = (props) => {
  const dispatch = useDispatch();

  //States and Refs
  const navigate = useNavigate();
  const [userID] = useState("0");
  const [validName, setValidName] = useState(false);
  const [validMobile, setValidMobile] = useState(false);
  const [validPassword, setvalidPassword] = useState(false);
  const [validCaptcha, setValidCaptcha] = useState(false);
  const nameField = useRef();
  const mobileField = useRef();
  const passwordField = useRef();
  const captchaField = useRef();
  const referenceField = useRef();
  const [passwordFieldType, setPasswordFieldType] = useState("password");
  const [captcha, setCaptcha] = useState();

  //Show & Hide Password
  const handlePasswordField = () => {
    if (passwordFieldType === "password") {
      setPasswordFieldType("text");
    } else {
      setPasswordFieldType("password");
    }
  };

  //START UP
  useEffect(() => {
    setCaptcha(Math.floor(100000 + Math.random() * 900000));
  }, []);

  // Main Section
  return (
    <>
      <div className="section">
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
                <picture className="mt-3">
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

              <p className="user_section_header mt-5">ایجاد حساب</p>

              <Form className="mt-5 pb-5">
                <Form.Group>
                  <Form.Label className="user_section_label">
                    نام و نام خانوادگی
                  </Form.Label>
                  <Form.Control
                    className="color-292929 border-606060 wide-input"
                    style={{ borderRadius: "8px" }}
                    required
                    type="text"
                    aria-expanded={validName}
                    ref={nameField}
                    onChange={() => {
                      setValidName(false);
                    }}
                  />
                  <Collapse in={validName} className={"text-danger"}>
                    <div>لطفا نام و نام خانوادگی را وارد نمایید</div>
                  </Collapse>
                </Form.Group>
                <Form.Group className="mt-4">
                  <Form.Label className="user_section_label">
                    شماره موبایل
                  </Form.Label>
                  <Form.Control
                    className="color-292929 border-606060 wide-input"
                    style={{ borderRadius: "8px" }}
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

                <Form.Group className="mt-4">
                  <Form.Label className="user_section_label">
                    رمز عبور
                  </Form.Label>
                  <InputGroup>
                    <InputGroup.Text
                      className="section-pass-left3"
                      onClick={handlePasswordField}
                    >
                      <VisibilityOutlinedIcon />
                    </InputGroup.Text>
                    <Form.Control
                      className="section-pass-right3 wide-input"
                      required
                      type={passwordFieldType}
                      aria-expanded={validPassword}
                      ref={passwordField}
                      onChange={() => {
                        setvalidPassword(false);
                      }}
                    />
                  </InputGroup>
                  <Collapse in={validPassword} className={"text-danger"}>
                    <div>لطفا رمز عبور را وارد نمایید</div>
                  </Collapse>
                </Form.Group>

                <Form.Group className="mt-4">
                  <Form.Label className="user_section_label">
                    کد امنیتی
                  </Form.Label>

                  <span
                    style={{
                      align: "center",
                      float: "left",
                      paddingTop: "5px",
                    }}
                  >
                    <div className="captcha-box text-center user_section_label">
                      {captcha}
                    </div>
                  </span>
                  <Form.Control
                    className="color-292929 border-606060 wide-input"
                    style={{ borderRadius: "8px" }}
                    required
                    type="text"
                    aria-expanded={validCaptcha}
                    ref={captchaField}
                    onChange={() => {
                      setValidCaptcha(false);
                    }}
                  />
                  <Collapse in={validCaptcha} className={"text-danger"}>
                    <div>لطفا کد امنیتی را صحیح وارد نمایید</div>
                  </Collapse>
                </Form.Group>

                <Form.Group className="mt-4">
                  <Form.Label className="user_section_label">
                    کد معرف
                  </Form.Label>
                  <span
                    style={{
                      align: "center",
                      float: "left",
                      paddingTop: "5px",
                    }}
                    className="user_section_label"
                  >
                    اختیاری
                  </span>
                  <Form.Control
                    type="text"
                    ref={referenceField}
                    className="color-292929 border-606060 wide-input"
                    style={{ borderRadius: "8px" }}
                  />
                </Form.Group>

                <Form.Group className="d-grid mt-5">
                  <Button
                    variant="warning"
                    onClick={() => {
                      if (nameField.current.value === "") {
                        setValidName(true);
                        return;
                      }
                      if (mobileField.current.value === "") {
                        setValidMobile(true);
                        return;
                      }
                      if (mobileField.current.value.length < 11) {
                        setValidMobile(true);
                        return;
                      }
                      if (passwordField.current.value === "") {
                        setvalidPassword(true);
                        return;
                      }
                      if (captchaField.current.value === "") {
                        setValidCaptcha(true);
                        return;
                      }
                      if (
                        parseInt(captchaField.current.value) !== parseInt(captcha)
                      ) {
                        setValidCaptcha(true);
                        return;
                      }
                      dispatch({ type: "mobileActivation", status: "" });
                      navigate("/activate/" + userID);
                    }}
                  >
                    ادامه
                  </Button>

                  <Form.Text className="text-muted mt-4 user_section_label">
                    حساب کاربری دارید؟
                    <p
                      style={{ display: "inline", color: "#FCD535" }}
                      onClick={() => {
                        navigate("/login");
                      }}
                      className="px-3 pointer-cursor "
                    >
                      ورود
                    </p>
                  </Form.Text>
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
export default Register;
