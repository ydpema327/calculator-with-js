const appenvalue = (value) => {
    document.getElementById('display').value += value
  }
  const clearDisplay = () => {
    document.getElementById('display').value = ''
  }
  const backspace = () => {
    let display = document.getElementById('display')
    display.value = display.value.slice(0, -1)
  }
  const sanitizeExpression = (expression) => {
    return expression
      .replace(/\+{2,}/g, '+') // Replace multiple '+' with a single '+'
      .replace(/-{2,}/g, '+') // Replace '--' with '+'
      .replace(/\+-| -\+/g, '-') // Normalize '+-' or '-+'
      .replace(/^\+/, '') // Remove leading '+' if any
      .replace(/%/g, '*0.01') // percentage into vale
  }
  const calculateResult = () => {
    let display = document.getElementById('display')
    let sanitizedExpression = sanitizeExpression(display.value)
  
    try {
      display.value = eval(sanitizedExpression)
    } catch {
      display.value = 'Error'
    }
  }