import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showalert("converted to uppercase", "success");
  }

  const handlelowClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showalert("converted to lowercase", "success");
  }

  const handleclearText = () => {
    let newtext = '';
    setText(newtext);
    props.showalert("clear text", "success");
  }

  const handlecopy = () => {
    navigator.clipboard.writeText(text);
    props.showalert("copy to clipboard", "success");
  }

  const handlextraspces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showalert("remove extra spaces", "success");
  }

  const handleonchange = (event) => {
    setText(event.target.value);
  }

  const [text, setText] = useState('');

  return (
    <>
      <div>
        <div className="mb-3 container1" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
          <h1 className='mb-2'>{props.heading}</h1>

          <label htmlFor="myText" className="form-label">Enter your Text</label>

          <div className="text-container">
            <textarea
              className="form-control"
              onChange={handleonchange}
              id="myBox"
              rows="10"
              value={text}
              style={{
                backgroundColor: props.mode === 'light' ? 'white' : '#14366e',
                color: props.mode === 'dark' ? 'white' : '#042743',
              }}
            ></textarea>
          </div>

          <button disabled={text.length === 0} className='btn btn-primary my-4' onClick={handleUpClick}>convert to uppercase</button>
          <button disabled={text.length === 0} className='btn btn-primary mx-2 my-4' onClick={handlelowClick}>convert to lowercase</button>
          <button disabled={text.length === 0} className='btn btn-primary mx-2 my-4' onClick={handleclearText}>Clear text</button>
          <button disabled={text.length === 0} className='btn btn-primary mx-2 my-4' onClick={handlecopy}>Copy text</button>
          <button disabled={text.length === 0} className='btn btn-primary mx-2 my-4' onClick={handlextraspces}>remove extra spaces</button>
        </div>
      </div>

      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h1>your text summary</h1>
        <p>
          {text.trim().split(/\s+/).filter((element) => element.length !== 0).length} word and
          {text.replace(/\s/g, "").length} character
        </p>
        <p>{0.008 * text.trim().split(/\s+/).filter((element) => element.length !== 0).length} minutes Read</p>

        <h2>preview</h2>
        <p>{text.length > 0 ? text : 'Enter something in the textbox above to preview it here'}</p>
      </div>
    </>
  )
}
