import { Component } from '@angular/core';
import {AuthService} from "../authService";
import {DatesResponseModel} from "./datesResponse.model";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  datesRespon:DatesResponseModel = new DatesResponseModel();

  constructor(public authService:AuthService) {
  }

  onSubmit() {
    this.authService.getQueries().subscribe((data:DatesResponseModel)=>{
      this.datesRespon = data;
    });
  }

}
