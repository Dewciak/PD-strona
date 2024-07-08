import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

export function UnderlineTabs() {
  const [activeTab, setActiveTab] = React.useState("Z wystaw");
  const data = [
    {
      label: "Z wystaw",
      value: "Z wystaw",
      desc: "35zł / szt",
      desc2: "koszt ujęcia z ringu",
      //   druga karta
      desc3: "45zł / szt",
      desc4: "Ujęcia w plenerze",
      //   trzecia karta
    },
    {
      label: "Z zawodów",
      value: "Z zawodów",
      desc: `6 zdjęć - 140zł`,
      desc2: `koszt pojedynczego ujęcia to 30zł`,
    },
    {
      label: "Inne",
      value: "Inne",
      desc: "ustalimy wspólnie :)",
      // desc2: `Mozliwość dokupienia pojedynczego ujecia w cenie 40 zł`,
    },
  ];
  const currentTabData = data.find((item) => item.value === activeTab);

  // Count the number of descriptions for the current tab
  const descCount = Object.keys(currentTabData).filter((key) =>
    key.startsWith("desc")
  ).length;
  return (
    <Tabs value={activeTab}>
      <TabsHeader
        className=" border-b max-w-[100%] md:max-w-[80%] mx-auto border-blue-gray-50 bg-transparent py-1 rounded-[12px] z-[1]  bg-gradient-to-r from-blue-100 to-[#EBDFFA]"
        indicatorProps={{
          className:
            "w-[90%] mt-1 mx-auto bg-transparent border-b-2 border-gray-600 shadow-none rounded-none ",
        }}
      >
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={
              activeTab === value
                ? "text-gray-700 text-sm md:text-xl tracking-[5px]  duration-300"
                : "md:text-xl text-sm tracking-[5px] font-light "
            }
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody
        className="flex flex-row"
        animate={{
          initial: { y: 250 },
          mount: { y: 0 },
          unmount: { y: 250 },
        }}
      >
        {/* ############### PAKIET 1 ############### */}

        {data.map(
          ({ value, desc, desc2, desc3, desc4, desc5, desc6, amount }) => (
            <TabPanel
              key={value}
              value={value}
              className="rounded-[20px]  mt-16 space-y-6   w-[100%] relative left-[-10]  flex flex-col md:flex-row justify-center items-center space-x-6 pb-10 "
            >
              <div className="md:w-[355px] h-[470px] md:mt-10 ml-6 w-[100%] px-6 bg-white shadow-md shadow-[#00000035] rounded-[20px] flex flex-col justify-center items-center md:hover:scale-105 duration-500 cursor-default">
                <h1 className="pt-20 pb-14 text-center text-3xl  tracking-[5px] font-light text-titleGray">
                  Pakiet 1
                </h1>
                <div className="text-center  font-semibold text-2xl ">
                  {desc}
                </div>
                <div className="py-10 text-sm text-gray-500  text-center">
                  {desc2}
                </div>
                <a href="https://m.me/patrycjadawidfotografia" target="blank">
                  <button className="mx-auto py-1 px-10 mb-16 text-lg tracking-[4px] font-medium text-titleGray bg-[#DFF0FA] rounded-[50px]">
                    Umów się
                  </button>
                </a>
              </div>

              {/* drugi pakiet */}
              {descCount >= 3 && (
                <div className="md:w-[355px] h-[470px] w-[100%] px-6 mx-auto bg-white shadow-md shadow-[#00000035] rounded-[20px] flex flex-col justify-center items-center md:hover:scale-105 duration-500 cursor-default">
                  <h1 className="pt-20 pb-14 mt-4 text-center text-3xl tracking-[5px] font-light text-titleGray">
                    Pakiet 2
                  </h1>
                  <div className="text-center  font-semibold text-2xl ">
                    {desc3}
                  </div>
                  <div className="py-10 text-sm text-gray-500 text-center">
                    {desc4}
                  </div>
                  <a href="https://m.me/patrycjadawidfotografia" target="blank">
                    <button className="mx-auto py-1 px-10 mb-16 text-lg tracking-[4px] font-medium text-titleGray bg-[#F9DFFA] rounded-[50px]">
                      Umów się
                    </button>
                  </a>
                </div>
              )}
              {/* trzeci pakiet */}
              {descCount >= 5 && (
                <div className="md:w-[355px] h-[470px] w-[100%] px-6 bg-white  mx-auto shadow-md shadow-[#00000035] rounded-[20px] flex flex-col justify-center items-center md:hover:scale-105 duration-500 cursor-default">
                  <h1 className="pt-20 pb-14 text-center text-3xl tracking-[5px] font-light text-titleGray">
                    Pakiet 3
                  </h1>
                  <div className="text-center font-semibold text-2xl">
                    {currentTabData.desc5}
                  </div>
                  <div className="py-10 text-sm text-gray-500 text-center">
                    {currentTabData.desc6}
                  </div>
                  <a href="https://m.me/patrycjadawidfotografia" target="blank">
                    <button className="mx-auto py-1 px-10 mb-16 text-lg tracking-[4px] font-medium text-titleGray bg-[#EBDFFA] rounded-[50px]">
                      Umów się
                    </button>
                  </a>
                </div>
              )}
            </TabPanel>
          )
        )}
      </TabsBody>
    </Tabs>
  );
}
