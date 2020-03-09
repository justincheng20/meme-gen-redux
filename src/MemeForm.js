import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

function MemeForm({ add }) {
  const [formData, setFormData] = useState({
    topText: "",
    url: "",
    bottomText: ""
  });

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  };

  const gatherInput = evt => {
    evt.preventDefault();
    formData.id = uuid();
    add(formData);
    setFormData({
      topText: "",
      url: "",
      bottomText: ""});
  };

  return (
    <div>
      <form onSubmit={gatherInput} >
        <div>
          <label htmlFor="topText">Top Text</label>
          <input
            onChange={handleChange}
            type="text"
            name="topText"
            value={formData.topText}
            id="topText"
          />
        </div>
        <div>
          <label htmlFor="url">Image URL</label>
          <input
            onChange={handleChange}
            type="url"
            name="url"
            id="url"
            value={formData.url}

          />
        </div>
        <div>
          <label htmlFor="bottomText">Bottom Text</label>
          <input
            onChange={handleChange}
            type="bottomText"
            name="bottomText"
            id="bottomText"
            value={formData.bottomText}

          />
        </div>

        <button id="submitButton">Submit</button>
      </form>
    </div>
  );
};

export default MemeForm;