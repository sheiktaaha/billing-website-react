import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { Dialog } from "@headlessui/react";
import ButtonIcon3 from "./ButtonIcon3";
import ButtonIcon4 from "./ButtonIcon4";

const people = [{ name: "+Create Category" }];

export default function DropDown2() {
  const [selected, setSelected] = useState(people[0]);
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className="w-72 ml-6">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-72 rounded cursor-default bg-white py-1.5 pl-2 text-left border border-b-blue-500 border-t-gray-400 border-l-gray-400 border-r-gray-400 focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 text-xs">
            <span className="block truncate">Select Category</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-3 h-3"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 text-center max-h-60 w-full overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black/5 focus:outline-none text-blue-500">
              {people.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 text-xs border-2 border-dashed border-blue-500 m-2 rounded-md ${
                      active ? "" : ""
                    }`
                  }
                  value={person}
                  onClick={openModal}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {person.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"></span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>

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
                  <div className="flex justify-between px-4 border-b-2 py-2">
                    <div className="text-sm font-semibold text-black">
                      Create New Category
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
                  <div className="text-xs ml-4 mt-4 text-black font-semibold">
                    <p>CATEGORY NAME</p>
                  </div>
                  <div>
                    <input
                      type="text"
                      className="w-96 ml-4 mt-2 h-8 px-2 py-2 font-md rounded text-xs border border-t-blue-500 border-l-blue-500 border-r-black border-b-black outline-none"
                      placeholder="Enter category name"
                    />
                  </div>
                  <div className="flex justify-end space-x-2 mr-2 py-4">
                    <ButtonIcon3 />
                    <ButtonIcon4 />
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
