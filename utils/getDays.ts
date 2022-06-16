let getMonthDays = () => {
  let days: number[][] = [];
  let cnt = 1;
  for (let i = 0; i < 5; i++) {
    days.push([]);
    for (let j = 0; j < 7 && cnt <= 30; j++) {
      days[i].push(cnt);
      cnt++;
    }
  }
  return days;
};

const weekDays = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];

export { getMonthDays, weekDays };
