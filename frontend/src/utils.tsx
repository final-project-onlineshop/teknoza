export const getError = (error) => {
  return error.response && error.response.data.message
    ? error.response.data.message
    : error.message;
};
export const round2 = (num:number) => {
  return Math.round(num * 100 + Number.EPSILON) / 100;
};