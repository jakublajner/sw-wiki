import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacters, selectAllCharacters } from './charactersSlice';
import FavouriteCharacters from '../favouriteCharacters/FavouriteCharacters';
import CharactersList from '../../components/CharactersList';
import Spinner from '../../components/Spinner';
import { loadStatus } from '../../constants';

const Characters = () => {
  const dispatch = useDispatch();
  const characters = useSelector(selectAllCharacters);
  const error = useSelector((state) => state.characters.error);
  const status = useSelector((state) => state.characters.status);

  useEffect(() => {
    if (status === loadStatus.IDLE) {
      dispatch(fetchCharacters());
    }
  }, [status, dispatch]);

  const loading = status === loadStatus.LOADING;

  return (
    <div className="flex justify-center flex-wrap w-full">
      {error && <h3>{error}</h3>}
      {loading && <Spinner />}
      {!error && !loading && (
        <div className="flex flex-col md:flex-row-reverse w-full md:justify-center">
          <FavouriteCharacters />
          <CharactersList characters={characters} />
        </div>
      )}
    </div>
  );
};

export default Characters;
