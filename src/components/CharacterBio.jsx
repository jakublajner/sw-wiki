import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LikeButton from './LikeButton';
import BioItem from './BioItem';
import { getPathFromAPiUrl } from '../utils/url';

const CharacterBio = ({
  homeworld,
  films,
  gender,
  hair_color,
  skin_color,
  height,
  mass,
  name,
  starships,
  path,
}) => {
  return (
    <div className="flex flex-col items-center flex-wrap">
      <div className="flex">
        <h1 className="text-3xl font-bold mr-2">{name}</h1>
        <LikeButton name={name} path={path} />
      </div>
      <div className="flex flex-col items-center md:flex-row flex-wrap px-2">
        {homeworld && (
          <div className="mt-4 mr-2">
            <i className="fas fa-map-marker-alt mr-2 text-lg text-slate-400"></i>
            <Link
              to={getPathFromAPiUrl(homeworld, 'planet')}
              className="underline mr-2"
            >
              Home planet
            </Link>
          </div>
        )}

        {!!(Array.isArray(starships) && starships.length) && (
          <div className="mt-4 mr-2 flex flex-wrap items-center">
            <i className="fas fa-rocket mr-2 text-lg text-slate-400"></i>
            {starships.map((url, index) => {
              const path = getPathFromAPiUrl(url, 'starship');
              return (
                <Link key={path} to={path} className="underline mr-2">
                  Starship&nbsp;{index + 1}
                </Link>
              );
            })}
          </div>
        )}

        {Array.isArray(films) && (
          <div className="mt-4 flex items-center">
            <i className="fas fa-film mr-2 text-lg text-slate-400"></i>
            {films.length}
          </div>
        )}
      </div>

      <div className="flex flex-col md:flex-row flex-wrap mt-4 px-2 text-gray-600 ">
        <BioItem label="Gender" text={gender} />
        <BioItem label="Height" text={`${height} cm`} />
        <BioItem label="Mass" text={`${mass} kg`} />
        <BioItem label="Hair Color" text={hair_color} />
        <BioItem label="Skin Color" text={skin_color} />
      </div>
    </div>
  );
};

CharacterBio.propTypes = {
  homeworld: PropTypes.string,
  films: PropTypes.arrayOf(PropTypes.string),
  gender: PropTypes.string,
  hair_color: PropTypes.string,
  skin_color: PropTypes.string,
  height: PropTypes.string,
  mass: PropTypes.string,
  name: PropTypes.string,
  starships: PropTypes.arrayOf(PropTypes.string),
  path: PropTypes.string,
};

export default CharacterBio;
