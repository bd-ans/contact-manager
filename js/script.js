const elContactInfoBox = $(".js-contact-info-box");
const elContactFormBox = $(".js-contact-form-box");
const elContactsList = $(".js-main-contacts-list");
const elContactFormBoxInner = $(".js-contact-form-box-inner");

const elAddNewContactBtn = $(".js-new-contact-btn");
const elDeleteContactBtn = $(".js-delete-contact-btn");
const elCloseAddContactBoxBtn = $(".js-close-svg");

const elContactSearchInput = $(".js-search-input");
const elContactPhoneNumber = $(".js-phone-number");

const elForm = document.querySelector('.js-form');
const elAddNewContactTitle = $(".add-new-contact-title");

let allResultsArr = [];
allResultsArr = JSON.parse(localStorage.getItem('allResultsArr')) || [];

// form box elements
const elSaveContactBtn = $(".js-save-contact-btn");
// form box inputs 
const elNameInput = $(".js-name-input");
const elSurnameInput = $(".js-surname-input");
const elWhoIsInput = $(".js-who-is-input");
const elPhoneNumberInput = $(".js-phone-number-input");
// form box elements end

// form box inputs to values
let nameValue = elNameInput.value;
let surnameValue = elSurnameInput.value;
let whoIsValue = elWhoIsInput.value;
let phoneNumberValue = elPhoneNumberInput.value;

// on clicked add new contact button
elAddNewContactBtn.addEventListener("click", function() {
  elContactInfoBox.classList.toggle("opacity-25");
  elContactInfoBox.classList.toggle("pointer-events-none");
  elContactFormBox.classList.remove("contact-form-box-out");
  elContactFormBox.classList.toggle("d-none");
  elContactFormBoxInner.classList.remove("contact-form-box-out");
  elContactFormBoxInner.classList.add("contact-form-box-inner");
  elContactFormBoxInner.classList.remove("pointer-events-none");
  elNameInput.focus();
});

// on clicked close btn
elCloseAddContactBoxBtn.addEventListener("click", function() {
  elContactFormBox.classList.remove("contact-form-box-inner");
  elContactFormBox.classList.add("contact-form-box-out");
  elContactFormBoxInner.classList.toggle("pointer-events-none");
  setTimeout(function() {
    elContactFormBox.classList.toggle("d-none");
    elContactInfoBox.classList.toggle("pointer-events-none");
    elContactInfoBox.classList.toggle("opacity-25");
    elNameInput.value = null;
    elSurnameInput.value = null;
    elWhoIsInput.value = null;
    elPhoneNumberInput.value = null;
  }, 540);
} );

// main validation status
var mainFormValidationStatus = true;

// on input phone number
elPhoneNumberInput.oninput = () => {
  if (elPhoneNumberInput.value === null || isNaN(elPhoneNumberInput.value) || elPhoneNumberInput.value.indexOf(' ') >= 0 || elPhoneNumberInput.value.length <= 8 || elPhoneNumberInput.value.length > 13) {
    elPhoneNumberInput.classList.add('input-red-shadow');
    elPhoneNumberInput.classList.add('input-red-border');
    mainFormValidationStatus = false;
  } else {
    elPhoneNumberInput.classList.remove('input-red-shadow');
    elPhoneNumberInput.classList.remove('input-red-border');

    if (allResultsArr.map(el => el.phoneNumber).includes(elPhoneNumberInput.value)) {
      elAddNewContactTitle.innerHTML = `${elPhoneNumberInput.value} raqamli kontakt mavjud`;
      elAddNewContactTitle.classList.add('text-danger');
      elPhoneNumberInput.classList.add('input-red-shadow');
      elPhoneNumberInput.classList.add('input-red-border');
      mainFormValidationStatus = false;
    } else {
      elAddNewContactTitle.innerHTML = "Yangi kontakt qo'shish";
      elAddNewContactTitle.classList.remove('text-danger');
      elPhoneNumberInput.classList.remove('input-red-shadow');
      elPhoneNumberInput.classList.remove('input-red-border');
      mainFormValidationStatus = true;
    }
    mainFormValidationStatus = true;
  }
}

