import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {  ActivatedRoute } from '@angular/router';
import { BasePageComponent } from '../../base-page/base-page.component';
import { HttpService } from '../../../services/http/http.service';
import { IAppState } from '../../../interfaces/app-state';

@Component({
  selector: 'app-events-detailpage',
  templateUrl: './events-detailpage.component.html',
  styleUrls: ['./events-detailpage.component.scss']
})
export class EventsDetailpageComponent extends BasePageComponent implements OnInit, OnDestroy {
  

  constructor(
    store: Store<IAppState>,
    httpSv: HttpService,
    private route: ActivatedRoute,
    // private route: Route

  ) {
    super(store, httpSv);
    this.pageData = {
      title: 'EventDetailpage',
      loaded: true,
      // breadcrumbs: [
      //   {
      //     title: 'UI Kit',
      //     route: 'default-dashboard'
      //   },
      //   {
      //     title: 'Events'
      //   }
      // ]
    };
  }
  


  ngOnInit() {
    
    console.log(this.route.snapshot.queryParams.event)

    // this.route.snapshot.params.subscribe(params => {
    //   this.tab = params.type;
    //   this.setHeader();
    // });

    super.ngOnInit();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

}
