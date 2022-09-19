import React, { useState, useEffect } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import noCardImageDark from "../../images/nocards_dark.svg";
import noCardImageLight from "../../images/nocards_light.svg";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import CardMask from "../../images/card_mask.svg";

const AllCards = (props) => {
  const dispatch = useDispatch();
  const dark = useSelector((state) => state.dark);

  //States and Refs
  const cards = useSelector((state) => state.cards);
  const [rawData, setRawData] = useState([]);

  // Delete Card
  const deleteCard = (shaba_number) => {
    let updated = [];
    // eslint-disable-next-line array-callback-return
    rawData.map((value) => {
      if (value.shaba !== shaba_number) {
        updated.push({
          shaba: value.shaba,
          card: value.card,
          image: value.image,
          verified: value.verified,
        });
      }
    });
    setRawData(updated);
    dispatch({ type: "SET_CARDS", cards: updated });
  };

  //On Change
  useEffect(() => {
    setRawData(cards);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Main Section
  return (
    <>
      <Container dir="rtl" className="section-292929">
        <ToastContainer className="text-end" toastClassName="section-292929" />
        <Row className="py-5 my-4">
          {rawData.length === 0 ? (
            <>
              {dark === true ? (
                <Image
                  src={noCardImageDark}
                  className="mx-auto "
                  style={{ width: "300px", height: "350px" }}
                />
              ) : (
                <Image
                  src={noCardImageLight}
                  className="mx-auto "
                  style={{ width: "300px", height: "350px" }}
                />
              )}
            </>
          ) : (
            <>
              {rawData.map((value) => (
                <Col
                  key={value.id}
                  className="col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6"
                  style={{ paddingBottom: "20px" }}
                >
                  <div style={{ position: "absolute", zIndex: "2" }}>
                    <Image src={CardMask} />
                  </div>
                  <div className="all-cards" style={{ zIndex: "1" }}>
                    <Image
                      src={value.image}
                      style={{
                        display: "block",
                        float: "left",
                        paddingLeft: "20px",
                        paddingTop: "20px",
                      }}
                    />
                    <p
                      style={{
                        paddingRight: "60px",
                        paddingBottom: "-10px",
                        paddingTop: "30px",
                        color: "#FFFFFF",
                      }}
                    >
                      شبا
                    </p>
                    <p
                      style={{
                        paddingRight: "60px",
                        paddingBottom: "-10px",
                        color: "#FFFFFF",
                      }}
                    >
                      {value.shaba}
                    </p>
                    <p
                      style={{
                        paddingRight: "60px",
                        paddingBottom: "-10px",
                        color: "#FFFFFF",
                      }}
                    >
                      شماره کارت
                    </p>
                    <p
                      style={{
                        paddingRight: "60px",
                        paddingBottom: "20px",
                        color: "#FFFFFF",
                      }}
                    >
                      {value.card}
                    </p>
                  </div>
                  {value.verified ? (
                    <>
                      <CheckCircleOutlinedIcon />
                      <p style={{ display: "inline" }}> تایید شده</p>
                      <DeleteOutlineOutlinedIcon
                        id={value.shaba}
                        style={{ float: "left" }}
                        onClick={(e) => {
                          deleteCard(e.currentTarget.id);
                          toast.success("عملیات با موفقیت انجام شد", {
                            position: "top-center",
                          });
                        }}
                      />
                      <BorderColorOutlinedIcon
                        id={value.shaba}
                        style={{ float: "left", marginLeft: "10px" }}
                        onClick={(e) => {
                          dispatch({ type: "SET_cardEditMode", cardEditMode: true });
                          dispatch({
                            type: "SET_editShaba",
                            editShaba: e.currentTarget.id,
                          });
                        }}
                      />
                    </>
                  ) : (
                    <p className="text-center">در حال بررسی</p>
                  )}
                </Col>
              ))}
            </>
          )}
        </Row>
      </Container>
    </>
  );
};
export default AllCards;
