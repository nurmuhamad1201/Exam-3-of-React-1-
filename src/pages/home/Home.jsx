import React from 'react'
import { useTranslation } from 'react-i18next'
import img1 from '../img/img1.png'; 
import { useRef, useState } from 'react';
import joma from '../img/joma.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import elek from '../img/elek.png'
import sumka from '../img/sumka.png'
import baby from '../img/baby.png'
import ukob from '../img/ukob.png'
import kosmetika from '../img/kosmetika.png'
import kurka from '../img/Kurtka.png'
import 'swiper/css';
import 'swiper/css/pagination';
import rusia from '../img/rusia.png'
import angliya from '../img/angli.png'
import '../home/home.css';
import { Pagination } from 'swiper/modules';
import jins from '../img/Джинсы.png'
import jokat from '../img/Футболка.png'
import imgsec1 from '../img/imgsec1.png'
import imgsec2 from '../img/imgsec2.png'
import imgsec3 from '../img/imgsec3.png'
import imgsec4 from '../img/imgsec4.png'
import imgsec5 from '../img/Иллюстрация.png'
import imgglaa1 from '../img/imgglaa1.png'
import imgglaa2 from '../img/imgglaa2.png'
import imgglaa3 from '../img/imgglaa3.png'
import televizor from '../img/televizor.png'
import imggla6 from '../img/imgglaa7.png'
import imggla7 from '../img/imgglaa6.png'
import fon1 from '../img/fon1.png'
import fon2 from '../img/fon2.png'
import fon3 from '../img/fon3.png'
import fon4 from '../img/fon4.png'


