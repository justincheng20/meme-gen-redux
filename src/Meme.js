import React from 'react';

function Meme({ meme, remove }) {
  const { topText, url, bottomText } = meme;
  return (
    <div>
      <span>{topText}</span>
      <img src={url} alt="meme" />
      <span>{bottomText}</span>
      <button onClick={remove}>X</button>
    </div>
  );
}

export default Meme;