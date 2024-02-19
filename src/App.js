import "./App.css";
import { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import Button from "./Components/Button";
import Buttonicon from "./Components/Buttonicon";
import Buttonicon2 from "./Components/Buttonicon2";
import Inputcomponent from "./Inputcomponent";
import Inputcomponent2 from "./Inputcomponent2";
import Inputcomponent3 from "./Inputcomponent3";
import Inputcomponent4 from "./Inputcomponent4";
import Inputcomponent5 from "./Inputcomponent5";
import Buttonicon3 from "./Buttonicon3";
import Inputcomponent6 from "./Inputcomponent6";
import DropDown from "./Components/DropDown";
import DropDown2 from "./Components/DropDown2";
import DropDown3 from "./Components/DropDown3";
import ShippingAddress from "./ShippingAddress";
import CreditPeriod from "./CreditPeriod";
import CreditLimit from "./Components/CreditLimit";
import CustomField1 from "./Components/CustomField1";
import CustomField2 from "./Components/CustomField2";
import DropDown4 from "./Components/DropDown4";

const navigation = [
  { name: "Dashboard", href: "# ", current: true },
  { name: "Parties", href: "#", current: false },
  { name: "Items", href: "#", current: false },
  { name: "Sales", href: "#", current: false },
  { name: "Purchases", href: "#", current: false },
  { name: "Reports", href: "#", current: false },
];
// const userNavigation = [
//   { name: "Your Profile", href: "#" },
//   { name: "Settings", href: "#" },
//   { name: "Sign out", href: "#" },
// ];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <div className="overflow-hidden">
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 flex z-40 md:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-indigo-700">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      {/* <XIcon className="h-6 w-6 text-white" aria-hidden="true" /> */}
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex-shrink-0 flex items-center px-4">
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-300-mark-white-text.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="mt-5 flex-1 h-0 overflow-y-auto">
                  <nav className="px-2 space-y-1">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-indigo-800 text-white"
                            : "text-indigo-100 hover:bg-indigo-600",
                          "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                        )}
                      >
                        {/* <item.icon className="mr-4 flex-shrink-0 h-6 w-6 text-indigo-300" aria-hidden="true" /> */}
                        {item.name}
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            </Transition.Child>
            <div className="flex-shrink-0 w-14" aria-hidden="true">
              {/* Dummy element to force sidebar to shrink to fit close icon */}
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-col flex-grow pt-5 bg-indigo-700 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-logo-indigo-300-mark-white-text.svg"
                alt="Workflow"
              />
            </div>
            <div className="mt-5 flex-1 flex flex-col">
              <nav className="flex-1 px-2 pb-4 space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-indigo-800 text-white"
                        : "text-indigo-100 hover:bg-indigo-600",
                      "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                    )}
                  >
                    {/* <item.icon className="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300" aria-hidden="true" /> */}
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <div className="md:pl-64 flex flex-col flex-1">
          <div className="sticky top-0 z-10 flex-shrink-0 flex h-10 bg-white shadow">
            <button
              type="button"
              className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              {/* <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" /> */}
            </button>
            <div className="flex-1 flex px-8 justify-between ">
              <div className=" flex ">
                <label htmlFor="search-field" className="sr-only">
                  Create Party
                </label>
                <div className="relative w-full focus-within:text-gray-600">
                  <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6 text-black"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                      />
                    </svg>
                    <span className="font-semibold text-black w-40">
                      Create Party
                    </span>
                  </div>

                  {/* <input
                      id="search-field"
                      className="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm"
                      placeholder="Create Party"
                      type="search"
                      name="search"
                    /> */}
                </div>
              </div>
              <div className="  flex items-center md:ml-6">
                {/* <button
                  type="button"
                  className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="sr-only">View notifications</span>
                  {/* <BellIcon className="h-6 w-6" aria-hidden="true" /> */}
                {/* </button> */}
                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative flex">
                  <svg
                    className="w-6 h-6 mr-4"
                    viewBox="-2.4 -2.4 28.80 28.80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8 5H16C18.8284 5 20.2426 5 21.1213 5.87868C22 6.75736 22 8.17157 22 11V13C22 15.8284 22 17.2426 21.1213 18.1213C20.2426 19 18.8284 19 16 19H8C5.17157 19 3.75736 19 2.87868 18.1213C2 17.2426 2 15.8284 2 13V11C2 8.17157 2 6.75736 2.87868 5.87868C3.75736 5 5.17157 5 8 5ZM6 10C6.55228 10 7 9.55228 7 9C7 8.44772 6.55228 8 6 8C5.44772 8 5 8.44772 5 9C5 9.55228 5.44772 10 6 10ZM6 13C6.55228 13 7 12.5523 7 12C7 11.4477 6.55228 11 6 11C5.44772 11 5 11.4477 5 12C5 12.5523 5.44772 13 6 13ZM9 13C9.55228 13 10 12.5523 10 12C10 11.4477 9.55228 11 9 11C8.44772 11 8 11.4477 8 12C8 12.5523 8.44772 13 9 13ZM9 10C9.55228 10 10 9.55228 10 9C10 8.44772 9.55228 8 9 8C8.44772 8 8 8.44772 8 9C8 9.55228 8.44772 10 9 10ZM12 10C12.5523 10 13 9.55228 13 9C13 8.44772 12.5523 8 12 8C11.4477 8 11 8.44772 11 9C11 9.55228 11.4477 10 12 10ZM12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13ZM15 10C15.5523 10 16 9.55228 16 9C16 8.44772 15.5523 8 15 8C14.4477 8 14 8.44772 14 9C14 9.55228 14.4477 10 15 10ZM15 13C15.5523 13 16 12.5523 16 12C16 11.4477 15.5523 11 15 11C14.4477 11 14 11.4477 14 12C14 12.5523 14.4477 13 15 13ZM18 10C18.5523 10 19 9.55228 19 9C19 8.44772 18.5523 8 18 8C17.4477 8 17 8.44772 17 9C17 9.55228 17.4477 10 18 10ZM18 13C18.5523 13 19 12.5523 19 12C19 11.4477 18.5523 11 18 11C17.4477 11 17 11.4477 17 12C17 12.5523 17.4477 13 18 13ZM17.75 16C17.75 16.4142 17.4142 16.75 17 16.75H7C6.58579 16.75 6.25 16.4142 6.25 16C6.25 15.5858 6.58579 15.25 7 15.25H17C17.4142 15.25 17.75 15.5858 17.75 16Z"
                        fill="#778899 "
                      ></path>{" "}
                    </g>
                  </svg>
                  <div className="flex space-x-2 ">
                    <Buttonicon />
                    <Buttonicon2 />
                    <Button />
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    {/* <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <a
                              href={item.href}
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              {item.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items> */}
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <main>
            <div className="border-b-2 border-gray-200 py-2  font-semibold text-gray-600 w-full bg-gray-50 text-sm">
              <p className="ml-6">General Details</p>
            </div>
            <div className="flex mt-4 w-full">
              <div>
                <label className="ml-6 text-gray-400 font-semibold text-xs">
                  Party Name<span className="text-red-500">*</span>
                </label>
                <Inputcomponent />
              </div>
              <div>
                <label className="ml-6 text-gray-400 font-semibold text-xs">
                  Mobile Number
                </label>
                <Inputcomponent2 />
              </div>
              <div>
                <label className="ml-6 text-gray-400 font-semibold text-xs">
                  Email
                </label>
                <Inputcomponent3 />
              </div>
              <div>
                <label className="ml-6 text-gray-400 font-semibold text-xs">
                  Opening Balance
                </label>
                <Inputcomponent4 />
              </div>
            </div>
            <div className="flex mt-6 w-full">
              <div>
                <label className="ml-6 text-gray-400 font-semibold text-xs">
                  GSTIN
                </label>
                <Inputcomponent5 />
              </div>
              <div>
                <Buttonicon3 />
              </div>
              <div>
                <label className="ml-6 text-gray-400 font-semibold text-xs">
                  PAN Number
                </label>
                <Inputcomponent6 />
              </div>
            </div>
            <div className="text-xs ml-6 text-gray-400 font-semibold border-b py-6">
              <p className="text-xs">
                Note: You can auto populate party details from GSTIN
              </p>
            </div>
            <div className="flex mt-2 w-full">
              <div>
                <label className="ml-6 text-gray-400 font-semibold text-xs">
                  Party Type<span className="text-red-500">*</span>
                </label>
                <DropDown />
              </div>
              <div>
                <label className="ml-6 text-gray-400 font-semibold text-xs">
                  Party Category
                </label>
                <DropDown2 />
              </div>
            </div>
            <div className="border-b-2 mt-4 border-gray-200 py-2  font-semibold text-gray-600 w-full bg-gray-100">
              <p className="ml-6">Address</p>
            </div>
            <div className="py-4 flex overflow-x-hidden border-b-2">
              <div className="w-1/2">
                <label className="ml-6 text-gray-400 font-semibold text-xs">
                  Billing Address
                </label>
                <DropDown3 />
              </div>
              <div className="w-[46%]">
                <div className="flex justify-between">
                  <div>
                    {" "}
                    <label className="ml-6 mt-1 text-gray-400 font-semibold text-xs">
                      Shipping Address
                    </label>
                  </div>
                  <div>
                    <input type="checkbox" className=""></input>

                    <span>
                      <label className="text-xs text-gray-400 font-semibold ml-2 mt-1">
                        Same as billing address
                      </label>
                    </span>
                  </div>
                </div>
                <ShippingAddress />
              </div>
            </div>
            <div className="flex ml-6 mt-2 py-4 border-b-2">
              <div>
                <label className="text-gray-400 font-semibold text-xs">
                  Credit Period
                </label>
                <CreditPeriod />
              </div>
              <div>
                <label className="text-gray-400 font-semibold text-xs ml-6">
                  Credit Limit
                </label>
                <CreditLimit />
              </div>
            </div>
            <div className="py-2 w-screen">
              <p className="py-1.5 px-4 bg-gray-100 font-semibold text-black">
                Custom Field
              </p>
            </div>
            <div className="ml-[40%] py-1 space-y-1">
              <div>
                <CustomField1 />
              </div>
              <div>
                <CustomField2 />
              </div>
            </div>
            <div className="flex justify-center py-2">
              <p className="font-semibold text-sm text-gray-400">
                Store more information about your parties by adding custom
                fields from{" "}
                <span className="font-bold text-black">Party Settings</span>
              </p>
            </div>
            <div className="py-2">
              <DropDown4 />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
