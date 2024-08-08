import "./Country.css";
import PropTypes from "prop-types";

const Country = ({ country }) => {
  //   console.log(country);
  const { name, population, region, flags, cca3, area } = country;
  return (
    <div className="country">
      <img src={flags.png} alt="" />
      <h4>Name: {name.common}</h4>
      <p>Population: {population}</p>
      <p>
        <small>Area: {area}</small>
      </p>
      <p>
        <small>Region: {region}</small>
      </p>
      <p>
        <small>Code: {cca3}</small>
      </p>
    </div>
  );
};

Country.propTypes = {
  country: PropTypes.object.isRequired,
};

export default Country;
