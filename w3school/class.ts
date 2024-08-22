// Members: Types

// The members of a class (properties & methods) are typed using type annotations, similar to variables.
// Example
class Person {
  // constructor berfungsi untuk ininisialisasi properti
  name: string
  constructor( name: string) {
    this.name = name
  }
}

const person = new Person("Dea");

console.log(person)

// Members: Visibility

// Class members also be given special modifiers which affect visibility.

// There are three main visibility modifiers in TypeScript.

//     public - (default) allows access to the class member from anywhere
//     private - only allows access to the class member from within the class
//     protected - allows access to the class member from itself and any classes that inherit it, which is covered in the inheritance section below

// Example
class Person2 {
  private name: string;

  public constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

const person2 = new Person2("Jane");
console.log(person2.getName()); // person.name isn't accessible from outside the class since it's private

// Parameter Properties

// TypeScript provides a convenient way to define class members in the constructor, by adding a visibility modifiers to the parameter.
// Example
class Person3 {
  // name is a private member variable
  public constructor(private name: string) {}

  public getName(): string {
    return this.name;
  }
}

const person3 = new Person3("Jane");
console.log(person3.getName());

// Inheritance: Implements

// Interfaces (covered here) can be used to define the type a class must follow through the implements keyword.
// Example
interface Shape {
  getArea: () => number;
}

class Rectangle implements Shape {
  public constructor(protected readonly width: number, protected readonly height: number) {}

  public getArea(): number {
    return this.width * this.height;
  }
}

// Di TypeScript, implements adalah kata kunci yang digunakan untuk menunjukkan bahwa sebuah kelas harus mematuhi kontrak yang ditentukan oleh satu atau lebih interface. Dengan menggunakan implements, TypeScript memastikan bahwa kelas yang mengimplementasikan antarmuka (interface) tersebut memiliki semua properti dan metode yang didefinisikan oleh antarmuka.
// Apa itu Interface?

// Sebelum membahas implements, penting untuk memahami apa itu interface. Interface di TypeScript adalah sebuah kontrak atau blueprint yang mendefinisikan properti dan metode tanpa memberikan implementasi. Interface digunakan untuk menentukan bentuk objek atau kelas, yang kemudian dapat diimplementasikan oleh kelas tersebut.
// Contoh Penggunaan implements

// typescript

// Definisi interface
interface Animal {
  name: string;
  sound(): void;
}

// Kelas Dog mengimplementasikan interface Animal
class Dog implements Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  sound(): void {
    console.log("Bark!");
  }
}

const dog = new Dog("Rex");
dog.sound(); // Output: Bark!

// Penjelasan

//     Interface Animal:
//         Interface Animal mendefinisikan sebuah kontrak yang menyatakan bahwa objek yang mematuhi interface ini harus memiliki properti name dengan tipe string dan metode sound() yang tidak mengembalikan nilai (void).

//     Kelas Dog Mengimplementasikan Interface Animal:
//         Kelas Dog menggunakan kata kunci implements untuk menyatakan bahwa kelas ini akan mematuhi kontrak yang ditentukan oleh Animal.
//         TypeScript memastikan bahwa Dog memiliki properti name dan metode sound(), sesuai dengan yang didefinisikan oleh Animal.

//     Implementasi Metode:
//         Kelas Dog memberikan implementasi konkret untuk metode sound(). Dalam hal ini, metode tersebut menampilkan string "Bark!".

// Multiple Interfaces

// Sebuah kelas juga dapat mengimplementasikan lebih dari satu interface. Ini dilakukan dengan memisahkan nama-nama interface dengan tanda koma.

// typescript

interface Animal {
  name: string;
  sound(): void;
}

interface Pet {
  play(): void;
}

class Dog2 implements Animal, Pet {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  sound(): void {
    console.log("Bark!");
  }

  play(): void {
    console.log(`${this.name} is playing.`);
  }
}

