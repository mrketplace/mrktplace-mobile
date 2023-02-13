import MPEntity from "./MPEntity";

export default class Cart extends MPEntity {
  // Properties
  name: string;
  maxCapacity: number;
  // Constructor
  constructor(json: any) {
    super(json);
    this.name = json.name;
    this.maxCapacity = json.maxCapacity;
  }
}
