import React, { useState, useEffect } from "react";

function Resort() {
  const [resort, setResort] = useState({});

  function getResort() {
    fetch("https://api.fnugg.no/get/resort/17")
      .then((response) => response.json())
      .then((json) => setResort(json))
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    getResort();
  }, []);

  useEffect(() => {
    console.log(resort);
  }, [resort]);

  return resort.found ? (
    <div className="joke">
      Det er {resort._source.lifts.open} åpne heiser, og{" "}
      {resort._source.lifts.closed} stengte heiser.
    </div>
  ) : (
    <div>Something went wrong with the heis!</div>
  );
}

export default Resort;
