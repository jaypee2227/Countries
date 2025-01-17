import CountriesCard from "./CountriesCard";
import "../styles.css";
import { useEffect, useState } from "react";

const Countries = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await fetch(
          "https://xcountries-backend.azurewebsites.net/all"
        );
        const data = await response.json();

        setData(data);
      } catch (error) {
        console.error(`Error fetching data: ${error}`);
      }
    };

    fetchCountry();
  }, []);

  return (
    <>
      <div className="container">
        {data.map((item) => {
          return (
            <CountriesCard
              key={item.name}
              name={item.name}
              flag={item.flag}
              alt={item.abbr}
            />
          );
        })}
      </div>
    </>
  );
};

export default Countries;
