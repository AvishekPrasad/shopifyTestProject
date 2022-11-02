
// Without any filters

https://svc-1001-usf.hotyon.com/search?q=&apiKey=05cb6118-0f5f-49a6-924c-4026338c5e04&locale=en&getProductDescription=0&collection=290472886471&skip=0&take=28



// When Collection is selected

https://svc-1001-usf.hotyon.com/search?q=&apiKey=05cb6118-0f5f-49a6-924c-4026338c5e04&locale=en&getProductDescription=0&collection=290472886471&facetFilters=%7B%22134199812%22%3A%5B%22collections%22%2C%5B%22287889326279%22%5D%5D%7D&skip=0&take=28



// When Brand is selected

https://svc-1001-usf.hotyon.com/search?q=&apiKey=05cb6118-0f5f-49a6-924c-4026338c5e04&locale=en&getProductDescription=0&collection=290472886471&facetFilters=%7B%221297812121%22%3A%5B%22vendor%22%2C%5B%22Signify%20India%22%5D%5D%7D&skip=0&take=28




// When ProductType is selected

https://svc-1001-usf.hotyon.com/search?q=&apiKey=05cb6118-0f5f-49a6-924c-4026338c5e04&locale=en&getProductDescription=0&collection=290472886471&facetFilters=%7B%222095593953%22%3A%5B%22productType%22%2C%5B%22Pendant%22%5D%5D%7D&skip=0&take=28



// When Price is increased

https://svc-1001-usf.hotyon.com/search?q=&apiKey=05cb6118-0f5f-49a6-924c-4026338c5e04&locale=en&getProductDescription=0&collection=290472886471&facetFilters=%7B%2277878313%22%3A%5B%22price%22%2C%5B%22%3A889.0%20%3A3500.0%22%5D%5D%7D&skip=0&take=28




// when Price is decreased

https://svc-1001-usf.hotyon.com/search?q=&apiKey=05cb6118-0f5f-49a6-924c-4026338c5e04&locale=en&getProductDescription=0&collection=290472886471&facetFilters=%7B%2277878313%22%3A%5B%22price%22%2C%5B%22%3A889.0%20%3A2630.0%22%5D%5D%7D&skip=0&take=28



// Selecting multiple parameters

// When only collection is selected

https://svc-1001-usf.hotyon.com/search?q=&apiKey=05cb6118-0f5f-49a6-924c-4026338c5e04&locale=en&getProductDescription=0&collection=290472886471&facetFilters=%7B%22134199812%22%3A%5B%22collections%22%2C%5B%22290472886471%22%5D%5D%7D&skip=0&take=28

// collections%22%2C%5B%22290472886471

// 


// when collection and Brand both are selected

https://svc-1001-usf.hotyon.com/search?q=&apiKey=05cb6118-0f5f-49a6-924c-4026338c5e04&locale=en&getProductDescription=0&collection=290472886471&facetFilters=%7B%22134199812%22%3A%5B%22collections%22%2C%5B%22290472886471%22%5D%5D%2C%221297812121%22%3A%5B%22vendor%22%2C%5B%22Signify%20India%22%5D%5D%7D&skip=0&take=28




// When collection , brand and productType is selected

https://svc-1001-usf.hotyon.com/search?q=&apiKey=05cb6118-0f5f-49a6-924c-4026338c5e04&locale=en&getProductDescription=0&collection=290472886471&facetFilters=%7B%22134199812%22%3A%5B%22collections%22%2C%5B%22290472886471%22%5D%5D%2C%221297812121%22%3A%5B%22vendor%22%2C%5B%22Signify%20India%22%5D%5D%2C%222095593953%22%3A%5B%22productType%22%2C%5B%22Pendant%22%5D%5D%7D&skip=0&take=28


// Checking the output
https://svc-1001-usf.hotyon.com/search?q=&apiKey=05cb6118-0f5f-49a6-924c-4026338c5e04&locale=en&getProductDescription=0&collection=&facetFilters={"77878313":["price",[":797.0 :3059.0"]],"134199812":["collections",["290472886471"]],"696604529":["option:Color",["Transparent Red"]],"1297812121":["vendor",["Signify India"]],"1400093966":["option:Texture",["Layered Coarse"]],"2095593953":["productType",["Pendant"]]}&skip=0&take=28

facetFilters = { 
    "77878313": ["price", [":797.0 :3059.0"]], 
    "134199812": ["collections", ["290472886471"]], 
    "696604529": ["option:Color", ["Transparent Red"]], 
    "1297812121": ["vendor", ["Signify India"]], 
    "1400093966": ["option:Texture", ["Layered Coarse"]], 
    "2095593953": ["productType", ["Pendant"]] 
}



// updating/adding new data to oject and converting it to string
var obj = {key1: "value1", key2: "value2"};
Object.assign(obj, {key3: "value3"});

document.body.innerHTML = JSON.stringify(obj); 




// when adding any filter {this case is for adding collections}
https://svc-1001-usf.hotyon.com/search?q=&apiKey=05cb6118-0f5f-49a6-924c-4026338c5e04&locale=en&getProductDescription=0&collection=&facetFilters={"134199812":["collections",["287889326279"]]}&skip=0&take=28



// when removing any filter {this case is for removing a collections}
https://svc-1001-usf.hotyon.com/search?q=&apiKey=05cb6118-0f5f-49a6-924c-4026338c5e04&locale=en&getProductDescription=0&collection=&skip=0&take=28



// When adding multiple filter(this case is for adding collections and multiple inputs for vendor/brand name)
https://svc-1001-usf.hotyon.com/search?q=&apiKey=05cb6118-0f5f-49a6-924c-4026338c5e04&locale=en&getProductDescription=0&collection=&facetFilters={"134199812":["collections",["290472886471"]],"1297812121":["vendor",["Mobikasa test development","Signify India"]]}&skip=0&take=28



// when removing multiple filter(this case for intial then removing single item for first time and then mulitple)


https://svc-1001-usf.hotyon.com/search?q=&apiKey=05cb6118-0f5f-49a6-924c-4026338c5e04&locale=en&getProductDescription=0&collection=&facetFilters={"134199812":["collections",["290472886471"]],"1297812121":["vendor",["Mobikasa test development","Signify India"]]}&skip=0&take=28


https://svc-1001-usf.hotyon.com/search?q=&apiKey=05cb6118-0f5f-49a6-924c-4026338c5e04&locale=en&getProductDescription=0&collection=&facetFilters={"134199812":["collections",["290472886471"]],"1297812121":["vendor",["Mobikasa test development"]]}&skip=0&take=28


https://svc-1001-usf.hotyon.com/search?q=&apiKey=05cb6118-0f5f-49a6-924c-4026338c5e04&locale=en&getProductDescription=0&collection=&facetFilters={"134199812":["collections",["290472886471"]]}&skip=0&take=28





