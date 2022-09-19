import React, { useState } from "react";
import { Button, Form, Image, InputGroup, Row } from "react-bootstrap";
import { MenuItem, Select, Switch } from "@mui/material";
import { styled } from "@mui/material/styles";
import CoinIcon from "../../images/coin.png";
import BitcoinIcon from "../../images/bitcoin.png";
import Tether from "../../images/tether-usd.png";
import IranFlag from "../../images/iranflag.png";
import { useSelector } from "react-redux";

const Buy = (props) => {
  //RAW DATA
  const Cryptoes = [
    {
      id: 1,
      name: "bitcoin",
      pname: "بیت کوین",
      image: (
        <Image src={BitcoinIcon} style={{ width: "20px", height: "20px" }} />
      ),
      amount: 112,
    },
    {
      id: 2,
      name: "eth",
      pname: "اتریوم",
      image: <Image src={Tether} style={{ width: "20px", height: "20px" }} />,
      amount: 11254,
    },
    {
      id: 3,
      name: "irr",
      pname: "تومان",
      image: <Image src={IranFlag} style={{ width: "20px", height: "20px" }} />,
      amount: 11254554,
    },
  ];

  //States and Refs
  const [balance, setBalance] = useState(Cryptoes[0].amount);
  const [specialPrice, setSpecialPrice] = useState(false);
  const SpecialPrice = () => <div>{"قیمت خرید"}</div>;
  const [from, setFrom] = useState(Cryptoes[0].pname);
  const [to, setTo] = useState(Cryptoes[1].pname);
  const page = useSelector((state) => state.page);

  //Switch Style IOS Type
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

  //Special Price
  const handleSpecialPrice = (e) => {
    if (e.target.checked === true) {
      setSpecialPrice(true);
    } else {
      setSpecialPrice(false);
    }
  };

  // Main Section
  return (
    <>
      <div className={props.backgroundCSS}>
        <Form>
          <Form.Group className="pt-3">
            {"بازار به : "}
            <Form.Check
              inline
              label="تتر"
              name="currency"
              type="radio"
              id="currency"
              className=""
            />
            <Form.Check
              inline
              label="تومان"
              name="currency"
              type="radio"
              id="currency"
            />
            <div style={{ display: "inline", float: "left" }}>
              {" موجودی : "}
              {balance}
            </div>
          </Form.Group>

          <Form.Group className="mt-4">
            {page !== "Dashboard" ? (
              <>
                {"خرید در قیمت خاص"}
                <IOSSwitch
                  sx={{ m: 1 }}
                  checked={specialPrice}
                  color="warning"
                  onChange={handleSpecialPrice}
                />
                <p className="mt-4" style={{ fontSize: "14px" }}>
                  انتخاب ارز و مقدار خرید
                </p>
              </>
            ) : (
              <p className="mt-2" style={{ fontSize: "14px" }}>
                انتخاب ارز
              </p>
            )}
          </Form.Group>
          <Form.Group>
            <Row className="align-items-center justify-items-center">
              <InputGroup
                dir="rtl"
                className="align-items-center justify-items-center"
              >
                <Select
                  disableUnderline
                  variant="standard"
                  className="section-pass-left2 wide-input select-margin-top"
                  value={from}
                  onChange={(e) => {
                    setFrom(e.target.value);
                  }}
                  style={{
                    minWidth: "50%",
                  }}
                  classes="section"
                >
                  {Cryptoes.map((value) => (
                    <MenuItem
                      value={value.pname}
                      dir="rtl"
                      className="justify-content-start"
                      onClick={() => {
                        setBalance(value.amount);
                      }}
                    >
                      <div>
                        <InputGroup className="align-items-center">
                          {value.image}
                          &nbsp; &nbsp;
                          {value.pname}
                        </InputGroup>
                      </div>
                    </MenuItem>
                  ))}
                </Select>
                <p className="d-grid divider wide-input">&nbsp;|&nbsp;</p>
                <Form.Control
                  type="text"
                  placeholder="1"
                  className="section-pass-right2 wide-input select-margin-top"
                  style={{
                    textAlign: "left",
                  }}
                />
              </InputGroup>
            </Row>
          </Form.Group>
          <div
            className="d-none d-md-block d-lg-block d-xl-block d-xxl-block change-switch pointer-cursor d-grid"
            onClick={() => {
              let f = from.slice();
              let t = to.slice();
              setFrom(t);
              setTo(f);
              // eslint-disable-next-line array-callback-return
              Cryptoes.map((v) => {
                if (v.pname === t) {
                  setBalance(v.amount);
                }
              });
            }}
          >
            ↓↑
          </div>
          <div
            style={{
              textAlign: "center",
              paddingTop: props.space,
              paddingButtom: props.space,
            }}
            className="d-block d-md-none d-lg-none d-xl-none d-xxl-none"
          ></div>
          <Form.Group>
            <Row className="align-items-center justify-items-center">
              {specialPrice ? <SpecialPrice /> : null}
              <InputGroup
                dir="rtl"
                className="align-items-center justify-items-center"
              >
                <Select
                  disableUnderline
                  variant="standard"
                  className="section-pass-left2 wide-input select-margin-top"
                  value={to}
                  onChange={(e) => {
                    setTo(e.target.value);
                  }}
                  style={{
                    minWidth: "50%",
                  }}
                  classes="section"
                >
                  {Cryptoes.map((value) => (
                    <MenuItem
                      value={value.pname}
                      dir="rtl"
                      className="justify-content-start"
                    >
                      <div>
                        <InputGroup className="align-items-center">
                          {value.image}
                          &nbsp; &nbsp;
                          {value.pname}
                        </InputGroup>
                      </div>
                    </MenuItem>
                  ))}
                </Select>
                <p className="d-grid divider wide-input">&nbsp;|&nbsp;</p>
                <Form.Control
                  type="text"
                  placeholder="1"
                  className="section-pass-right2 wide-input select-margin-top"
                  style={{
                    textAlign: "left",
                  }}
                />
              </InputGroup>
            </Row>

            <p style={{ display: "inline" }} onClick={() => {}}>
              <Image src={CoinIcon} />
              {" انتخاب همه موجودی "}
            </p>
          </Form.Group>

          <Form.Group className="d-grid mt-4">
            <Button className="btn btn-warning btn-flat ">خرید</Button>
          </Form.Group>
        </Form>
      </div>
    </>
  );
};
export default Buy;
