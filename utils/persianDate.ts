const formatPersianDate = (isoDate: string) => {
  const date = new Date(isoDate);
  return date.toLocaleDateString("fa-IR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
export { formatPersianDate };
