import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SidebarItem } from "./SidebarItem";

const dashboardItems = [
  { title: "Home", img: "/home.svg", path: "/" },
  { title: "Analytics", img: "/analytics.svg", path: "/" },
  { title: "Sales", img: "/sales.svg", path: "/" },
];

const quickMenuItems = [
  { title: "Users", img: "/female-user.svg", path: "/users" },
  { title: "Products", img: "/goods-contents.svg", path: "/products" },
  { title: "Transactions", img: "/money-transfer.svg", path: "/" },
  { title: "Reports", img: "/reports.svg", path: "/" },
];

const notificationsItems = [
  { title: "Mail", img: "/email-round.svg", path: "/" },
  { title: "Feedback", img: "/feedback.svg", path: "/" },
  { title: "Messages", img: "/comment-bubble.svg", path: "/" },
];

const staffItems = [
  { title: "Manage", img: "/data-scientist.svg", path: "/" },
  { title: "Analytics", img: "/data-analysis.svg", path: "/" },
  { title: "Reports", img: "/diagnostic-pulse.svg", path: "/" },
];

export const Sidebar = () => {
  return (
      <div className=" hidden md:hidden lg:hidden xl:flex flex-col w-1/6 border-slate-400 border-2 rounded drop-shadow-lg shadow-sm shadow-slate-400 mr-6 mt-2">
        <div className="flex flex-col p-4">
          <h3 className="font-semibold text-xl p-2">Dashboard</h3>
          <ul>
            {dashboardItems.map((item) => {
              return <SidebarItem key={item.title} item={item} />;
            })}
          </ul>
        </div>
        <div className="flex flex-col p-4">
          <h3 className="font-semibold text-xl">Quick Menu</h3>
          <ul>
            {quickMenuItems.map((item) => {
              return <SidebarItem key={item.title} item={item} />;
            })}
          </ul>
        </div>
        <div className="flex flex-col p-4">
          <h3 className="font-semibold text-xl">Notifications</h3>
          <ul>
            {notificationsItems.map((item) => {
              return <SidebarItem key={item.title} item={item} />;
            })}
          </ul>
        </div>
        <div className="flex flex-col  p-4">
          <h3 className="font-semibold text-xl">Staff</h3>
          <ul>
            {staffItems.map((item) => {
              return <SidebarItem key={item.title} item={item} />;
            })}
          </ul>
        </div>
      </div>
  );
};
