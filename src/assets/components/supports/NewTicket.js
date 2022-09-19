import React, { useRef, useState } from "react";
import { Form, Image, Button, Modal } from "react-bootstrap";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { toast, ToastContainer } from "react-toastify";

const NewTicket = () => {
  //States and Refs
  const [images, setImages] = useState([]);
  const imageSelect = useRef();
  const [imagePreview, setImagePreview] = useState(false);
  const [selectedImage, setSelectedImage] = useState();

  // Image Preview
  const showImage = () => {
    setImagePreview(true);
  };
  const hideImage = () => {
    setImagePreview(false);
  };

  //Images List and Change
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
  };

  // Main Section
  return (
    <>
      <Form style={{ marginTop: "57px", paddingBottom: "100px" }}>
        <ToastContainer className="text-end" toastClassName="section-292929" />
        <Form.Group>
          <Form.Label>عنوان تیکت</Form.Label>
          <Form.Control type="text" className="support-text wide-input" />
        </Form.Group>
        <Form.Group>
          <Form.Label className="mt-3 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4">
            موضوع تیکت
          </Form.Label>
          <Form.Control type="text" className="support-text wide-input" />
        </Form.Group>
        <Form.Group>
          <Form.Label className="mt-3 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4">
            متن پیام
          </Form.Label>
          <Form.Control as="textarea" rows={4} className="support-text" />
        </Form.Group>
        <Form.Group className="mt-3 d-flex ">
          {images.length > 0 ? (
            <>
              {images.map((value, key) => (
                <div
                  key={key}
                  className="support-upload-div ms-2 d-flex justify-content-center"
                >
                  <div style={{ position: "absolute", zIndex: "2" }}>
                    <DeleteIcon
                      className="mx-2"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        let temp = [];
                        // eslint-disable-next-line array-callback-return
                        images.map((v) => {
                          if (v.imgFile !== value.imgFile) {
                            temp.push({ imgFile: v.imgFile, imgURL: v.imgURL });
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
          <Button className="btn-copy support-btn  col-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
            ثبت
          </Button>
        </Form.Group>
      </Form>

      {/* MODALS */}
      <Modal show={imagePreview} onHide={hideImage}>
        <Image src={selectedImage} />
      </Modal>
    </>
  );
};
export default NewTicket;
