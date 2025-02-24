import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap';

@Component({
  selector: 'app-root',
  imports: [
    FaceSnapComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap;
  secondSnap!: FaceSnap;
  lastSnap!: FaceSnap;

  ngOnInit() : void {
    this.mySnap = new FaceSnap(
      "Overgeared",
      "La guilde de Grid le forgeron légendaire !",
      "https://imgs.search.brave.com/zze_3PTfNgXR1VTMKfxR9_WiBPvmt85HMTZJdU2F1tQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzkxajJWakg3alNM/LmpwZw",
      new Date(),
      0
    );

    this.secondSnap= new FaceSnap(
      "One Piece",
      "Le roi des pirates, ce sera moi!",
      "https://imgs.search.brave.com/_hA1XdhwlBARIKwGAKj3E5vxKfiDZPSh-Sfwd6jB9kk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk1UTmpOR1U0/TlRVdFltVmpNeTAw/WWpSaUxUa3hNV1V0/Tnpaa01ETmlZalpo/Tm1WaVhrRXlYa0Zx/Y0djQC5qcGc",
      new Date(),
      0
    );


this.lastSnap = new FaceSnap(
  "Lecteur Omniscient",
  "Sauver le monde des constellations et de leurs désirs",
  "https://imgs.search.brave.com/YEYtGavITblLS7fNkIMGxwp1nTr-GNTY4htX4cH-OlM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFHamV6NEVoREwu/anBn",
  new Date(),
  0
);

  }
}
