/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon, SearchIcon } from "@heroicons/react/solid";
import { TopHeader } from "../topheader";
import {
  ArchiveIcon,
  BanIcon,
  BellIcon,
  FlagIcon,
  InboxIcon,
  MenuIcon,
  PencilAltIcon,
  UserCircleIcon,
  XIcon,
} from "@heroicons/react/outline";

const user = {
  name: "Whitney Francis",
  email: "whitney.francis@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  {
    name: "Inboxes",
    href: "#",
    children: [
      { name: "Technical Support", href: "#" },
      { name: "Sales", href: "#" },
      { name: "General", href: "#" },
    ],
  },
  { name: "Reporting", href: "#", children: [] },
  { name: "Settings", href: "#", children: [] },
];
const sidebarNavigation = [
  { name: "Open", href: "#", icon: InboxIcon, current: true },
  { name: "Archive", href: "#", icon: ArchiveIcon, current: false },
  { name: "Customers", href: "#", icon: UserCircleIcon, current: false },
  { name: "Flagged", href: "#", icon: FlagIcon, current: false },
  { name: "Spam", href: "#", icon: BanIcon, current: false },
  { name: "Drafts", href: "#", icon: PencilAltIcon, current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Sidebar() {

  return (
    <>
      <div className="flex h-[95vh] w-20">
        {/* Top nav*/}
       
        {/* Bottom section */}
        <div className="flex min-h-0 flex-1 ">
          {/* Narrow sidebar*/}
          <nav
            aria-label="Sidebar"
            className="hidden md:block md:flex-shrink-0 md:overflow-y-auto md:bg-gray-800 rounded-3xl"
          >
            <div className="relative flex w-20 flex-col space-y-3 p-3">
              {sidebarNavigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-400 hover:bg-gray-700",
                    "flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg"
                  )}
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </nav>

          {/* Main area */}
         
        </div>
      </div>
    </>
  );
}
