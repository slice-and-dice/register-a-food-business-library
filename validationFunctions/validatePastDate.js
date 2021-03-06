const moment = require("moment");
const validateDate = require("./validateDate");

const validatePastDate = date => {
  if (validateDate(date)) {
    return moment(date).isBefore(moment());
  }
  return false;
};

module.exports = validatePastDate;
