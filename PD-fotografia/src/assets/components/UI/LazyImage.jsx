import {useState} from "react";

const LazyImage = ({src, alt, className = "", loading = "lazy", width, height, ...props}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div
      className={`relative ${className}`}
      style={{
        width: width || "auto",
        height: height || "auto",
      }}
    >
      {!isLoaded && <div className='absolute inset-0 bg-gray-200' />}

      <img
        src={src}
        alt={alt}
        loading={loading}
        onLoad={handleLoad}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        {...props}
      />
    </div>
  );
};

export default LazyImage;
