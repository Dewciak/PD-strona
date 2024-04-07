import React from "react";

export default function FeaturedImageGallery({
  images,
  activeImage,
  onImageClick,
}) {
  const [active, setActive] = React.useState(activeImage);

  // Update the active state when the activeImage prop changes
  React.useEffect(() => {
    setActive(activeImage);
  }, [activeImage]);

  return (
    <div className="grid gap-4">
      <div>
        <img
          className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
          src={active}
          alt=""
        />
      </div>
      <div className="grid grid-cols-5 gap-4">
        {images.map(({ imageLink }, index) => (
          <div key={index}>
            <img
              onClick={() => onImageClick(imageLink)}
              src={imageLink}
              className="h-20 max-w-full cursor-pointer rounded-lg object-cover object-center"
              alt="gallery-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
