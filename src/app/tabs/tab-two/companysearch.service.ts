import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanysearchService {

  constructor(private router: Router , private http: HttpClient) 
  {

  }

  getCompanyByCompanyNo(CompanyNo) {
    // if (localStorage.getItem('access_token') != null) {
    //   return this.http.get(environment.server + "/dg-api/getCompanyByCnumbWithLogin/" + CompanyNo, { observe: "response" });
    // } else {
      return this.http.get(environment.server + "/dg-api/getCompanyByCnumbWithoutLogin/" + CompanyNo, { observe: "response" });
    // }
  }
}
