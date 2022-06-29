import { useState } from "react";
import {
  ArchiveIcon,
  BanIcon,
  FlagIcon,
  InboxIcon,
  MenuIcon,
  PencilAltIcon,
  UserCircleIcon,
} from "@heroicons/react/outline";

import { AiFillStar } from "react-icons/ai";
import { RiNotification2Line, RiSearchLine } from "react-icons/ri";
const user = {
  name: "Whitney Francis",
  email: "whitney.francis@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

export const TopHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="">
      <header className="fixed flex h-16 items-center bg-primaryMain rounded-2xl top-18 max-w-full right-5 left-28">
        <div className="absolute inset-y-0 left-0 md:static md:flex-shrink-0 pl-4">
          <h3 className="text-white font-24">Luxury Renatal</h3>
        </div>

        <div className="absolute inset-y-0 right-0 flex items-center pr-4 sm:pr-6 md:hidden">
          <button
            type="button"
            className="-mr-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <MenuIcon className="block h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden md:flex md:min-w-0 md:flex-1 md:items-center md:justify-between">
          <div className="min-w-0 flex-1">
            <div className="relative max-w-2xl text-gray-400 focus-within:text-gray-500">
              <label htmlFor="desktop-search" className="sr-only">
                Search
              </label>
            </div>
          </div>
          <div className="ml-10 flex flex-shrink-0 items-center space-x-10 pr-4 w-100">
            <div className="rounded-xl flex flex-row">
              <div className="relative text-gray-600 focus-within:text-gray-400">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <button
                    type="submit"
                    className="p-1 focus:outline-none focus:shadow-outline"
                  >
                    <RiSearchLine />
                  </button>
                </span>
                <div>
                  <input
                    type="search"
                    className="py-2 text-sm text-white bg-gray-900 rounded-md pl-10 focus:outline-none focus:text-white-200"
                    placeholder="Type to search..."
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-8">
              <div className="bg-yellow-100 pl-2 border-solid border-2 border-white-600 w-20 rounded h-8 text-yellow-600 flex flex-row">
                <AiFillStar className="mt-2" />
                <span className="mt-1">25,000</span>
              </div>
              <div>
                <div>
                  <RiNotification2Line className="w-8 h-8 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
