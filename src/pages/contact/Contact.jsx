import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next'

 
    
const Contact = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://6603d32e2393662c31cfca36.mockapi.io/api/nf/to-do-modul")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  const {t} = useTranslation() 
  return (

    <div className=" md:w-[80%] m-auto">
    <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
      {users.map((user) => (
        <Link to={`user/${user.id}`} className="flex border w-[60%] m-auto md:w-[100%] px-4 md:px-[40px] items-center" key={user.id}>
          <img src={user.prodimg} alt={user.name} className="w-[60%] md:w-[200px] h-[200px] object-cover" />
          <div className="md:gap-10">
            <p>{user.name}</p>
            <p>{user.group}</p>

          </div>
        </Link>
      ))}
    </div>
<section className="bg-blue-500 w-[90%] m-auto mt-[50px] rounded-[20px] dark:bg-black text-white p-4">
<h1 className="text-[50px] py-[20px] font-bold mb-2">{t("salom69")}</h1>

</section>
  </div>

  
  );
};

export default Contact;
