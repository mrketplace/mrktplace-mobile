import User from "./User";

export default class Seller extends User {
  // Properties
  role: string;
  // Constructor
  constructor(json: any) {
    super(json);
    this.role = json.role;
  }
}
