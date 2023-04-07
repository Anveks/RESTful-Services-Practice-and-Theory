class ErrorModel {

  public constructor(public status: number, public message: string) {
    // nothing here
  }

  // public status: number;
  // public message: string;

  // public constructor(err: ErrorModel){
  //   this.status = err.status;
  //   this.message = err.message;
  // }
}

export default ErrorModel;