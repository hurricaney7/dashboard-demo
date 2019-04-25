import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DatatableComponent } from './datatable/datatable.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
  MatButtonModule,
  MatTableModule,
  MatPaginatorModule,
} from '@angular/material';
import { AppService } from './app.service';



@NgModule({
  declarations: [
    AppComponent,
    DatatableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
