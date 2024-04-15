import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import FeaturedImageGallery from "./FeaturedImageGallery";
import dog1 from "../../images/Gallery/Dogs/1.jpg";
import dog2 from "../../images/Gallery/Dogs/2.jpg";
import dog3 from "../../images/Gallery/Dogs/3.jpg";
import dog4 from "../../images/Gallery/Dogs/4.jpg";
import dog5 from "../../images/Gallery/Dogs/5.jpg";
import dog6 from "../../images/Gallery/Dogs/6.jpg";

import horse1 from "../../images/Gallery/Horses/1.jpg";
import horse2 from "../../images/Gallery/Horses/2.jpg";
import horse3 from "../../images/Gallery/Horses/3.jpg";
import horse4 from "../../images/Gallery/Horses/4.jpg";
import horse5 from "../../images/Gallery/Horses/5.jpg";
import horse6 from "../../images/Gallery/Horses/6.jpg";

import event1 from "../../images/Gallery/Events/1.jpg";
import event2 from "../../images/Gallery/Events/2.jpg";
import event3 from "../../images/Gallery/Events/3.jpg";
import event4 from "../../images/Gallery/Events/4.jpg";
import event5 from "../../images/Gallery/Events/5.jpg";
import event6 from "../../images/Gallery/Events/6.jpg";

export function GalleryWithTab() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);

  const data = [
    {
      label: "Psy",
      value: "html",
      images: [
        { imageLink: dog1 },
        { imageLink: dog2 },
        { imageLink: dog3 },
        { imageLink: dog4 },
        { imageLink: dog5 },
        { imageLink: dog6 },
      ],
    },
    {
      label: "Konie",
      value: "react",
      images: [
        { imageLink: horse1 },
        { imageLink: horse2 },
        { imageLink: horse3 },
        { imageLink: horse4 },
        { imageLink: horse5 },
        { imageLink: horse6 },
      ],
    },
    {
      label: "Wydarzenia",
      value: "vue",
      images: [
        { imageLink: event1 },
        { imageLink: event2 },
        { imageLink: event3 },
        { imageLink: event4 },
        { imageLink: event5 },
        { imageLink: event6 },
      ],
    },
  ];
  const handleClose = () => setShowModal(false);
  const [activeImage, setActiveImage] = useState(null); // New state for the active image

  const handleShow = (value, clickedImageLink) => {
    const images = data.find((item) => item.value === value).images;
    // Filter out the clicked image
    const filteredImages = images.filter(
      ({ imageLink }) => imageLink !== clickedImageLink
    );
    setSelectedImages(filteredImages);
    setActiveImage(clickedImageLink); // Set the clicked image as the active image
    setShowModal(true);
  };

  const handleImageClick = (imageLink) => {
    const updatedSelectedImages = [
      ...selectedImages.filter((image) => image.imageLink !== imageLink),
      { imageLink: activeImage },
    ];
    setSelectedImages(updatedSelectedImages);
    setActiveImage(imageLink);
  };

  return (
    <>
      <Tabs value="html">
        <TabsHeader className="max-w-[95%] mx-auto flex justify-center bg-gray-100 items-center z-[1]">
          {data.map(({ label, value }) => (
            <Tab key={value} value={value}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody className="grid grid-cols-1 gap-4">
          {data.map(({ value, images }) => (
            <TabPanel
              className="grid grid-cols-1  gap-4 md:grid-cols-3 mt-6"
              key={value}
              value={value}
            >
              {images?.map(({ imageLink }, index) => (
                <div key={index} onClick={() => handleShow(value, imageLink)}>
                  <img
                    className="h-60 w-full max-w-full rounded-lg object-cover object-center hover:scale-100 duration-300 cursor-pointer"
                    src={imageLink}
                    alt="image-photo"
                  />
                </div>
              ))}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>

      <Modal
        fullscreen={true}
        show={showModal}
        onHide={handleClose}
        dialogClassName="custom-modal"
        className="mx-auto w-screen h-screen bg-[#000000e0] fixed top-[50%] left-[50%] z-[1000] translate-x-[-50%] translate-y-[-50%]"
      >
        <Modal.Header closeButton>
          <Button
            variant="secondary"
            onClick={handleClose}
            className="md:mx-[90%] mx-[80%] my-10 md:mt:2 bg-blue-500 font-bold text-white px-6 rounded-xl text-2xl"
          >
            X
          </Button>
        </Modal.Header>

        <Modal.Body className="flex w-[90%] md:w-[60%] items-center  justify-center mx-auto h-[500px] md:h-full md:top-[-110px] relative ">
          {selectedImages.length > 0 && (
            <FeaturedImageGallery
              key={activeImage}
              images={selectedImages}
              activeImage={activeImage}
              onImageClick={handleImageClick}
              className="w-full h-full" // Ensure the gallery takes up full space
            />
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default GalleryWithTab;
