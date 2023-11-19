import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Color, NgxChartsModule} from '@swimlane/ngx-charts';
import {AuthService} from "../authService";

@Component({
  selector: 'app-graphic-precio-solana',
  templateUrl: './graphic-precio-solana.component.html',
  styleUrls: ['./graphic-precio-solana.component.css']
})
export class GraphicPrecioSolanaComponent {
  // @ts-ignore
  multi: [number, number];
  view: [number, number] = [700, 300];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Fecha';
  yAxisLabel: string = 'Precio (USD)';
  timeline: boolean = true;

  colorScheme: Color = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
    selectable: true,
    name: 'coolColorScheme',
    // @ts-ignore
    group: 'myGroup' // ajusta según tus necesidades
  };

  constructor(public authService: AuthService) {
    this.load();
    // @ts-ignore
    Object.assign(this, { multi: this.multi });
  }

  private load() {
    this.authService.getDatesSolana().subscribe(
      (response: any) => {
        if (response && Array.isArray(response.data)) {
          // @ts-ignore
          const last7Data = response.data.slice(-7).map((item) => ({
            name: this.formatDate(item.date),
            value: +item.priceUsd
          }));

          // @ts-ignore
          this.multi = [{
            name: 'Solana Prices',
            series: last7Data
          }];

          console.log(this.multi);
        } else {
          console.error('La respuesta no contiene un array de datos:', response);
        }
      },
      (error) => {
        console.error('Error al cargar datos:', error);
      }
    );
  }
  private formatDate(dateString: string): string {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');

    return `${day}/${month}/${year}`;
  }


  // @ts-ignore
  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  // @ts-ignore
  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  // @ts-ignore
  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
