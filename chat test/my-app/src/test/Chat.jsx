import React, { useState, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const TextEditor = ({ setHtml }) => {
  const [text, setText] = useState("");
  const quillRef = useRef(null);

  const handleChange = (content) => {
    setText(content);
  };

  const handleFontChange = (e) => {
    const font = e.target.value;
    if (quillRef.current) {
      const quill = quillRef.current.getEditor();
      quill.format("font", font);
    }
  };

  const handleAlignmentChange = (e) => {
    const alignment = e.target.value;
    if (quillRef.current) {
      const quill = quillRef.current.getEditor();
      quill.format("align", alignment);
    }
  };

  const handleSave = () => {
    const data = {
      content: text,
    };
    setHtml(text);
    console.log(data);
  };

  return (
    <div className="" style={{ width: "600px" }}>
      <label>Выберите шрифт:</label>
      <select onChange={handleFontChange}>
        {/* Font options */}
      </select>
      <label>Выберите выравнивание:</label>
      <select onChange={handleAlignmentChange}>
        {/* Alignment options */}
      </select>
      <ReactQuill
        value={text}
        onChange={handleChange}
        style={{ height: "400px", width: "100%", border: "none" }}
        modules={{
          toolbar: [
            [{ header: [1, 2, false] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ color: [] }, { background: [] }],
            [{ size: [] }],
            [{ align: [] }],
            ["link", "image"],
            ["clean"],
          ],
        }}
        formats={[
          "header",
          "bold",
          "italic",
          "underline",
          "strike",
          "blockquote",
          "list",
          "bullet",
          "link",
          "image",
          "color",
          "background",
          "align",
          "size",
        ]}
        ref={quillRef}
      />
      <br />
      <br />
      <br />
      <button style={{ zIndex: "9999" }} onClick={handleSave}>
        Сохранить
      </button>
    </div>
  );
};

export default TextEditor;
