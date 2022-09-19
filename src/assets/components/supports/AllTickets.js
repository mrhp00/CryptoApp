import React, { useState, useRef } from "react";
import { Row, Col, Button, Image, Form, Modal } from "react-bootstrap";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { toast } from "react-toastify";

const AllTickets = () => {
  //States and Refs
  const [replyClass, setReplyClass] = useState("d-none");
  const [replyCaption, setReplyCaption] = useState("پاسخ");
  const [images, setImages] = useState([]);
  const imageSelect = useRef();
  const [imagePreview, setImagePreview] = useState(false);
  const [selectedImage, setSelectedImage] = useState();

  //Image Preview
  const showImage = () => {
    setImagePreview(true);
  };
  const hideImage = () => {
    setImagePreview(false);
  };

  //RAW DATA
  const ticket_data = [
    {
      id: 1,
      header: "ABC",
      subject: "مشکل در ثبت خدمت",
      text: "خیلی ساده بگم شما قراره اون فردی باشید که...",
      date: "1400/02/17",
      attachments: ["123.jpg", "321.bmp"],
      answer: true,
      answers: [
        {
          sender: "ilia system",
          text: "خیلی ساده بگم شما قراره اون فردی باشید که...خیلی ساده بگم شما قراره اون فردی باشید که...خیلی ساده بگم شما قراره اون فردی باشید که...خیلی ساده بگم شما قراره اون فردی باشید که...خیلی ساده بگم شما قراره اون فردی باشید که...خیلی ساده بگم شما قراره اون فردی باشید که...",
          date: "1400/02/17",
        },
      ],
    },
    {
      id: 2,
      header: "ABC",
      subject: "مشکل در ثبت خدمت",
      text: "خیلی ساده بگم شما قراره اون فردی باشید که...",
      date: "1400/02/17",
      attachments: ["123.jpg", "321.bmp"],
      answer: true,
      answers: [
        {
          sender: "ilia system",
          text: "خیلی ساده بگم شما قراره اون فردی باشید که...",
          date: "1400/02/17",
        },
      ],
    },
  ];

  //Image List Change
  const onImageChange = (e) => {
    const image_list = images.slice();
    let url_holder = URL.createObjectURL(...e.target.files);
    let down = false;
    image_list.push({
      imgFile: e.target.files,
      imgURL: url_holder,
    });
    setImages(image_list);
    // eslint-disable-next-line array-callback-return
    image_list.map((value) => {
      if (value.imgURL === url_holder) {
        toast.success("آپلود با موفقیت انجام شد", { position: "top-center" });
        down = true;
      }
    });
    if (down === false) {
      toast.error("دوباره امتحان کنید", { position: "top-center" });
    }
    console.log(images);
  };

  // Main Section
  return (
    <>
      {/* PC MODE */}
      <div
        style={{ minHeight: "799px" }}
        className="d-none d-md-block d-lg-block d-xxl-block d-xl-block"
      >
        {ticket_data.map((value) => (
          <>
            <Accordion className="tickets support-shadow mt-3 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 support-acc-pc">
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Row>
                  <Col className="col-6">
                    <p>تیکت شماره {value.id}</p>
                  </Col>
                  <Col className="col-6 text-center text-md-start text-lg-start text-xl-start text-xxl-start">
                    {value.answer === true ? (
                      <div>
                        <p style={{ display: "inline" }}>پاسخ داده شده</p>
                        <p style={{ display: "inline", marginRight: "16px" }}>
                          {value.date}
                        </p>
                      </div>
                    ) : (
                      <div>
                        <p style={{ display: "inline" }}>پاسخ داده نشده</p>
                        <p style={{ display: "inline", marginRight: "16px" }}>
                          {value.date}
                        </p>
                      </div>
                    )}
                  </Col>
                  <Col className="col-12 mt-4 mt-md-3 mt-lg-3 mt-xl-3 mt-xxl-3">
                    <p
                      style={{ fontSize: "18px", display: "inline" }}
                      className="text-center text-md-end text-lg-end text-xl-end text-xxl-end"
                    >
                      {value.subject}
                    </p>
                    {value.attachments.length !== 0 ? (
                      <>
                        {value.attachments.map((file) => (
                          <div className="support-files text-center mx-1">
                            <p>{file}</p>
                          </div>
                        ))}
                      </>
                    ) : null}
                  </Col>
                </Row>
              </AccordionSummary>
              <AccordionDetails>
                <div
                  style={{ borderRight: "4px solid #F0B90B" }}
                  className="me-0"
                >
                  <p style={{ fontSize: "18px", marginRight: "8px" }}>شما</p>
                  <p style={{ marginRight: "8px" }}>{value.text}</p>
                </div>
                {value.answer === false ? null : (
                  <>
                    {value.answers.map((value2) => (
                      <>
                        <div
                          style={{ borderRight: "4px solid #F0B90B" }}
                          className="me-4 me-md-5 me-lg-5 me-xl-5 me-xxl-5"
                          key={value2.id}
                        >
                          <p style={{ float: "left" }}>{value2.date}</p>
                          <p style={{ fontSize: "18px", marginRight: "8px" }}>
                            {value2.sender}
                          </p>

                          <p style={{ marginRight: "8px" }}>{value2.text}</p>
                        </div>
                      </>
                    ))}
                    <p
                      style={{
                        float: "left",
                        color: "#5AB723",
                        cursor: "pointer",
                      }}
                      onClick={(e) => {
                        if (replyCaption === "پاسخ") {
                          setReplyCaption("لغو پاسخ");
                          setReplyClass("d-block");
                        } else {
                          setReplyCaption("پاسخ");
                          setReplyClass("d-none");
                        }
                      }}
                    >
                      {replyCaption}
                    </p>
                  </>
                )}
                <Col className={replyClass}>
                  <>
                    <Form.Group>
                      <Form.Label className="mt-3 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4">
                        پاسخ خود را وارد کنید
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={4}
                        className="support-text"
                      />
                    </Form.Group>
                    <Form.Group className="mt-3 d-flex ">
                      {images.length > 0 ? (
                        <>
                          {images.map((value, key) => (
                            <div
                              key={key}
                              className="support-upload-div ms-2 d-flex justify-content-center"
                            >
                              <div
                                style={{ position: "absolute", zIndex: "2" }}
                              >
                                <DeleteIcon
                                  className="mx-2"
                                  style={{ cursor: "pointer" }}
                                  onClick={() => {
                                    let temp = [];
                                    // eslint-disable-next-line array-callback-return
                                    images.map((v) => {
                                      if (v.imgFile !== value.imgFile) {
                                        temp.push({
                                          imgFile: v.imgFile,
                                          imgURL: v.imgURL,
                                        });
                                      }
                                    });
                                    setImages(temp);
                                    toast.success("عملیات با موفقیت انجام شد", {
                                      position: "top-center",
                                    });
                                  }}
                                />
                                <VisibilityIcon
                                  className="mx-2"
                                  style={{ cursor: "pointer" }}
                                  onClick={() => {
                                    setSelectedImage(value.imgURL);
                                    showImage();
                                  }}
                                />
                              </div>

                              <div style={{ zIndex: "1" }}>
                                <Image
                                  src={value.imgURL}
                                  id={key}
                                  className="support-image"
                                />
                              </div>
                            </div>
                          ))}
                        </>
                      ) : null}
                      <input
                        type="file"
                        accept="image/*"
                        ref={imageSelect}
                        onChange={onImageChange}
                        style={{ display: "none" }}
                      />
                      <div
                        className="support-upload-div d-flex mx-2 align-items-center align-content-center justify-content-center justify-items-center"
                        onClick={() => {
                          imageSelect.current.click();
                        }}
                        style={{ cursor: "pointer" }}
                      >
                        <p>
                          <AddOutlinedIcon className="d-block" />
                          آپلود
                        </p>
                      </div>
                    </Form.Group>
                    <Form.Group className="mt-3">
                      <Button className="btn-copy col-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                        ثبت
                      </Button>
                    </Form.Group>
                  </>
                </Col>
              </AccordionDetails>
            </Accordion>
          </>
        ))}
        <Modal show={imagePreview} onHide={hideImage}>
          <Image src={selectedImage} />
        </Modal>
      </div>
      {/* Mobile Mode */}
      <div
        style={{ minHeight: "799px" }}
        className="d-block d-md-none d-lg-none d-xxl-none d-xl-none"
      >
        {ticket_data.map((value) => (
          <>
            <Accordion className="tickets mt-3 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4 support-acc-mobile">
              <AccordionSummary
                className="support-shadow"
                aria-controls="panel1a-content "
                id="panel1a-header"
              >
                <Row>
                  <Col className="col-12 text-center">
                    <p style={{ fontSize: "16px" }}> {value.subject}</p>
                  </Col>
                  <Col className="col-6 text-center text-md-start text-lg-start text-xl-start text-xxl-start"></Col>
                  <Col className="col-12">
                    <p
                      style={{ fontSize: "18px", display: "inline" }}
                      className="text-center text-md-end text-lg-end text-xl-end text-xxl-end"
                    >
                      {value.answer === true ? (
                        <div style={{ display: "inline" }}>
                          <p style={{ display: "inline" }}>پاسخ داده شده</p>
                          <p style={{ display: "inline", marginRight: "16px" }}>
                            {value.date}
                          </p>
                        </div>
                      ) : (
                        <div style={{ display: "inline" }}>
                          <p style={{ display: "inline" }}>پاسخ داده نشده</p>
                          <p style={{ display: "inline", marginRight: "16px" }}>
                            {value.date}
                          </p>
                        </div>
                      )}
                    </p>
                    {value.attachments.length !== 0 ? (
                      <>
                        {value.attachments.map((file) => (
                          <div
                            style={{ display: "inline" }}
                            className="support-files text-center mx-1"
                          >
                            <p style={{ display: "inline" }}>{file}</p>
                          </div>
                        ))}
                      </>
                    ) : null}
                  </Col>
                </Row>
              </AccordionSummary>
              <AccordionDetails>
                <div
                  style={{ borderRight: "4px solid #F0B90B" }}
                  className="me-0"
                >
                  <p style={{ fontSize: "18px", marginRight: "8px" }}>شما</p>
                  <p style={{ marginRight: "8px" }}>{value.text}</p>
                </div>
                {value.answer === false ? null : (
                  <>
                    {value.answers.map((value2) => (
                      <>
                        <div
                          style={{ borderRight: "4px solid #F0B90B" }}
                          className="me-4 me-md-5 me-lg-5 me-xl-5 me-xxl-5"
                          key={value2.id}
                        >
                          <p style={{ float: "left" }}>{value2.date}</p>
                          <p style={{ fontSize: "18px", marginRight: "8px" }}>
                            {value2.sender}
                          </p>

                          <p style={{ marginRight: "8px" }}>{value2.text}</p>
                        </div>
                      </>
                    ))}
                    <p
                      style={{
                        float: "left",
                        cursor: "pointer",
                      }}
                      className="reply-text"
                      onClick={(e) => {
                        if (replyCaption === "پاسخ") {
                          setReplyCaption("لغو پاسخ");
                          setReplyClass("d-block");
                        } else {
                          setReplyCaption("پاسخ");
                          setReplyClass("d-none");
                        }
                      }}
                    >
                      {replyCaption}
                    </p>
                  </>
                )}
                <Col className={replyClass}>
                  <>
                    <Form.Group>
                      <Form.Label className="mt-3 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4">
                        پاسخ خود را وارد کنید
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={4}
                        className="support-text"
                      />
                    </Form.Group>
                    <Form.Group className="mt-3 d-flex ">
                      {images.length > 0 ? (
                        <>
                          {images.map((value, key) => (
                            <div
                              key={key}
                              className="support-upload-div ms-2 d-flex justify-content-center"
                            >
                              <div
                                style={{ position: "absolute", zIndex: "2" }}
                              >
                                <DeleteIcon
                                  className="mx-2"
                                  style={{ cursor: "pointer" }}
                                  onClick={() => {
                                    let temp = [];
                                    // eslint-disable-next-line array-callback-return
                                    images.map((v) => {
                                      if (v.imgFile !== value.imgFile) {
                                        temp.push({
                                          imgFile: v.imgFile,
                                          imgURL: v.imgURL,
                                        });
                                      }
                                    });
                                    setImages(temp);
                                    toast.success("عملیات با موفقیت انجام شد", {
                                      position: "top-center",
                                    });
                                  }}
                                />
                                <VisibilityIcon
                                  className="mx-2"
                                  style={{ cursor: "pointer" }}
                                  onClick={() => {
                                    setSelectedImage(value.imgURL);
                                    showImage();
                                  }}
                                />
                              </div>

                              <div style={{ zIndex: "1" }}>
                                <Image
                                  src={value.imgURL}
                                  id={key}
                                  className="support-image"
                                />
                              </div>
                            </div>
                          ))}
                        </>
                      ) : null}
                      <input
                        type="file"
                        accept="image/*"
                        ref={imageSelect}
                        onChange={onImageChange}
                        style={{ display: "none" }}
                      />
                      <div
                        className="support-upload-div d-flex mx-2 align-items-center align-content-center justify-content-center justify-items-center"
                        onClick={() => {
                          imageSelect.current.click();
                        }}
                        style={{ cursor: "pointer" }}
                      >
                        <p>
                          <AddOutlinedIcon className="d-block" />
                          آپلود
                        </p>
                      </div>
                    </Form.Group>
                    <Form.Group className="mt-3">
                      <Button className="btn-copy col-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                        ثبت
                      </Button>
                    </Form.Group>
                  </>
                </Col>
              </AccordionDetails>
            </Accordion>
          </>
        ))}
        <Modal show={imagePreview} onHide={hideImage}>
          <Image src={selectedImage} />
        </Modal>
      </div>
    </>
  );
};
export default AllTickets;
