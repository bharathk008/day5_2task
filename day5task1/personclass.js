class Person {
    constructor(name, age, email) {
      this.name = name;
      this.age = age;
      this.email = email;
    }
  
    // Getter method to retrieve the full name
    getFullName() {
      return this.name;
    }
  
    // Method to display person's details
    displayDetails() {
      console.log(`Name: ${this.name}`);
      console.log(`Age: ${this.age}`);
      console.log(`Email: ${this.email}`);
    }
  }
  
  const person1 = new Person("xyzxyz", 0, "fakemail@example.com");
  person1.displayDetails(); 
  