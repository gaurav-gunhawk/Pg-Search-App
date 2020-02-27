import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public userIsAuthenticated = false;

  constructor(private router: Router , 
    private _http: HttpClient) { 
    
  }

  loginver(data){
    console.log("data1",data);
    
    return this._http.post(environment.server + '/dg-login/login', {data},
    {      observe: 'response'  });
  }

  logout(){
    this.userIsAuthenticated = false;
  }
}