// on input who is
elWhoIsInput.oninput = () => {
  if (elWhoIsInput.value === null || elWhoIsInput.value.length <= 2 || elWhoIsInput.value.length > 20 || elWhoIsInput.value.match(/[0-9+#+!.]/)) {
    elWhoIsInput.classList.add('input-red-shadow');
    elWhoIsInput.classList.add('input-red-border');
    mainFormValidationStatus = false;
  } else {
    elWhoIsInput.classList.remove('input-red-shadow');
    elWhoIsInput.classList.remove('input-red-border');
    mainFormValidationStatus = true;
  }
}

// on input surname
elSurnameInput.oninput = () => {
  if (elSurnameInput.value === null || elSurnameInput.value.indexOf(' ') >= 0 || elSurnameInput.value.length <= 2 || elSurnameInput.value.length > 20 || elSurnameInput.value.match(/[0-9+#+!.]/)) {
    elSurnameInput.classList.add('input-red-shadow');
    elSurnameInput.classList.add('input-red-border');
    mainFormValidationStatus = false;
  } else {
    elSurnameInput.classList.remove('input-red-shadow');
    elSurnameInput.classList.remove('input-red-border');

    if (allResultsArr.map(el => el.surname).includes(elSurnameInput.value)) {
      elAddNewContactTitle.innerHTML = `${elSurnameInput.value} familiyali kontakt mavjud`;
      elAddNewContactTitle.classList.add('text-danger');
      elSurnameInput.classList.add('input-red-shadow');
      elSurnameInput.classList.add('input-red-border');
      mainFormValidationStatus = false;
    } else {
      elAddNewContactTitle.innerHTML = "Yangi kontakt qo'shish";
      elAddNewContactTitle.classList.remove('text-danger');
      elSurnameInput.classList.remove('input-red-shadow');
      elSurnameInput.classList.remove('input-red-border');
      mainFormValidationStatus = true;
    }
    mainFormValidationStatus = true;
  }
}

// on input name
elNameInput.oninput = () => {
  if (elNameInput.value === null || elNameInput.value.indexOf(' ') >= 0 || elNameInput.value.length <= 2 || elNameInput.value.length > 20 || elNameInput.value.match(/[0-9+#+!.]/)) {
    elNameInput.classList.add('input-red-shadow');
    elNameInput.classList.add('input-red-border');
    mainFormValidationStatus = false;
  } else {
    elNameInput.classList.remove('input-red-shadow');
    elNameInput.classList.remove('input-red-border');

    if (allResultsArr.map(el => el.name).includes(elNameInput.value)) {
      elAddNewContactTitle.innerHTML = `${elNameInput.value} ismli kontakt mavjud`;
      elAddNewContactTitle.classList.add('text-danger');
      elNameInput.classList.add('input-red-shadow');
      elNameInput.classList.add('input-red-border');
      mainFormValidationStatus = false;
    } else {
      elAddNewContactTitle.innerHTML = "Yangi kontakt qo'shish";
      elAddNewContactTitle.classList.remove('text-danger');
      elNameInput.classList.remove('input-red-shadow');
      elNameInput.classList.remove('input-red-border');
      mainFormValidationStatus = true;
    }
    mainFormValidationStatus = true;
  }
}

// repeat for each function
allResultsArr.forEach(function(contact) {
// contatct box
  const contactBox = document.createElement('div');
  elContactsList.appendChild(contactBox);
  contactBox.classList.add('contact-box', 'js-contact-box','mx-1','my-2','border-bottom','d-flex','justify-content-between');
  
  // contact value
  const contactValue = document.createElement('div');
  contactBox.appendChild(contactValue);
  contactValue.classList.add('contact');

  // contactTopInfo
  const contactInfo = document.createElement('div');
  contactValue.appendChild(contactInfo);
  contactInfo.classList.add('contact-info-top', 'd-flex', 'align-items-center', 'user-select-none');

  // contact name title
  const contactNameTitle = document.createElement('h5');
  contactInfo.appendChild(contactNameTitle);
  contactNameTitle.classList.add('contact-name-title', 'contact-line', 'text-white', 'fw-bold');
  contactNameTitle.textContent = 'Ismi: ';

  // contact name output
  const contactNemeOutput = document.createElement('span');
  contactNameTitle.appendChild(contactNemeOutput);
  contactNemeOutput.classList.add('contact-name-output', 'fw-normal');

  //contact surname title
  const contactSurnameTitle = document.createElement('h5');
  contactInfo.appendChild(contactSurnameTitle);
  contactSurnameTitle.classList.add('contact-surname-title', 'text-white', 'fw-bold');
  contactSurnameTitle.textContent = 'Familiya: ';

  // contact surname output
  const contactSurnameOutput = document.createElement('span');
  contactSurnameTitle.appendChild(contactSurnameOutput);
  contactSurnameOutput.classList.add('contact-surname-output', 'fw-normal');

  // contactBottom info
  const contactInfoBottom = document.createElement('div');
  contactValue.appendChild(contactInfoBottom);
  contactInfoBottom.classList.add('contact-info-bottom', 'd-flex', 'align-items-center', 'user-select-none');

  // contatc who is title
  const contactWhoIsTitle = document.createElement('h5');
  contactInfoBottom.appendChild(contactWhoIsTitle);
  contactWhoIsTitle.classList.add('contact-who-is-title', 'contact-line', 'text-white', 'fw-bold');
  contactWhoIsTitle.textContent = 'Sizga kimligi: ';

  // contact who is output
  const contactWhoIsOutput = document.createElement('span');
  contactWhoIsTitle.appendChild(contactWhoIsOutput);
  contactWhoIsOutput.classList.add('contact-name-output', 'fw-normal');

  // contact phone number title
  const contactPhoneNumberTitle = document.createElement('h5');
  contactInfoBottom.appendChild(contactPhoneNumberTitle);
  contactPhoneNumberTitle.classList.add('contact-phone-number-title', 'text-white', 'fw-bold');
  contactPhoneNumberTitle.textContent = 'Telefon raqami: ';

  //contatc phone nubber output
  const contactPhoneNumberOutput = document.createElement('a');
  contactPhoneNumberTitle.appendChild(contactPhoneNumberOutput);
  contactPhoneNumberOutput.classList.add('contact-phone-number', 'js-phone-number', 'fw-normal', 'user-select-all', 'user-select-none', 'text-decoration-none');
  
  // contact delete btn box
  const contactDeleteBtnBox = document.createElement('div');
  contactBox.appendChild(contactDeleteBtnBox);
  contactDeleteBtnBox.classList.add('contact-info-end', 'd-flex', 'justify-content-center', 'align-items-center');
  
  // delete contact btn
  const contactDeleteBtn = document.createElement('button');
  contactDeleteBtnBox.appendChild(contactDeleteBtn);
  contactDeleteBtn.classList.add('delete-contact-btn', 'js-delete-contact-btn', 'btn', 'bg-transparent', 'shadow', 'border', 'text-light');
  contactDeleteBtn.textContent = `O'chirish`;

  // all items set value
  contactNemeOutput.textContent = contact.name;
  contactSurnameOutput.textContent = contact.surname;
  contactPhoneNumberOutput.setAttribute('href', 'tel:' + contact.phoneNumber);
  contactWhoIsOutput.textContent = contact.whoIs;
  contactPhoneNumberOutput.textContent = contact.phoneNumber;

  // delete contact btn
  contactDeleteBtn.addEventListener('click', function() {
    contactBox.remove();
    let elItemTextCont = contact.name;
    var indexOfFinder = elItemTextCont;
    const index = allResultsArr.map(object => object.name).indexOf(indexOfFinder);
    allResultsArr.splice(index, 1);
    console.log(allResultsArr);

    // localStorage allresultsarr update
    localStorage.setItem('allResultsArr', JSON.stringify(allResultsArr));
  } );
});

// on clicked save contact button
elSaveContactBtn.addEventListener("click", function(evt) {
  evt.preventDefault();
  nameValue = elNameInput.value.trim();
  surnameValue = elSurnameInput.value.trim();
  whoIsValue = elWhoIsInput.value.trim();
  phoneNumberValue = elPhoneNumberInput.value.trim();
  // if all inputs are valid
  if (elNameInput.value === null || elNameInput.value.indexOf(' ') >= 0 || elNameInput.value.length <= 2 || elNameInput.value.length > 20 || elNameInput.value.match(/[0-9+#+!.]/) || allResultsArr.map(el => el.name).includes(elNameInput.value)) {
    elNameInput.classList.add('input-red-shadow');
    elNameInput.classList.add('input-red-border');
    elNameInput.placeholder = 'Iltimos isim kiriting';
    elNameInput.value = null;
    mainFormValidationStatus = false;
  } else {
    elNameInput.classList.remove('input-red-shadow');
    elNameInput.classList.remove('input-red-border');
    mainFormValidationStatus = true;
    if (elSurnameInput.value === null || elSurnameInput.value.indexOf(' ') >= 0 || elSurnameInput.value.length <= 2 || elSurnameInput.value.length > 20 || elSurnameInput.value.match(/[0-9+#+!.]/) || allResultsArr.map(el => el.surname).includes(elSurnameInput.value)) {
      elSurnameInput.classList.add('input-red-shadow');
      elSurnameInput.classList.add('input-red-border');
      elSurnameInput.placeholder = 'Iltimos Familiya kiriting';
      elSurnameInput.value = null;
      mainFormValidationStatus = false;
    } else {
      elSurnameInput.classList.remove('input-red-shadow');
      elSurnameInput.classList.remove('input-red-border');
      mainFormValidationStatus = true;
      if (elWhoIsInput.value === null || elWhoIsInput.value.length <= 2 || elWhoIsInput.value.length > 20 || elWhoIsInput.value.match(/[0-9+#+!.]/)) {
        elWhoIsInput.classList.add('input-red-shadow');
        elWhoIsInput.classList.add('input-red-border');
        elWhoIsInput.placeholder = 'Iltimos kimligini kiriting';
        elWhoIsInput.value = null;
        mainFormValidationStatus = false;
      } else {
        elWhoIsInput.classList.remove('input-red-shadow');
        elWhoIsInput.classList.remove('input-red-border');
        mainFormValidationStatus = true;
        if (elPhoneNumberInput.value === null || isNaN(elPhoneNumberInput.value) || elPhoneNumberInput.value.indexOf(' ') >= 0 || elPhoneNumberInput.value.length <= 2 || elPhoneNumberInput.value.length > 3 || allResultsArr.map(el => el.phoneNumber).includes(elPhoneNumberInput.value)) {
          elPhoneNumberInput.classList.add('input-red-shadow');
          elPhoneNumberInput.classList.add('input-red-border');
          elPhoneNumberInput.placeholder = 'Iltimos raqamini kiriting';
          elPhoneNumberInput.value = null;
          mainFormValidationStatus = false;
        } else {
          elPhoneNumberInput.classList.remove('input-red-shadow');
          elPhoneNumberInput.classList.remove('input-red-border');
          mainFormValidationStatus = true;
          if (mainFormValidationStatus) {
            elContactFormBox.classList.remove("contact-form-box-inner");
            elContactFormBox.classList.add("contact-form-box-out");
            elContactFormBoxInner.classList.toggle("pointer-events-none");
            setTimeout(function() {
              elContactFormBox.classList.toggle("d-none");
              elContactInfoBox.classList.toggle("pointer-events-none");
              elContactInfoBox.classList.toggle("opacity-25");
              elNameInput.value = null;
              elSurnameInput.value = null;
              elWhoIsInput.value = null;
              elPhoneNumberInput.value = null;
            }, 540);
          }
        }
      }
    }
  }

  // if all inputs are valid end
  if (mainFormValidationStatus) {
    let person = {
      name: nameValue,
      surname: surnameValue,
      whoIs: whoIsValue,
      phoneNumber: phoneNumberValue
    }
    allResultsArr.push(person);

    // create new contact card
    const contactBox = document.createElement('div');
    elContactsList.appendChild(contactBox);
    contactBox.classList.add('contact-box', 'js-contact-box','mx-1','my-2','border-bottom','d-flex','justify-content-between');
    
    // contact value
    const contactValue = document.createElement('div');
    contactBox.appendChild(contactValue);
    contactValue.classList.add('contact');

    // contactTopInfo
    const contactInfo = document.createElement('div');
    contactValue.appendChild(contactInfo);
    contactInfo.classList.add('contact-info-top', 'd-flex', 'align-items-center', 'user-select-none');

    // contact name value
    const contactNameTitle = document.createElement('h5');
    contactInfo.appendChild(contactNameTitle);
    contactNameTitle.classList.add('contact-name-title', 'contact-line', 'text-white', 'fw-bold');
    contactNameTitle.textContent = 'Ismi: ';

    // contact name output
    const contactNemeOutput = document.createElement('span');
    contactNameTitle.appendChild(contactNemeOutput);
    contactNemeOutput.classList.add('contact-name-output', 'fw-normal');

    // contact surname title
    const contactSurnameTitle = document.createElement('h5');
    contactInfo.appendChild(contactSurnameTitle);
    contactSurnameTitle.classList.add('contact-surname-title', 'text-white', 'fw-bold');
    contactSurnameTitle.textContent = 'Familiya: ';

    // contact surname output
    const contactSurnameOutput = document.createElement('span');
    contactSurnameTitle.appendChild(contactSurnameOutput);
    contactSurnameOutput.classList.add('contact-surname-output', 'fw-normal');

    // contactBottom info
    const contactInfoBottom = document.createElement('div');
    contactValue.appendChild(contactInfoBottom);
    contactInfoBottom.classList.add('contact-info-bottom', 'd-flex', 'align-items-center', 'user-select-none');

    // contact who is title
    const contactWhoIsTitle = document.createElement('h5');
    contactInfoBottom.appendChild(contactWhoIsTitle);
    contactWhoIsTitle.classList.add('contact-who-is-title', 'contact-line', 'text-white', 'fw-bold');
    contactWhoIsTitle.textContent = 'Sizga kimligi: ';

    // contact who is output
    const contactWhoIsOutput = document.createElement('span');
    contactWhoIsTitle.appendChild(contactWhoIsOutput);
    contactWhoIsOutput.classList.add('contact-name-output', 'fw-normal');

    // contact phone number title
    const contactPhoneNumberTitle = document.createElement('h5');
    contactInfoBottom.appendChild(contactPhoneNumberTitle);
    contactPhoneNumberTitle.classList.add('contact-phone-number-title', 'text-white', 'fw-bold');
    contactPhoneNumberTitle.textContent = 'Telefon raqami: ';

    // contact phone number output
    const contactPhoneNumberOutput = document.createElement('a');
    contactPhoneNumberTitle.appendChild(contactPhoneNumberOutput);
    contactPhoneNumberOutput.classList.add('contact-phone-number', 'js-phone-number', 'fw-normal', 'user-select-all', 'user-select-none', 'text-decoration-none');
    
    // contactBottominfo end
    const contactDeleteBtnBox = document.createElement('div');
    contactBox.appendChild(contactDeleteBtnBox);
    contactDeleteBtnBox.classList.add('contact-info-end', 'd-flex', 'justify-content-center', 'align-items-center');

    // contact delete btn
    const contactDeleteBtn = document.createElement('button');
    contactDeleteBtnBox.appendChild(contactDeleteBtn);
    contactDeleteBtn.classList.add('delete-contact-btn', 'js-delete-contact-btn', 'btn', 'bg-transparent', 'shadow', 'border', 'text-light');
    contactDeleteBtn.textContent = `O'chirish`;
    
    // all results forEach function
    allResultsArr.forEach(function(contact) {   // for each contact in array
      contactNemeOutput.textContent = contact.name;
      contactSurnameOutput.textContent = contact.surname;
      contactPhoneNumberOutput.setAttribute('href', 'tel:' + contact.phoneNumber);
      contactWhoIsOutput.textContent = contact.whoIs;
      contactPhoneNumberOutput.textContent = contact.phoneNumber;
    });

    // delete contact btn
    contactDeleteBtn.addEventListener('click', function() {
      contactBox.remove();
      let elItemTextCont = person.name;
      var indexOfFinder = elItemTextCont;
      const index = allResultsArr.map(object => object.name).indexOf(indexOfFinder);
      allResultsArr.splice(index, 1);
      console.log(allResultsArr);

      // localstroage allResultsArr update
      localStorage.setItem('allResultsArr', JSON.stringify(allResultsArr));
    } );

    // localStorage set allResultsArr
    localStorage.setItem('allResultsArr', JSON.stringify(allResultsArr));
}
});