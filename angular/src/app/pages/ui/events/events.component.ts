import { Component, OnDestroy, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { BasePageComponent } from '../../base-page/base-page.component';
import { HttpService } from '../../../services/http/http.service';
import { IAppState } from '../../../interfaces/app-state';


@Component({
  selector: 'page-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']

})
export class PageEventsComponent extends BasePageComponent implements OnInit, OnDestroy {
  events: [];

  constructor(
    store: Store<IAppState>,
    httpSv: HttpService
  ) {
    super(store, httpSv);

    
    this.pageData = {
      title: 'Events',
      loaded: true,
      breadcrumbs: [
        {
          title: 'UI Kit',
          route: 'default-dashboard'
        },
        {
          title: 'Events'
        }
      ]
    };
    this.events=[];
  }
 
  value ="testvalueeee"
  value1 = [4,7,8]


  ngOnInit() {

    this.triggerGetEvents()
    super.ngOnInit();
  }

    ngOnDestroy() {
    super.ngOnDestroy();
  }


async  triggerGetEvents(){
    
    let url ="https://qub3z-api-test.herokuapp.com/v1/events"
    await this.httpSv.getEvents(url).subscribe(
      data => {
        
data.map(data => {
  // data.end_datetime = data.end_datetime.getDay()

let date = new Date(data.end_datetime)
let date2 =  date.toLocaleDateString()


data.end_datetime = date2

console.log(date2)

      })


console.log(data)
        this.events = data
        
       
      }
    )
  }
  
  // triggerPostCredentials(){
   
  //   let url ="https://qub3z-api-test.herokuapp.com/v1/auth"
  //   this.httpSv.sendCredentials(url).subscribe(
  //     data => {
      
  //       this.triggerGetEvents(data)
  //     }
  //   )
  // }
}