const dog2 = new Dog2("Buddy");
dog2.sound(); // Output: Bark!
dog2.play();  // Output: Buddy is playing.

// Keuntungan Menggunakan implements

//     Type Safety: Dengan implements, TypeScript memastikan bahwa kelas memiliki semua properti dan metode yang didefinisikan oleh interface. Ini membantu mencegah kesalahan runtime.

//     Keterbacaan dan Organisasi: Interface membantu dalam mendokumentasikan dan mengorganisir kode, membuatnya lebih mudah untuk dipahami dan dikelola.

//     Reusable Contracts: Interface memungkinkan Anda untuk mendefinisikan kontrak yang dapat digunakan kembali oleh berbagai kelas, sehingga meningkatkan modularitas kode.

// Kesimpulan

// Kata kunci implements di TypeScript digunakan untuk memastikan bahwa sebuah kelas mematuhi kontrak yang ditentukan oleh satu atau lebih interface. Ini membantu menjaga integritas struktur kelas, memastikan bahwa semua properti dan metode yang dibutuhkan oleh interface disediakan oleh kelas tersebut, dan meningkatkan keamanan tipe dalam aplikasi.


// Inheritance: Extends

// Classes can extend each other through the extends keyword. A class can only extends one other class.
// Example
interface Shape {
  getArea: () => number;
}

class Rectangle2 implements Shape {
  public constructor(protected readonly width: number, protected readonly height: number) {}

  public getArea(): number {
    return this.width * this.height;
  }
}

class Square extends Rectangle2 {
  public constructor(width: number) {
    super(width, width);
  }

  // getArea gets inherited from Rectangle
}

// Override
// ubah toString dari Rectangle menjadi Square

// When a class extends another class, it can replace the members of the parent class with the same name.

// Newer versions of TypeScript allow explicitly marking this with the override keyword.
// Example
interface Shape {
  getArea: () => number;
}

class Rectangle3 implements Shape {
  // using protected for these members allows access from classes that extend from this class, such as Square
  public constructor(protected readonly width: number, protected readonly height: number) {}

  public getArea(): number {
    return this.width * this.height;
  }

  public toString(): string {
    return `Rectangle[width=${this.width}, height=${this.height}]`;
  }
}

class Square3 extends Rectangle3 {
  public constructor(width: number) {
    super(width, width);
  }

  // this toString replaces the toString from Rectangle
  public override toString(): string {
    return `Square[width=${this.width}]`;
  }
}

const mySq = new Square3(10);
console.log(mySq.toString()); // Output: Square[width=10]

// Abstract Classes

// Classes can be written in a way that allows them to be used as a base class for other classes without having to implement all the members. This is done by using the abstract keyword. Members that are left unimplemented also use the abstract keyword.
// Example

abstract class Polygon {
    public abstract getArea(): number;
  
    public toString(): string {
      return `Polygon[area=${this.getArea()}]`;
    }
  }
  
  class Rectangle4 extends Polygon {
    public constructor(protected readonly width: number, protected readonly height: number) {
      super();
    }
  
    public getArea(): number {
      return this.width * this.height;
    }
  }
  
  const myRect = new Rectangle4(10,20);
  
  console.log(myRect.getArea());


//   Kesimpulan

//     Kelas Abstrak: Digunakan sebagai basis untuk kelas lain dan tidak dapat diinstansiasi langsung.
//     Metode Abstrak: Dideklarasikan tanpa implementasi di kelas abstrak dan harus diimplementasikan di kelas turunan.
//     Metode dengan Implementasi: Kelas abstrak dapat memiliki metode dengan implementasi yang dapat digunakan langsung oleh kelas turunan.

// Kelas abstrak membantu mendefinisikan struktur dasar dan kontrak untuk kelas-kelas turunan, mempromosikan reuse kode, dan memastikan bahwa kelas turunan mengikuti kontrak yang ditetapkan.