import { Component, OnDestroy, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
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
    httpSv: HttpService,
    private router: Router
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
    this.events = [];
  }


  ngOnInit() {

    this.triggerGetEvents()
    super.ngOnInit();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }


  async triggerGetEvents() {

    let url = "https://qub3z-api-test.herokuapp.com/v1/events"
    await this.httpSv.getEvents(url).subscribe(
      data => {

        data.map(data => {
     

          data.end_datetime = this.convertDate(data.end_datetime)
          data.start_datetime = this.convertDate(data.start_datetime)
                

        })


        console.log(data)
        this.events = data


      }
    )
  }

  redirectToDetailsPage(eventName:string){
    this.router.navigate(['/vertical/event-details'], { queryParams: { event: eventName}} );
    console.log(eventName)
  
}

  //Convert the date
  convertDate(dateString: string) {

    let dateToConvert = new Date(dateString)
    let convertedDate = dateToConvert.toLocaleDateString()
    return convertedDate

  }
}







 

 
