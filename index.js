function distanceFromHqInBlocks(pickupDistance){
    return Math.abs(pickupDistance -42)}

    function distanceFromHqInFeet(pickupDistance){
        const blocks =distanceFromHqInBlocks(pickupDistance)
        return blocks*264;
    }
   function distanceTravelledInFeet(start,end){
    return Math.abs((start-end)*264);
   }

   function calculatesFarePrice(start, destination) {
    const feetTraveled = distanceTravelledInFeet(start, destination);
  
    if (feetTraveled <= 400) {
      return 0; 
    } 
    else if (feetTraveled <= 2000) {
      return (feetTraveled - 400) * 0.02; 
    }
     else if (feetTraveled <= 2500) {
      return 25; 
    } 
    else {
      return 'cannot travel that far'; 
    }
  }
  
  
  
  
  