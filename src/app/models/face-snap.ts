export class FaceSnap  {
  constructor(public title: string,
    public description: string,
    public imageURL : string,
    public createdAt : Date,
    public snaps : number, ){}



    addSnap(): void {
      this.snaps++;
    }
    removeSnap(): void {
      this.snaps--;
    }
}
