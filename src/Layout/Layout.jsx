import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from '../img/logo.png';
import { useTranslation } from "react-i18next";
import Switcher from "../components/Switcher";
import burger from '../img/icons8-hamburger.png'
import { Box, Modal, Typography } from "@mui/material";
import sasials from '../img/Соцсети.png'
 
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Layout = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem("i18nextLng", language);
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <div>
      <nav className="flex sticky z-10 top-0 justify-between items-center p-4 bg-[#ffffffcc] dark:bg-gray-800 shadow-md">
        <Link to="/">
          <img  src={logo} alt="Logo" className="h-10 md:hidden " />
        </Link>
         
        <ul className="flex gap-5 xs:hidden md:hidden lg:hidden dark:text-white">
          <li><Link to="/" className="hover:text-[#00C97B] text-[15px] ">{t('nav.home')}</Link></li>
          <li><Link to="/pokupat" className="hover:text-[#00C97B]">{t('nav.kak')}</Link></li>
          <li><Link to="/contact" className="hover:text-[#00C97B]">{t('nav.aksi')}</Link></li>
          <li><Link to="/price" className="hover:text-[#00C97B]">{t('nav.paid')}</Link></li>
          <li><Link to="/help" className="hover:text-[#00C97B]">{t('nav.help')}</Link></li>
          <li><Link to="/bonuses" className="hover:text-[#00C97B]">{t('nav.bonus')}</Link></li>
          <li><Link to="/blog" className="hover:text-[#00C97B]">{t('nav.blog')}</Link></li>
          <li><Link to="/" className="hover:text-[#00C97B]">{t('nav.contact')}</Link></li>
        </ul>
        <button onClick={handleOpen} className=" hidden xs:block md:block lg:block "><img src={burger} alt="" /></button>

        <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
   
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
  
          <li><Link to="/" className="hover:text-[#00C97B]">{t('nav.home')}</Link></li>
          <li><Link to="/pokupat" className="hover:text-[#00C97B]">{t('nav.kak')}</Link></li>
          <li><Link to="/delivery" className="hover:text-[#00C97B]">{t('nav.aksi')}</Link></li>
          <li><Link to="/about" className="hover:text-[#00C97B]">{t('nav.paid')}</Link></li>
          <li><Link to="/contact" className="hover:text-[#00C97B]">{t('nav.help')}</Link></li>
          <li><Link to="/bonuses" className="hover:text-[#00C97B]">{t('nav.bonus')}</Link></li>
          <li><Link to="/blog" className="hover:text-[#00C97B]">{t('nav.blog')}</Link></li>
          <li><Link to="/contact" className="hover:text-[#00C97B]">{t('nav.contact')}</Link></li>
    </Typography>
    <Typography>
          <button onClick={() => changeLanguage('en')} className="bg-gradient-to-r from-[#00C97B] to-[#00D981] rounded-full px-5 py-2 shadow-[0px_4px_4px_0px_rgba(1,203,124,0.2)] text-white hover:from-[#00B76F] hover:to-[#00C97B]">Eng</button>
          <button onClick={() => changeLanguage('ru')} className="bg-gradient-to-r from-[#00C97B]  to-[#00D981] rounded-full px-5 py-2 shadow-[0px_4px_4px_0px_rgba(1,203,124,0.2)] text-white hover:from-[#00B76F] hover:to-[#00C97B]">Rus</button>
          <button onClick={() => changeLanguage('tj')} className="bg-gradient-to-r from-[#00C97B]   to-[#00D981] rounded-full px-5 py-2 shadow-[0px_4px_4px_0px_rgba(1,203,124,0.2)] text-white hover:from-[#00B76F] hover:to-[#00C97B]">TJK</button>
          </Typography>

  </Box>
</Modal>


        <div className="flex items-center gap-4">
          <button className="bg-gradient-to-r xl:hidden lg:hidden md:hidden   from-[#00C97B] to-[#00D981] rounded-full px-5 py-2 shadow-[0px_4px_4px_0px_rgba(1,203,124,0.2)] text-white hover:from-[#00B76F] hover:to-[#00C97B]">
            {t("Связаться с нами")}
          </button>
          <button onClick={() => changeLanguage('en')} className="bg-gradient-to-r from-[#00C97B] xs:hidden md:hidden lg:hidden to-[#00D981] rounded-full px-5 py-2 shadow-[0px_4px_4px_0px_rgba(1,203,124,0.2)] text-white hover:from-[#00B76F] hover:to-[#00C97B]">Eng</button>
          <button onClick={() => changeLanguage('ru')} className="bg-gradient-to-r from-[#00C97B] xs:hidden md:hidden lg:hidden to-[#00D981] rounded-full px-5 py-2 shadow-[0px_4px_4px_0px_rgba(1,203,124,0.2)] text-white hover:from-[#00B76F] hover:to-[#00C97B]">Rus</button>
          <button onClick={() => changeLanguage('tj')} className="bg-gradient-to-r from-[#00C97B] xs:hidden md:hidden lg:hidden to-[#00D981] rounded-full px-5 py-2 shadow-[0px_4px_4px_0px_rgba(1,203,124,0.2)] text-white hover:from-[#00B76F] hover:to-[#00C97B]">TJK</button>
          
          <Switcher />
        </div>
      </nav>
      <Outlet />

      <footer className="flex items-center justify-around py-[50px] bg-gray-200 p-4">
  <ul className="mr-6">
    <li><img src={logo} alt="" className="w-16 h-auto" /></li>
    <li><img src={sasials} alt="" className="w-16 h-auto mt-2" /></li>
  </ul>

  <ul className="mr-6">
    <li className="text-gray-700">{t("salom25")}</li>
    <li className="text-gray-700">{t("salom26")}</li>
    <li className="text-gray-700">{t("salom27")}</li>
    <li className="text-gray-700">{t("salom28")}</li>
  </ul>

  <ul className="mr-6">
    <li className="text-gray-700">{t("salom29")}</li>
    <li className="text-gray-700">{t("salom30")}</li>
    <li className="text-gray-700">{t("salom31")}</li>
    <li className="text-gray-700">{t("salom32")}</li>
  </ul>
</footer>




    </div>
  );
};

export default Layout;
