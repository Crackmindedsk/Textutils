import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.alert("Converted to uppercase", "success");
  };
  const handleLoClick = () => {
    let lowText = text.toLowerCase();
    setText(lowText);
    props.alert("Converted to lowercase", "success");
  };
  const handleClearClick = () => {
    setText("");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleCopy = () => {
    var txt = document.getElementById("exampleFormControlTextarea1");
    txt.select();
    navigator.clipboard.writeText(txt.value);
  };
  const handleExtraSpaces = () => {
    let newtxt = text.split(/[ ]+/);
    setText(newtxt);
  };
  const [text, setText] = useState("Enter text here.");
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{
              color: props.mode === "dark" ? "white" : "black",
              backgroundColor: props.mode === "dark" ? "grey" : "white",
            }}
          ></textarea>
          <button className="btn btn-primary mx-3" onClick={handleUpClick}>
            Convert to Uppercase
          </button>
          <button className="btn btn-primary my-3" onClick={handleLoClick}>
            Convert to Lowercase
          </button>
          <button className="btn btn-primary my-3" onClick={handleClearClick}>
            Clear
          </button>
          <button className="btn btn-primary my-3" onClick={handleCopy}>
            Copy text
          </button>
          <button className="btn btn-primary my-3" onClick={handleExtraSpaces}>
            Remove extra spaces
          </button>
        </div>
      </div>
      <div
        className="container my-2"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} word and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
      </div>
    </>
  );
}
