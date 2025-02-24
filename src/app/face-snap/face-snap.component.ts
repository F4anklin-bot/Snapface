import { FaceSnap } from './../models/face-snap';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.css'
})
export class FaceSnapComponent implements OnInit{
  @Input() faceSnap!: FaceSnap;

  snapButtonText!: string;
  userHasSnapped!: boolean;

  ngOnInit(): void {
    this.snapButtonText = "Like";
    this.userHasSnapped =false;
  }

  onSnap(): void {
    if (this.userHasSnapped) {
      this.faceSnap.removeSnap();
      this.snapButtonText="Like";
      this.userHasSnapped=false;
    } else {
      this.faceSnap.addSnap();
      this.snapButtonText="Dislike";
      this.userHasSnapped=true;
    }
  }
}
