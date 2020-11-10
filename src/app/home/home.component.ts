import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  imagePath = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/10best-cars-group-cropped-1542126037.jpg';
  firstCarPath = 'https://www.mbusa.com/content/dam/mb-nafta/us/myco/my21/a/all-vehicles/2021-A220-SEDAN-AVP-DR.png'
  
  constructor() { }

  ngOnInit(): void {
  }

}
