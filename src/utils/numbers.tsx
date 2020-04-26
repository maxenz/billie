export const currencyRest = (num1: number, num2: number) => parseFloat((num1 - num2).toFixed(2));

export const getFormattedCurrencyValue = (val: number) =>
    new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(val);
