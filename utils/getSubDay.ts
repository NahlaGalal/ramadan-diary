export const getSubOfDay = (day: number) => {
  if (day === 1 || day === 21) return "st";
  else if (day === 2 || day === 22) return "nd";
  else if (day === 3 || day === 23) return "rd";
  else return "th";
};
