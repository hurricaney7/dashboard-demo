import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { AppService } from '../app.service';
import { interval } from 'rxjs';
import { switchMap, catchError, startWith } from 'rxjs/operators';

export interface TransactionTypes {
  account_executive: number;
  daily_turnover: number;
  accumulated_turnover: number;
}

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {
  // UI
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // Data
  displayedColumns: string[] = ['account_executive', 'daily_turnover', 'accumulated_turnover'];
  dataSource = new MatTableDataSource<TransactionTypes>([]);
  

  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.loadData();
  }

  /**
   * Repeatdly load data for every 5 seconds
   */
  loadData() {
    interval(5000).pipe(
      startWith(0),
      switchMap(() => this.appService.fetchData()) 
    ).subscribe(
      data => {
        this.dataSource.data = data;
      },
      err => {
        console.log(err);
      }
    );
  }

}



