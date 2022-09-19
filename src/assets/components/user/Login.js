import React, { useRef, useState, useEffect } from "react";
import {
  Button,
  Col,
  Collapse,
  Container,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
import SidePicture from "../../images/side-image.png";
import SidePictureMobile from "../../images/side-image-mobile.png";
import { useNavigate } from "react-router-dom";
import { Switch } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

const Login = (props) => {
  // States and Refs
  const navigate = useNavigate();

  const [validMobile, setValidMobile] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [validCaptcha, setValidCaptcha] = useState(false);
  const mobileField = useRef();
  const passwordField = useRef();
  const captchaField = useRef();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser);
  const [captcha, setCaptcha] = useState();
  const [passwordFieldType, setPasswordFieldType] = useState("password");

  //Show & Hide Password
  const handlePasswordField = () => {
    if (passwordFieldType === "password") {
      setPasswordFieldType("text");
    } else {
      setPasswordFieldType("password");
    }
  };

  //Switch Style IOS type
  const IOSSwitch = styled((props) => (
    <Switch
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      {...props}
    />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(16px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          backgroundColor:
            theme.palette.mode === "dark" ? "#2ECA45" : "#FCD535",
          opacity: 1,
          border: 0,
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.5,
        },
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        color: "#33cf4d",
        border: "6px solid #fff",
      },
      "&.Mui-disabled .MuiSwitch-thumb": {
        color:
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 22,
      height: 22,
    },
    "& .MuiSwitch-track": {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
      opacity: 1,
      transition: theme.transitions.create(["background-color"], {
        duration: 500,
      }),
    },
  }));

  // START UP
  useEffect(() => {
    setCaptcha(Math.floor(100000 + Math.random() * 900000));
  }, []);

  // Main Section
  return (
    <>
      <div className="section" style={{ height: "100vh" }}>
        <Container dir="rtl">
          <Row>
            <Col lg={4} md={12} className="">
              <div
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
                className="pt-4"
              >
                <picture>
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

              <p className="user_section_header mt-4">ورود</p>

              <Form className="mt-5">
                <Form.Group>
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
                      onClick={handlePasswordField}
                      className="section-pass-left3"
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
                        setValidPassword(false);
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
                    className="color-292929 border-606060 wide-input wide-input"
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

                <Form.Group>
                  <p className="d-inline user_section_label">
                    {"مرا به خاطر بسپار"}
                    <IOSSwitch sx={{ m: 1 }} defaultChecked color="warning" />
                  </p>
                  <p
                    style={{
                      display: "inline",
                      float: "left",
                      paddingTop: "10px",
                    }}
                    className="user_section_label pointer-cursor "
                    onClick={() => {
                      dispatch({ type: "mobileActivation", status: "forget" });
                      navigate("/reset");
                    }}
                  >
                    فراموشی رمز عبور
                  </p>
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
                      if (passwordField.current.value === "") {
                        setValidPassword(true);
                        return;
                      }
                      if (captchaField.current.value === "") {
                        setValidCaptcha(true);
                        return;
                      }
                      // eslint-disable-next-line eqeqeq
                      if (captchaField.current.value != captcha) {
                        setValidCaptcha(true);
                        return;
                      }
                      dispatch({ type: "mobileActivation", status: "login" });
                      navigate("/activate/" + currentUser);
                    }}
                  >
                    ادامه
                  </Button>

                  <Form.Text className="text-muted mt-4 user_section_label">
                    حساب کاربری ندارید؟
                    <p
                      className=" px-3 pointer-cursor "
                      style={{ display: "inline", color: "orange" }}
                      onClick={() => {
                        navigate("/register");
                      }}
                    >
                      ثبت نام
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
                  sizes="100vh"
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
export default Login;
