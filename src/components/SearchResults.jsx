import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  selectAllSearchResults,
  resetState,
} from '../features/search/searchSlice';
import useOutsideClick from '../hooks/useOutsideClick';
import { getPathFromAPiUrl } from '../utils/url';
import { loadStatus } from '../constants';

const SearchResults = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectAllSearchResults);
  const status = useSelector((state) => state.search.status);

  const resetSearch = () => {
    dispatch(resetState());
  };

  const ref = useOutsideClick(resetSearch);

  if (!data && status === loadStatus.IDLE) {
    return null;
  }

  const renderContent = () => {
    if (status === loadStatus.FAILED) {
      return <div>Search Failed...</div>;
    }

    if (status === loadStatus.LOADING) {
      return <div>Loading...</div>;
    }

    if (status === loadStatus.SUCCESS && data) {
      const { characters, planets, starships } = data;

      const foundCharacters = !!(
        Array.isArray(characters) && characters.length
      );
      const foundPlanets = !!(Array.isArray(planets) && planets.length);
      const foundStarships = !!(Array.isArray(starships) && starships.length);

      if (foundCharacters || foundPlanets || foundStarships) {
        return (
          <div className="flex flex-col">
            {foundCharacters &&
              characters.map((character) => {
                const path = getPathFromAPiUrl(character.url, 'character');
                return (
                  <div key={path} className="pb-1">
                    <Link to={path} onClick={resetSearch}>
                      {character.name} -{' '}
                      <span className="text-sm text-gray-600">character</span>
                    </Link>
                  </div>
                );
              })}

            {foundPlanets &&
              planets.map((planet) => {
                const path = getPathFromAPiUrl(planet.url, 'planet');
                return (
                  <div key={path} className="pb-1">
                    <Link to={path} onClick={resetSearch}>
                      {planet.name} -{' '}
                      <span className="text-sm text-gray-600">planet</span>
                    </Link>
                  </div>
                );
              })}

            {foundStarships &&
              starships.map((starship) => {
                const path = getPathFromAPiUrl(starship.url, 'starship');
                return (
                  <div key={path} className="pb-1">
                    <Link to={path} onClick={resetSearch}>
                      {starship.name} -{' '}
                      <span className="text-sm text-gray-600">starship</span>
                    </Link>
                  </div>
                );
              })}
          </div>
        );
      }
    }

    return <div>No results...</div>;
  };

  return (
    <div
      ref={ref}
      className="absolute w-full max-h-[32rem] overflow-y-scroll p-4 bg-white border border-gray-300 border-t-0 drop-shadow"
    >
      {renderContent()}
    </div>
  );
};

export default SearchResults;
