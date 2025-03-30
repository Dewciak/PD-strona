import React, {useState} from "react";
import {Link as RouterLink} from "react-router-dom";
import Fb from "../../images/fb.png";
import Ig from "../../images/ig.png";
import Mail from "../../images/mail.png";
import Mess from "../../images/messenger.png";

function Contact() {
  const [isChecked, setIsChecked] = useState(false);
  const [showHiddenText, setShowHiddenText] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    if (event.target.checked) {
      setShowHiddenText(false);
    }
  };

  const handleSubmitClick = (event) => {
    if (!isChecked) {
      setShowHiddenText(true);
      event.preventDefault();
    }
  };

  return (
    <section id='Contact' className='max-w-[850px] flex flex-col items-center mx-auto md:mb-10 md:pt-6 pt-0 pb-4'>
      <header className='text-center'>
        <h1 className='text-5xl md:text-6xl tracking-[5px] font-light text-titleGray'>Skontaktuj</h1>
        <h2 className='text-2xl tracking-[5px] font-light bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text md:mt-0'>
          się ze mną!
        </h2>
      </header>

      <div className='w-full flex flex-col md:flex-row mt-6 justify-between items-start py-4'>
        <section className='md:w-[50%] w-[70%] flex flex-col mx-auto'>
          <h2 className='text-center text-xl py-3 tracking-[5px] font-light text-titleGray'>Zapytaj o termin!</h2>
          <form action='https://api.web3forms.com/submit' method='POST' className='flex flex-col items-center'>
            <input type='hidden' name='access_key' value='5731e935-f338-41a7-9570-165fae0ceacc' />
            <div className='md:min-w-[355px] min-w-[295px] flex flex-col space-y-6'>
              <label>
                <span className='sr-only'>Adres email</span>
                <input
                  type='email'
                  name='email'
                  required
                  placeholder='np. email@gmail.com'
                  className='w-full rounded-lg bg-gray-300 py-2 pl-4 tracking-[5px] font-light text-titleGray'
                />
              </label>
              <label>
                <span className='sr-only'>Wiadomość</span>
                <textarea
                  name='message'
                  required
                  placeholder='Tutaj możesz wpisać jaki termin cię interesuje'
                  className='w-full pb-[100px] rounded-xl bg-gray-300 py-2 px-4 tracking-[5px] font-light text-titleGray'
                ></textarea>
              </label>
              <div className='w-[130px] cursor-pointer bg-gradient-to-r from-blue-300 to-purple-300 flex justify-center items-center py-1 rounded-[50px]'>
                <button
                  type='submit'
                  onClick={handleSubmitClick}
                  id='ContactButton'
                  className='rounded-[50px] tracking-[5px] font-normal bg-white w-[120px] py-1 text-[17px] text-[#747474] hover:text-[#9b9b9b]'
                >
                  Wyślij
                </button>
              </div>
              <div className='flex items-start ml-2 pb-4'>
                <input type='checkbox' id='checkbox' className='mt-1 mr-2' onChange={handleCheckboxChange} />
                <label htmlFor='checkbox' className='text-xs text-gray-400 tracking-[3px] font-light'>
                  Oświadczam, iż przeczytałem/am
                  <RouterLink to='Polityka-Prywatności' onClick={() => window.scrollTo(0, 0)}>
                    {" "}
                    politykę prywatności
                  </RouterLink>
                  i wyrażam zgodę na przetwarzanie moich danych osobowych w celach kontaktowych przez administratora
                  strony.
                </label>
              </div>
              {showHiddenText && (
                <p className='text-red-200 text-xs tracking-[5px] font-light'>*Zaznaczenie tej zgody jest wymagane</p>
              )}
            </div>
          </form>
        </section>
        <aside className='md:w-[50%] px-4 md:ml-10 h-full md:mb-6 flex justify-center mx-auto md:pt-20'>
          <ul>
            <li className='flex py-2 items-center space-x-2'>
              <img src={Fb} width={40} loading='lazy' alt='Facebook' />
              <a
                href='https://www.facebook.com/patrycjadawidfotografia?locale=pl_PL'
                className='tracking-[3px] font-normal text-titleGray'
              >
                Patrycja Dawid Fotografia
              </a>
            </li>
            <li className='flex py-2 items-center space-x-2'>
              <img src={Mess} width={40} loading='lazy' alt='Messenger' />
              <a href='https://m.me/patrycjadawidfotografia' className='tracking-[3px] font-normal text-titleGray'>
                Patrycja Dawid Fotografia
              </a>
            </li>
            <li className='flex py-2 items-center space-x-2'>
              <img src={Ig} width={40} loading='lazy' alt='Instagram' />
              <a
                href='https://www.instagram.com/patrycjadfotografia/'
                className='tracking-[3px] font-normal text-titleGray'
              >
                patrycjadfotografia
              </a>
            </li>
            <li className='flex py-2 items-center space-x-2'>
              <img src={Mail} width={40} loading='lazy' alt='Email' />
              <a href='mailto:wiktorskid@wp.pl' className='tracking-[3px] font-normal text-titleGray'>
                patrycjad20@gmail.com
              </a>
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
}

export default Contact;
