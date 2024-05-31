import React from 'react'
import { useTranslation } from 'react-i18next'
import pupsik1 from '../img/pupsik1.png'
import pupsik2 from '../img/pupsik2.png'
import pupsik3 from '../img/pupsik3.png'
import pupsik4 from '../img/pupsik4.png'
import imgsec2 from '../img/imgsec2.png'
import Ресурс6 from '../img/Ресурс6.png'

const Price = () => {
    const {t} = useTranslation()
  return (
    <div>


<section className="bg-blue-500 w-[90%] m-auto mt-[50px] rounded-[20px] dark:bg-black text-white p-4">
  <h1 className="text-[50px] py-[20px] font-bold mb-2">{t("salom50")}</h1>
 
</section>


<section className="py-12">
  <h1 className="w-1/2 ml-12 font-semibold text-4xl">{t("salom49")}</h1>

  <section className="px-12 py-12 2xl:flex-wrap">
 
    
    <div className="flex items-center gap-[30px]  md:flex-wrap 2xl:w-3/5 m-auto py-5 justify-between ">
      <div className="mb-8  w-[20%] px-8">
        <img src={pupsik1} alt="" className="max-w-lg mb-6" />
        <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-dark">{t("salom52")}</h1>
        <p className="text-gray-700">{t("salom53")}</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
          от £10.00
        </button>
      </div>
      
      <div className="mb-8 w-[20%] 2xl:w-3/5 m-auto">
        <img src={pupsik2} alt="" className="max-w-lg mb-6" />
        <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-dark">{t("salom54")}</h1>
        <p className="text-gray-700">{t("salom55")}</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
 от £10.00
        </button>
      </div>
      
      <div className="2xl:w-3/5 w-[20%] m-auto mb-8">
        <img src={pupsik3} alt="" className="max-w-lg mb-6" />
        <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-dark">{t("salom56")}</h1>
        <p className="text-gray-700">{t("salom57")}</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
          от £10.00
        </button>
      </div>
      <div className="2xl:w-3/5 w-[20%] m-auto mb-8">
        <img src={pupsik4} alt="" className="max-w-lg mb-6" />
        <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-dark">{t("salom56")}</h1>
        <p className="text-gray-700">{t("salom57")}</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
          от £10.00
        </button>
      </div>

     
    </div>
  </section>
</section>

<section className="py-8 w-[50%] lg:w-[80%] px-[50px] bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
  <h1 className="text-4xl font-semibold mb-4 text-gray-900 dark:text-gray-100">{t("salom58")}</h1>
  <p className="text-lg text-gray-700 dark:text-gray-300">{t("salom59")}</p>
</section>

<section className='p-8 bg-gray-100 2xl:flex-wrap dark:bg-blue-gray-900 px-[100px] text-gray-900 dark:text-white flex items-center gap-[30px] space-y-4'>
  <div className='flex flex-col'>
    <label htmlFor="country" className='mb-2'>Страна:</label>
    <input type="text" id="country" placeholder='Россия' className='bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500 dark:border-gray-600 dark:focus:border-blue-400'/>
  </div>
  <div className='flex flex-col'>
    <label htmlFor="city" className='mb-2'>Город:</label>
    <input type="text" id="city" placeholder='Москва' className='bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500 dark:border-gray-600 dark:focus:border-blue-400'/>
  </div>
  <div className='flex flex-col'>
    <label htmlFor="index" className='mb-2'>Индекс:</label>
    <input type="text" id="index" placeholder='Введите индекс' className='bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500 dark:border-gray-600 dark:focus:border-blue-400'/>
  </div>
  <div className='flex flex-col'>
    <label htmlFor="weight" className='mb-2'>Вес посылки:</label>
    <input type="text" id="weight" placeholder='0,5' className='bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500 dark:border-gray-600 dark:focus:border-blue-400'/>
  </div>
  <div className='flex flex-col'>
    <label htmlFor="services" className='mb-2'>Дополнительные услуги:</label>
    <input type="text" id="services" placeholder='Выберите услуги' className='bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500 dark:border-gray-600 dark:focus:border-blue-400'/>
  </div>
  <button className='mt-4 py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-700'>Рассчитать</button>
</section>


<section className='px-[100px] py-8 bg-gray-100 dark:bg-blue-gray-900 text-gray-900 dark:text-white'>
  <h1 className='text-2xl font-semibold mb-8'>{t("salom5")}</h1>

  <div className='space-y-8'>
    <div className='flex justify-between lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-8'>
      <img src={imgsec2} alt="" className='w-32 h-32 object-cover rounded-lg shadow-lg'/>
      <div className='flex flex-col px-[20px] border-x items-start'>
        <p className='text-sm'>{t("salom6")}</p>
        <h1 className='text-lg font-bold'>10-14 дней</h1>
      </div>
      <div className='flex flex-col items-start border-l-2 px-[20px] border-gray-300 dark:border-gray-600 pl-4'>
        <p className='text-sm'>{t("salom7")}</p>
        <h1 className='text-lg font-bold'>от £27.00</h1>
      </div>
      <div className='flex flex-col 2xl:hidden px-[20px] border-x items-start'>
        <p className='text-sm'>{t("salom8")}</p>
        <h1 className='text-lg font-bold'>£41.99</h1>
      </div>
    </div>

    <div className='flex justify-between lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-8'>
      <img src={imgsec2} alt="" className='w-32 h-32 object-cover rounded-lg shadow-lg'/>
      <div className='flex flex-col px-[20px] items-start'>
        <p className='text-sm'>{t("salom6")}</p>
        <h1 className='text-lg font-bold'>10-14 дней</h1>
      </div>
      <div className='flex flex-col border-x items-start px-[20px] border-l-2 border-gray-300 dark:border-gray-600 pl-4'>
        <p className='text-sm'>{t("salom7")}</p>
        <h1 className='text-lg font-bold'>от £27.00</h1>
      </div>
      <div className='flex flex-col 2xl:hidden border-x px-[20px] items-start'>
        <p className='text-sm'>{t("salom8")}</p>
        <h1 className='text-lg font-bold'>£41.99</h1>
      </div>
    </div>
  </div>
</section>





<section className="py-8 px-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
  <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
    <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{t("salom60")}</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300">£1.00/1 трек</p>
    </div>
    <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{t("salom61")}</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300">£1.00/1 трек</p>
    </div>
    <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{t("salom62")}</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300">£1.00/1 трек</p>
    </div>
    <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{t("salom61")}</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300">£1.00/1 трек</p>
    </div>
    <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{t("salom60")}</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300">£1.00/1 трек</p>
    </div>
    <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{t("salom63")}</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300">£1.00/1 трек</p>
    </div>
  </div>
</section>

<section className="py-8 px-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

  <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{t("salom60")}</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300">£1.00/1 трек</p>
    </div>
  <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{t("salom60")}</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300">£1.00/1 трек</p>
    </div>
  <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{t("salom60")}</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300">£1.00/1 трек</p>
    </div>
  <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{t("salom60")}</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300">£1.00/1 трек</p>
    </div>
  </div>
</section>
<section className="py-8 px-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
    <h1>{t("salom64")}</h1>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

 
  <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{t("salom65")}</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300">{t("salom67")}</p>
    </div>
  <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{t("salom64")}</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300">{t("salom66")}</p>
    </div>
  </div>
</section>


<section className="bg-blue-500 w-[90%] flex m-auto mt-[50px] rounded-[20px] dark:bg-black text-white p-4">
  <img src={Ресурс6} alt="" className="w-1/2 max-w-lg mb-6 rounded-l-[20px]" />
  <div className="flex flex-col justify-center w-1/2 pl-4">
    <h1 className="text-[30px] py-[20px] font-bold mb-2">{t("salom68")}</h1>
    <input 
      placeholder="Введите ссылку на товар" 
      type="text" 
      className="bg-transparent border-b-2 border-white focus:outline-none focus:border-blue-300 text-white p-2"
    />
  </div>
</section>


<section className="py-8 px-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

  <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{t("salom60")}</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300">£1.00/1 трек</p>
    </div>
  <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{t("salom60")}</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300">£1.00/1 трек</p>
    </div>

  </div>
</section>


<div className="grid grid-cols-2 md:grid-cols-2 gap-8 py-[50px] ">
    <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{t("salom60")}</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300">£1.00/1 трек</p>
    </div>
    <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{t("salom61")}</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300">£1.00/1 трек</p>
    </div>
    <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{t("salom62")}</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300">£1.00/1 трек</p>
    </div>

    <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{t("salom63")}</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300">£1.00/1 трек</p>
    </div>

    <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{t("salom63")}</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300">£1.00/1 трек</p>
    </div>
  </div>
 

  <section className="bg-blue-500 w-[90%] m-auto mt-[50px] rounded-[20px] dark:bg-black text-white p-4">
  <h1 className="text-[50px] py-[20px] font-bold mb-2">{t("salom69")}</h1>
 
</section>

    </div>
  )
}

export default Price