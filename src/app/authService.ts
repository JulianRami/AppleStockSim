import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:666';



  constructor(private http: HttpClient) {
  }

  getQueries() {
    return this.http.get<any>(`${this.apiUrl}/execute-solana-code`);
  }

  getDatesSolana() {
    return this.http.get<any[]>(`https://api.coincap.io/v2/assets/solana/history?interval=d1`);
  }

  getDatesApple() {
    return this.http.get<any[]>(`https://api.iex.cloud/v1/data/core/intraday_prices/AAPL?range=1mm&token=pk_e15da3175fa649348994e4294b9f2c5d`);
  }
}
