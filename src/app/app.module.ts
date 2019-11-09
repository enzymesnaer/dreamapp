import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ExformsComponent } from './exforms/exforms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ExtypiService } from './extypi.service';
import { ExfirebasecrudComponent } from './exfirebasecrud/exfirebasecrud.component';
import { ExdatabindingComponent } from './exdatabinding/exdatabinding.component';
import { ExdirectivesComponent } from './exdirectives/exdirectives.component';


@NgModule({
  declarations: [
    AppComponent,
    ExformsComponent,
    ExfirebasecrudComponent,
    ExdatabindingComponent,
    ExdirectivesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ExtypiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
