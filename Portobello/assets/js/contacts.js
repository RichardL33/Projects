'use strict';


//Validation forms
function validateForm(selector) {
    Array.from(document.querySelectorAll(selector)).forEach(item => {
        item.addEventListener('input', (e) => {
            if(e.target.value === ''){
            item.dataset.touched = false;
            }
        });
        item.addEventListener('invalid', () => {
            item.dataset.touched = true;
        });
        item.addEventListener('blur', () => {
            if (item.value !== '') item.dataset.touched = true;
        });
    });
};

validateForm('.js-form .form-field');

var form = document.querySelector('.js-form');
var formName = '.js-form';

form.addEventListener('submit', function(e){
    submitForm(e, formName);
});

function submitForm(e, formName) {
    e.preventDefault();
    var name = $(formName + ' .js-field-name').val();
    var email = $(formName + ' .js-field-email').val();
    var message = $(formName + ' .js-field-message').val();

    var formData = {
        name: name,
        email: email,
        message: message
    };

    $.ajax({
        type: "POST",
        url: 'mail.php',
        data: formData,
        success: function () {
            $('.email-confirmation').show();
            $('.contacts__form').css({
                'visibility':'hidden',
                'opacity':'0',
                'max-height':'200px'
            });
            setTimeout(function(){
                $('.contacts__form, .email-confirmation').removeAttr('style');
                $('.contacts__form input, .contacts__form textarea').val('');
            }, 3000);
        },
        error: function () {
            console.log('email error');
            //...
        }
    });
}