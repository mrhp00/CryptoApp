import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ImageThumb from "../../images/image-thumb.png";

const Account = (props) => {
  const dispatch = useDispatch();

  //States and Refs
  const navigate = useNavigate();
  const [userID] = useState("0");
  const [currentUserToken] = useState("ABC");

  //START UP
  useEffect(() => {
    dispatch({
      type: "SET_PAGE",
      page: "Profile",
    });
  }, [dispatch]);

  // Main Section
  return (
    <>
      {/* PC MODE */}
      <Container
        dir="rtl"
        className="main-container mx-0 d-none d-md-block d-lg-block d-xl-block d-xxl-block"
      >
        <Container
          className="main-container pb-4"
          style={{ minHeight: "670px" }}
        >
          <Row>
            <Col className="col-12" xxl xl lg={4}>
              <div className="d-flex section-292929 mt-4" dir="ltr">
                <Button
                  style={{ width: "33%" }}
                  className="btn  btn-flat "
                  onClick={() => {
                    navigate("/password/" + userID + "/" + currentUserToken);
                  }}
                >
                  رمز عبور
                </Button>

                <Button
                  style={{ width: "34%" }}
                  className="btn  btn-flat "
                  onClick={() => {
                    navigate("/setting/" + userID + "/" + currentUserToken);
                  }}
                >
                  تنظیمات
                </Button>

                <Button
                  style={{ width: "33%" }}
                  className="btn btn-warning btn-flat"
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

          <Row className="col-12 section-292929 mx-0 mt-4">
            <p class className="ilia-header" style={{ paddingTop: "32px" }}>
              اطلاعات شخصی
            </p>
            <br className="d-none d-lg-block d-xl-block d-xxl-block" />
            <Row>
              <Col className="col-12" xxl xl lg={4}>
                <Form>
                  <Form.Group style={{ paddingTop: "10px" }}>
                    <Form.Label>نام و نام خانوادگی</Form.Label>
                    <Form.Control
                      type="text"
                      className="color-292929 border-606060 wide-input"
                    />
                  </Form.Group>
                </Form>
              </Col>
              <br className="d-block d-lg-none d-xl-none d-xxl-none" />
              <Col className="col-12" xxl xl lg={4}>
                <Form>
                  <Form.Group
                    style={{ paddingTop: "10px" }}
                    className="mt-3 mt-md-0 mt-lg-0 mt-xl-0 mt-xxl-0"
                  >
                    <Form.Label>کد ملی</Form.Label>
                    <Form.Control
                      type="text"
                      className="color-292929 border-606060 wide-input"
                    />
                  </Form.Group>
                </Form>
              </Col>
              <br className="d-block d-lg-none d-xl-none d-xxl-none" />
              <Col className="col-12" xxl xl lg={4}>
                <Form>
                  <Form.Group
                    style={{ paddingTop: "10px" }}
                    className="mt-3 mt-md-0 mt-lg-0 mt-xl-0 mt-xxl-0"
                  >
                    <Form.Label>شماره شناسنامه</Form.Label>
                    <Form.Control
                      type="text"
                      className="color-292929 border-606060 wide-input"
                    />
                  </Form.Group>
                </Form>
              </Col>
              <br className="d-block d-lg-none d-xl-none d-xxl-none" />
            </Row>
            <br className="d-none d-lg-block d-xl-block d-xxl-block" />
            <Row>
              <Col className="col-12" xxl xl lg={4}>
                <Form>
                  <Form.Group
                    style={{ paddingTop: "10px" }}
                    className="mt-3 mt-md-0 mt-lg-0 mt-xl-0 mt-xxl-0"
                  >
                    <Form.Label>تاریخ تولد</Form.Label>
                    <Form.Control
                      type="text"
                      className="color-292929 border-606060 wide-input"
                    />
                  </Form.Group>
                </Form>
              </Col>
              <br className="d-block d-lg-none d-xl-none d-xxl-none" />
              <Col className="col-12" xxl xl lg={4}>
                <Form>
                  <Form.Group
                    style={{ paddingTop: "10px" }}
                    className="mt-3 mt-md-0 mt-lg-0 mt-xl-0 mt-xxl-0"
                  >
                    <Form.Label>شماره تلفن ثابت</Form.Label>
                    <Form.Control
                      type="text"
                      className="color-292929 border-606060 wide-input"
                    />
                  </Form.Group>
                </Form>
              </Col>
              <br className="d-block d-lg-none d-xl-none d-xxl-none" />
              <Col className="col-12" xxl xl lg={4}>
                <Form>
                  <Form.Group
                    style={{ paddingTop: "10px" }}
                    className="mt-3 mt-md-0 mt-lg-0 mt-xl-0 mt-xxl-0"
                  >
                    <Form.Label>کد پستی</Form.Label>
                    <Form.Control
                      type="text"
                      className="color-292929 border-606060 wide-input"
                    />
                  </Form.Group>
                </Form>
              </Col>
            </Row>
            <br className="d-none d-lg-block d-xl-block d-xxl-block" />
            <Row>
              <Col className="d-grid col-12" xxl xl lg={4}>
                <Form>
                  <Form.Group
                    style={{ paddingTop: "10px" }}
                    className="mt-3 mt-md-0 mt-lg-0 mt-xl-0 mt-xxl-0"
                  >
                    <Form.Label>آدرس</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      className="color-292929 border-606060"
                    />
                  </Form.Group>
                </Form>
              </Col>
            </Row>
            <Row>
              <Col className="d-grid col-12 mt-4 pb-4" xxl xl lg={4}>
                <Button className="btn btn-warning btn-flat ">ذخیره</Button>
              </Col>
              <Col className="col-0" xxl xl lg={4} />
              <Col className="col-0" xxl xl lg={4} />
              <Col className="col-0" xxl xl lg={4} />
            </Row>
          </Row>

          <Row className="col-12 section-292929 mx-0 pb-2 mt-5">
            <Row>
              <p className="pt-4">
                <p className="ilia-header " style={{ display: "inline" }}>
                  آپلود تصاویر
                </p>
                <p>(حداکثر سایز مجاز 1 مگابایت)</p>
              </p>
            </Row>

            <Row>
              <Col className="col-12" xxl xl lg={4}>
                <Card
                  onClick={() => {}}
                  className="color-292929 border-606060 mt-4"
                >
                  <Card.Img src={ImageThumb} />

                  <Card.Body>
                    <hr />
                    <p className="text-center mt-3">
                      <strong className="non-header-font">
                        آپلود تصویر پرسنلی یا سلفی
                      </strong>
                    </p>
                  </Card.Body>
                </Card>
              </Col>

              <Col className="col-12 mt-4" xxl xl lg={4}>
                <Card
                  onClick={() => {}}
                  className="color-292929 border-606060 mb-2"
                >
                  <Card.Img src={ImageThumb} />

                  <Card.Body>
                    <hr />
                    <p className="text-center mt-3">
                      <strong className="non-header-font">
                        آپلود تصویر کارت ملی
                      </strong>
                    </p>
                  </Card.Body>
                </Card>
              </Col>

              <Col className="col-12 mt-4" xxl xl lg={4}>
                <Card
                  onClick={() => {}}
                  className="color-292929 border-606060 mb-2"
                >
                  <Card.Img src={ImageThumb} />

                  <Card.Body>
                    <hr />
                    <p className="text-center mt-3">
                      <strong className="non-header-font my-2">
                        آپلود تصویر شناسنامه
                      </strong>
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="col-12 mt-4" xxl xl lg={4}>
                <Card onClick={() => {}} className="color-292929 border-606060">
                  <Card.Img src={ImageThumb} />

                  <Card.Body>
                    <hr />
                    <p className="text-center mt-3">
                      <strong className="non-header-font">
                        آپلود تصویر ثبض (اختیاری)
                      </strong>
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Row>
        </Container>
      </Container>
      {/* MOBILE MODE */}
      <div
        dir="rtl"
        className="main-container mx-0 d-block d-md-none d-lg-none d-xl-none d-xxl-none pb-4"
      >
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
              className="btn btn-flat "
              onClick={() => {
                navigate("/setting/" + userID + "/" + currentUserToken);
              }}
            >
              تنظیمات
            </Button>

            <Button
              style={{ width: "33%" }}
              className="btn btn-warning btn-flat"
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

        <Row className="col-12 section-292929 mx-0 mt-4">
          <p class className="ilia-header" style={{ paddingTop: "32px" }}>
            اطلاعات شخصی
          </p>
          <br className="d-none d-lg-block d-xl-block d-xxl-block" />
          <Row>
            <Col className="col-12" xxl xl lg={4}>
              <Form>
                <Form.Group style={{ paddingTop: "10px" }}>
                  <Form.Label>نام و نام خانوادگی</Form.Label>
                  <Form.Control
                    type="text"
                    className="color-292929 border-606060 wide-input"
                  />
                </Form.Group>
              </Form>
            </Col>
            <br className="d-block d-lg-none d-xl-none d-xxl-none" />
            <Col className="col-12" xxl xl lg={4}>
              <Form>
                <Form.Group
                  style={{ paddingTop: "10px" }}
                  className="mt-3 mt-md-0 mt-lg-0 mt-xl-0 mt-xxl-0"
                >
                  <Form.Label>کد ملی</Form.Label>
                  <Form.Control
                    type="text"
                    className="color-292929 border-606060 wide-input"
                  />
                </Form.Group>
              </Form>
            </Col>
            <br className="d-block d-lg-none d-xl-none d-xxl-none" />
            <Col className="col-12" xxl xl lg={4}>
              <Form>
                <Form.Group
                  style={{ paddingTop: "10px" }}
                  className="mt-3 mt-md-0 mt-lg-0 mt-xl-0 mt-xxl-0"
                >
                  <Form.Label>شماره شناسنامه</Form.Label>
                  <Form.Control
                    type="text"
                    className="color-292929 border-606060 wide-input"
                  />
                </Form.Group>
              </Form>
            </Col>
            <br className="d-block d-lg-none d-xl-none d-xxl-none" />
          </Row>
          <br className="d-none d-lg-block d-xl-block d-xxl-block" />
          <Row>
            <Col className="col-12" xxl xl lg={4}>
              <Form>
                <Form.Group
                  style={{ paddingTop: "10px" }}
                  className="mt-3 mt-md-0 mt-lg-0 mt-xl-0 mt-xxl-0"
                >
                  <Form.Label>تاریخ تولد</Form.Label>
                  <Form.Control
                    type="text"
                    className="color-292929 border-606060 wide-input"
                  />
                </Form.Group>
              </Form>
            </Col>
            <br className="d-block d-lg-none d-xl-none d-xxl-none" />
            <Col className="col-12" xxl xl lg={4}>
              <Form>
                <Form.Group
                  style={{ paddingTop: "10px" }}
                  className="mt-3 mt-md-0 mt-lg-0 mt-xl-0 mt-xxl-0"
                >
                  <Form.Label>شماره تلفن ثابت</Form.Label>
                  <Form.Control
                    type="text"
                    className="color-292929 border-606060 wide-input"
                  />
                </Form.Group>
              </Form>
            </Col>
            <br className="d-block d-lg-none d-xl-none d-xxl-none" />
            <Col className="col-12" xxl xl lg={4}>
              <Form>
                <Form.Group
                  style={{ paddingTop: "10px" }}
                  className="mt-3 mt-md-0 mt-lg-0 mt-xl-0 mt-xxl-0"
                >
                  <Form.Label>کد پستی</Form.Label>
                  <Form.Control
                    type="text"
                    className="color-292929 border-606060 wide-input"
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <br className="d-none d-lg-block d-xl-block d-xxl-block" />
          <Row>
            <Col className="d-grid col-12" xxl xl lg={4}>
              <Form>
                <Form.Group
                  style={{ paddingTop: "10px" }}
                  className="mt-3 mt-md-0 mt-lg-0 mt-xl-0 mt-xxl-0"
                >
                  <Form.Label>آدرس</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    className="color-292929 border-606060"
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>

          <Row>
            <Col className="d-grid col-12 mt-4 pb-4" xxl xl lg={4}>
              <Button className="btn btn-warning btn-flat mt-4">ذخیره</Button>
            </Col>
            <Col className="col-0" xxl xl lg={4} />
            <Col className="col-0" xxl xl lg={4} />
            <Col className="col-0" xxl xl lg={4} />
          </Row>
        </Row>

        <Row className="col-12 section-292929 mx-0 pb-2 mt-5">
          <Row>
            <p className="mt-4">
              <p className="ilia-header " style={{ display: "inline" }}>
                آپلود تصاویر
              </p>
              <p>(حداکثر سایز مجاز 1 مگابایت)</p>
            </p>
          </Row>

          <Row>
            <Col className="col-12" xxl xl lg={4}>
              <Card
                onClick={() => {}}
                className="color-292929 border-606060 mt-4"
              >
                <Card.Img src={ImageThumb} />

                <Card.Body>
                  <hr />
                  <p className="text-center mt-3">
                    <strong className="non-header-font">
                      آپلود تصویر پرسنلی یا سلفی
                    </strong>
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col className="col-12 mt-4" xxl xl lg={4}>
              <Card
                onClick={() => {}}
                className="color-292929 border-606060 mb-2"
              >
                <Card.Img src={ImageThumb} />

                <Card.Body>
                  <hr />
                  <p className="text-center mt-3">
                    <strong className="non-header-font">
                      آپلود تصویر کارت ملی
                    </strong>
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col className="col-12 mt-4" xxl xl lg={4}>
              <Card
                onClick={() => {}}
                className="color-292929 border-606060 mb-2"
              >
                <Card.Img src={ImageThumb} />

                <Card.Body>
                  <hr />
                  <p className="text-center mt-3">
                    <strong className="non-header-font my-2">
                      آپلود تصویر شناسنامه
                    </strong>
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col className="col-12 mt-4" xxl xl lg={4}>
              <Card onClick={() => {}} className="color-292929 border-606060">
                <Card.Img src={ImageThumb} />

                <Card.Body>
                  <hr />
                  <p className="text-center mt-3">
                    <strong className="non-header-font">
                      آپلود تصویر ثبض (اختیاری)
                    </strong>
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Row>
      </div>
    </>
  );
};
export default Account;
