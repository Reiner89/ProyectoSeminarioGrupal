import { IconoAgregar, IconoCerrar } from "../../../Icons/Iconos";

export const Modal = ({ modal, toggleModal }) => {
  return (
    <>
      <div
        className={`side-panel-container ${
          modal ? "visible" : "invisible"
        } fixed pointer-events-auto left-0 top-0 right-0 h-full bg-[rgba(0,0,0,0.4)] z-[9999] flex 
        justify-center items-center `}
      >
        <div
          className={`side-panel-cont-container ${
            modal ? "translate-y-0" : "translate-y-[600%]"
          } block absolute transition-transform duration-500 -translate-x-10 `}
        >
          <div className="relative p-4 w-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-[#1f2937]">
              <div className="flex items-center justify-between p-3 md:px-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Nuevo Proyecto
                </h3>
                <button
                  type="button"
                  onClick={toggleModal}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-toggle="crud-modal"
                >
                  <IconoCerrar className="relative text-[1.3rem]" />
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <form className="p-4 md:p-5">
                <div className="grid gap-4 mb-4 grid-cols-2">
                  <div className="col-span-2">
                    <label
                      htmlFor="cliente"
                      className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Cliente:
                    </label>
                    <input
                      type="text"
                      name="cliente"
                      id="cliente"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-[#111827] dark:border-[#424b57] dark:placeholder-gray-400 dark:text-white focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
                      placeholder="Nombre del Cliente"
                      required
                    />
                  </div>
                  <div className="col-span-2">
                    <label
                      htmlFor="proyecto"
                      className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Proyecto:
                    </label>
                    <input
                      type="text"
                      name="proyecto"
                      id="proyecto"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-[#111827] dark:border-[#424b57] dark:placeholder-gray-400 dark:text-white focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
                      placeholder="Nombre del Proyecto"
                      required
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="fechaInicio"
                      className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Inicio del Proyecto:
                    </label>
                    <input
                      type="date"
                      name="fechaInicio"
                      id="fechaInicio"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full px-6 py-2.5 dark:bg-[#111827] dark:border-[#424b57] dark:placeholder-gray-400 dark:text-gray-400 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
                      placeholder=""
                      required
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="fechaFin"
                      className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Fin del Proyecto:
                    </label>
                    <input
                      type="date"
                      name="fechaFin"
                      id="fechaFin"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full px-6 py-2.5 dark:bg-[#111827] dark:border-[#424b57] dark:placeholder-gray-400 dark:text-gray-400 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
                      placeholder=""
                      required
                    />
                  </div>
                  <div className="col-span-2">
                    <label
                      htmlFor="descripcion"
                      className="mb-2 text-sm font-medium text-gray-900 dark:text-white hidden"
                    >
                      Descripción del Proyecto:
                    </label>
                    <textarea
                      id="descripcion"
                      rows="4"
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-[#111827] dark:border-[#424b57] dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
                      placeholder="Descripción del Proyecto"
                      required
                    />
                  </div>
                </div>
                <button
                  type="button"
                  className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 outline-none"
                >
                  <IconoAgregar className="relative text-[1.2rem] mr-1" />
                  Agregar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
