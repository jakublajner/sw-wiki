import PropTypes from 'prop-types';
import useTable from '../hooks/useTable';

const columns = [
  { label: 'Name', id: 'name', isLink: true, urlIdentifier: 'path' },
  { label: 'Gender', id: 'gender' },
  { label: 'Height', id: 'height' },
  { label: 'Mass', id: 'mass' },
  { label: 'Birth Year', id: 'birth_year' },
];

const CharactersList = ({ characters }) => {
  const { headers, rows } = useTable({ columns, data: characters });
  return (
    <div className="w-full md:w-auto overflow-x-scroll">
      <table className="text-sm text-left text-gray-500">
        {headers}
        {rows}
      </table>
    </div>
  );
};

CharactersList.propTypes = {
  characters: PropTypes.array,
};

export default CharactersList;
