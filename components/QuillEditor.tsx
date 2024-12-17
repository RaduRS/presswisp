"use client";

import React, { useMemo } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { QuillEditorProps } from "@/types/types";
import { uploadImageToS3 } from "@/helpers/s3Helper";

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading editor...</p>,
});

const QuillEditor = ({ value, setArticleBody }: QuillEditorProps) => {
  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, 3, false] }],
          ["bold", "italic", "underline", "strike"],
          [{ color: [] }, { background: [] }],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ align: [] }],
          ["link", "image"],
          ["clean"],
        ],
        handlers: {
          /* eslint-disable  @typescript-eslint/no-explicit-any */
          image: function (this: any) {
            const quill = this.quill;
            const input = document.createElement("input");
            input.setAttribute("type", "file");
            input.setAttribute("accept", "image/*");
            input.click();

            input.onchange = async () => {
              const file = input.files ? input.files[0] : null;
              if (file) {
                try {
                  const imageUrl = await uploadImageToS3(file);
                  const range = quill.getSelection();
                  quill.insertEmbed(range.index, "image", imageUrl);
                } catch (error) {
                  console.error("Image upload failed:", error);
                  alert("Failed to upload image. Please try again.");
                }
              }
            };
          },
        },
      },
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
          onChange={setArticleBody}
          modules={modules}
          formats={formats}
          className="quill-editor h-auto p-4"
        />
      )}
    </div>
  );
};

export default QuillEditor;
