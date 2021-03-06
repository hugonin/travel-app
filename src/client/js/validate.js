
// Validate Form
function validate(cityValue, dateValue) {
    const expression = "\d{1,2}/\d{1,2}/\d{4}"
    const regex = new RegExp(expression);
    if (!cityValue || !dateValue) {
      alert('Please submit values for both fields.');
      return false;
    }
    if (!dateValue.match(regex)) {
      alert('Please provide a valid date.');
      return false;
    }
    // Valid
    return true;
  }