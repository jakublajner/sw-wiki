import PropTypes from 'prop-types';
import { memo } from 'react';

const Error = ({ message }) => {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold">Ups...</h2>
      <h3 className="mt-2">{message ? message : 'Something went wrong.'}</h3>
    </div>
  );
};

Error.propTypes = {
  message: PropTypes.string,
};

export default memo(Error);
