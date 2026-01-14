import React from "react";
import {DayPicker} from "react-day-picker";
import {pl} from "date-fns/locale";
import "react-day-picker/dist/style.css";

const Callendar = ({bookedDates, availableDates, selectedDate, onSelectDate}) => {
  // Stylizacja zajętych i wolnych dni
  const modifiers = {
    booked: bookedDates,
    available: availableDates
  };
  const modifiersStyles = {
    booked: {
      color: "white",
      backgroundColor: "#ab47bc",
      borderRadius: "8px",
      fontWeight: "bold",
    },
    available: {
      color: "white",
      backgroundColor: "#56c0fd",
      borderRadius: "8px",
      fontWeight: "bold",
    },
  };

  return (
    <div className='calendar-card'>
      <DayPicker
        mode='single'
        selected={selectedDate}
        onSelect={onSelectDate}
        disabled={bookedDates}
        modifiers={modifiers}
        modifiersStyles={modifiersStyles}
        locale={pl}
      />

      <div className='legend'>
        <div className='legend-item'>
          <span className='dot red'></span> Zajęte
        </div>
        <div className='legend-item'>
          <span className='dot blue'></span> Wolne
        </div>
        <div className='legend-item'>
          <span className='dot gray'></span> Inne
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
        .dot.blue { background: #56c0fd; }
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

export default Callendar;
