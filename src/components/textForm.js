import React, { useState } from "react";

export default function TextForm(props) {
  const handleOnchange = (event) => {
    setText(event.target.value);
  };
  const handleOnclick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase!", "success");
  };
  const handleOnlow = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase!", "success");
  };
  const handleOnclear = () => {
    let newText = "";
    setText(newText);
    props.showAlert("clear text!", "success");
  };
  const handleOncopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("copy text!", "success");
  };

  const [text, setText] = useState("");
  return (
    <div
      style={{
        color: props.mode === "dark" ? "white" : "#042743",
      }}
    >
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          style={{
            backgroundColor: props.mode === "dark" ? "grey" : "white",
            color: props.mode === "dark" ? "white" : "#042743",
          }}
          className="form-control"
          value={text}
          id="mybox"
          rows="8"
          onChange={handleOnchange}
        ></textarea>
      </div>
      <div className="btn btn-primary mx-1" onClick={handleOnclick}>
        Convert to Uppercase
      </div>
      <div className="btn btn-primary mx-1" onClick={handleOnlow}>
        Convert to Lowercase
      </div>
      <div className="btn btn-primary mx-1" onClick={handleOncopy}>
        copy text
      </div>
      <div className="btn btn-primary mx-1" onClick={handleOnclear}>
        Text clear
      </div>
      <div
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h2>Your Text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters{" "}
        </p>
        <p>{0.08 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "enter something in the textbox to preview it here"}
        </p>
      </div>
    </div>
  );
}
