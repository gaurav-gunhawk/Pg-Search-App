import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceforformatService {

  constructor() { }

  formatDateService(address){
    let str = "";
    if (address.AddressLine1.length > 0 && address.AddressLine1 !== "Not Provided"){
      str += address.AddressLine1.toLowerCase() + ", ";
    }else if(address.AddressLine1 === "Not Provided"){
      str += address.AddressLine1.toLowerCase();
    }
    if (address.AddressLine2.length > 0)
      str += address.AddressLine2.toLowerCase() + ", ";
    if (address.PostTown.length > 0)
      str += address.PostTown.toLowerCase() + ", ";
    if (address.County.length > 0) str += address.County.toLowerCase() + ", ";
    if (address.Country.length > 0) str += address.Country.toLowerCase() + ", ";
    if (address.PostCode.length > 0) str += address.PostCode.toUpperCase() + "";

    // if ( str.trim().charAt( str.trim().length - 1 ) === "," )
    // 	return str.trim().substring( 0, str.trim().length - 1 );

    var splitStr = str.split(" ");
    for (var i = 0; i < splitStr.length; i++) {
      // You do not need to check if i is larger than splitStr length, as your for does that for you
      // Assign it back to the array
      splitStr[i] =
        splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    // Directly return the joined string
    return splitStr.join(" ");
  }
}