const Home = () => {

  const {t} = useTranslation()

  return (
    <div className=' '>
     
     <section className="bg-blue-500 w-[90%] 2xl:flex-wrap xl:flex-wrap m-auto rounded-[50px] dark:bg-[#000000d7] flex justify-around px-[50px] lg:flex-wrap lg:px-[10px] text-white py-10  md:px-0 md:flex items-center">
        <div className="  md:px-10">
          <h1 className="text-[50px] md:text-[20px] 2xl:text-[40px] font-bold">{t("doct")}</h1>
          <p className="text-[25px]">{t("parag1")}</p>
        </div>
        <img  src={img1} alt="" className="md:w-1/2 2xl:w-[60%] lg:w-[95%] m-auto " />
      </section>

    <section className='px-[100px] py-[50px] '>

    <h1 className='font-[600] text-[40px] pr-[200px] ' >{t('h12')}</h1>

      <div className=' py-[50px]'>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg">
            <img src={joma} alt="" className="w-full h-32 object-cover rounded-lg" />
            <p className="mt-2 text-center text-gray-700">{t("swip1")}</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg">
            <img src={elek} alt="" className="w-full h-32 object-cover rounded-lg" />
            <p className="mt-2 text-center text-gray-700">{t("swip2")}</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg">
            <img src={sumka} alt="" className="w-full h-32 object-cover rounded-lg" />
            <p className="mt-2 text-center text-gray-700">{t("swip3")}</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg">
            <img src={baby} alt="" className="w-full h-32 object-cover rounded-lg" />
            <p className="mt-2 text-center text-gray-700">{t("swip4")}</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg">
            <img src={ukob} alt="" className="w-full h-32 object-cover rounded-lg" />
            <p className="mt-2 text-center text-gray-700">{t("swip5")}</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg">
            <img src={kosmetika} alt="" className="w-full h-32 object-cover rounded-lg" />
            <p className="mt-2 text-center text-gray-700">{t("swip6")}</p>
          </div>
        </SwiperSlide>
      </Swiper>
      </div>


    </section>


    <section className='flex lg:flex-col   justify-between px-8 py-[50px] dark:text-white dark:bg-blue-gray-900 items-center bg-gray-100'>
  <div className='flex flex-col items-start mb-8 lg:mb-0'>
    <h1 className='text-xl font-semibold py-5 mb-4 lg:py-[20px]'>{t("kurkate")}</h1>

    <div className='flex items-center m-auto lg:w-[90%] lg:m-auto rounded-[20px] px-8 lg:px-[50px] bg-[#F2F6FC] py-8 lg:py-[50px] mb-4'>
      <img src={rusia} alt="" className='w-8 h-8'/>
      <div className='px-4'>
        <p className='text-sm text-gray-700'>Цена в России</p>
        <h1 className='text-lg font-bold text-gray-900'>7891,46₽</h1>
      </div>
    </div>
    <img className='m-auto pt-[100px] 2xl:hidden ' src={jokat} alt="" />
  </div>

  <div className='flex flex-col items-center mb-8 lg:mb-0'>
    <img src={kurka} alt="" className='w-full lg:w-auto h-auto mb-4'/>
    <p className='text-center text-gray-700 mb-2'>{t("srok")}</p>
    <h1 className='font-sans text-center font-bold text-3xl lg:text-4xl text-green-600'>{t("ekonom")}</h1>
  </div>

  <div className='flex flex-col items-start'>
    <h1 className='text-xl font-semibold py-5 mb-4 lg:py-[20px]'>{t("kurkat2")}</h1>

    <div className='flex items-center lg:w-[90%] m-auto  lg:m-auto rounded-[20px] px-[50px] lg:px-[50px] bg-[#F2F6FC] py-8 lg:py-[50px] mb-4'>
      <img src={angliya} alt="" className='w-8 h-8'/>
      <div className='px-4'>
        <p className='text-sm text-gray-700'>Цена в UK</p>
        <h1 className='text-lg font-bold text-[#01CD7D] '>£80.62</h1>
      </div>
    </div>
    <img className=' m-auto pt-[100px] 2xl:hidden ' src={jins} alt="" />

  </div>
</section>


<section className=' py-[50px] px-[200px] lg:px-[20px] w-[95%] m-auto '>
<Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
         
        <SwiperSlide>
          <div className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg">
            <img src={imgsec2} alt="" className="w-full h-32 object-cover rounded-lg" />
            <p className="mt-2 text-center text-gray-700">{t("swip2")}</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg">
            <img src={imgsec3} alt="" className="w-full h-32 object-cover rounded-lg" />
            <p className="mt-2 text-center text-gray-700">{t("swip3")}</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg">
            <img src={imgsec4} alt="" className="w-full h-32 object-cover rounded-lg" />
            <p className="mt-2 text-center text-gray-700">{t("swip4")}</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg">
            <img src={imgsec2} alt="" className="w-full h-32 object-cover rounded-lg" />
            <p className="mt-2 text-center text-gray-700">{t("swip5")}</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg">
            <img src={imgsec3} alt="" className="w-full h-32 object-cover rounded-lg" />
            <p className="mt-2 text-center text-gray-700">{t("swip6")}</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg">
            <img src={imgsec4} alt="" className="w-full h-32 object-cover rounded-lg" />
            <p className="mt-2 text-center text-gray-700">{t("swip4")}</p>
          </div>
        </SwiperSlide>
      </Swiper>
</section>


<section className='flex w-[97%] m-auto rounded-[20px] xl:flex-wrap  items-center justify-center p-8 bg-gradient-to-r from-[#5B52A3] to-[#40B8EA]'>
  <img src={imgsec5} alt="" className='w-full xl:w-[90%] max-w-lg mb-6'/>
  <div className='text-center px-[50px] '>
    <h1 className='text-2xl px-[50px] font-semibold mb-4 text-white'>{t("salom1")}</h1>
    <p className='text-lg text-white'>{t("salom2")}</p>
  </div>
</section>

<section className='p-8 bg-gradient-to-r  w-[55%]  '>
  <h1 className='text-2xl font-semibold mb-4 text-white text-left'>{t("salom3")}</h1>
  <p className='text-lg text-white text-left'>{t("salom4")}</p>
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


<section className=' px-[50px] 2xl:flex-wrap py-[50px] '>
  <h1 className="text-3xl 2xl:text-[20px] md:text-4xl lg:text-5xl xl:text-6xl text-dark">{t("salom9")}</h1>
  
  <div className='flex items-center 2xl:w-[60%] m-auto py-[20px] justify-between gap-7'>
    <div className="mb-8 px-[50px]">
      <img src={imgglaa1} alt="" className='max-w-lg mb-6'/>
      <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-dark">{t("salom10")}</h1>
      <p className="text-gray-700">{t("salom11")}</p>
    </div>
    
    <div className="mb-8 2xl:hidden m-auto">
      <img src={imgglaa2} alt="" className='max-w-lg mb-6'/>
      <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-dark">{t("salom10")}</h1>
      <p className="text-gray-700">{t("salom11")}</p>
    </div>
    
    <div className='2xl:w-[60%] 2xl:hidden m-auto'>
      <img src={imgglaa3} alt="" className='max-w-lg mb-6'/>
      <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-dark">{t("salom10")}</h1>
      <p className="text-gray-700">{t("salom11")}</p>
    </div>
  </div>
</section>


 
<section className="  p-8">
  <p className="text-[20px]   mb-8">{t("salom12")}</p>
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    {t("button12")}
  </button>
</section>


<section className="flex items-center m-auto 2xl:flex-wrap gap-6 p-4 px-[50px] bg-[#5B52A3] shadow-md rounded-lg">
  <img src={televizor} alt="" className=" h-auto m-auto rounded-lg" />
  <div className=' m-auto'>
    <h1 className="text-[50px] font-bold  dark:text-white mb-2">{t("salom13")}</h1>
    <p className=" ">{t("salom14")}</p>
  </div>
</section>


<section className=' px-[50px] text-center dark:text-white py-[50px]  '>
  <h1 className="text-3xl 2xl:text-[20px] md:text-4xl lg:text-5xl xl:text-6xl text-dark">{t("salom15")}</h1>
  <p className="text-gray-700">{t("salom16")}</p>
</section>


<div>
<Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper w-[80%] m-auto"
      >
        <SwiperSlide>
          <div className="flex flex-col items-center  p-4 bg-white shadow-lg rounded-lg">
            <img src={imggla6} alt="" className="w-full h-32 object-cover rounded-lg" />
            <p className="mt-2 text-center text-gray-700">{t("salom17")}</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg">
            <img src={imggla7} alt="" className="w-full h-32 object-cover rounded-lg" />
            <p className="mt-2 text-center text-gray-700">{t("salom17")}</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg">
            <img src={imgsec3} alt="" className="w-full h-32 object-cover rounded-lg" />
            <p className="mt-2 text-center text-gray-700">{t("salom17")}</p>
          </div>
        </SwiperSlide>
     
   
      </Swiper>
</div>


<section className="p-4">
  <h1 className="text-2xl font-bold mb-4">{t("salom19")}</h1>

  <div className=' flex justify-between gap-8 flex-wrap '>
    <div className="flex items-center xl:block w-[40%] m-auto mb-4">
      <img className="  object-cover" src={fon1} alt="" />
      <div>
        <h1 className="text-lg font-bold">NIKOLAY S</h1>
        <p className="text-gray-600">{t("salom20")}</p>
        <p className="text-gray-600">16 Ноября 2021 Санкт-Петербург</p>
      </div>
    </div>
    <div className="flex items-center xl:hidden w-[40%] m-auto mb-4">
      <img className="  object-cover" src={fon2} alt="" />
      <div>
        <h1 className="text-lg font-bold">NIKOLAY S</h1>
        <p className="text-gray-600">{t("salom20")}</p>
        <p className="text-gray-600">16 Ноября 2021 Санкт-Петербург</p>
      </div>
    </div>
    <div className="flex w-[40%] xl:hidden m-auto items-center">
      <img className="  object-cover" src={fon3} alt="" />
      <div>
        <h1 className="text-lg font-bold">NIKOLAY S</h1>
        <p className="text-gray-600">{t("salom20")}</p>
        <p className="text-gray-600">16 Ноября 2021 Санкт-Петербург</p>
      </div>
    </div>
    <div className="flex w-[40%] m-auto xl:hidden items-center">
      <img className="  object-cover" src={fon4} alt="" />
      <div>
        <h1 className="text-lg font-bold">NIKOLAY S</h1>
        <p className="text-gray-600">{t("salom20")}</p>
        <p className="text-gray-600">16 Ноября 2021 Санкт-Петербург</p>
      </div>
    </div>
  </div>
</section>

<section className="bg-white w-[80%] mt-[20px] rounded-[30px] m-auto dark:bg-gray-800 text-gray-800 dark:text-white p-4">
  <h1 className="text-2xl font-bold mb-2">{t("salom22")}</h1>
  <p className="text-base">{t("salom23")}</p>
</section>

<section className="p-4 flex justify-around items-center xl:flex-wrap px-[100px] ">
  <h1 className="text-2xl font-bold mb-4">{t("salom24")}</h1>
  <input className="border-b-2 border-gray-300 focus:border-blue-500 outline-none px-3 py-1 mb-4" type="text" placeholder="Введите ваш email" />
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    {t("subscribe")}
  </button>
</section>



    </div>
  )
}

export default Home