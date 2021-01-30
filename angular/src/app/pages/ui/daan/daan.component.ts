import { Component, OnDestroy, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { BasePageComponent } from '../../base-page/base-page.component';
import { HttpService } from '../../../services/http/http.service';
import { IAppState } from '../../../interfaces/app-state';

@Component({
  selector: 'page-daan',
  templateUrl: './daan.component.html',
  styleUrls: ['./daan.component.scss']

})
export class PageDaanComponent extends BasePageComponent implements OnInit, OnDestroy {
  constructor(
    store: Store<IAppState>,
    httpSv: HttpService
  ) {
    super(store, httpSv);

    this.pageData = {
      title: 'Daan',
      loaded: true,
      breadcrumbs: [
        {
          title: 'UI Kit',
          route: 'default-dashboard'
        },
        {
          title: 'Daan'
        }
      ]
    };
  }
  eventData;

  ngOnInit() {

    // this.triggerPostCredentials()
    super.ngOnInit();
  }

    ngOnDestroy() {
    super.ngOnDestroy();
  }


// async  triggerGetEvents(token){
    
//     let url ="https://qub3z-api-test.herokuapp.com/v1/events"
//     await this.httpSv.getEvents(url, token).subscribe(
//       data => {
//         console.log(data)
//         this.eventData = data
        
       
//       }
//     )
//   }
  
  // triggerPostCredentials(){
   
  //   let url ="https://qub3z-api-test.herokuapp.com/v1/auth"
  //   this.httpSv.sendCredentials(url).subscribe(
  //     data => {
      
  //       this.triggerGetEvents(data)
  //     }
  //   )
  // }
}


