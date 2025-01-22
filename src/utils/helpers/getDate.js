const getDate = () => {
  const currentDate = new Date();

  const dayNum = currentDate.getDay();
  const monthNum = currentDate.getMonth();
  const dateNum = currentDate.getDate();
  const date = dateNum.toString();

  let day = '';
  switch (dayNum) {
    case 1:
      day = '(월)';
      break;
    case 2:
      day = '(화)';
      break;
    case 3:
      day = '(수)';
      break;
    case 4:
      day = '(목)';
      break;
    case 5:
      day = '(금)';
      break;
    case 6:
      day = '(토)';
      break;
    case 0:
      day = '(일)';
      break;
  }

  let month = '';
  switch (monthNum) {
    case 0:
      month = '1월';
      break;
    case 1:
      month = '2월';
      break;
    case 2:
      month = '3월';
      break;
    case 3:
      month = '4월';
      break;
    case 4:
      month = '5월';
      break;
    case 5:
      month = '6월';
      break;
    case 6:
      month = '7월';
      break;
    case 7:
      month = '8월';
      break;
    case 8:
      month = '9월';
      break;
    case 9:
      month = '10월';
      break;
    case 10:
      month = '11월';
      break;
    case 11:
      month = '12월';
      break;
  }

  // finish work on date
  const dateOutput = `${month} ${date}일 ${day}`;

  // create time string
  let hours;
  const hoursNum = currentDate.getHours();
  if (hoursNum < 10) {
    let hourString = hoursNum.toString();
    hours = `0${hourString}`;
  } else {
    if (hoursNum > 12) {
      hours = (hoursNum - 12).toString();
    } else {
      hours = hoursNum.toString();
    }
  }

  let minutes;
  const minutesNum = currentDate.getMinutes();
  if (minutesNum === 0) {
    minutes = '00';
  } else if (minutesNum === 1) {
    minutes = '01';
  } else if (minutesNum === 2) {
    minutes = '02';
  } else if (minutesNum === 3) {
    minutes = '03';
  } else if (minutesNum === 4) {
    minutes = '04';
  } else if (minutesNum === 5) {
    minutes = '05';
  } else if (minutesNum === 6) {
    minutes = '06';
  } else if (minutesNum === 7) {
    minutes = '07';
  } else if (minutesNum === 8) {
    minutes = '08';
  } else if (minutesNum === 9) {
    minutes = '09';
  } else {
    minutes = minutesNum.toString();
  }

  let daytime = '';
  if (hoursNum > 12) {
    daytime = '오후';
  } else {
    daytime = '오전';
  }

  const timeOutput = `${daytime} ${hours}:${minutes}`;

  return [dateOutput, timeOutput];
};

export default getDate;
