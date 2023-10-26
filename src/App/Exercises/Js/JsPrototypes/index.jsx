export function JsPrototypes() {
  function Person(name) {
    // this to kontekst danej funkcji
    return (this.name = name);
  }
  // nowa globalna metoda (to jest zła praktyka, przykład tylko do tłumaczenia)
  Person.prototype.SayHello = function () {
    console.log(`Hello, I'm ${this.name}`);
  };

  // instancja klasy Person
  const person1 = new Person('Maciej');
  const person2 = new Person('Dojlido');

  person1.SayHello();
  person2.SayHello();

  // array prototype
  Array.prototype.jestemNowaMetoda = function () {
    console.log('tak');
  };

  const myArray = [1, 2, 3];
  myArray.jestemNowaMetoda();

  // context this:

  const person = {
    name: 'Maciej',
    sayHello: function () {
      return console.log(`Moje imię to ${this.name}`);
    },
  };

  person.sayHello();

  const user = {
    name: 'Ktoś',
    sayHello: person.sayHello,
  };

  user.SayHello();

  // bind function do wiązania kontekstu this

  const bindSayHello = person.sayHello.bind(user);
  bindSayHello();

  //arrow function context is not defined (fatal error)
  // const arrowFuntionWithThisContext = () => { return console.log(`Hello ${this && this.name}`); }
  // arrowFuntionWithThisContext();

  const person3 = {
    name: 'Maciej2',
    //this part will fail beacouse of this contxt in arrow function
    // sayHello2: () => {
    //    return console.log(`Moje imie to ${this.name} `);
    // }
  };

  console.log('-------2--------');
  // person3.sayHello2(); //  rezultat to undefined bo this jest zamkniety w wiezieniu funkcji strzalkowej
  console.log('-------2--------');

  //OOP w JS (podejscie obiektowe)
  class UniquePerson {
    constructor(name, age = '65') {
      this.name = name;
      this.age = { ageInsideObject: age };
    }

    //co to - to metoda
    sayHello() {
      return console.log(`Hello, my class name is ${this.name}`);
    }

    //co to - to metoda
    getAge() {
      return console.log(`Hello, my class age is ${this.age.ageInsideObject}`);
    }
  }

  const getClassUniquePerson = new UniquePerson('Nie mam imienia', 50);
  getClassUniquePerson.sayHello(); // Hello, my class name is "Nie mam imienia"
  getClassUniquePerson.getAge(); // Hello, my age is 50

  //call i  apply funkcje wbudowane w JS

  function greetings(greeting) {
    return console.log(`${greeting}  super ${this.name}`);
  }

  const data1 = { name: 'maciej' };
  const data2 = { name: 'dojlido' };

  greetings.call(data1, 'Hi'); // Hi super maciej
  greetings.apply(data2, ['Hello']); // Hi super dojlido

  // const getClassUniquePerson = new UniquePerson('Nie mam imienia', 50);
  getClassUniquePerson.sayHello(); // Hello, my class name is "Nie mam imienia"
  getClassUniquePerson.getAge(); // Hello, my age is 50

  return <div className="js-prototypes">fgfdgfd</div>;
}
