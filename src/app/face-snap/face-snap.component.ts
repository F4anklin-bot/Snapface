import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.css'
})
export class FaceSnapComponent {
  title!: string;
  description!: string;
  createdAt!: Date;
  snaps!: number;
  imageURL!: string;
  snapButtonText!: string;
  userHasSnapped!: boolean;

  ngOnInit(): void {
    this.title= "Overgeared";
    this.description="La guilde de Grid le forgeron légendaire !";
    this.createdAt= new Date();
    this.snaps = 0;
    this.imageURL = "https://imgs.search.brave.com/zze_3PTfNgXR1VTMKfxR9_WiBPvmt85HMTZJdU2F1tQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzkxajJWakg3alNM/LmpwZw"
    this.snapButtonText = "Like";
    this.userHasSnapped =false;
  }

  onSnap(): void {
    if (this.userHasSnapped) {
      this.snaps--;
      this.snapButtonText="Like";
      this.userHasSnapped=false;
    } else {
      this.snaps++;
      this.snapButtonText="Dislike";
      this.userHasSnapped=true;
    }
  }
}
