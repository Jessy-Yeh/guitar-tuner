export default function getStringOrdinalFromNumber(stringNumber) {
  let ord = "th";

  if (stringNumber % 10 === 1 && stringNumber % 100 !== 11) {
    ord = "st";
  } else if (stringNumber % 10 === 2 && stringNumber % 100 !== 12) {
    ord = "nd";
  } else if (stringNumber % 10 === 3 && stringNumber % 100 !== 13) {
    ord = "rd";
  }

  return stringNumber + ord;
}
