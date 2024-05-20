export const Tabla = ({ headers, data, renderRow, searchTerm, pagination }) => {
  // Busqueda
  const filteredData = searchTerm
    ? data.filter((item) =>
        Object.values(item).some((value) =>
          value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    : data;

  // Se pagina si se pasa los datos requeridos
  const { currentPage, itemsPerPage, totalPages, onPageChange } =
    pagination || {};

  // Paginacion
  const paginatedData = pagination
    ? filteredData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
      )
    : filteredData;

  // Prueba
  // console.log(currentPage);
  // console.log(totalPages);

  return (
    <div className="ScrollTableVertical w-full overflow-x-auto">
      <div className="w-[135%] relative">
        <table className="relative w-full text-sm text-left rtl:text-right">
          <thead className="text-xs uppercase text-[#374151] dark:text-[rgba(255,255,255,0.87)] bg-[#f9fafb] dark:bg-[rgb(41,51,79)] border-b border-[#e5e7eb] dark:border-[#424b57]">
            <tr>
              {headers?.map((header, index) => (
                <th key={index} scope="col" className="px-6 py-3">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData?.map((item, index) => renderRow(item, index))}
          </tbody>
        </table>
        {pagination && (
          <div className="relative w-full flex items-center justify-between p-4 border-t border-gray-200 bg-white dark:bg-[#1f2937]">
            <p className="text-sm text-gray-500">
              Página {currentPage} de {totalPages}
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 border rounded-lg text-white disabled:text-gray-500 border-blue-400 dark:border-blue-700 disabled:border-gray-200 disabled:dark:border-gray-700 bg-blue-400 dark:bg-blue-700 disabled:bg-gray-200 disabled:dark:bg-gray-700 disabled:cursor-not-allowed transition-all hover:opacity-75 duration-[0.3s]"
              >
                Anterior
              </button>
              <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 border rounded-lg text-white disabled:text-gray-500 border-blue-400 dark:border-blue-700 disabled:border-gray-200 disabled:dark:border-gray-700 bg-blue-400 dark:bg-blue-700 disabled:bg-gray-200 disabled:dark:bg-gray-700 disabled:cursor-not-allowed transition-all hover:opacity-75 duration-[0.3s]"
              >
                Siguiente
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
