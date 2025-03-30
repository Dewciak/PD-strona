import "aos/dist/aos.css";
import React from "react";

import AboutImage from "../../images/About-img.webp";
import Dog1 from "../../images/AboutMe/dog1.webp";
import Dog2 from "../../images/AboutMe/dog3.jpg";
import horse1 from "../../images/AboutMe/horse1.jpg";
import horse2 from "../../images/AboutMe/horse2.jpg";

function About() {
  const myAnimals = [Dog1, Dog2, horse1, horse2];
  return (
    <section id='About' className='max-w-[1050px] h-auto  mx-auto md:pt-24 mt-10 overflow-hidden  shadow-[#0000000d]'>
      <div className='w-full text-center '>
        <h1 className='md:text-5xl text-4xl mt-10 md:mt-0 tracking-[5px] font-light'>Profesjonalna</h1>
        <h2 className='md:text-xl text-xl md:py-4 py-2 mb-4 tracking-[5px] font-light text-gray-500  text-[17px] leading-[34px] '>
          fotografia zwierząt
        </h2>
      </div>
      <div className='w-full flex flex-col-reverse md:flex-row justify-center items-center md:mt-6 '>
        <div className='flex flex-col md:w-[45%] pl-4'>
          <p
            data-aos='slide-right'
            className='text-4xl pb-6 tracking-[5px] font-normal  bg-gradient-to-r from-blue-400 to-purple-500 inline-block text-transparent bg-clip-text  mt-8 text-center md:text-left mx-6 '
          >
            Poznaj mnie!
          </p>

          <p
            data-aos='slide-right'
            className='px-6 text-left tracking-[0px] font-[Lora] text-myGray font-normal text-[17px] leading-[34px]'
          >
            Cześć, nazywam się Patrycja Dawid. Swoją pasję do fotografii odkryłam w&nbsp;2014 roku dorastając
            w&nbsp;otoczeniu zwierząt, które zawsze były moimi najlepszymi modelami. Dzięki temu łatwo jest
            mi&nbsp;uchwycić ich naturalne piękno i&nbsp;charakter. W&nbsp;wolnych chwilach najbardziej lubię zapuszczać
            się w&nbsp;długie tereny na końskim grzbiecie i&nbsp;spacerować po&nbsp;lesie.
          </p>
        </div>

        <div data-aos='slide-left' className='md:ml-auto mx-auto '>
          <img src={AboutImage} className=' md:w-[500px] mx-auto w-[90%] rounded-xl' loading='lazy'></img>
        </div>
      </div>
      <div className='w-full flex flex-col mx-auto text-center mt-8'>
        <h1 className='text-center w-full text-xl tracking-[5px] font-light'>
          A to moje <span className='text-blue-400 tracking-[5px] font-light'>pupile</span> :)
        </h1>
        <div className='w-[300px] h-14 mx-auto mt-2 flex flex-row justify-center items-center gap-x-2'>
          {myAnimals.map((animal, index) => (
            <img src={animal} key={index} loading='lazy' className='w-[20%] rounded-[50%]'></img>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
