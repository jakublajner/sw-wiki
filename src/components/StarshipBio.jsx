import PropTypes from 'prop-types';
import BioItem from './BioItem';

const StarshipBio = ({
  name,
  model,
  manufacturer,
  cost_in_credits,
  length,
  max_atmosphering_speed,
  crew,
  passengers,
  cargo_capacity,
  consumables,
  hyperdrive_rating,
  starship_class,
  pilots,
  films,
}) => {
  return (
    <div className="flex flex-col items-center flex-wrap">
      <div className="flex">
        <h1 className="text-3xl font-bold mr-2">
          {name} ({model})
        </h1>
      </div>
      <div className="flex flex-col items-center md:flex-row flex-wrap px-2">
        {Array.isArray(pilots) && (
          <div className="mt-4 mr-4 flex items-center">
            <i className="fas fa-user-tie mr-2 text-lg text-slate-400"></i>
            {pilots.length}
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
        <BioItem label="Manufacturer" text={manufacturer} />
        <BioItem label="Cost in Credits" text={cost_in_credits} />
        <BioItem label="Max Atmosphering Speed" text={max_atmosphering_speed} />
        <BioItem label="Length" text={length} />
        <BioItem label="Crew" text={crew} />
      </div>
      <div className="flex flex-col md:flex-row flex-wrap px-2 text-gray-600 ">
        <BioItem label="Passengers" text={passengers} />
        <BioItem label="Cargo Capacity" text={cargo_capacity} />
        <BioItem label="Consumables" text={consumables} />
        <BioItem label="Hyperdrive Rating" text={hyperdrive_rating} />
        <BioItem label="Starship Class" text={starship_class} />
      </div>
    </div>
  );
};

StarshipBio.propTypes = {
  name: PropTypes.string,
  model: PropTypes.string,
  manufacturer: PropTypes.string,
  cost_in_credits: PropTypes.string,
  length: PropTypes.string,
  max_atmosphering_speed: PropTypes.string,
  crew: PropTypes.string,
  passengers: PropTypes.string,
  cargo_capacity: PropTypes.string,
  consumables: PropTypes.string,
  hyperdrive_rating: PropTypes.string,
  starship_class: PropTypes.string,
  pilots: PropTypes.arrayOf(PropTypes.string),
  films: PropTypes.arrayOf(PropTypes.string),
};

export default StarshipBio;
