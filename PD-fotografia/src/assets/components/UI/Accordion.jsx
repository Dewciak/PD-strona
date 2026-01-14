import React from "react";

/**
 * Custom Accordion component - replacement for @material-tailwind/react
 */
export function Accordion({children, open, icon, className = ""}) {
  return (
    <div className={`border-b border-blue-gray-100 ${className}`}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {open, icon});
        }
        return child;
      })}
    </div>
  );
}

export function AccordionHeader({children, onClick, className = "", icon, open}) {
  return (
    <button
      type='button'
      onClick={onClick}
      className={`flex w-full items-center justify-between py-4 text-left text-base antialiased transition-colors ${className}`}
    >
      <span>{children}</span>
      {icon && <span className='ml-4'>{icon}</span>}
    </button>
  );
}

export function AccordionBody({children, className = "", open}) {
  return (
    <div
      className={`overflow-hidden transition-all duration-300 ease-in-out ${
        open ? "max-h-[1000px] opacity-100 pb-4" : "max-h-0 opacity-0"
      }`}
    >
      <div className={className}>{children}</div>
    </div>
  );
}

export default Accordion;
