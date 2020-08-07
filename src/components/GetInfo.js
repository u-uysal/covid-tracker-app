import React, { useEffect, useState } from "react";
import CountUp from "react-countup";

export default function GetInfo({ changeCountry }) {
  const [value, setValue] = useState([]);
  let url = `https://covid19.mathdro.id/api`;
  useEffect(() => {
    getAllInfo();
  }, [changeCountry]);

  const getAllInfo = async () => {
    if (!changeCountry) {
      const response = await fetch(url);
      const data = await response.json();
      setValue([
        data.confirmed.value,
        data.deaths.value,
        data.recovered.value,
        data.lastUpdate,
      ]);
    } else {
      const response = await fetch(`${url}/countries/${changeCountry}`);
      const data = await response.json();
      setValue([
        data.confirmed.value,
        data.deaths.value,
        data.recovered.value,
        data.lastUpdate,
      ]);
    }
  };

  return (
    <div className="container m-auto ">
      <h5 className="mt-4">
        Last Update : {new Date(value[3]).toDateString()}
      </h5>
      <div className="row  d-flex justify-content-center p-2">
        <div className="col-sm-3 box box-orange">
          {" "}
          <p style={{ fontSize: "2.5vw" }} className="mt-3">
            Infected
          </p>
          <p style={{ fontSize: "3vw" }} className="font-weight-bold">
            {!value[0] ? (
              <p>Loading</p>
            ) : (
              <CountUp start={0} end={value[0]} duration={1.3} separator="," />
            )}
          </p>
        </div>
        <div className="col-sm-3 box box-red">
          <p style={{ fontSize: "2.5vw" }} className="mt-3">
            Deaths
          </p>
          <p style={{ fontSize: "3vw" }} className="font-weight-bold">
            {!value[1] ? (
              <p>Loading</p>
            ) : (
              <CountUp start={0} end={value[1]} duration={1.3} separator="," />
            )}
          </p>
        </div>
        <div className="col-sm-3 box box-blue">
          {" "}
          <p style={{ fontSize: "2.5vw" }} className="mt-3">
            Recovered
          </p>
          <p style={{ fontSize: "3vw" }} className="font-weight-bold">
            {!value[2] ? (
              <p>Loading</p>
            ) : (
              <CountUp start={0} end={value[2]} duration={1.3} separator="," />
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
