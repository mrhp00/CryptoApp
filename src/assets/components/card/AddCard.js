import React, { useEffect, useState } from "react";
import { Container, Form, Button, InputGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Maskan from "../../images/maskan.png";
import { toast, ToastContainer } from "react-toastify";

const AddCard = (props) => {
  const dispatch = useDispatch();

  //States and Refs
  const cards = useSelector((state) => state.cards);
  const edit = useSelector((state) => state.cardEditMode);
  const editShaba = useSelector((state) => state.editShaba);
  const [rawData, setRawData] = useState([]);
  const [shabaField, setShabaField] = useState([]);
  const [cardField, setCardField] = useState([]);

  //On Change
  useEffect(() => {
    setRawData(cards);
  }, [cards]);
  useEffect(() => {
    dispatch({ type: "SET_CARDS", cards: rawData });
  }, [dispatch, rawData]);
  useEffect(() => {
    if (edit === true) {
      // eslint-disable-next-line array-callback-return
      rawData.map((value) => {
        // eslint-disable-next-line eqeqeq
        if (value.shaba == editShaba) {
          setShabaField(value.shaba);
          setCardField(value.card);
        }
      });
    }
  }, [edit, editShaba, rawData]);

  // Main Section
  return (
    <>
      <Container dir="rtl" className="main-container">
        <ToastContainer className="text-end" toastClassName="section-292929" />
        <Form>
          <Form.Group>
            <p
              className="ilia-non-header text-center"
              style={{ paddingTop: "24px" }}
            >
              افزودن حساب بانکی
            </p>
            <hr />
          </Form.Group>
          <Form.Group style={{ paddingTop: "20px" }}>
            <Form.Label>شماره کارت</Form.Label>
            <Form.Control
              value={cardField}
              className="section-292929 wide-input"
              type="text"
              style={{ textAlign: "left", border: 0 }}
              onChange={(e) => {
                setCardField(e.currentTarget.value);
              }}
            />
          </Form.Group>
          <Form.Group style={{ paddingTop: "20px" }}>
            <Form.Label>شماره شبا</Form.Label>
            <InputGroup>
              <Form.Control
                value={shabaField}
                className="section-pass-left2 wide-input"
                style={{ textAlign: "left" }}
                type="text"
                onChange={(e) => {
                  setShabaField(e.currentTarget.value);
                }}
              />
              <InputGroup.Text className="section-pass-right2">
                IR
              </InputGroup.Text>
            </InputGroup>
          </Form.Group>
          <Form.Group style={{ paddingTop: "20px" }}>
            <Form.Label>انتخاب کارت</Form.Label>
            <Form.Select className="section-292929" style={{ border: 0 }}>
              <option selected disabled className="section-292929">
                انتخاب کنید
              </option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="d-grid mt-4">
            <Button
              className="btn-flat btn-warning d-grid"
              style={{ marginTop: "20px" }}
              onClick={() => {
                let updated = [];
                if (edit) {
                  // eslint-disable-next-line array-callback-return
                  rawData.map((value) => {
                    // eslint-disable-next-line eqeqeq
                    if (value.shaba != editShaba) {
                      updated.push({
                        shaba: value.shaba,
                        card: value.card,
                        image: value.image,
                        verified: value.verified,
                      });
                    } else {
                      updated.push({
                        shaba: shabaField,
                        card: cardField,
                        image: Maskan,
                        verified: false,
                      });
                    }
                  });
                  setRawData(updated);
                  dispatch({ type: "SET_cardEditMode", cardEditMode: false });
                  setShabaField("");
                  setCardField("");
                  toast.success("عملیات با موفقیت انجام شد", {
                    position: "top-center",
                  });
                } else {
                  // eslint-disable-next-line array-callback-return
                  rawData.map((value) => {
                    updated.push({
                      shaba: value.shaba,
                      card: value.card,
                      image: value.image,
                      verified: value.verified,
                    });
                  });
                  updated.push({
                    shaba: shabaField,
                    card: cardField,
                    image: Maskan,
                    verified: false,
                  });
                  setRawData(updated);
                  setShabaField("");
                  setCardField("");
                  toast.success("عملیات با موفقیت انجام شد", {
                    position: "top-center",
                  });
                }
              }}
            >
              {edit ? <>ذخیره</> : <>افزودن کارت</>}
            </Button>
          </Form.Group>
        </Form>
      </Container>
    </>
  );
};
export default AddCard;
