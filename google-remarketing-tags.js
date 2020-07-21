// Measure view a product detail
// and a list of productFieldObjects.
 
 dataLayer.push({
    'event': 'fireRemarketingTag',
    'google_tag_params': {
      'ecomm_prodid': '8756322256745',
      'ecomm_pagetype': 'product',
      'ecomm_totalvalue': 756.00
    }
   });
   
   
// Measure view a cart
// and a list of productFieldObjects.
 
 dataLayer.push({
    'event': 'fireRemarketingTag',
    'google_tag_params': {
      'ecomm_prodid': '8756322256745',//in case two or more products, please separeted by comma, example: 756322256745,5823645123658"
      'ecomm_pagetype': 'cart',
      'ecomm_totalvalue': 912.00 //total value of products
    }
   });
   
   
// Measure a purchase
// and a list of productFieldObjects.
 
 dataLayer.push({
    'event': 'fireRemarketingTag',
    'google_tag_params': {
      'ecomm_prodid': '8756322256745',//in case two or more products, please separeted by comma, example: 756322256745,5823645123658
      'ecomm_pagetype': 'purchase',
      'ecomm_totalvalue': 912.00 //total value of products
    }
 });
