function OfferPageAbout({
  props: {
    aboutImage,
    mainHeader,
    mainHeaderDescription,
    secondHeader,
    secondHeaderDescription,
    aboutHeader0,
    aboutHeader1,
    aboutText1,
    aboutHeader2,
    aboutText2,
    aboutHeader3,
    aboutText3,
  },
}) {
  // test
  return (
    <div className='mx-auto'>
      <div className='w-[100%] relative z-10 bg-white mx-auto'>
        <div className='max-w-[1000px] mx-auto md:mt-[610px] mt-[330px] z-[10] relative pt-8'>
          <h1 className='text-center text-4xl md:text-6xl md:mt-[0px] tracking-[5px] font-light text-titleGray'>
            {mainHeader}
          </h1>
          <h3 className='text-center text-[#747474] mt-4 text-sm tracking-[0px] font-[Lora] font-normal text-[20px] leading-[34px]'>
            {mainHeaderDescription}
          </h3>
          <section
            id='o-mnie'
            className='mx-auto flex py-6 flex-col text-lg tracking-wide md:w-[970px] w-[80%] md:mt-12 mt-6'
          >
            <h2 className='tracking-[5px] font-light bg-gradient-to-r from-blue-400 to-purple-500 inline-block text-transparent bg-clip-text'>
              {secondHeader}
            </h2>
            <h3 className='mt-6 text-base text-left tracking-[0px] font-[Lora] text-myGray font-normal text-[17px] leading-[34px]'>
              {secondHeaderDescription}
            </h3>
          </section>

          <div className='w-full flex md:flex-row flex-col-reverse mt-10'>
            <div className='md:w-[60%] px-4 mx-auto'>
              <h2 className='pb-8 md:pt-4 md:text-2xl text-3xl text-center md:text-start tracking-[5px] font-light text-titleGray'>
                {aboutHeader0}
              </h2>
              <p className='md:px-6 px-4 text-left tracking-[0px] font-[Lora] text-myGray font-normal text-[17px] leading-[34px]'>
                <span className='text-blue-400 font-semibold tracking-[0px] font-[Lora] text-[17px] leading-[34px]'>
                  {aboutHeader1}
                </span>{" "}
                {aboutText1}
                <br></br>
                <br></br>
                <span className='text-blue-400 font-semibold tracking-[0px] font-[Lora] text-[17px] leading-[34px]'>
                  {aboutHeader2}
                </span>{" "}
                {aboutText2}
                <br></br>
                <br></br>
                <span className='text-blue-400 font-semibold tracking-[0px] font-[Lora] text-[17px] leading-[34px]'>
                  {aboutHeader3}
                </span>{" "}
                {aboutText3}
              </p>
            </div>
            <img
              className='md:w-[40%] w-[80%] mx-auto md:mt-0 rounded-[15px] px-2'
              src={aboutImage}
              alt='aboutSection'
              loading='lazy'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OfferPageAbout;
