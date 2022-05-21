import React from "react";
import Link from "next/link";
import Image from "next/image";

export const SidebarItem = ({ item }) => {
  return (
    <>
      <Link className href={item.path} passHref>
        <li className="font-medium cursor-pointer hover:bg-gray-400 transition ease-in-out p-2">
          <a className="flex flex-row justify-between">
            <span>{item.title}</span>
            <Image src={item.img} alt="Home Logo" width={24} height={24} />
          </a>
        </li>
      </Link>
    </>
  );
};
