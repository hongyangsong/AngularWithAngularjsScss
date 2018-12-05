import { Component, OnInit, Inject } from '@angular/core';
import { PHONE_SERVICE } from "src/ng/app/core/phone.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(@Inject(PHONE_SERVICE) private phoneService: any) { }
  phones: any[] = [];
  ngOnInit() {
    this.phones = this.phoneService.query();
  }

}
