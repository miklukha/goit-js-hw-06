const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
  event.preventDefault();

  const [email, password] = event.currentTarget.elements;

  if (!email.value || !password.value) {
    return alert('All fields must be filled in');
  }

  const dataForm = {
    [email.name]: email.value,
    [password.name]: password.value,
  };

  console.log(dataForm);

  // const formData = new FormData(event.currentTarget);
  // const formDataObj = {};

  // formData.forEach((value, name) => {
  //   formDataObj[name] = value;
  // });

  // console.log(formDataObj);

  formRef.reset();
}
