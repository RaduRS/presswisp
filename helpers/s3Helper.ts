export const uploadImageToS3 = async (file: File): Promise<string> => {
  try {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("/api/upload-image", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Failed to upload image");
    }

    const { url } = await response.json();
    return url;
  } catch (error) {
    console.error("Error uploading image to S3:", error);
    throw new Error("Image upload failed");
  }
};
