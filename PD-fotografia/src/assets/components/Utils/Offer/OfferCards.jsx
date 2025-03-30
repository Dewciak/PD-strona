import {useState} from "react";
import {Tabs, TabsHeader, TabsBody, Tab, TabPanel} from "@material-tailwind/react";
import {FaFacebookMessenger} from "react-icons/fa";

export function OfferCards({props: data}) {
  const [activeTab, setActiveTab] = useState(data[0].value);

  const currentTabData = data.find((item) => item.value === activeTab);

  const descCount = Object.keys(currentTabData).filter((key) => key.startsWith("desc")).length;
  return (
    <section id='Packages' className='max-w-[1150px]  sm:h-auto  mx-auto md:mt-32 pt-20 z-1 relative  '>
      <h2 className='text-5xl  text-center tracking-[5px] font-light text-titleGray'>Pakiety</h2>
      <h3 className='text-center text-gray-500 text-semibold pt-2  pb-[50px] text-3xl tracking-[5px] font-light '>
        sesja
      </h3>
      <Tabs value={activeTab}>
        <TabsHeader
          className='horizontal-scroll-container border-b max-w-[97%] md:max-w-[80%] mx-auto border-blue-gray-50 bg-transparent py-2 rounded-[12px] z-[1]  bg-gradient-to-r from-blue-100 to-[#EBDFFA]'
          indicatorProps={{
            className: "w-[90%] mt-1 mx-auto bg-transparent  shadow-none rounded-none ",
          }}
        >
          {data.map(({label, value}) => (
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
          className='flex flex-row'
          animate={{
            initial: {y: 250},
            mount: {y: 0},
            unmount: {y: 250},
          }}
        >
          {/* ############### Option 1 ############### */}

          {data.map(({value, desc, desc2, desc3, desc4, desc5, desc6, amount}) => (
            <TabPanel
              key={value}
              value={value}
              className='rounded-[20px]  mt-16 space-y-6   w-[100%] relative left-[-10]  flex flex-col md:flex-row justify-center items-center space-x-6 pb-10 '
            >
              <div className='md:w-[355px] h-[470px] md:mt-10 ml-6 w-[100%] px-6 bg-white shadow-md shadow-[#00000035] rounded-[20px] flex flex-col justify-center items-center md:hover:scale-105 duration-500 cursor-default'>
                <h1 className='pt-20 pb-14 text-center text-3xl  tracking-[5px] font-light text-titleGray'>Pakiet 1</h1>
                <div className='text-center  font-semibold text-2xl '>{desc}</div>
                <div className='py-10 text-sm text-gray-500  text-center'>{desc2}</div>
                <a href='https://m.me/patrycjadawidfotografia' target='blank'>
                  <button className='mx-auto py-1 px-10 mb-16 text-lg tracking-[4px] font-medium text-titleGray bg-[#DFF0FA] rounded-[50px] flex flex-row space-x-2 items-center '>
                    <span>Umów się</span>
                    <FaFacebookMessenger />
                  </button>
                </a>
              </div>

              {/* ############### Option 2 ############### */}
              {descCount >= 3 && (
                <div className='md:w-[355px] h-[470px] w-[100%] px-6 mx-auto bg-white shadow-md shadow-[#00000035] rounded-[20px] flex flex-col justify-center items-center md:hover:scale-105 duration-500 cursor-default'>
                  <h1 className='pt-20 pb-14 mt-4 text-center text-3xl tracking-[5px] font-light text-titleGray'>
                    Pakiet 2
                  </h1>
                  <div className='text-center  font-semibold text-2xl '>{desc3}</div>
                  <div className='py-10 text-sm text-gray-500 text-center'>{desc4}</div>
                  <a href='https://m.me/patrycjadawidfotografia' target='blank'>
                    <button className='mx-auto py-1 px-10 mb-16 text-lg tracking-[4px] font-medium text-titleGray bg-[#F9DFFA] rounded-[50px] flex flex-row space-x-2 items-center '>
                      <span>Umów się</span>
                      <FaFacebookMessenger />
                    </button>
                  </a>
                </div>
              )}
              {/* ############### Option 3 ############### */}
              {descCount >= 5 && (
                <div className='md:w-[355px] h-[470px] w-[100%] px-6 bg-white  mx-auto shadow-md shadow-[#00000035] rounded-[20px] flex flex-col justify-center items-center md:hover:scale-105 duration-500 cursor-default'>
                  <h1 className='pt-20 pb-14 text-center text-3xl tracking-[5px] font-light text-titleGray'>
                    Pakiet 3
                  </h1>
                  <div className='text-center font-semibold text-2xl'>{currentTabData.desc5}</div>
                  <div className='py-10 text-sm text-gray-500 text-center'>{currentTabData.desc6}</div>
                  <a href='https://m.me/patrycjadawidfotografia' target='blank'>
                    <button className='mx-auto py-1 px-10 mb-16 text-lg tracking-[4px] font-medium text-titleGray bg-[#EBDFFA] rounded-[50px] flex flex-row space-x-2 items-center '>
                      <span>Umów się</span>
                      <FaFacebookMessenger />
                    </button>
                  </a>
                </div>
              )}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </section>
  );
}
