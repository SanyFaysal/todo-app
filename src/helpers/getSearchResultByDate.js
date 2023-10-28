export const getSearchResultByDate = (query, data) => {
  if (query === "all") {
    return data;
  }
  const currentDate = new Date();
  const queryDateRange = new Date();
  queryDateRange.setDate(currentDate.getDate() + query);

  const filteredArray = data.filter((obj) => {
    const objDate = new Date(obj.date);
    if (query < 1) {
      return objDate >= queryDateRange && objDate <= currentDate;
    } else if (query > 1) {
      return objDate <= queryDateRange && objDate >= currentDate;
    }
  });
  return filteredArray;
};
