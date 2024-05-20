import { useState } from "react";
import { dataProyectos, headersProyectos } from "../../Data/Proyectos";
import { AddInventario } from "../../Icons/Iconos";
import { Layout } from "../../Layout/Layout";
import { Modal } from "./Components/Modal";
import { Tabla } from "../../Components/Table";
import { renderFilas } from "./Components/FilasProyectos";
import { Search } from "../../Components/Search";

export const Proyectos = () => {
  // Estado del modal
  const [modal, setModal] = useState(false);
  // Estado del input
  const [searchTerm, setSearchTerm] = useState("");
  // Estado de la vista de la pagina
  const [currentPage, setCurrentPage] = useState(1);
  // Cant filas para mostrar
  const perPage = 10;
  // Cantidad de filas en total
  const totalPage = Math.ceil(dataProyectos.length / perPage);

  // Mostrar/Ocultar modal
  const toggleModal = () => {
    setModal(!modal);
  };

  // Obtener texto
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Layout
      areaPagina={"Proyectos"}
      children={
        <>
          <div className="relative mb-8">
            <div className="relative overflow-x-auto sm:rounded-lg">
              <div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
                <div className="relative inline-flex">
                  <button
                    data-ripple-light="true"
                    data-dialog-target="dialog"
                    onClick={toggleModal}
                    className="flex select-none rounded-lg border border-blue-400 dark:border-blue-700 bg-blue-400 dark:bg-blue-700 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white transition-all hover:opacity-75 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    <AddInventario />
                    <h1 className="relative ml-2">Agregar</h1>
                  </button>
                </div>
                <Search
                  placeHolder="Buscar Proyecto"
                  searchTerm={searchTerm}
                  handleSearch={handleSearch}
                />
              </div>
              <Tabla
                headers={headersProyectos}
                data={dataProyectos}
                renderRow={renderFilas}
                searchTerm={searchTerm}
                pagination={{
                  currentPage,
                  itemsPerPage: perPage,
                  totalPages: totalPage,
                  onPageChange: setCurrentPage,
                }}
              />
            </div>
          </div>

          {/* Llamamos al modal */}
          <Modal modal={modal} toggleModal={toggleModal} />
        </>
      }
    />
  );
};
