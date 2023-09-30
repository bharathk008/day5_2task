class UberPriceCalculator {
    constructor(baseFare, costPerMile, costPerMinute, surgeMultiplier) {
      this.baseFare = baseFare;
      this.costPerMile = costPerMile;
      this.costPerMinute = costPerMinute;
      this.surgeMultiplier = surgeMultiplier || 1; 
    }
  
    calculatePrice(distanceInMiles, timeInMinutes) {
      
      const fareWithoutSurge = this.baseFare + (distanceInMiles * this.costPerMile) + (timeInMinutes * this.costPerMinute);
      const totalFare = fareWithoutSurge * this.surgeMultiplier;
  
      return totalFare;
    }
  }
  
  const calculator = new UberPriceCalculator(2.5, 1.75, 0.3, 1.2); 
  
  const distance = 5;
  const time = 15; 
  const estimatedPrice = calculator.calculatePrice(distance, time);
  
  console.log(`Estimated Uber Price: $${estimatedPrice.toFixed(2)}`);
  