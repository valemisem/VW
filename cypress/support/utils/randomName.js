export const generateRandomName = () =>
  `New ${Math.floor(Math.random() * 10000)}`;

export const longNameGeneration = (prefix = "CY") => {
  const currentDate = new Date();
  const formattedDateTime = `${currentDate
    .getDate()
    .toString()
    .padStart(2, "0")}${(currentDate.getMonth() + 1)
    .toString()
    .padStart(2, "0")}${currentDate.getFullYear()}_${currentDate
    .getHours()
    .toString()
    .padStart(2, "0")}${currentDate
    .getMinutes()
    .toString()
    .padStart(2, "0")}${currentDate.getSeconds().toString().padStart(2, "0")}`;
  return `${prefix}_${formattedDateTime}`;
};
