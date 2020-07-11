class Vampire {
  constructor(name, pet, thirsty) {
    this.name = name;
    if (pet === undefined) {
      this.pet = 'bat'
    } else {
      this.pet = pet;
    };
    this.thirsty = true;
  };
  drink(thirsty) {
    this.thirsty = false;
    };
  };


module.exports = Vampire;
