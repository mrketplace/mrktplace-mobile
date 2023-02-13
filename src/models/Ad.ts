import MPEntity from "./MPEntity";

export default class Ad extends MPEntity {
  // Properties
  title: string;
  summary: string;
  content: string;
  // Constructor
  constructor(json: any) {
    super(json);
    this.title = json.title;
    this.summary = json.summary;
    this.content = json.content;
  }
}
