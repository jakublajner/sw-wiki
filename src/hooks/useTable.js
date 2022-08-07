import { useMemo } from 'react';
import { Link } from 'react-router-dom';

const useTable = ({ columns, data }) => {
  const headers = useMemo(() => (
    <thead className="px-4 py-2 pl-8 text-xs uppercase bg-gray-50">
      <tr>
        {columns.map((col) => (
          <th key={col.id} className="py-4 px-6">
            {col.label}
          </th>
        ))}
      </tr>
    </thead>
  ));

  const rows = useMemo(() => {
    return (
      <tbody>
        {data.map((item) => (
          <tr
            key={item.path}
            className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            {columns.map((col, idnex) => (
              <td key={idnex} className="py-4 px-6">
                {col.isLink && item[col.urlIdentifier] ? (
                  <Link
                    to={item[col.urlIdentifier]}
                    className="underline font-bold"
                  >
                    {item[col.id]}
                  </Link>
                ) : (
                  item[col.id]
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }, [data]);

  return { headers, rows };
};

export default useTable;
