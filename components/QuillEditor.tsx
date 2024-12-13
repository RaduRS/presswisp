"use client";
import React, { useState, useMemo } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading editor...</p>,
});

const QuillEditor = () => {
  const [value, setValue] = useState("");

  const modules = useMemo(
    () => ({
      toolbar: [
        [{ header: [1, 2, 3, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ color: [] }, { background: [] }],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ align: [] }],
        ["link", "image"],
        ["clean"],
      ],
    }),
    []
  );

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "color",
    "background",
    "list",
    "bullet",
    "align",
    "link",
    "image",
  ];

  return (
    <div className="relative overflow-auto h-auto min-h-[30vh] max-h-[90vh]">
      {ReactQuill && (
        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          modules={modules}
          formats={formats}
          className="quill-editor h-auto p-4"
        />
      )}
    </div>
  );
};

export default QuillEditor;
