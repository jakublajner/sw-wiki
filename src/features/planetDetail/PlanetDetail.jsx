import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPlanetDetail, selectPlanetDetail } from './planetDetailSlice';
import { loadStatus } from '../../constants';
import Error from '../../components/Error';
import PlanetBio from '../../components/PlanetBio';
import Spinner from '../../components/Spinner';

const PlanetDetail = () => {
  const dispatch = useDispatch();
  const { planetId } = useParams();
  const planet = useSelector(selectPlanetDetail);
  const error = useSelector((state) => state.planetDetail.error);
  const status = useSelector((state) => state.planetDetail.status);

  useEffect(() => {
    dispatch(fetchPlanetDetail(planetId));
  }, [dispatch, planetId]);

  const loading = status === loadStatus.LOADING;

  return (
    <>
      {error && <Error message={error} />}
      {loading && <Spinner />}
      {!error && !loading && <PlanetBio {...planet} />}
    </>
  );
};

export default PlanetDetail;
