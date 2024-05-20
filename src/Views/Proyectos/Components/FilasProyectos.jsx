import { IconoEditar, IconoEliminar } from "../../../Icons/Iconos";

export const renderFilas = (item) => (
  <tr
    key={item.id}
    className="border-b bg-white dark:bg-[#1f2937] dark:border-[#424b57] text-[#374151] dark:text-[rgba(255,255,255,0.87)]"
  >
    <td className="px-6 py-4">{item.id}</td>
    <td className="px-6 py-4">{item.nombre}</td>
    <td className="px-6 py-4">{item.fechaInicio}</td>
    <td className="px-6 py-4">{item.fechaFin}</td>
    <td className="px-6 py-4">{item.cliente}</td>
    <td className="px-6 py-4">{item.descripcion}</td>
    {item.estado === "En Progreso" ? (
      <td className="px-6 py-4">
        <p className="relative bg-blue-400 dark:bg-blue-700 p-2 rounded-full text-white dark:text-gray-200 cursor-pointer text-center">
          {item.estado}
        </p>
      </td>
    ) : (
      <td className="px-6 py-4">
        <p className="relative bg-green-400 dark:bg-green-700 p-2 rounded-full text-white dark:text-gray-200 cursor-pointer text-center">
          {item.estado}
        </p>
      </td>
    )}
    <td className="px-6 py-4">
      <button
        onClick={() => console.log(item.id)}
        className="relative mr-2 border border-blue-400 dark:border-blue-700 text-blue-400 dark:text-gray-300 dark:hover:bg-blue-700 hover:bg-blue-400 hover:text-white dark:hover:text-white p-2 rounded-full transition-all duration-[0.4s]"
      >
        <IconoEditar />
      </button>
      <button
        onClick={() => console.log(item.id)}
        className="relative border border-red-400 dark:border-red-700 text-red-400 dark:text-red-700 dark:hover:bg-red-700 hover:bg-red-400 dark:hover:text-white hover:text-white p-2 rounded-full transition-all duration-[0.4s]"
      >
        <IconoEliminar />
      </button>
    </td>
  </tr>
);
