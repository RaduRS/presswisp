import Quill from "quill";
import { uploadImageToS3 } from "./s3Helper";

export const generateToolbarModules = (quillInstance: Quill) => ({
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
      image: function () {
        const input = document.createElement("input");
        input.setAttribute("type", "file");
        input.setAttribute("accept", "image/*");
        input.click();

        input.onchange = async () => {
          const file = input.files ? input.files[0] : null;
          if (file) {
            try {
              const imageUrl = await uploadImageToS3(file);

              // Insert the uploaded image URL into the editor
              const range = quillInstance.getSelection() || { index: 0 };
              quillInstance.insertEmbed(range.index, "image", imageUrl);
            } catch (error) {
              console.error("Image upload failed:", error);
              alert("Failed to upload image. Please try again.");
            }
          }
        };
      },
    },
  },
});
