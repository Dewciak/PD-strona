const GalleryDialog = ({sessionType, setBigPic, setShowDialog, bigPic}) => {
  return (
    <div
      className="flex absolute flex-col items-start  
        top-0 left-0  w-full h-full"
    >
      <div
        onClick={() => setShowDialog(false)}
        className="fixed top-0 left-0 z-[15] w-full h-full bg-[#000000c1] "
      ></div>
      <div className="fixed mt-14 transform w-1/2 translate-x-1/2 flex items-center justify-center z-[16]">
        <div className="max-w-[700px]">
          <button
            onClick={() => setShowDialog(false)}
            className=" text-6xl left-[92%] text-white relative top-[8vh]"
          >
            ×
          </button>
          <div className="flex flex-col ">
            <img src={bigPic} className="rounded-xl" />
            <div className="flex flex-row w-[700px]  justify-between mt-6">
              {sessionType.id.map((pic, key) => (
                <img
                  onClick={() => {
                    setBigPic(pic);
                  }}
                  src={pic}
                  loading="lazy"
                  key={key}
                  className="w-[12%] object-cover object-center cursor-pointer"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryDialog;
