import PropTypes from 'prop-types';

const BioItem = ({ label, text }) => (
  <div className="mr-2 text-m no-wrap">
    <span className="font-bold">{label}:</span>&nbsp;
    {text}
  </div>
);

BioItem.propTypes = {
  label: PropTypes.string,
  text: PropTypes.string,
};

export default BioItem;
