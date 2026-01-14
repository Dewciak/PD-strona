import React, {useState, useEffect} from "react";

/**
 * Custom Tabs component - replacement for @material-tailwind/react
 */
export function Tabs({children, value, className = ""}) {
  return (
    <div className={className}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {activeValue: value});
        }
        return child;
      })}
    </div>
  );
}

export function TabsHeader({children, className = "", indicatorProps, activeValue}) {
  return (
    <div role='tablist' className={`flex ${className}`}>
      {children}
    </div>
  );
}

export function TabsBody({children, className = "", animate, activeValue}) {
  const [displayedValue, setDisplayedValue] = useState(activeValue);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (activeValue !== displayedValue) {
      setIsAnimating(true);
      const timeout = setTimeout(() => {
        setDisplayedValue(activeValue);
        setIsAnimating(false);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [activeValue, displayedValue]);

  return (
    <div className={className}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          const isActive = child.props.value === displayedValue;
          return React.cloneElement(child, {
            isActive,
            isAnimating: isAnimating && child.props.value === displayedValue,
          });
        }
        return child;
      })}
    </div>
  );
}

export function Tab({children, value, onClick, className = ""}) {
  return (
    <button
      role='tab'
      onClick={onClick}
      className={`flex-1 py-2 px-4 text-center cursor-pointer transition-all duration-300 ${className}`}
    >
      {children}
    </button>
  );
}

export function TabPanel({children, value, className = "", isActive = false, isAnimating = false}) {
  if (!isActive) return null;

  return (
    <div
      role='tabpanel'
      className={`transition-all duration-300 ease-out ${
        isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default Tabs;
