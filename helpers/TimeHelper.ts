export const getRelativeTime = (date: string | number): string => {
  const now = new Date();
  const then = new Date(typeof date === "string" ? parseInt(date) : date); // Parse if string
  const diffInMinutes = Math.round((now.getTime() - then.getTime()) / 60000);

  if (diffInMinutes < 60) {
    return `${diffInMinutes} minute${diffInMinutes === 1 ? "" : "s"} ago`;
  }

  const diffInHours = Math.round(diffInMinutes / 60);
  return `about ${diffInHours} hour${diffInHours === 1 ? "" : "s"} ago`;
};
