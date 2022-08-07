import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  fetchStarshipDetail,
  selectStarshipDetail,
} from './starshipDetailSlice';
import { loadStatus } from '../../constants';
import Error from '../../components/Error';
import Spinner from '../../components/Spinner';
import StarshipBio from '../../components/StarshipBio';

const StarshipDetail = () => {
  const dispatch = useDispatch();
  const { starshipId } = useParams();
  const starship = useSelector(selectStarshipDetail);
  const error = useSelector((state) => state.starshipDetail.error);
  const status = useSelector((state) => state.starshipDetail.status);

  useEffect(() => {
    dispatch(fetchStarshipDetail(starshipId));
  }, [dispatch, starshipId]);

  const loading = status === loadStatus.LOADING;

  return (
    <>
      {error && <Error message={error} />}
      {loading && <Spinner />}
      {!error && !loading && <StarshipBio {...starship} />}
    </>
  );
};

export default StarshipDetail;
