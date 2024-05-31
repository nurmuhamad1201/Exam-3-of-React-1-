import React from 'react'
import { useTranslation } from 'react-i18next'
import imgforMenu1 from '../img/imgforMenu1.png'
import imgforMenu2 from '../img/imgforMenu2.png'
import imgforMenu3 from '../img/imgforMenu3.png'

import imgforMenu4 from '../img/imgforMenu4.png'

import imgforMenu5 from '../img/imgforMenu5.png'
 

const Pokupat = () => {
    const {t} = useTranslation();
  return (
    <div>
      
      <section className="bg-blue-500 w-[90%] m-auto mt-[50px] rounded-[20px] dark:bg-black text-white p-4">
  <h1 className="text-[50px] py-[20px] font-bold mb-2">{t("salom33")}</h1>
  <p className="text-lg">{t("salom34")}</p>
</section>

<section className=' w-[81%] m-auto '>
  <h1 className="text-[40px] py-[20px] font-bold mb-2">{t("salom35")}</h1>
  <p className="text-lg">{t("salom36")}</p>
</section>

<section className="flex items-center p-4 md:flex-wrap w-[90%] py-[40px] m-auto bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
  <img src={imgforMenu1} alt="" className="w-[40%] md:w-[80%] h-auto object-cover rounded-lg" />
  <div className="w-1/2 md:w-[95%] m-auto pl-4">
    <div className="flex items-center space-x-2">
      <h1 className="text-[60px] font-[500] px-[20px] text-[#01CD7D] border-r-2 border-black  dark:text-gray-200">01</h1>
      <h1 className="text-xl font-bold text-gray-800 dark:text-gray-200">{t("salom38")}</h1>
    </div>
    <p className="text-gray-600 dark:text-gray-400 mt-2">{t("salom37")}</p>
  </div>
</section>

<section className="flex items-center p-4 md:flex-wrap w-[90%] py-[40px] m-auto bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
  <img src={imgforMenu2} alt="" className="w-[40%] md:w-[80%] h-auto object-cover rounded-lg" />
  <div className="w-1/2 md:w-[95%] m-auto pl-4">
    <div className="flex items-center space-x-2">
      <h1 className="text-[60px] font-[500] px-[20px] text-[#01CD7D] border-r-2 border-black  dark:text-gray-200">02</h1>
      <h1 className="text-xl font-bold text-gray-800 dark:text-gray-200">{t("salom39")}</h1>
    </div>
    <p className="text-gray-600 dark:text-gray-400 mt-2">{t("salom40")}</p>
  </div>
</section>
<section className="flex items-center p-4 md:flex-wrap w-[90%] py-[40px] m-auto bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
  <img src={imgforMenu3} alt="" className="w-[40%] md:w-[80%] h-auto object-cover rounded-lg" />
  <div className="w-1/2 md:w-[95%] m-auto pl-4">
    <div className="flex items-center space-x-2">
      <h1 className="text-[60px] font-[500] px-[20px] text-[#01CD7D] border-r-2 border-black  dark:text-gray-200">03</h1>
      <h1 className="text-xl font-bold text-gray-800 dark:text-gray-200">{t("salom41")}</h1>
    </div>
    <p className="text-gray-600 dark:text-gray-400 mt-2">{t("salom42")}</p>
  </div>
</section>
<section className="flex items-center p-4 md:flex-wrap w-[90%] py-[40px] m-auto bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
  <img src={imgforMenu4} alt="" className="w-[40%] md:w-[80%] h-auto object-cover rounded-lg" />
  <div className="w-1/2 md:w-[95%] m-auto pl-4">
    <div className="flex items-center space-x-2">
      <h1 className="text-[60px] font-[500] px-[20px] text-[#01CD7D] border-r-2 border-black  dark:text-gray-200">04</h1>
      <h1 className="text-xl font-bold text-gray-800 dark:text-gray-200">{t("salom43")}</h1>
    </div>
    <p className="text-gray-600 dark:text-gray-400 mt-2">{t("salom44")}</p>
  </div>
</section>
<section className="flex items-center p-4 md:flex-wrap w-[90%] py-[40px] m-auto bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
  <img src={imgforMenu5} alt="" className="w-[40%] md:w-[80%] h-auto object-cover rounded-lg" />
  <div className="w-1/2 md:w-[95%] m-auto pl-4">
    <div className="flex items-center space-x-2">
      <h1 className="text-[60px] font-[500] px-[20px] text-[#01CD7D] border-r-2 border-black  dark:text-gray-200">05</h1>
      <h1 className="text-xl font-bold text-gray-800 dark:text-gray-200">{t("salom45")}</h1>
    </div>
    <p className="text-gray-600 dark:text-gray-400 mt-2">{t("salom46")}</p>
  </div>
</section>




    </div>
  )
}

export default Pokupat