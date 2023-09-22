export const Exercise = () => {
  let age = 18;
  let hasDriverLicense = false;
  let hasCar = false;

  // function canDrive(age, hasDriverLicense, hasCar) {
  //   if (age >= 18) {
  //     if (hasDriverLicense) {
  //       if (hasCar) {
  //         return 'You can drive your car!';
  //       } else {
  //         return 'You can drive a rental car.';
  //       }
  //     } else {
  //       return "You can't drive without a driver's license.";
  //     }
  //   } else {
  //     return 'You are too young to drive.';
  //   }
  // }
  // function hasEnough(hasEnough) {
  //   if (hasEnough) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
  // canDrive(18, true, true);
  // hasEnough(true);

  const canDrive =
    age >= 18
      ? hasCar
        ? hasDriverLicense
          ? console.log('You can drive your car!')
          : console.log('You can drive a rental car.')
        : console.log('You cant drive without a drivers license.')
      : console.log('You are too young to drive.');
};
