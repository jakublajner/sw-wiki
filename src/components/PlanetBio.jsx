import PropTypes from 'prop-types';
import BioItem from './BioItem';

const PlanetBio = ({
  name,
  rotation_period,
  orbital_period,
  diameter,
  climate,
  gravity,
  terrain,
  surface_water,
  population,
  residents,
  films,
}) => {
  return (
    <div className="flex flex-col items-center flex-wrap">
      <div className="flex">
        <h1 className="text-3xl font-bold mr-2">{name}</h1>
      </div>
      <div className="flex flex-col items-center md:flex-row flex-wrap px-2">
        {Array.isArray(residents) && (
          <div className="mt-4 mr-4 flex items-center">
            <i className="fas fa-people-group mr-2 text-lg text-slate-400"></i>
            {residents.length}
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
        <BioItem label="Rotation Period" text={rotation_period} />
        <BioItem label="Orbital Period" text={orbital_period} />
        <BioItem label="Diameter" text={diameter} />
        <BioItem label="Climate" text={climate} />
      </div>
      <div className="flex flex-col md:flex-row flex-wrap px-2 text-gray-600 ">
        <BioItem label="Gravity" text={gravity} />
        <BioItem label="Terrain" text={terrain} />
        <BioItem label="Surface Water" text={surface_water} />
        <BioItem label="Population" text={population} />
      </div>
    </div>
  );
};

PlanetBio.propTypes = {
  name: PropTypes.string,
  rotation_period: PropTypes.string,
  orbital_period: PropTypes.string,
  diameter: PropTypes.string,
  climate: PropTypes.string,
  gravity: PropTypes.string,
  terrain: PropTypes.string,
  surface_water: PropTypes.string,
  population: PropTypes.string,
  residents: PropTypes.arrayOf(PropTypes.string),
  films: PropTypes.arrayOf(PropTypes.string),
};

export default PlanetBio;
