import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectFavouriteCharacters } from './favouriteCharactersSlice';
import LikeButton from '../../components/LikeButton';

const FavouriteCharacters = () => {
  const characters = useSelector(selectFavouriteCharacters);

  return (
    <div className="md:ml-8 py-2 mb-4">
      <h3 className="text-l font-bold">Your favourite characters</h3>
      {characters.length ? (
        characters.map(({ path, name }) => (
          <div key={path} className="flex items-center mt-2">
            <LikeButton path={path} name={name} />
            <Link to={path} className="ml-2 underline">
              {name}
            </Link>
          </div>
        ))
      ) : (
        <div className="mt-2 text-sm text-gray-500">
          You haven't selected your favourite characters...
        </div>
      )}
    </div>
  );
};

export default FavouriteCharacters;
