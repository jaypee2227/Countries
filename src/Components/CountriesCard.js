import "../styles.css";

const CountriesCard = ({ name, flag, alt }) => {
  return (
    <>
      <div className="containerImages">
        <img src={flag} alt={alt} />
        <p>{name}</p>
      </div>
    </>
  );
};

export default CountriesCard;
