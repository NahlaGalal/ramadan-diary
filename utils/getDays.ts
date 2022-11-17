let getMonthDays = () => {
  let days: { id: number; rate: number; today: boolean }[][] = [];
  let cnt = 1;
  let firstDay = new Date("03/22/2023").getDay() + 1;

  for (let i = 0; i < 5; i++) {
    days.push([]);
    if (!i) {
      // Days of week before the beginning of ramadan
      for (let j = 0; j < firstDay; j++)
        days[i].push({
          id: -j,
          rate: 0,
          today: false,
        });
    }

    for (let j = firstDay; j < 7 && cnt <= 30; j++) {
      days[i].push({
        id: cnt,
        rate: cnt < 8 ? cnt * 3 : 0,
        today: cnt === 8
      });
      cnt++;
      firstDay = 0;
    }
  }
  
  return days;
};

const weekDays = [
  "السبت",
  "اﻷحد",
  "اﻷثنين",
  "الثلاثاء",
  "اﻷربعاء",
  "الخميس",
  "الجمعة",
];

export { getMonthDays, weekDays };
