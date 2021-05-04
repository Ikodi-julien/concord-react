export const CHANNEL_INPUT_CHANGE = "Changement dans l'input du form de la page Channel";
export const setInputValue = (inputObject) => ({
  type: CHANNEL_INPUT_CHANGE,
  name: inputObject.name,
  value: inputObject.value
})
