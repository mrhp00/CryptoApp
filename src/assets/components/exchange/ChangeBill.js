import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const ChangeBill = () => {
  let currency = new Intl.NumberFormat("en-US");

  //States and Refs
  const selected_from = useSelector((state) => state.changeCryptoFrom);
  const selected_to = useSelector((state) => state.changeCryptoTo);
  const selectedCredit = useSelector((state) => state.selectedCredit);
  const [from, setFrom] = useState("-");
  const [to, setTo] = useState("-");
  const [amount, setAmount] = useState("-");
  const [base_amount, setBaseAmount] = useState("-");
  const [wage, setWage] = useState("-");
  const [recieve, setRecieve] = useState("-");

  //ON CHANGE
  useEffect(() => {
    setBaseAmount(27820);
    setWage(10000);
    setFrom(selected_from);
    setTo(selected_to);
    setAmount(selectedCredit);
    setRecieve(
      ((parseInt(amount) - parseInt(wage)) / parseInt(base_amount)).toFixed(2)
    );
  }, [selected_from, selected_to, selectedCredit, amount, wage, base_amount]);

  // Main Section
  return (
    <>
      <div dir="rtl" className="section-292929 pb-4">
        <p className="ilia-header pt-3 " style={{ textAlign: "center" }}>
          فاکتور
        </p>
        <hr className="" />
        <Row className="mt-3">
          <Col className="col-6" style={{ paddingBottom: "20px" }}>
            <p className="me-3">نوع سفارش</p>
          </Col>
          <Col className="col-6" style={{ paddingBottom: "20px" }}>
            <p>
              تبدیل {from} به {to}
            </p>
          </Col>
          <Col className="col-6" style={{ paddingBottom: "20px" }}>
            <p className="me-3">میزان</p>
          </Col>
          <Col className="col-6" style={{ paddingBottom: "20px" }}>
            <p>
              {currency.format(amount)} {" تومان "}
            </p>
          </Col>
          <Col className="col-6" style={{ paddingBottom: "20px" }}>
            <p className="me-3">قیمت هر </p>
          </Col>
          <Col className="col-6" style={{ paddingBottom: "20px" }}>
            <p>
              {currency.format(base_amount)} {" تومان "}
            </p>
          </Col>
          <Col className="col-6" style={{ paddingBottom: "20px" }}>
            <p className="me-3">کارمزد انجام تراکنش</p>
          </Col>
          <Col className="col-6" style={{ paddingBottom: "20px" }}>
            <p>
              {currency.format(wage)} {" تومان "}
            </p>
          </Col>
          <Col className="col-6" style={{ paddingBottom: "20px" }}>
            <p className="me-3">میزان دریافتی شما</p>
          </Col>
          <Col className="col-6" style={{ paddingBottom: "20px" }}>
            <p>
              {currency.format(recieve)}
              {" تتر "}
            </p>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default ChangeBill;
