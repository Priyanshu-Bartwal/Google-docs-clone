import { useEffect } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";

const TOOLBAR_OPTIONS = [
  [{ font: [] }],
  ["bold", "italic", "underline", "strike"], // toggled buttons
  ["blockquote", "code-block"],

  [{ header: 1 }, { header: 2 }], // custom button values
  [{ list: "ordered" }, { list: "bullet" }],
  [{ script: "sub" }, { script: "super" }], // superscript/subscript
  [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
  [{ direction: "rtl" }], // text direction

  [{ size: ["small", false, "large", "huge"] }], // custom dropdown
  [{ header: [1, 2, 3, 4, 5, 6, false] }],

  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  [{ align: [] }],

  ["clean"], // remove formatting button
];

const TextEditor = () => {
  useEffect(() => {
    new Quill("#container", {
      theme: "snow",
      modules: { toolbar: TOOLBAR_OPTIONS },
    });

    return () => {
      const rootElement = document.getElementById("root");
      if (rootElement) {
        rootElement.innerHTML = "<div id='container'></div>";
      }
    };
  }, []);

  return <div id="container"></div>;
};

export default TextEditor;
