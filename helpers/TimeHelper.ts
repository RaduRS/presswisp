const numberToWords = (num: number): string => {
  const words = [
    "a",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
  ];
  return num <= 10 ? words[num - 1] : num.toString();
};

export const getRelativeTime = (date: string | number): string => {
  const now = new Date();
  const then = new Date(typeof date === "string" ? parseInt(date) : date); // Parse if string
  const diffInMinutes = Math.round((now.getTime() - then.getTime()) / 60000);

  if (diffInMinutes < 60) {
    return `${diffInMinutes} minute${diffInMinutes === 1 ? "" : "s"} ago`;
  }

  const diffInHours = Math.round(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `about ${numberToWords(diffInHours)} hour${
      diffInHours === 1 ? "" : "s"
    } ago`;
  }

  const diffInDays = Math.round(diffInHours / 24);
  return `${numberToWords(diffInDays)} day${diffInDays === 1 ? "" : "s"} ago`;
};

export const generatePath = (metaTitle: string): string => {
  const cleanedPath = metaTitle
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();

  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const hour = String(now.getHours()).padStart(2, "0");
  const minute = String(now.getMinutes()).padStart(2, "0");

  const timestamp = `${year}${month}${day}${hour}${minute}`;

  return `${cleanedPath}-${timestamp}`;
};
