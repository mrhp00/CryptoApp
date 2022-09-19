import React, { useState, useEffect } from "react";
import { Button, Form, Image, InputGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Tether from "../../images/tether-usd.png";
import BitcoinIcon from "../../images/bitcoin.png";
import CoinIcon from "../../images/coin.png";
import { MenuItem, Select } from "@mui/material";

const Change = () => {
  const dispatch = useDispatch();

  //RAW DATA
  const Cryptoes = [
    {
      id: 1,
      name: "بیت کوین",
      image: (
        <Image src={BitcoinIcon} style={{ width: "20px", height: "20px" }} />
      ),
      credit: 1234567,
    },
    {
      id: 2,
      name: "تتر",
      image: <Image src={Tether} style={{ width: "20px", height: "20px" }} />,
      credit: 88942,
    },
    {
      id: 3,
      name: "TetherUSD",
      image: <Image src={Tether} style={{ width: "20px", height: "20px" }} />,
      credit: 88942,
    },
    {
      id: 4,
      name: "BitCoin",
      image: (
        <Image src={BitcoinIcon} style={{ width: "20px", height: "20px" }} />
      ),
      credit: 88942,
    },
  ];

  //States and Refs
  const [currentCredit, setCurrentCredit] = useState(Cryptoes[0].credit);
  const credit = useSelector((state) => state.credit);
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState(Cryptoes[0].name);
  const [to, setTo] = useState(Cryptoes[1].name);

  //ON CHANGE
  useEffect(() => {
    setCurrentCredit(credit);
  }, [credit]);

  //START UP
  useEffect(() => {
    setCurrentCredit(Cryptoes[0].credit);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Main Section
  return (
    <>
      <div dir="rtl" className="main-container">
        <Form>
          <Form.Group dir="rtl">
            <Form.Label>ارز</Form.Label>
            <p style={{ float: "left" }}>موجودی : &nbsp;{currentCredit}</p>
            <div className="d-grid mt-2 section" dir="rtl">
              <Select
                disableUnderline
                variant="standard"
                className="section-292929 wide-input"
                value={from}
                onChange={(e) => {
                  setFrom(e.target.value);
                }}
                classes="section"
              >
                {Cryptoes.map((value) => (
                  <MenuItem
                    value={value.name}
                    dir="rtl"
                    className="justify-content-start"
                    onClick={() => {
                      setCurrentCredit(value.credit);
                    }}
                  >
                    <div>
                      <InputGroup className="align-items-center">
                        {value.image}
                        &nbsp; &nbsp;
                        {value.name}
                      </InputGroup>
                    </div>
                  </MenuItem>
                ))}
              </Select>
            </div>
          </Form.Group>
          <Form.Group style={{ paddingTop: "20px" }}>
            <Form.Label>را به ارز</Form.Label>
            <div className="d-grid mt-2 section" dir="rtl">
              <Select
                disableUnderline
                variant="standard"
                className="section-292929 wide-input"
                value={to}
                onChange={(e) => {
                  setTo(e.target.value);
                }}
                classes="section"
              >
                {Cryptoes.map((value) => (
                  <MenuItem
                    value={value.name}
                    dir="rtl"
                    className="justify-content-start"
                  >
                    <div>
                      <InputGroup className="align-items-center">
                        {value.image}
                        &nbsp; &nbsp;
                        {value.name}
                      </InputGroup>
                    </div>
                  </MenuItem>
                ))}
              </Select>
            </div>
          </Form.Group>
          <Form.Group style={{ paddingTop: "20px" }}>
            <Form.Label>مقدار</Form.Label>
            <Form.Control
              value={amount}
              className="section-292929 text-start wide-input"
              type="text"
              style={{ border: "0" }}
              placeholder="0"
              onChange={(e) => {
                setAmount(e.currentTarget.value);
              }}
            />

            <p
              onClick={() => {
                setAmount(currentCredit);
              }}
              className="pointer-cursor mt-4 "
            >
              <Image src={CoinIcon} />
              {" انتخاب همه موجودی "}
            </p>
          </Form.Group>
          <Form.Group className="d-grid">
            <Button
              className="btn-flat btn-warning d-grid"
              style={{ marginTop: "20px" }}
              onClick={() => {
                dispatch({
                  type: "SET_changeCryptoFrom",
                  from: from,
                });
                dispatch({
                  type: "SET_changeCryptoTo",
                  to: to,
                });
                dispatch({
                  type: "SET_selectedCredit",
                  credit: amount,
                });
              }}
            >
              تبدیل کن
            </Button>
          </Form.Group>
        </Form>
      </div>
    </>
  );
};
export default Change;
