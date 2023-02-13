import MPEntity from "./MPEntity";

export default abstract class User extends MPEntity {
  // Properties
  firstname: string;
  lastname: string;
  email: string;
  tel: string;
  // Constructor
  constructor(json: any) {
    super(json);
    this.firstname = json.firstname;
    this.lastname = json.lastname;
    this.email = json.email;
    this.tel = json.tel;
  }
}
