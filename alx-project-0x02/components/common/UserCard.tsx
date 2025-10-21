import React from "react";
import { type UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  name,
  email,
  address,
  company,
  phone,
  website,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-5 border border-gray-100">
      <h2 className="text-xl font-semibold text-gray-800 mb-1">{name}</h2>
      <p className="text-sm text-gray-600 mb-2">{email}</p>

      <div className="text-gray-500 text-sm mb-2">
        <p>
          <span className="font-semibold text-gray-700">Address:</span>{" "}
          {address.street}, {address.city}
        </p>
        <p>
          <span className="font-semibold text-gray-700">Company:</span>{" "}
          {company.name}
        </p>
      </div>

      <div className="flex justify-between text-sm text-blue-600 mt-3">
        <a href={`tel:${phone}`} className="hover:underline">
          📞 {phone}
        </a>
        <a
          href={`https://${website}`}
          target="_blank"
          className="hover:underline"
        >
          🌐 {website}
        </a>
      </div>
    </div>
  );
};

export default UserCard;
