import MPEntity from "./MPEntity";

export default class Product extends MPEntity {
  // Properties
  name: string;
  description: string;
  img: string;
  // Constructor
  constructor(json: any) {
    super(json);
    this.name = json.name;
    this.description = json.description;
    this.img = json.img;
  }
}
