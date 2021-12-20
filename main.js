let submitButton = document.getElementById('button')
let inputOne = document.getElementById('one')
let inputTwo = document.getElementById('two')
let selectAction = document.getElementById('desktop__action')
let textResult = document.querySelector('.result')
let validateAction = document.querySelector('.validate')
let numberOne
let numberTwo
let selectOption
let selectText
let result

function validate() {
  numberOne = Number(inputOne.value)
  numberTwo = Number(inputTwo.value)
  selectOption = selectAction.options.selectedIndex

  if (
    inputOne.value.length != 0 &&
    inputTwo.value.length != 0 &&
    selectOption != 0
  ) {
    return true
  } else {
    return false
  }
}

function counting() {
  selectText = selectAction.options[selectOption].text
  switch (selectText) {
    case '*':
      result = numberOne * numberTwo
      textResult.innerHTML = Math.round(result)
      break
    case '/':
      result = numberOne / numberTwo
      textResult.innerHTML = Math.round(result)
      break
    case '-':
      result = numberOne - numberTwo
      textResult.innerHTML = Math.round(result)
      break
    case '+':
      result = numberOne + numberTwo
      textResult.innerHTML = Math.round(result)
      break
  }
  console.log(result)
  inputClean(inputOne, inputTwo, selectAction)
}

submitButton.addEventListener('click', function () {
  if (validate()) {
    validateAction.innerHTML = ''
    counting()
  } else {
    validateAction.innerHTML = '*please fill in all fields'
  }
})

function inputClean(inputOne, inputTwo, selectAction) {
  inputOne.value = ''
  inputTwo.value = ''
  selectAction.value = '0'
}
