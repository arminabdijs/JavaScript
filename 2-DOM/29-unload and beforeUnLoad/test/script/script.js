
let $ = document;
let { log } = console;

$.addEventListener('DOMContentLoaded', () => {
  let form = $.querySelector('.form');
  let model = $.querySelector('.model');
  let cancelBtn = $.querySelector('.cancel');
  let okCloseBtn = $.querySelector('.ok__close');
  let noOpenBtn = $.querySelector('.no__open');
  let formInput = $.querySelectorAll('.input__value');

  let formIsChange = false;

  (function () {
    formInput.forEach((input) => {
      input.addEventListener('input', () => {
        formIsChange = true;
        log(formIsChange);
      });
    });
  })();

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    formIsDirty = false;
    alert('فرم با موفقیت ارسال شد!');
    form.reset();

    /* formInput.forEach((item) => {
           item.value = '';
    }); */
  });

  window.addEventListener('beforeunload', (event) => {
    if (formIsChange) {
      model.className = 'model active';
      event.preventDefault();
    }
  });

    cancelBtn.addEventListener('click', (event) => {
        if (formIsChange) {
            event.preventDefault();
            model.className = 'model active';
        }
  });

  noOpenBtn.addEventListener('click', (event) => {
    event.preventDefault();
    model.className = 'model';
  });

  okCloseBtn.addEventListener('click', (event) => {
    event.preventDefault();
    model.className = 'model';
    formInput.forEach((item) => {
      item.value = '';
    });
  });
});
