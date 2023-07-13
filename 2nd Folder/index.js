const div = document.querySelector('div')

const newForm = document.createElement('form')
div.append(newForm)

const newInput = document.createElement('input')
newInput.type = 'submit'
newInput.value = 'Submit'
newForm.append(newInput)

//create error msg for form submmit 