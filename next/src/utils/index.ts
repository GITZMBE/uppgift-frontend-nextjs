

export const formatPrice = new Intl.NumberFormat(undefined, {
  currency: 'USD',
  style: 'currency'
});

export default formatPrice;