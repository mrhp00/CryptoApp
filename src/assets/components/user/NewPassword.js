import React, { useRef, useState } from "react";
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
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

const NewPassword = (props) => {
  const navigate = useNavigate();

  //States and Refs
  const [validPassword, setValidPassword] = useState(false);
  const passwordField = useRef();
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

              <p className="header-font user_section_header pt-5">
                رمز عبور جدید
              </p>

              <Form>
                <Form.Group>
                  <Form.Label className="user_section_label mt-4">
                    رمز جدید را وارد کنید
                  </Form.Label>
                  <InputGroup>
                    <InputGroup.Text
                      onClick={handlePasswordField}
                      className="section-pass-left3 color-292929 border-606060"
                    >
                      <VisibilityOutlinedIcon />
                    </InputGroup.Text>
                    <Form.Control
                      className="section-pass-right3 color-292929 border-606060 wide-input"
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
                    <div>لطفا رمز عبور جدید را وارد نمایید</div>
                  </Collapse>
                </Form.Group>

                <Form.Group className="d-grid mt-5">
                  <Button
                    variant="warning"
                    onClick={() => {
                      if (passwordField.current.value === "") {
                        setValidPassword(true);
                        return;
                      }
                      navigate("/");
                    }}
                  >
                    ثبت
                  </Button>
                </Form.Group>
              </Form>
            </Col>
            <Col lg={2} md={0} />
            <Col lg={6} md={0}>
              {/* <Image src={SidePicture}/> */}
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
export default NewPassword;
