import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { BasePageComponent } from '../../base-page/base-page.component';
import { HttpService } from '../../../services/http/http.service';
import { IAppState } from '../../../interfaces/app-state';


@Component({
  selector: 'app-events-detailpage',
  templateUrl: './events-detailpage.component.html',
  styleUrls: ['./events-detailpage.component.scss']
})
export class EventsDetailpageComponent extends BasePageComponent implements OnInit, OnDestroy {
  eventDetails: [];


  constructor(
    store: Store<IAppState>,
    httpSv: HttpService,
    private route: ActivatedRoute,
  ) {
    super(store, httpSv);
    this.pageData = {
      title: 'More event information',
      loaded: true,
    };
    this.eventDetails = []
  }
  eventDescription = ""

  ngOnInit() {
    this.getEventDetails()
    super.ngOnInit();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

  convertBirthDay() {

  }

  getEventDetails() {
    let eventName = this.route.snapshot.queryParams.event


    let url = "https://qub3z-api-test.herokuapp.com/v1/events"
    this.httpSv.getEvents(url).subscribe(
      data => {

        let eventData = data.filter(data => {

          return data.name == eventName

        })

        this.eventDescription = eventData[0].description
        let eventDetails = eventData[0].attendees


        //convert the birthday string

        eventDetails.map(data => {

          let birthDate = data.date_of_birth
          let dateToConvert = new Date(birthDate)
          let convertedDate = dateToConvert.toLocaleDateString()

          data.date_of_birth = convertedDate

        })
        this.eventDetails = eventDetails
      })
  }
}
