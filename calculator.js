const appendvalue = (value) => {
  document.getElementById('display').value += value;
};

const ClearDisplay = () => {
  document.getElementById('display').value = '';
};

const backspace = () => {
  let display = document.getElementById('display');
  display.value = display.value.slice(0, -1);
};

const sanitizeExpression = (expression) => {
  return expression
    .replace(/\+{2,}/g, '+')     // Replace multiple '+' with a single '+'
    .replace(/-{2,}/g, '+')      // Replace '--' with '+'
    .replace(/\+-|-\+/g, '-')    // Normalize '+-' or '-+'
    .replace(/^\+/, '')          // Remove leading '+'
    .replace(/%/g, '*0.01');     // Convert percentage
};

const calculate = () => {
  let display = document.getElementById('display');
  let sanitizedExpression = sanitizeExpression(display.value);

  try {
    display.value = eval(sanitizedExpression);
  } catch {
    display.value = 'Error';
  }
};
