import AOS from "aos";

function TypesOfSessions({
  props: {image1, image2, image3, image4, header1, text1, header2, text2, header3, text3, header4, text4},
}) {
  return (
    <div id='Sessions' className='max-w-[1100px] flex flex-col justify-center items-center mx-auto relative '>
      {/* HEADER */}
      <h1 className='text-center py-16 text-4xl tracking-[5px] font-light text-titleGray'>Rodzaje sesji</h1>
      <div className='w-full flex flex-col justify-center items-center mx-auto md:space-y-28 space-y-6'>
        <div data-aos='fade-left' className='w-full flex md:flex-row flex-col  justify-center items-start'>
          <img className='md:w-[50%] w-[80%] rounded-[15px] mx-auto' src={image1}></img>
          <div className='md:w-[50%] w-[70%] md:px-14 mt-6 md:mt-0 mx-auto'>
            <h2 className='text-2xl  pb-6 tracking-[5px] font-normal text-titleGray text-center md:text-left '>
              {header1}
            </h2>
            <p className='tracking-[0px] font-[Lora] text-myGray font-normal text-[17px] whitespace-pre-line leading-[34px]'>
              {text1}
            </p>
          </div>
        </div>
        <div data-aos='fade-right' className='w-full flex md:flex-row flex-col-reverse  justify-center items-start'>
          <div className='md:w-[50%] w-[70%] md:px-14 mt-6 md:mt-0 mx-auto'>
            <h2 className='text-2xl text-center md:text-left  py-6 tracking-[5px] font-light text-titleGray'>
              {header2}
            </h2>
            <p className='tracking-[0px] font-[Lora] text-myGray font-normal text-[17px] whitespace-pre-line leading-[34px]'>
              {text2}
            </p>
          </div>
          <img className='md:w-[50%] w-[80%] rounded-[15px] mx-auto mt-6' src={image2}></img>
        </div>
        <div data-aos='fade-left' className='w-full flex md:flex-row flex-col  justify-center items-start'>
          <img className='md:w-[50%] w-[80%] rounded-[15px] mx-auto mt-6 ' src={image3}></img>
          <div className='md:w-[50%] w-[70%] md:px-14 mt-6 md:mt-0 mx-auto'>
            <h2 className='text-2xl  py-6 tracking-[5px] font-light text-titleGray text-center md:text-left '>
              {header3}
            </h2>
            <p className='tracking-[0px] font-[Lora] whitespace-pre-line text-myGray font-normal text-[17px] leading-[34px]'>
              {text3}
            </p>
          </div>
        </div>
        {header4 && (
          <div data-aos='fade-right' className='w-full flex md:flex-row flex-col-reverse  justify-center items-start'>
            <div className='md:w-[50%] w-[70%] md:px-14 mt-6 md:mt-0 mx-auto'>
              <h2 className='text-2xl  py-6 tracking-[5px] font-light text-titleGray text-center md:text-left '>
                {header4}
              </h2>
              <p className='tracking-[0px] font-[Lora] whitespace-pre-line text-myGray font-normal text-[17px] leading-[34px] '>
                {text4}
              </p>
            </div>
            <img className='md:w-[50%] w-[80%] rounded-[15px] mx-auto mt-6' src={image4}></img>
          </div>
        )}
      </div>
    </div>
  );
}

export default TypesOfSessions;
