export const getFactor = (x) => {
  let result = [];
  for (let i = 1; i <= x; i++) {
    if (x % i === 0) {
      result.push(i);
    }
  }
  return result;
};

export const sameFactors = (shipment = [], driver = []) => {
  let sameCommonFactor = [];

  shipment.forEach((destination_factor, index) => {
    const sharedCommonFactors = driver.find(
      (driver_factor) => driver_factor === destination_factor
    );
    if (sharedCommonFactors) sameCommonFactor.push(sharedCommonFactors);
  });
  return sameCommonFactor;
};
