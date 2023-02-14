// Market Place Entity
export default abstract class MPEntity {
  // Properties
  id: number;
  createdAt: Date;
  updatedAt: Date;
  // Constructor
  constructor(json: any) {
    this.id = json.id;
    this.createdAt = json.createdAt || new Date(Date.now());
    this.updatedAt = json.updatedAt || new Date(Date.now()); // TODO: Modify this field when we have true datas
  }
}
