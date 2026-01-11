import React from "react";
import Fb from "../../images/fb.png";
import Ig from "../../images/ig.png";
import Mail from "../../images/mail.png";
import Mess from "../../images/messenger.png";
const Socials = () => {
  return (
    <div className='px-4  h-full flex   w-full mt-2 '>
      <ul className='flex w-full items-center justify-center  space-x-2'>
        <li className='flex py-2 items-center space-x-2 opacity-[80%] hover:opacity-100 duration-200'>
          <a
            href='https://www.facebook.com/patrycjadawidfotografia?locale=pl_PL'
            className='tracking-[3px] font-normal text-titleGray'
          >
            <img src={Fb} width={40} loading='lazy' alt='Facebook' />
          </a>
        </li>
        <li className='flex py-2 items-center space-x-2 opacity-[80%] hover:opacity-100 duration-200'>
          <a href='https://m.me/patrycjadawidfotografia' className='tracking-[3px] font-normal text-titleGray'>
            <img src={Mess} width={40} loading='lazy' alt='Messenger' />
          </a>
        </li>
        <li className='flex py-2 items-center space-x-2 opacity-[80%] hover:opacity-100 duration-200'>
          <a
            href='https://www.instagram.com/patrycjadfotografia/'
            className='tracking-[3px] font-normal text-titleGray'
          >
            <img src={Ig} width={40} loading='lazy' alt='Instagram' />
          </a>
        </li>
        <li className='flex py-2 items-center space-x-2 opacity-[80%] hover:opacity-100 duration-200'>
          <a href='mailto:wiktorskid@wp.pl' className='tracking-[3px] font-normal text-titleGray'>
            <img src={Mail} width={40} loading='lazy' alt='Email' />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
