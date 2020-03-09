import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MemeForm from './MemeForm';
import Meme from './Meme';


function MemeList() {
  const memes = useSelector(st => st.memes);
  const dispatch = useDispatch();
  const add = (formData) => dispatch({ type: "ADD", payload: formData });
  const remove = (meme) => dispatch({ type: "REMOVE", payload: meme });

  return (
    <div>
      <MemeForm add={add} />
      {memes.map(meme => <Meme key={meme.id} meme={meme} remove={() => remove(meme)} />)}
    </div>
  )
}

export default MemeList; 