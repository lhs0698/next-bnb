//* monthList를 셀럭터의 options로 전달하여 사용.
export const monthList = [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
];

//* 1부터 31까지
export const dayList = Array.from(Array(31), (_, i) => String(i + 1));

//* 2020년부터 1900년까지
export const yearList = Array.from(Array(121), (_ , i) => String(2022 - i));


