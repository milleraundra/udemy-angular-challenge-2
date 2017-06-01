import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GameControlComponent} from './game-control/game-control.component';
import { OddRowComponent } from './odd-row/odd-row.component';
import { EvenRowComponent } from './even-row/even-row.component';

@NgModule({
  declarations: [
    AppComponent,
    GameControlComponent,
    OddRowComponent,
    EvenRowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
