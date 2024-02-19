import { Fragment, useState } from "react";
import { Transition } from "@headlessui/react";
import { Dialog } from "@headlessui/react";
import StateOptions from "./StateOptions";
import InputComponent7 from "../InputComponent7";
import ButtonIcon5 from "./ButtonIcon5";
import ButtonIcon6 from "./ButtonIcon6";

const people = [{ name: "Enter Billing Address" }];

export default function DropDown3() {
  const [selected, setSelected] = useState(people[0]);
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className="ml-6 py-1">
      <div>
        <textarea
          placeholder="Enter billing address"
          className="h-28 px-2 pt-2 rounded w-full text-xs border border-gray-400"
          onClick={openModal}
        ></textarea>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden py-2 bg-white text-left align-middle shadow-xl transition-all">
                  <div className="flex justify-between px-2 border-b-2 py-2">
                    <div className="text-sm text-black font-semibold">
                      Add Billing Address
                    </div>

                    <div onClick={closeModal}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="text-xs ml-4 mt-4 text-gray-500 font-semibold">
                    <p>
                      Street Address <span className="text-red-500">*</span>
                    </p>
                  </div>
                  <div>
                    <textarea
                      required
                      placeholder="Enter Street Address"
                      className="mt-2 ml-4 outline-none w-96 h-16 text-sm font-semibold border border-b-blue-500 border-l-black border-r-black border-t-black"
                    ></textarea>
                  </div>
                  <div className="flex text-xs ml-4 text-gray-500 font-semibold">
                    <div>
                      State
                      <StateOptions />
                    </div>
                    <div className="ml-4">
                      Pincode
                      <InputComponent7 />
                    </div>
                  </div>
                  <div className="py-4 border-b-2">
                    <div className="text-xs ml-4 text-gray-500 font-semibold py-2">
                      City
                    </div>
                    <input
                      type="text"
                      className="w-96 border ml-4 py-1 px-2 border-t-blue-500 border-l-blue-500 border-r-blue-500 border-b-black text-sm font-semibold"
                      placeholder="Enter City"
                    />
                  </div>
                  <div className="mt-2 flex justify-end gap-2 px-2">
                    <ButtonIcon6 />
                    <ButtonIcon5 />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
