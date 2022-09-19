import React from "react";
import { Button, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Buy from "./Buy";
import Sell from "./Sell";

const Order = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //States and Refs
  const tab = useSelector((state) => state.orderCurrentTab);

  // Main Section
  return (
    <>
      <div>
        <div className={props.backgoundCSS}>
          <Row>
            <p
              style={{ textAlign: "center", display: "block" }}
              className="d-sm-inline d-md-inline d-lg-inline d-xl-none d-xxl-none ilia-header pt-3"
            >
              خرید و فروش
            </p>
          </Row>
          <div dir="ltr" className="btn-container mt-4">
            <Button
              className="btn btn-flat"
              style={{ width: "33%" }}
              onClick={() => {
                navigate("/open_orders");
              }}
            >
              سفارشات باز
            </Button>
            {tab === "buy" ? (
              <>
                <Button
                  style={{ width: "34%" }}
                  className="btn btn-flat "
                  onClick={() => {
                    dispatch({
                      type: "SET_orderCurrentTab",
                      tab: "sell",
                    });
                  }}
                >
                  فروش
                </Button>
                <Button
                  style={{ width: "33%" }}
                  className="btn-warning"
                  onClick={() => {
                    dispatch({
                      type: "SET_orderCurrentTab",
                      tab: "buy",
                    });
                  }}
                >
                  خرید
                </Button>
              </>
            ) : (
              <>
                <Button
                  style={{ width: "34%" }}
                  className=" btn-warning"
                  onClick={() => {
                    dispatch({
                      type: "SET_orderCurrentTab",
                      tab: "sell",
                    });
                  }}
                >
                  فروش
                </Button>
                <Button
                  style={{ width: "33%" }}
                  className="btn btn-flat"
                  onClick={() => {
                    dispatch({
                      type: "SET_orderCurrentTab",
                      tab: "buy",
                    });
                  }}
                >
                  خرید
                </Button>
              </>
            )}
          </div>
          <div className="mt-3">
            {tab === "buy" ? (
              <Buy backgoundCSS={"main-container"} space="64px" />
            ) : (
              <Sell backgoundCSS={"main-container"} space="64px" />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Order;
