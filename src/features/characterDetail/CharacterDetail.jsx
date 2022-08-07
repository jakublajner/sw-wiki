import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  fetchCharacterDetail,
  selectCharacterDetail,
} from './characterDetailSlice';
import { loadStatus } from '../../constants';
import Error from '../../components/Error';
import Spinner from '../../components/Spinner';
import CharacterBio from '../../components/CharacterBio';

const CharacterDetail = () => {
  const dispatch = useDispatch();
  const { characterId } = useParams();
  const character = useSelector(selectCharacterDetail);
  const error = useSelector((state) => state.characterDetail.error);
  const status = useSelector((state) => state.characterDetail.status);

  useEffect(() => {
    dispatch(fetchCharacterDetail(characterId));
  }, [dispatch, characterId]);

  const loading = status === loadStatus.LOADING;

  return (
    <>
      {error && <Error message={error} />}
      {loading && <Spinner />}
      {!error && !loading && <CharacterBio {...character} />}
    </>
  );
};

export default CharacterDetail;
