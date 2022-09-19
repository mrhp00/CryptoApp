import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

//Switch Style IOS type
const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
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
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#FCD535",
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

const Setting = (props) => {
  const navigate = useNavigate();

  // States and Refs
  const [userID] = useState("0");
  const [currentUserToken] = useState("ABC");

  // Main Section
  return (
    <>
      {/* PC MODE */}
      <Container
        dir="rtl"
        className="main-container d-none d-md-block d-lg-block d-xl-block d-xxl-block"
        style={{ height: "670px" }}
      >
        <Container className="main-container" style={{ minHeight: "670px" }}>
          <Row>
            <Col className="col-12" xxl xl lg={4}>
              <div className="d-flex section-292929 mt-4" dir="ltr">
                <Button
                  style={{ width: "33%" }}
                  className="btn btn-flat "
                  onClick={() => {
                    navigate("/password/" + userID + "/" + currentUserToken);
                  }}
                >
                  رمز عبور
                </Button>

                <Button
                  style={{ width: "34%" }}
                  className="btn btn-warning btn-flat "
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

          <Row className=" col-12 section-292929 mx-0 mt-4">
            <p className="ilia-header" style={{ marginTop: "32px" }}>
              تنظیم اعلان هشدارها
            </p>
            <Row>
              <p>
                <FormControlLabel
                  control={
                    <IOSSwitch sx={{ m: 1 }} defaultChecked color="warning" />
                  }
                />
                &nbsp; ارسال یا دریافت ارز دیجیتال
              </p>
            </Row>
            <Row>
              <p>
                <FormControlLabel
                  control={
                    <IOSSwitch sx={{ m: 1 }} defaultChecked color="warning" />
                  }
                />
                &nbsp; دریافت پیام از معامله گر
              </p>
            </Row>
            <Row>
              <p>
                <FormControlLabel
                  control={
                    <IOSSwitch sx={{ m: 1 }} defaultChecked color="warning" />
                  }
                />
                &nbsp; وجود پیشنهاد برای اکانت من
              </p>
            </Row>

            <Row>
              <Col
                className="d-none d-lg-grid d-xl-grid d-xxl-grid pb-4"
                xxl
                xl
                lg={4}
              >
                <Button className="btn btn-warning btn-flat mt-4">ذخیره</Button>
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
        className="main-container d-block d-md-none d-lg-none d-xl-none d-xxl-none"
        style={{ height: "670px" }}
      >
        <Col className="col-12" xxl xl lg={4}>
          <div className="d-flex section-292929 mt-4" dir="ltr">
            <Button
              style={{ width: "33%" }}
              className="btn btn-flat  "
              onClick={() => {
                navigate("/password/" + userID + "/" + currentUserToken);
              }}
            >
              رمز عبور
            </Button>

            <Button
              style={{ width: "34%" }}
              className="btn btn-flat btn-warning  "
              onClick={() => {
                navigate("/setting/" + userID + "/" + currentUserToken);
              }}
            >
              تنظیمات
            </Button>

            <Button
              style={{ width: "33%" }}
              className="btn btn-flat "
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

        <Row className=" col-12 section-292929 mx-0 mt-4">
          <p className="ilia-header" style={{ marginTop: "32px" }}>
            تنظیم اعلان هشدارها
          </p>
          <Row>
            <p>
              <FormControlLabel
                control={
                  <IOSSwitch sx={{ m: 1 }} defaultChecked color="warning" />
                }
              />
              &nbsp; ارسال یا دریافت ارز دیجیتال
            </p>
          </Row>
          <Row>
            <p>
              <FormControlLabel
                control={
                  <IOSSwitch sx={{ m: 1 }} defaultChecked color="warning" />
                }
              />
              &nbsp; دریافت پیام از معامله گر
            </p>
          </Row>
          <Row>
            <p>
              <FormControlLabel
                control={
                  <IOSSwitch sx={{ m: 1 }} defaultChecked color="warning" />
                }
              />
              &nbsp; وجود پیشنهاد برای اکانت من
            </p>
          </Row>

          <Row>
            <Col
              className="d-none d-lg-grid d-xl-grid d-xxl-grid pb-5 mt-5"
              xxl
              xl
              lg={4}
            >
              <Button className="btn btn-warning btn-flat ">ذخیره</Button>
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
export default Setting;
