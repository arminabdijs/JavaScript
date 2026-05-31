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
      alert('touched');
    }
  });

  cancelBtn.addEventListener('touchstart', (event) => {
    if (formIsChange) {
      event.preventDefault();
      model.className = 'model active';
    }
    alert('touched');
  });

  noOpenBtn.addEventListener('touchstart', (event) => {
    event.preventDefault();
    model.className = 'model';
    alert('touched');
  });


  
  okCloseBtn.addEventListener('touchend', (event) => {
    event.preventDefault();
    model.className = 'model';
    formInput.forEach((item) => {
      item.value = '';
    });
    alert('touched');
  });
});


//touchstart
//touchmove
//touchcancel
//touchend

