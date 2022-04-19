let submitForm = document.querySelector('#submit')

function bIsFormFilled(){
  let fname = document.querySelector('#fname')
  let lname = document.querySelector('#lname')
  let email = document.querySelector('#email')
  let password = document.querySelector('#password')

  if(fname.value == ''){
    let fnameWarning = document.querySelector('#fname-warning')
    fnameWarning.classList.add('on');
    fname.classList.add('input-warning')
  }
  if(lname.value == ''){
    let lnameWarning = document.querySelector('#lname-warning')
    lnameWarning.classList.add('on');
    lname.classList.add('input-warning');
  }
  if(email.value == ''){
    let emailWarning = document.querySelector('#email-warning')
    emailWarning.classList.add('on');
    email.classList.add('input-warning');
  }
  if(password.value == ''){
    let passwordWarning = document.querySelector('#password-warning')
    passwordWarning.classList.add('on');
    password.classList.add('input-warning');
  }

  return true;
}

submitForm.addEventListener('click',() => {bIsFormFilled();})
