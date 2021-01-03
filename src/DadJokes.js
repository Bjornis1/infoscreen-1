import React, { useState, useEffect } from "react";

function DadJokes() {
  const [joke, setJoke] = useState({});

  function getJoke() {
    fetch("https://www.reddit.com/r/dadjokes/top.json?t=day&limit=1")
      .then((response) => response.json())
      .then((json) => setJoke(json.data.children[0].data))
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    getJoke();
  }, []);

  return joke.title ? (
    <div className="joke">
      <h2>Dad Joke</h2>
      <p>{joke.title}</p>
      <p>{joke.selftext}</p>
    </div>
  ) : (
    <div>Something went wrong with the joke!</div>
  );
}

export default DadJokes;
