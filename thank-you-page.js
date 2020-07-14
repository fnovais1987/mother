<script>
// Send transaction data with a pageview if available
// when the page loads. Otherwise, use an event when the transaction
// data becomes available.
dataLayer.push({
  'event':'purchase',
  'ecommerce': {
    'purchase': {
      'actionField': {
        'id': 'T12345',                         // Transaction ID. Required for purchases and refunds.
        'affiliation': 'Online Store',
        'revenue': '912.00',                     // Total transaction value (incl. tax and shipping)
        'tax':'0.00',
        'shipping': '0.00',                      
        'coupon': 'SUMMER_SALE'                   // in case the customer to use a coupon, like member get member
      },
      'products': [{
          'name': 'COMBO 4 POTES DE SPORT PROTEIN MORANGO (50% OFF + 5% OFF no boleto)',         // Name or ID is required.
          'id': '"8756322256745"',
          'price': '756.00',
          'brand': 'Mother',
          'category': 'Protein',
          'variant': '',
          'quantity': 1 
       },{
          'name': 'Combo 12 Chocolates Proteicos - 40g',         // if there are more products on cart inser an array position
          'id': '"5823645123658"',
          'price': '156.00',
          'brand': 'Mother',
          'category': 'Protein',
          'variant': '',
          'quantity': 1 
       }]
    }
  }
});
</script>
