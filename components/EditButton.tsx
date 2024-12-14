import React from "react";
import { useRouter } from "next/navigation";

const EditButton = ({ path }: { path: string }) => {
  const router = useRouter();

  const handleEdit = (e: React.MouseEvent) => {
    e.stopPropagation();
    router.push(`/editor/article/edit?path=${encodeURIComponent(path)}`);
  };

  return (
    <button
      className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
      onClick={handleEdit}
    >
      Edit
    </button>
  );
};

export default EditButton;
