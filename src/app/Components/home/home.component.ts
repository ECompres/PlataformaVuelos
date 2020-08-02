import { Component, OnInit } from '@angular/core';
import { VuelosService } from 'src/app/Services/vuelos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private vuelosService:VuelosService
  ) { }

  ngOnInit(): void {
  }

}
