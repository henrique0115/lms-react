// Reference: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_programming

class Pokemon {
  constructor(name, level) {
    this.name = name;
    this.level = level;
    this.health = 100;
  }

  attack() {
    console.log(`${this.name} atacou!`);
  }

  damage(damage, effective) {
    if (effective) {
      let damageEffective = damage * 1.3;
      this.health -= damageEffective;
      console.log(`${this.name} sofreu ${damageEffective} de dano efetivo!`);
    } else {
      this.health -= damage;
      console.log(`${this.name} sofreu ${damage} de dano!`);
    }
  }
}

const charmander = new Pokemon("Charmander", 4);
const squirtle = new Pokemon("Squirtle", 5);
const bulbasaur = new Pokemon("Bulbasaur", 6);

console.log(charmander.name);
console.log(squirtle.level);

bulbasaur.attack();

let effective = false;
squirtle.damage(30, effective);
console.log(squirtle.health);

effective = true;
squirtle.damage(30, effective);
console.log(squirtle.health);
