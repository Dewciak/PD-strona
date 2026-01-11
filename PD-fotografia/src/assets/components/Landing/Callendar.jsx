import React, {useState, useEffect} from "react";
import {DayPicker} from "react-day-picker";
import {parse} from "date-fns";
import {pl} from "date-fns/locale"; // Poprawny import zamiast require
import "react-day-picker/dist/style.css";

const BookingCalendar = () => {
  const [bookedDates, setBookedDates] = useState([]);

  useEffect(() => {
    // Adres Twojego API
    fetch(
      "http://wordpress-wcc8484kcwwsww40ko00ccwc.49.12.2.146.sslip.io/wp-json/wp/v2/posts?categories=7&per_page=100"
    )
      .then((res) => res.json())
      .then((data) => {
        const dates = data
          .map((post) => post.acf?.kalendarz) // ACF Name to 'kalendarz'
          .filter(Boolean)
          .map((dateStr) => parse(dateStr, "yyyyMMdd", new Date()));
        setBookedDates(dates);
      })
      .catch((err) => console.error("Błąd pobierania:", err));
  }, []);

  // Stylizacja zajętych dni
  const modifiers = {booked: bookedDates};
  const modifiersStyles = {
    booked: {
      color: "white",
      backgroundColor: "#ab47bc",
      borderRadius: "8px",
      fontWeight: "bold",
    },
  };

  return (
    <div className='calendar-card'>
      <DayPicker
        mode='multiple'
        selected={bookedDates}
        modifiers={modifiers}
        modifiersStyles={modifiersStyles}
        locale={pl} // Użycie zaimportowanego locale
      />

      <div className='legend'>
        <div className='legend-item'>
          <span className='dot red'></span> Zajęte
        </div>
        <div className='legend-item'>
          <span className='dot gray'></span> Wolne
        </div>
      </div>

      <style>{`
        .calendar-card {
          display: inline-block;
          padding: 20px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          color: #333;
        }
        .legend { display: flex; gap: 15px; margin-top: 15px; font-size: 14px; }
        .legend-item { display: flex; align-items: center; gap: 6px; }
        .dot { width: 10px; height: 10px; border-radius: 50%; }
        .dot.red { background: #ab47bc; }
        .dot.gray { background: #f3f4f6; border: 1px solid #d1d5db; }
        /* Resetujemy domyślne zaznaczenie kliknięciem, bo chcemy tylko widok */
        .rdp-day_selected:not(.rdp-day_outside) { background: transparent; color: inherit; }\
        .rdp-chevron {
            color: #56c0fd !important;
            fill: #56c0fd !important;
            }

           
      `}</style>
    </div>
  );
};

export default BookingCalendar;
