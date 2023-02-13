import MPEntity from "./MPEntity";

export default class Shop extends MPEntity {
  // Properties
  name: string;
  url: string;
  // Constructor
  constructor(json: any) {
    super(json);
    this.name = json.name;
    this.url = json.url;
  }
}
