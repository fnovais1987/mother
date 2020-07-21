// Measure adding a product to a shopping cart by using an 'add' actionFieldObject
// and a list of productFieldObjects.
dataLayer.push({
  'event': 'addToCart',
  'ecommerce': {
    'currencyCode': 'EUR',
    'add': {                                // 'add' actionFieldObject measures.
      'products': [{                        //  adding a product to a shopping cart.
        'name': 'COMBO 4 POTES DE SPORT PROTEIN MORANGO (50% OFF + 5% OFF no boleto)',         // Name or ID is required.
        'id': '8756322256745',
        'price': '756.00',
        'brand': 'Mother',
        'category': 'Protein',
        'variant': '',
        'quantity': 1                       //  quantity added to cart
       }]
    }
  }
});



// Measure the removal of a product from a shopping cart.
dataLayer.push({
  'event': 'removeFromCart',
  'ecommerce': {
    'remove': {                               // 'remove' actionFieldObject measures.
      'products': [{                          //  removing a product to a shopping cart.
        'name': 'COMBO 4 POTES DE SPORT PROTEIN MORANGO (50% OFF + 5% OFF no boleto)',         // Name or ID is required.
        'id': '8756322256745',
        'price': '756.00',
        'brand': 'Mother',
        'category': 'Protein',
        'variant': '',
        'quantity': 1                       //  quantity removed to cart
      }]
    }
  }
});
