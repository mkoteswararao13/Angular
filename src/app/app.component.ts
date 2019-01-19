import { Component } from '@angular/core';
import{HttpClient, HttpParams,HttpHeaders} from '@angular/common/http'
import { from } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'modalPopup';

  constructor( private http: HttpClient)
  {

  }
  updateProduct()
  {
     p:HttpParams;
     const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
     // withCredentials: true 
    };
    this.http.put("http://localhost:49998/api/values/updateProduct/1",{},httpOptions).pipe().subscribe(
      (resp:any)=>{
        console.log(resp);
      },
      (error:any)=>{
        console.log(error);
      }
    )
    
    this.http.get("http://localhost/ProductsApi/api/Values/GetProduct",{}).pipe().subscribe(
      (resp:any)=>{
        console.log(resp);
      },
      (error:any)=>{
        console.log(error);
      }
    )
  }
}

