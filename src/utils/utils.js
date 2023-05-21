const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export default class Utils {
  /* JWT  */
  parseJwt = (token) => {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    return JSON.parse(jsonPayload);
  };
  isDateExpire = (exp) => {
    if (Date.now() >= exp * 1000) {
      return false;
    }
    return true;
  };

  /* JS DATE  */
  /* TODAY */
  getToday() {
    return new Date();
  }
  getPastYearToday() {
    const date = new Date(new Date().setFullYear(new Date().getFullYear() - 1));

    return date;
  }
  /* formate time to date monthname,year formate */
  toDateMonthNameYear(dateTimeString) {
    const s = dateTimeString;
    let d = new Date(s);
    let date = d.toDateString();
    let timeString = d.toTimeString();

    let tDate = new Date(d);
    let fDate =
      tDate.getDate() +
      " " +
      month[tDate.getMonth()] +
      ", " +
      tDate.getFullYear();
    const [hourString, minute] = timeString.split(":");
    const hour = +hourString % 24;
    return (
      fDate +
      " " +
      (hour % 12 || 12) +
      ":" +
      minute +
      (hour < 12 ? " AM" : " PM")
    );
  }

  /* convert date range to iso string  */
  getRangeISODateTime(date) {
    let tempDate = date[0];
    let startingDate = tempDate.toISOString();
    tempDate = date[1];
    let endingDate = tempDate.toISOString();
    return { startingDate: startingDate, endingDate: endingDate };
  }

  /* USA Formate */
  toUSAformate(date) {
    console.log(date, "@ utils-toUSAformate");
    const fDate = date.toLocaleDateString("en-US");
    console.log(fDate);
    return fDate;
  }
}
