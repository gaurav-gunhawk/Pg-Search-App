import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  
  ngOnInit()
  {
    this.router.navigateByUrl('/tabs/tab-two');
  }

  

  constructor(private router: Router) { }

  

}
