export class BookModel {
  public id: number;
  public name: string;
  
  // constructor in case the client would want to add new books to the database:
  public constructor(book: BookModel){ // here we use Copy-Constructor* concept 
    this.id = book.id;
    this.name = book.name;
  }
}

// * In object-oriented programming, a copy constructor is a special type of constructor that creates a new object by copying the properties of an existing object. It is used to create a new object that is a copy of an existing object, with the same properties and values.