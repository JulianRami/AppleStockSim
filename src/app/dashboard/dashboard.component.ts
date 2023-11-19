import { Component } from '@angular/core';
import {AuthService} from "../authService";
import {DatesResponseModel} from "./datesResponse.model";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  datesRespon:DatesResponseModel = new DatesResponseModel();

  constructor(public authService:AuthService, public toast:ToastrService ) {
  }

  onSubmit() {
    this.authService.getQueries().subscribe(
      (data: any) => {
        // Manejo exitoso de la respuesta
        this.toast.success("Se ha comprado exitosamente una acción de Apple", "Compra Exitosa");

        // Puedes trabajar directamente con los datos aquí si no necesitas almacenarlos en una propiedad de clase.
        // Por ejemplo, puedes llamar a una función para procesar los datos.
        this.processData(data);
      },
      (error) => {
        // Manejo de errores
        console.error("Error al realizar la compra:", error);
        this.toast.error("Ocurrió un error al realizar la compra", "Error");
      }
    );
  }

  private processData(data: any): void {
    // Puedes realizar operaciones adicionales con los datos aquí según tus necesidades.
    this.datesRespon = data;
  }

}
