export const OOP = () => {
  // klasa
  class Car {
    speed = 0;
    start() {
      console.log("I'm running at speed of ");
    }
    constructor(speed) {
      this.speed = speed;
    }
  }

  // instancja klasy; operator new tworzy instancję klasy
  const fastCar = new Car(300);
  fastCar.start();
  const averageCar = new Car(160);
  averageCar.start();

  class StaticCar {
    static speed = 0;
    static start() {
      console.log("I'm running at speed of ", this.speed);
    }
    constructor(speed) {
      this.speed = speed;
    }
  }

  // jeśli wszystkie metody i pola są statyczne to mówi się, że klasa też jest statyczna

  StaticCar.speed = 4000;
  StaticCar.start();

  // operator instanceof
  console.log('fastCar instanceof Car: ', fastCar instanceof Car);
  class NotACar {}
  const otherCar = new NotACar();
  console.log('fastCar instanceof NotACar: ', fastCar instanceof NotACar);
  if (otherCar instanceof Car) {
    otherCar.start();
  }

  // Polimorfizm - zdolność różnych klas do reagowania/wykonywania metody o tej samej nazwie w różny sposób

  class AnimalPoli {
    speak() {
      console.log('Animal makes a noise');
      // throw new Error('not implemented');
    }
  }

  class DogPoli extends AnimalPoli {
    speak() {
      console.log('Dog barks');
    }
  }
  const dogPoli = new DogPoli();

  class CatPoli extends AnimalPoli {
    speak() {
      console.log('Cat mewos');
    }
  }
  const catPoli = new CatPoli();

  // dogPoli.speak();
  // catPoli.speak();
  const animals = [dogPoli, catPoli, fastCar];
  animals.forEach((animal) => {
    if (animal instanceof AnimalPoli) {
      animal.speak();
    }
  });

  // dziedziczenie cd
  class AnimalParent {
    constructor(name) {
      this.name = name;
    }
    getName() {
      return this.name;
    }
  }
  const animalP = new AnimalParent('Animal');
  console.log(animalP.getName);
  // hermetyzacja
  class AnimalPrivate {
    // prywatne właściwości (property)
    #counter = 0;
    construktor(name) {
      this.name = name;
    }
    getName() {
      this.#counter += 1;
      console.log(`Name is: ${this.name}, was called ${this.#counter} times.`);
    }
  }
  const privateAnimal = new AnimalPrivate('Reksio');
  privateAnimal.getName();
  privateAnimal.getName();
  privateAnimal.getName();

  // Kompozycja - tworzenie bardziej złożonych obiektów poprzez składanie ich z innych komponentów/obiektów

  // //przykład z dziedziczeniem

  class AnimalInherit {
    speak() {
      console.log('Animal makes a sound');
    }
  }
  class DogInherit extends AnimalInherit {
    speak() {
      console.log('Dogs barks');
    }
  }
  const dogInherit = new DogInherit();
  dogInherit.speak();

  // // to samo poprzez kompozycję

  class SpeakerComposition {
    constructor(sound) {
      this.sound = sound;
    }
    makeSound() {
      console.log(this.sound);
    }
  }
  class DogComposition {
    constructor() {
      this.speaker = new SpeakerComposition('hał');
    }
    bark() {
      this.speaker.makeSound();
    }
  }
  const dogComposition = new DogComposition();
  dogComposition.bark();
  console.log(dogComposition, dogInherit);

  // Zalety dziedziczenia:
  //    Reużywalność: Możemy dziedziczyć istniejący kod i zachowanie.
  //    Hierarchia: Pomaga tworzyć struktury klas na podstawie wspólnych cech.

  // Zalety kompozycji:
  //    Modularność: Komponenty są niezależne, co ułatwia zarządzanie i utrzymanie.
  //    Elastyczność: Możemy zmieniać i modyfikować komponenty bez wpływu na inne.
  //    Unikanie pułapek dziedziczenia: Kompozycja unika problemów związanych z głębokimi hierarchiami.

  // Kiedy używać dziedziczenia, a kiedy kompozycji
  //    Dziedziczenie: Wtedy, gdy klasy naprawdę mają relację typu nadrzędny-podrzędny, a podrzędna klasa może dziedziczyć i rozszerzać zachowanie klasy nadrzędnej.
  //    Kompozycja: Wtedy, gdy chcemy tworzyć obiekty poprzez łączenie komponentów i uniknąć związanych z dziedziczeniem pułapek.

  // Pułapki i ograniczenia związane z kompozycją:
  //    Wiele instancji: Jeśli mamy wiele instancji obiektów komponujących te same komponenty, może to prowadzić do nadmiaru pamięci.
  //    Trudniejsze śledzenie: W porównaniu do hierarchii dziedziczenia, trudniej może być zrozumieć, które komponenty są składane w obiekcie.

  return (
    <div>
      <h1>Klasy, OOP</h1>
      <h2>Paradygmaty programowania</h2>
      <p>programowanie strukturalne, funkcjonalne i obiektowe</p>
      <h2>Object Oriented Programming</h2>
      <p>
        cechy OOP: abstrakcja, hermetyzacja, polimorfizm, dziedziczenie,
        kompozycja
      </p>
      <h2>przykłądy powyżej</h2>
    </div>
  );
};
