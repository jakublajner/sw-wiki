import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux';
import { searchItems } from './searchSlice';
import SearchBar from '../../components/SearchBar';
import SearchResults from '../../components/SearchResults';

const Search = () => {
  const dispatch = useDispatch();

  const search = (query) => {
    dispatch(searchItems(query));
  };

  const debouncedSearch = debounce((query) => {
    search(query);
  }, 300);

  return (
    <div className="basis-2/4 relative">
      <SearchBar onSearchTermChange={debouncedSearch} />
      <SearchResults />
    </div>
  );
};

export default Search;
