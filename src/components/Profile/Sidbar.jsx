import React from "react";
import { BsBox, BsBoxSeam } from "react-icons/bs";
import { CgBox } from "react-icons/cg";
import { GrLocation } from "react-icons/gr";
import { IoIosNotificationsOutline } from "react-icons/io";
import {
  IoHeartOutline,
  IoPersonOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function Sidbar() {
  const user = useSelector((state) => state.user);
  const userName =
    user && user.first_name && user.last_name
      ? user.first_name + " " + user.last_name
      : "Guest";

  const sidbarDetails = [
    {
      id: 1,
      name: "Personal Information",
      path: "personalInformation",
      icon: <IoPersonOutline />,
    },
    { id: 2, name: "My orders", path: "orders", icon: <BsBoxSeam /> },
    { id: 3, name: "My Wishlist", path: "wishlist", icon: <IoHeartOutline /> },
    {
      id: 4,
      name: "Manage Addresses",
      path: "manageAdress",
      icon: <GrLocation />,
    },
    { id: 5, name: "Saved Cards", path: "savedCards", icon: <CgBox /> },
    {
      id: 6,
      name: "Notifications",
      path: "notifications",
      icon: <IoIosNotificationsOutline />,
    },
    { id: 7, name: "Settings", path: "settings", icon: <IoSettingsOutline /> },
  ];

  return (
    <div className="flex flex-col h-full rounded shadow-sm border-2 py-2 border-gray-100">
      <div className="flex items-center w-full gap-3 p-3 border-b">
        <div className="rounded-full bg-black">
          <img
            src={user?.image || "/userProfile.jpg"}
            alt=""
            className="rounded-full w-10 h-10"
          />
        </div>
        <div>
          <p>Hello🖐</p>
          <h3 className="font-semibold text-lg text-center">{userName}</h3>
        </div>
      </div>
      {sidbarDetails.map((item) => (
        <div key={item.id}>
          <ul className="space-y-2">
            <li>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "bg-black text-white w-full inline-block p-3"
                    : "text-black p-3 flex items-center"
                }
              >
                <span className="inline-block mr-2 text-lg">{item.icon}</span>
                <span>{item.name}</span>
              </NavLink>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}
