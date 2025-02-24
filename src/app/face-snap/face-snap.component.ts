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
  imageURL!: string

  ngOnInit(): void {
    this.title= "Overgeared";
    this.description="La guilde de Grid le forgeron légendaire !";
    this.createdAt= new Date();
    this.snaps = 1;
    this.imageURL = "https://imgs.search.brave.com/_hA1XdhwlBARIKwGAKj3E5vxKfiDZPSh-Sfwd6jB9kk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk1UTmpOR1U0/TlRVdFltVmpNeTAw/WWpSaUxUa3hNV1V0/Tnpaa01ETmlZalpo/Tm1WaVhrRXlYa0Zx/Y0djQC5qcGc"
  }

  onAddSnap(){
    this.snaps++;
  }
}
