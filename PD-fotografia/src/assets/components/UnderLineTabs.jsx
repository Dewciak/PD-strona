import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

export function UnderlineTabs() {
  const [activeTab, setActiveTab] = React.useState("Plenerowa");
  const data = [
    {
      label: "Plenerowa",
      value: "Plenerowa",
      desc: "5 zdjęć - 300 zł",
      desc2: "Możliwość dokupienia kolejnego ujęcia w cenie 40 zł",
      //   druga karta
      desc3: "8 zdjęć - 400 zł",
      desc4: "Możliwość dokupienia kolejnego ujęcia w cenie 35 zł",
      //   trzecia karta
      desc5: "12 zdjęć - 500zł",
      desc6: "Możliwość dokupienia kolejnego ujęcia w cenie 30 zł",
    },
    {
      label: "Eksterierowa",
      value: "Eksterierowa",
      desc: `5 zdjęć - 280 zł`,
      desc2: `Mozliwość dokupienia pojedynczego ujecia w cenie 45 zł`,
      desc3: `8 zdjęć - 350 zł`,
      desc4: `Mozliwość dokupienia pojedynczego ujecia w cenie 40 zł`,
    },
    {
      label: "Treningowa",
      value: "Treningowa",
      desc: "10 zdjęć - 350 zł",
      desc2: `Mozliwość dokupienia pojedynczego ujecia w cenie 30 zł`,
      desc3: `15 zdjęć - 450 zł`,
      desc4: `Mozliwość dokupienia pojedynczego ujecia w cenie 25 zł`,
    },
    {
      label: "Miotów",
      value: "Miotów",
      desc: `8 zdjęć - 300 zł`,
      desc2: `Mozliwość dokupienia pojedynczego ujecia w cenie 30 zł`,
      desc3: `12 zdjęć - 400 zł`,
      desc4: `Mozliwość dokupienia pojedynczego ujecia w cenie 25 zł`,
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
            "w-[90%] mt-1 mx-auto bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
        }}
      >
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={
              activeTab === value
                ? "text-gray-900 text-sm md:text-2xl duration-300"
                : "md:text-xl text-sm"
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
                <h1 className="pt-20 pb-14 text-center text-3xl font-semibold">
                  Pakiet 1
                </h1>
                <div className="text-center  font-semibold text-2xl ">
                  {desc}
                </div>
                <div className="py-10 text-sm text-gray-500 text-center">
                  {desc2}
                </div>
                <a href="https://m.me/patrycjadawidfotografia" target="blank">
                  <button className="mx-auto py-1 px-10 mb-16 text-lg font-semibold bg-[#DFF0FA] rounded-[50px]">
                    Umów się
                  </button>
                </a>
              </div>

              {/* drugi pakiet */}
              <div className="md:w-[355px] h-[470px] w-[100%] px-6 mx-auto bg-white shadow-md shadow-[#00000035] rounded-[20px] flex flex-col justify-center items-center md:hover:scale-105 duration-500 cursor-default">
                <h1 className="pt-20 pb-14 mt-4 text-center text-3xl font-semibold">
                  Pakiet 2
                </h1>
                <div className="text-center  font-semibold text-2xl ">
                  {desc3}
                </div>
                <div className="py-10 text-sm text-gray-500 text-center">
                  {desc4}
                </div>
                <a href="https://m.me/patrycjadawidfotografia" target="blank">
                  <button className="mx-auto py-1 px-10 mb-16 text-lg font-semibold bg-[#F9DFFA] rounded-[50px]">
                    Umów się
                  </button>
                </a>
              </div>
              {/* trzeci pakiet */}
              {descCount >= 5 && (
                <div className="md:w-[355px] h-[470px] w-[100%] px-6 bg-white  mx-auto shadow-md shadow-[#00000035] rounded-[20px] flex flex-col justify-center items-center md:hover:scale-105 duration-500 cursor-default">
                  <h1 className="pt-20 pb-14 text-center text-3xl font-semibold">
                    Pakiet 3
                  </h1>
                  <div className="text-center font-semibold text-2xl">
                    {currentTabData.desc5}
                  </div>
                  <div className="py-10 text-sm text-gray-500 text-center">
                    {currentTabData.desc6}
                  </div>
                  <a href="https://m.me/patrycjadawidfotografia" target="blank">
                    <button className="mx-auto py-1 px-10 mb-16 text-lg font-semibold bg-[#EBDFFA] rounded-[50px]">
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
