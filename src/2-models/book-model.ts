import Joi from "joi";

export class BookModel {
  public id: number;
  public name: string;
  
  // constructor in case the client would want to add new books to the database:
  public constructor(book: BookModel){ // here we use Copy-Constructor* concept 
    this.id = book.id;
    this.name = book.name;
  }

  private static postValidationSchema = Joi.object({
    id: Joi.forbidden(),
    name: Joi.string().required().min(2).max(50),
  });

  public validatePost() {
    const result = BookModel.postValidationSchema.validate(this, { abortEarly: false }); // aabortEarly means not to stop checking after the first err found; helps to see all the validation errors
    return result.error?.message;
  }
}

// * In object-oriented programming, a copy constructor is a special type of constructor that creates a new object by copying the properties of an existing object. It is used to create a new object that is a copy of an existing object, with the same properties and values.