import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FullscreenDbService {

  constructor(private http: HttpClient) {
    this.getConfig();
   }


  getConfig() {
    // now returns an Observable of Config
    return this.http.get('https://gonefullscreen.com/test.php?id=1&key=swag');
  }
}
