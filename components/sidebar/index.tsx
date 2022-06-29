import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";

import CarLog2 from "./images/CarLog2.svg";
import CarLogo1 from "./images/CarLogo1.svg";
import Category from "./images/Category.svg";
import Star from "./images/Star.svg";
import Group from "./images/Group.svg";
import profile from "./images/profile.svg";
const user = {
  name: "Whitney Francis",
  email: "whitney.francis@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

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
        <div className="flex min-h-0 flex-1 ">
          <nav
            aria-label="Sidebar"
            className="flex-1 flex  flex-col min-h-0 overflow-y-auto md:bg-gray-800 rounded-3xl"
          >
            <div className="relative flex w-20 flex-col space-y-3 p-3 flex-1 flex-1 flex flex-col min-h-0 overflow-y-auto">
              <a className="flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg">
                <img src={CarLogo1.src} alt="" />
              </a>
              <a className="flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg">
                <img src={Category.src} alt="fsdf" />
              </a>
              <a className="flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg">
                <img src={Star.src} alt="dsf" />
              </a>
              <a className="flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg">
                <img src={CarLog2.src} alt="" />
              </a>
              <a className="flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg">
                <img src={Group.src} alt="" />
              </a>
            </div>
            <div className="flex-shrink-0 flex pb-5 items-center justify-center bg-slate-400 h-20 pt-4">
              <Menu as="div" className="">
                <Menu.Button className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2">
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src={user.imageUrl}
                    alt=""
                  />
                </Menu.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute bottom-20 left-30 z-30 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            {" "}
                            Your Profile{" "}
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            {" "}
                            Sign Out{" "}
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
