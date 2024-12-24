import React, { useEffect, useState } from "react";
import getAllNotification from "../../api/notification/getAllNotification";
import deleteNotification from "../../api/notification/deletNotification";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEye } from "react-icons/fa";
import getspicialNotification from "../../api/notification/gitspicialNotification";

export default function Notification() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const res = await getAllNotification();
        setNotifications(res);
      } catch (error) {
        console.error("Failed to fetch notifications:", error);
      }
    };

    fetchNotifications();
  }, []);


  return (
    <>
      <section className="p-4">
        {notifications.map((notification) => (
          <div
            className="flex items-center justify-between mb-4 p-4 bg-gray-100 rounded-lg shadow-sm"
            key={notification.id}
          >
            <div className="flex space-x-2">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <img
                  src={notification.image || "/logo.svg"} 
                  alt={notification.title || "Notification"}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="font-bold text-lg">{notification.title}</h2>
                <p>{notification.message}</p>
              </div>
            </div>

            <div>
              <p className="text-gray-500 text-sm">{notification.time}</p>
              <div className="flex space-x-4">
              <RiDeleteBin6Line className="text-red-500 cursor-pointer" onClick={() => deleteNotification(notification.id)}/>
              <FaRegEye className="text-gray-500 cursor-pointer" onClick={() => getspicialNotification(notification.id)}/>
              </div>
 
            </div>
          </div>
        ))}

        {notifications.length === 0 && (
          <p className="text-center text-gray-500">No notifications available.</p>
        )}
      </section>
    </>
  );
}
