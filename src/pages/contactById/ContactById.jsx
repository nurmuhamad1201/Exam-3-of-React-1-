import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ContactById = () => {
  const { id } = useParams();
  const [contact, setContact] = useState(null);

  useEffect(() => {
    fetch(`https://6603d32e2393662c31cfca36.mockapi.io/api/nf/to-do-modul/${id}`)
      .then((response) => response.json())
      .then((data) => setContact(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

  if (!contact) {
    return <div className="text-center mt-4">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto bg-white shadow-md rounded-md p-6">
        <h2 className="text-2xl font-bold mb-4">{contact.name}</h2>
        <p className="text-gray-600">Age: {contact.age}</p>
        <p className="text-gray-600">Description: {contact.description}</p>
        <img src={contact.prodimg} alt={contact.name} className="mt-4 rounded-md" />
        <div className="mt-4">
          <p className="text-gray-600">City: {contact.city}</p>
          <p className="text-gray-600">Group: {contact.group}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactById;
