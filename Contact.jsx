// Contacts.js
import React from "react";

function Contacts({ contacts }) {
  return (
    <table className="table-auto border-collapse border border-white rounded-lg w-full text-left font-serif">
      <thead>
        <tr>
          <th className="border border-gray-300 px-4 py-2">Name</th>
          <th className="border border-gray-300 px-4 py-2">Phone</th>
          <th className="border border-gray-300 px-4 py-2">Location</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact, index) => (
          <tr key={index} className="hover:bg-gray-100">
            <td className="border border-gray-300 px-4 py-2">{contact.name}</td>
            <td className="border border-gray-300 px-4 py-2">{contact.phone}</td>
            <td className="border border-gray-300 px-4 py-2">{contact.location}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Contacts;
