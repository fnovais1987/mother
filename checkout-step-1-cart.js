<script>
/**
 * data layer variable to handle navigation after the ecommerce data has been sent to Google Analytics on /carrinho.
 */

  dataLayer.push({
    'event': 'cart',
    'ecommerce': {
      'checkout': {
        'actionField': {'step': 1},
        'products': [{
          'name': 'COMBO 4 POTES DE SPORT PROTEIN MORANGO (50% OFF + 5% OFF no boleto)',         // Name or ID is required.
          'id': '8756322256745',
          'price': '756.00',
          'brand': 'Mother',
          'category': 'Protein',
          'variant': '',
          'quantity': 1 
       },{
          'name': 'Combo 12 Chocolates Proteicos - 40g',         // if there are more products on cart inser an array position
          'id': '5823645123658',
          'price': '156.00',
          'brand': 'Mother',
          'category': 'Protein',
          'variant': '',
          'quantity': 1 
       }]
     }
   },
  });

</script>
