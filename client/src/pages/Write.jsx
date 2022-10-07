import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {
  const [value, setValue] = useState('');
  console.log(value);
  return (
    <div className='add'>
      <div className="content">
        <input type="text" name="" id="" placeholder="Title" />
        <div className="editorContainer">
        <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input style={{ "display": "none" }} type="file" name="" id="file" />
          <label htmlFor="file">Upload Image</label>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <input type="radio" name="cat" value="art" id="art" />
            <label htmlFor="art">Art</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="science" id="science" />
            <label htmlFor="science">Science</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="technology" id="technology" />
            <label htmlFor="technology">Technology</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="cinema" id="cinema" />
            <label htmlFor="cinema">Cinema</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Write