import React, { useEffect, useState } from "react";
import GetInfo from "./GetInfo";

export default function CountryPicker() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [changeCountry, setChangeCountry] = useState("");

  useEffect(() => {
    getCountries();
  }, []);

  const getCountries = async () => {
    const response = await fetch("https://covid19.mathdro.id/api/countries");
    const data = await response.json();
    const arrayOfCountry = data.countries;

    setCountries(arrayOfCountry);
    setLoading(false);
  };

  const CountryOptions = countries.map((country) => (
    <option key={country.name} value={country.name}>
      {country.name}
    </option>
  ));

  const handleChange = async (e) => {
    setChangeCountry(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="mt-5">
        {loading || !countries ? (
          <p>Loading...</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <label className="mt-4  font-weight-bold" htmlFor="select">
              <span style={{ fontSize: "1.5em" }}>Select Country</span>
              <select
                style={{ scrollMarginTop: "100px" }}
                className="form-control"
                id="select"
                value={changeCountry}
                onChange={handleChange}
              >
                <option value="global">Global</option>
                {CountryOptions}
              </select>
            </label>
            <input
              className="btn btn-primary ml-2 p-2"
              type="submit"
              value="Submit"
            />
          </form>
        )}
      </div>
      <GetInfo changeCountry={changeCountry}></GetInfo>
    </>
  );
}
