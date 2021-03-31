var name = "sam";
var email = "";
var phone = "";
var address = "";
var zip = "";
var city = "";
var WA = "";
var card_number = "";
var ccv = "";
var credit_month = "";
var credit_year = "";
var apt = "";

// information
document.getElementById("order_billing_name").value = name;
document.getElementById("order_email").value = email;
document.getElementById("order_tel").value = phone;
document.getElementById("bo").value = address;
document.getElementById("order_billing_zip").value = zip;
document.getElementById("order_billing_city").value = city;
document.getElementById("order_billing_state").value = WA;
document.getElementById("nnaerb").value = card_number;
document.getElementById("orcer").value = ccv;
document.getElementById("credit_card_month").value = credit_month;
document.getElementById("credit_card_year").value = credit_year;

//optional
document.getElementById("oba3").value = apt;

// check box
document.getElementsByClassName("iCheck-helper")[1].click();

// process payment
//document.getElementsByName("commit")[0].click();
