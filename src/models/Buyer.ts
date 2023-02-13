import User from "./User";

export default class Buyer extends User {
  // Properties
  promoPts: number;
  // Constructor
  constructor(json: any) {
    super(json);
    this.promoPts = json.promoPts;
  }
}
