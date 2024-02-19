import { Fragment, useState } from "react";
import { Transition } from "@headlessui/react";
import { Dialog } from "@headlessui/react";
import CancelButton from "./CancelButton";
import SaveButton from "./SaveButton";

const people = [{ name: "Add Custom Fields" }];

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
    <div className="ml-6">
      <div className="flex justify-center">
        <button
          type="button"
          className="inline-flex items-center px-8 py-1 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-violet-500 font-md"
          onClick={openModal}
        >
          Add Custom Fields{" "}
        </button>
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
                <Dialog.Panel className="w-full max-w-lg transform overflow-hidden py-2 bg-white text-left align-middle shadow-xl transition-all">
                  <div className="flex justify-between px-2 border-b-2 py-2">
                    <div className="text-sm text-black font-semibold">
                      Party Settings
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
                  <div className="flex py-2 border border-b-2">
                    <div className="px-2 py-2">
                      <p className="text-xs font-semibold">
                        Now you can add custom party fields like Birthday,
                        <br />
                        ID Number, etc.
                      </p>
                    </div>
                    <div className="ml-6">
                      <div className="py-1">
                        <input
                          type="text"
                          className="bg-gray-100 text-xs px-2 py-1 w-48 text-black font-bold"
                          placeholder="Drug license number"
                        />
                      </div>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          className="bg-gray-100 text-xs py-1 w-24 px-2 text-black font-bold"
                          placeholder="Age"
                        />

                        <input
                          type="text"
                          className="bg-gray-100 text-xs py-1 w-20 px-2 text-black font-bold border border-l-white"
                          placeholder="Birthday"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="py-2 border border-b-2">
                    <p className="text-xs px-4 font-semibold text-blue-500">
                      + Add Custom Field
                    </p>
                  </div>
                  <div className="py-2 flex justify-end gap-2 px-2">
                    <CancelButton />
                    <SaveButton />
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
