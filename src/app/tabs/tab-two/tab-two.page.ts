import { Component, OnInit} from '@angular/core';
import {  CompanysearchService } from '../tab-two/companysearch.service';
import { ServiceforformatService } from './serviceforformat.service';

@Component({
  selector: 'app-tab-two',
  templateUrl: './tab-two.page.html',
  styleUrls: ['./tab-two.page.scss'],
})
export class TabTwoPage implements OnInit {

  // rows = [
  //   {
  //     "name": "Ethel Price",
  //     "gender": "female",
  //     "age": 22
  //   },
  //   {
  //     "name": "John Vick",
  //     "gender": "male",
  //     "age": 55
  //   },
  //   {
  //     "name": "Beryl Rice",
  //     "gender": "female",
  //     "age": 45
  //   }
  // ];

  tablestyle = 'bootstrap'; 

  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor(private comapnySearch: CompanysearchService ,
              private serviceforformat: ServiceforformatService) {}

  CompanyNumberSearch;

  companyDetail:any;

  showDataDetail: boolean = false;


  ngOnInit() { }

  onData(CompanyNumber){
    this.CompanyNumberSearch = CompanyNumber.value;
    console.log("cccc",this.CompanyNumberSearch);
    
    this.comapnySearch.getCompanyByCompanyNo(this.CompanyNumberSearch).subscribe(
      data =>{
        if(data!== undefined){
          this.showDataDetail = true;
          this.companyDetail = data.body;
          console.log("data",this.companyDetail);         
        }        
      }
    );
  }

  chooseTypeClicked: boolean = true;

  onShowHide()
  {
      this.chooseTypeClicked = !this.chooseTypeClicked;
  }

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  companyAddress(address) {
    if (address === undefined) {
      return address;
    } else if (address === null) {
      return address;
    } else {
      // return this.formatDateService.companyAddress(address);
      return this.serviceforformat.formatDateService(address)
    }
  }
  
  



  
}
