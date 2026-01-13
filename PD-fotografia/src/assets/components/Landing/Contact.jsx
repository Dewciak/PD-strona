import React, {useState, useEffect} from "react";
import {Link as RouterLink} from "react-router-dom";
import {parse} from "date-fns";

import Callendar from "./Callendar";
import Socials from "./Socials";

function Contact() {
  const [isChecked, setIsChecked] = useState(false);
  const [showHiddenText, setShowHiddenText] = useState(false);
  const [bookedDates, setBookedDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    fetch("https://pati.wiktordawid.pl/wp-json/wp/v2/posts?categories=7&per_page=100")
      .then((res) => res.json())
      .then((data) => {
        const dates = data
          .map((post) => post.acf?.kalendarz)
          .filter(Boolean)
          .map((dateStr) => parse(dateStr, "yyyyMMdd", new Date()));
        setBookedDates(dates);
      })
      .catch((err) => console.error("Błąd pobierania:", err));
  }, []);

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

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  return (
    <section id='contact' className='max-w-[850px] px-4 flex flex-col items-center mx-auto md:mb-10 md:pt-6 pt-0 pb-4'>
      <header className='text-center'>
        <h1 className='text-5xl md:text-6xl tracking-[5px] font-light text-titleGray'>Skontaktuj</h1>
        <h2 className='text-2xl tracking-[5px] font-light text-[#56C0FD] md:mt-0'>się ze mną!</h2>
      </header>
      <Socials />

      <div className='w-full flex flex-col-reverse md:flex-row mt-6 justify-between md:items-start items-center'>
        <section className='md:w-[45%] w-full flex flex-col  '>
          {/* <h2 className='text-left text-xl py-3  font-light text-titleGray'>Zapytaj o termin!</h2> */}
          <form action='https://api.web3forms.com/submit' method='POST' className='flex flex-col items-center mt-2'>
            <input type='hidden' name='access_key' value='5731e935-f338-41a7-9570-165fae0ceacc' />
            <div className='md:min-w-[355px] min-w-[295px] flex flex-col '>
              <label>
                <span className='sr-only'>Adres email</span>
                <input
                  type='email'
                  name='email'
                  required
                  placeholder='e-mail'
                  className='w-full rounded-md bg-[#F1F1F1] py-3 pl-4  font-light text-titleGray'
                />
              </label>
              <label>
                <span className='sr-only'>Wiadomość</span>
                <textarea
                  name='Wiadomość'
                  required
                  placeholder='Wiadomość'
                  className='w-full mt-2 md:pb-[100px] pb-16 rounded-md bg-[#F1F1F1] shadow-md py-2 px-4 ] font-light text-titleGray'
                ></textarea>
              </label>
              <input
                type='hidden'
                name='Wybrana data przez klienta'
                value={selectedDate ? selectedDate.toISOString().split("T")[0] : ""}
              />
              <button
                type='submit'
                onClick={handleSubmitClick}
                id='ContactButton'
                className='rounded-[50px] w-full ml-auto  tracking-normal mt-4 font-medium bg-[#AB47BC] text-white/90  py-[6px] text-[17px]  hover:text-[#9b9b9b]'
              >
                Wyślij
              </button>
              <div className='flex items-start ml-2 pb-4 mt-4'>
                <input type='checkbox' id='checkbox' className='mt-1 mr-2' onChange={handleCheckboxChange} />
                <label htmlFor='checkbox' className='text-xs text-gray-400  font-light'>
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
                <p className='text-red-200 text-xs ] font-light'>*Zaznaczenie tej zgody jest wymagane</p>
              )}
            </div>
          </form>
        </section>
        <div className='w-[fit-content] md:ml-6 ml-0 md:items-end flex flex-col mb-10 md:mb-0 items-center md:flex-col-reverse'>
          <span className=' text-center max-w-[310px] md:mr-4  md:mt-4 pb-6 md:pb-0'>
            Kliknij i wybierz jaki termin Cie interesuje!
          </span>
          <Callendar bookedDates={bookedDates} selectedDate={selectedDate} onSelectDate={handleDateSelect} />
        </div>
      </div>
    </section>
  );
}

export default Contact;
