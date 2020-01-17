$(document).ready(function(){
    $('#namecheck').hide();
    $('#lnamecheck').hide();
    $('#addresscheck').hide();
    $('#mobilecheck').hide();
    $('#emailcheck').hide();
    $('#passwordcheck').hide();
    $('#confpasscheck').hide();
    $('#radiocheck').hide();
    $('#selectboxcheck').hide();
    $('#datecheck').hide();

    var name_err = true;
    var lname_err = true;
    var address_err = true;
    var mobile_err = true;
    var eamil_err = true;
    var pass_err = true;
    var confpass_err = true;
    var radio_err =true;
    var selectbox_err = true;
    //first name validation
    $('#inputname').keyup(function(){
        fname_check();
    });

    function fname_check(){
        var fname_val = $('#inputname').val();
        if(fname_val.length == ''){
            $('#inputname').css('borderColor','red');
            $('#namecheck').show().html('* this field should not be empty').css('color','red').focus();
            name_err = false;
            return false;
            }
        else {
            $('#namecheck').hide();
            $('#inputname').css('borderColor','');

        }
        if(fname_val.match('^[a-zA-Z]{1,16}$')){
            $('#inputname').css('borderColor','green');
            $('#namecheck').show().html('valid name').css('color','green');

        }
        else {
            $('#inputname').css('borderColor','red');
            $('#namecheck').show().html('* name should be character').css('color','red').focus();
            eamil_err = false;
            return false;
        }
    }

    //last name validation
    $('#inputlname').keyup(function(){
        lname_check();
    });

    function lname_check(){
        var fname_val = $('#inputlname').val();
        if(fname_val.length == ''){
            $('#inputlname').css('borderColor','red');
            $('#lnamecheck').show().html('* this field should not be empty').css('color','red').focus();
            lname_err = false;
            return false;
        }
        else {
            $('#lnamecheck').hide();
            $('#inputlname').css('borderColor','');

        }
        if(fname_val.match('^[a-zA-Z]{1,16}$')){
            $('#inputlname').css('borderColor','green');
            $('#lnamecheck').show().html('valid name').css('color','green');

        }
        else {
            $('#inputlname').css('borderColor','red');
            $('#lnamecheck').show().html('* name should be character').css('color','red').focus();
            eamil_err = false;
            return false;
        }
    }

    //address validation
    $('#inputaddress').keyup(function(){
        address_check();
    });

    function address_check(){
        var address_val = $('#inputaddress').val();
        if(address_val.length == ''){
            $('#inputaddress').css('borderColor','red');
            $('#addresscheck').show().html('* this field should not be empty').css('color','red').focus();
            address_err = false;
            return false;
        }
        else {
            $('#addresscheck').hide();
            $('#inputaddress').css('borderColor','');

        }
        if(address_val.match('^[a-zA-Z]{1,16}$')){
            $('#inputaddress').css('borderColor','green');
            $('#addresscheck').show().html('valid name').css('color','green');

        }
        else {
            $('#inputaddress').css('borderColor','red');
            $('#addresscheck').show().html('* name should be character').css('color','red').focus();
            address_err = false;
            return false;
        }
    }

    //mobile validation
    $('#inputmobile').keyup(function(){
        mobile_check();
    });

    function mobile_check(){
        var mobile_val = $('#inputmobile').val();
        var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if(mobile_val.length == ''){
            $('#inputmobile').css('borderColor','red');
            $('#mobilecheck').show().html('* this field should not be empty').css('color','red').focus();
            mobile_err = false;
            return false;
        }
        else {
            $('#mobilecheck').hide();
            $('#inputmobile').css('borderColor','');

        }
        if(mobile_val.match(phoneno)){
            $('#inputmobile').css('borderColor','green');
            $('#mobilecheck').show().html('valid name').css('color','green');

        }
        else {
            $('#inputmobile').css('borderColor','red');
            $('#mobilecheck').show().html('* mobile number should be 10 digit').css('color','red').focus();
            mobile_err = false;
            return false;
        }
    }
    $('#inputmobile').keyup(function(){
        mobile_check();
    });

    //email validation function
    $('#inputEmail3').keyup(function(){
        email_check();
    });

    function email_check(){
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var email_val = $('#inputEmail3').val();

        if(email_val.length == ''){
            $('#inputEmail3').css('borderColor','red');
            $('#emailcheck').show().html('* this field should not be empty').css('color','red').focus();
            mobile_err = false;
            return false;
        }
        else {
            $('#emailcheck').hide();

        }
        if((email_val.match(mailformat))){
            $('#inputEmail3').css('borderColor','green');
            $('#emailcheck').show().html('valid name').css('color','green');

        }
        else {
            $('#inputEmail3').css('borderColor','red');
            $('#emailcheck').show().html('* email should be correct').css('color','red').focus();
            mobile_err = false;
            return false;
        }
    }

    //password validation
    $('#inputPassword3').keyup(function(){
        password_check();
    });

    function password_check(){
        var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
        var password_val = $('#inputPassword3').val();

        if(password_val.length == ''){
            $('#inputPassword3').css('borderColor','red');
            $('#passwordcheck').show().html('* this field should not be empty').css('color','red').focus();
            pass_err = false;
            return false;
        }
        else {
            $('#passwordcheck').hide();

        }
        if((password_val.match(decimal))){
            $('#inputPassword3').css('borderColor','green');
            $('#passwordcheck').show().html('valid name').css('color','green');

        }
        else {
            $('#inputPassword3').css('borderColor','red');
            $('#passwordcheck').show().html('* password contain atleast one upper case , one lower case, one digit and one special character and between 8 to 15 char ').css('color','red').focus();
            pass_err = false;
            return false;
        }
    }

    //confirm password validation
    $('#inputPassword4').keyup(function(){
        confirmpassword_check();
    });

    function confirmpassword_check(){

        var confirmpassword_val = $('#inputPassword4').val();
        var password_val = $('#inputPassword3').val();

        if(confirmpassword_val.length == ''){
            $('#inputPassword4').css('borderColor','red');
            $('#confpasscheck').show().html('* this field should not be empty').css('color','red').focus();
            pass_err = false;
            return false;
        }
        else {
            $('#passwordcheck').hide();

        }
        if(password_val == confirmpassword_val){
            $('#inputPassword4').css('borderColor','green');
            $('#confpasscheck').show().html('valid name').css('color','green');

        }
        else {
            $('#inputPassword4').css('borderColor','red');
            $('#confpasscheck').show().html('* password and confirm password should be same').css('color','red').focus();
            confpass_err = false;
            return false;
        }
    }

    $('#btnsubmit').click(function(){

        //date validation
        var date_val = $('input[type = "date"]').val();
        if(date_val!= '') {
            var actualdate = new Date(date_val);
            var today = new Date();
            var age = Math.floor((today - actualdate) / (365 * 24 * 60 * 60 * 1000));
            $('#datecheck').show().html(`you are ${age} year old`).css('color', 'green');
        }
        else{
            $('#datecheck').show().html('* this field should not be empty').css('color','red');
            return false;
        }


        //radio button validation
        var radio_val = $('input[type = "radio"]:checked');

       if(radio_val.length > 0){
           $('#radiocheck').hide();
           radio_err = true;

       }
       else{
           $('#radiocheck').show().html('* this field should not be empty').css('color','red');
           radio_err = false;
           return false;
       }

       //checkbox validation
        var checkbox_val = $('input[type = "checkbox"]:checked');

        if(checkbox_val.length > 0){
            checkbox_err = true;
        }
        else{
            $('#checkboxcheck').show().html('* this field should not be empty').css('color','red');
            checkbox_err = false;
            return false;
        }

        //select box validation
      var selectbox_val = $('#exampleFormControlSelect2 option:selected');

        if(selectbox_val.length > 0){
        $('#selectboxcheck').hide();
        selectbox_err = true;
        }
        else{
            $('#selectboxcheck').show().html('* this field should not be empty').css('color','red');
            selectbox_err = false;
            return false;
        }

    });
});
