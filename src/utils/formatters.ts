export const toPercent = (str: string) => {
  const floatVal = parseFloat(str);
  if (isNaN(floatVal)) {
    return str;
  }

  return `${floatVal.toFixed(2)}%`;
};

export const toCurrency = (str: string) => {
  const floatVal = parseFloat(str);
  if (isNaN(floatVal)) {
    return str;
  }

  return `${floatVal.toLocaleString('en-US', { minimumFractionDigits: 2 })}`;
};
