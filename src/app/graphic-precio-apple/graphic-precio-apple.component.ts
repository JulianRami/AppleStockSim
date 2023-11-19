import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Color, NgxChartsModule} from '@swimlane/ngx-charts';
import {AuthService} from "../authService";

@Component({
  selector: 'app-graphic-precio-apple',
  templateUrl: './graphic-precio-apple.component.html',
  styleUrls: ['./graphic-precio-apple.component.css']
})
export class GraphicPrecioAppleComponent {
  // @ts-ignore
  multi: { name: any; value: any }[];
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
    group: 'myGroup'
  };

  constructor(public authService: AuthService) {
    this.load();
    // @ts-ignore
    Object.assign(this, { multi: this.multi });
  }

  private load() {
    this.authService.getDatesApple().subscribe(
      (response: any) => {
        if (response && Array.isArray(response)) {
          // Agrupar por fecha
          const groupedData = response.reduce((groups, item) => {
            const date = item.date;
            if (!groups[date]) {
              groups[date] = [];
            }
            groups[date].push(item);
            return groups;
          }, {});

          // Obtener la última entrada para cada fecha
          const lastEntryForEachDate = Object.keys(groupedData).map(date => {
            const entries = groupedData[date];
            const lastEntry = entries[entries.length - 1];

            // Asegúrate de manejar valores nulos según tus necesidades
            const price = lastEntry ? +lastEntry.average || 0 : 0;

            return {
              date: lastEntry.date,
              price: price
            };
          });
          // Obtener las últimas 7 entradas
          const last7Data = lastEntryForEachDate.slice(-7);

          this.multi = [{
            name: 'Apple Prices',
            // @ts-ignore
            series: last7Data.map(entry => ({ name: this.formatDate(entry.date), value: entry.price }))
          }];
        } else {
          console.error('La respuesta no es válida:', response);
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
