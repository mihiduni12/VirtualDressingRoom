// Notifications.jsx
import React, { useState } from "react";

function Notifications()
{
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      description: "Sample notification description 1.",
      date: "2022-01-01",
      time: "12:30 PM",
    },
    {
      id: 2,
      description: "Sample notification description 2.",
      date: "2022-01-02",
      time: "2:45 PM",
    },
    {
      id: 3,
      description: "Sample notification description 2.",
      date: "2022-01-02",
      time: "2:45 PM",
    },
    {
      id: 4,
      description: "Sample notification description 2.",
      date: "2022-01-02",
      time: "2:45 PM",
    },
  ]);

  const deleteNotification = (id) => {
    setNotifications(
      notifications.filter((notification) => notification.id !== id)
    );
  };

  return (
    <div className="flex justify-center">
      <div className="max-w-[1300px] w-full ">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="bg-white rounded-lg shadow-md mb-4 p-4"
          >
          <div className="mb-2">
            <span className="text-gray-600 font-semibold">Description: </span>
            <span>{notification.description}</span>
          </div>
          <div className="mb-2">
            <span className="text-gray-600 font-semibold">Date: </span>
            <span>{notification.date}</span>
          </div>
          <div className="mb-2">
            <span className="text-gray-600 font-semibold">Time: </span>
            <span>{notification.time}</span>
          </div>
          <button
            onClick={() => deleteNotification(notification.id)}
            className="bg-[#f33846] hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          >
            Delete
          </button>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Notifications;
