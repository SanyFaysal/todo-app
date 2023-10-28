import moment from "moment";

export const getForMattedDate = (date) => {
  const selectedDate = new Date(date);
  const formattedDate = moment(selectedDate).format("YYYY-MM-DD");
  return formattedDate;
};
