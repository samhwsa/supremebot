var url = window.location.href;
var i;

var category = "sweatshirts";
var item_name = "Animals";
var color = "Olive";
var item_size = "Large";

// function for sleep because javascript doesnt have it automatically
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

// redirects to category
function pickCategory(){
    chrome.storage.sync.get('category', function(data){
        var redirect = "https://www.supremenewyork.com/shop/all/jackets";
        var replace = redirect.replace("jackets", category);
        chrome.runtime.sendMessage({redirect: replace})
    });
}

function pickItem() {
    chrome.storage.sync.get('item_name', function(data){
        var items = document.getElementsByClassName('name-link');
        // finds item
        for(i = 0; i < items.length; i++) {
            if((items[i].innerHTML).includes(item_name)) {
                chrome.runtime.sendMessage({redirect: items[i].href});
                break;
            }
        }
        // choose color
        var items = document.getElementsByClassName('inner-article');
        var articleFound = false;
            for(i = 0; i < items.length; i++){
                if(items[i].innerHTML.includes(item_name) && items[i].innerHTML.includes(color)) {
                    articleFound = true;
                    chrome.runtime.sendMessage({redirect: items[i].firstChild.href});
                    break;
                }
            }
        // selects size
        const textToFind = item_size;
        const dd = document.getElementById ('s');
        dd.selectedIndex = [...dd.options].findIndex (option => option.text === textToFind);

        // adds item to cart
        sleep(250);
        document.getElementsByName("commit")[0].click();
        

    });
}


if(url == "https://www.supremenewyork.com/shop/all"){
    pickCategory();

}

if(url != "https://www.supremenewyork.com/shop/all"){
    pickItem();
}

var name = "Sam";
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
document.getElementById("rnsnckrn").value = card_number;
document.getElementById("orcer").value = ccv;
document.getElementById("credit_card_month").value = credit_month;
document.getElementById("credit_card_year").value = credit_year;

//optional apt info
document.getElementById("oba3").value = apt;

// check box
document.getElementsByClassName("iCheck-helper")[1].click();