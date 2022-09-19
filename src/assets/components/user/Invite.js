import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  Container,
  Row,
  Col,
  Button,
  Image,
  Form,
  InputGroup,
} from "react-bootstrap";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import SideImage from "../../images/invite-side-pic.png";

const Invite = () => {
  const dispatch = useDispatch();

  //States and Refs
  const [invitationLink] = useState(
    "https://Hi-exchange.ir/009i/10966099-Invite-a-friend"
  );
  const [invited] = useState("12");
  const [invitationIncome] = useState("13،456،890");

  //START UP
  useEffect(() => {
    dispatch({
      type: "SET_PAGE",
      page: "Invite",
    });
  }, [dispatch]);

  // Main Section
  return (
    <>
      {/* PC MODE */}
      <Container className="d-none d-md-block d-lg-block d-xxl-block main-container">
        <div className="main-container " style={{ height: "600px" }}>
          <Container
            className="main-container "
            style={{ marginTop: "24px", paddingTop: "24px" }}
          >
            <Row className="section-292929 dashboard-linechart">
              <Col className="col-4">
                <Image src={SideImage} />
              </Col>
              <Col className="col-8">
                <p className="ilia-header" style={{ marginTop: "28px" }}>
                  دعوت از دوستان
                </p>
                <p className="ilia-non-header">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز
                </p>
                <div className="d-flex align-items-center align-content-center">
                  <p className="invite-link-tite"> لینک دعوت شما</p>
                  &nbsp;&nbsp;
                  <Form.Control
                    type="text"
                    className="invite-linkbox wide-input invite-link-text"
                    value={invitationLink}
                  />
                  <Button
                    className="btn-copy invite-link-button"
                    onClick={() => {
                      navigator.clipboard.writeText(invitationLink);
                    }}
                  >
                    کپی
                  </Button>
                </div>
              </Col>
            </Row>
            <Row className="gap-4">
              <Col className="section-292929 invite-buttom-cards mt-4">
                <p className="order-info text-center pt-3 invite-buttom-cards-title">
                  افرادی که دعوت کرده اید
                </p>
                <p className="order-title text-center invite-buttom-cards-value">
                  {invited}
                </p>
              </Col>
              <Col className="section-292929 invite-buttom-cards  mt-4">
                <p className="order-info text-center pt-3 invite-buttom-cards-title">
                  درآمد شما از دعوت
                </p>
                <p className="order-title text-center invite-buttom-cards-value">
                  {invitationIncome}
                </p>
              </Col>
              <Col className="section-292929 invite-buttom-cards  mt-4">
                <p className="order-info text-center pt-3 invite-buttom-cards-title">
                  اشتراک لینک با شبکه های اجتماعی
                </p>
                <p className="text-center invite-buttom-cards-value">
                  <InstagramIcon className="social-icons" />
                  <TwitterIcon className="social-icons" />
                  <WhatsAppIcon className="social-icons" />
                  <TelegramIcon className="social-icons" />
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
      {/* MOBILE MODE */}
      <Container className="d-block d-md-none d-lg-none d-xxl-none main-container">
        <div className="main-container " style={{ height: "600px" }}>
          <Container
            className="main-container"
            style={{ paddingBottom: "39px" }}
          >
            <Row className="main-container ">
              <Col className="col-12 order-2 d-flex justify-content-center">
                <Image src={SideImage} />
              </Col>
              <Col className="col-12 order-1">
                <p
                  className="ilia-header text-center"
                  style={{ marginTop: "28px" }}
                >
                  دعوت از دوستان
                </p>
                <p className="ilia-non-header">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز
                </p>
                <p className="text-center"> لینک دعوت شما </p>
                <InputGroup className="invite-linkbox p-1">
                  <Form.Control
                    type="text"
                    className="invite-linkbox2 wide-input"
                    value={invitationLink}
                    style={{ display: "inline", maxWidth: "300px" }}
                  />
                  <Button
                    className="btn-copy"
                    style={{ marginRight: "12px", width: "70px" }}
                    onClick={() => {
                      navigator.clipboard.writeText(invitationLink);
                    }}
                  >
                    کپی
                  </Button>
                </InputGroup>
              </Col>
            </Row>
            <Row className="main-container">
              <Col className="main-container col-12 d-flex justify-content-between">
                <p className="order-info text-center">
                  افرادی که دعوت کرده اید
                </p>
                <p className="order-title text-center">{invited}</p>
              </Col>
              <Col className="main-container col-12 d-flex justify-content-between">
                <p className="order-info text-center">درآمد شما از دعوت</p>
                <p className="order-title text-center">{invitationIncome}</p>
              </Col>
            </Row>
            <Row className="main-container mx-0 d-flex">
              <Col className="section-292929" style={{ marginTop: "24px" }}>
                <p
                  className="order-info text-center"
                  style={{ marginTop: "16px" }}
                >
                  اشتراک لینک با شبکه های اجتماعی
                </p>
                <p className="text-center" style={{ marginTop: "38px" }}>
                  <InstagramIcon
                    className="social-icons"
                    style={{ width: "48px", height: "48px" }}
                  />
                  <TwitterIcon
                    className="social-icons"
                    style={{
                      width: "48px",
                      height: "48px",
                      marginRight: "24px",
                    }}
                  />
                  <WhatsAppIcon
                    className="social-icons"
                    style={{
                      width: "48px",
                      height: "48px",
                      marginRight: "24px",
                    }}
                  />
                  <TelegramIcon
                    className="social-icons"
                    style={{
                      width: "48px",
                      height: "48px",
                      marginRight: "24px",
                    }}
                  />
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    </>
  );
};
export default Invite;
