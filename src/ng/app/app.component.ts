import { Component } from '@angular/core';
import { UpgradeModule } from "@angular/upgrade/static"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular With Angularjs  Hybrid App';

  ngOnInit() {
    this.upgrade.bootstrap(document.body, ['phonecatApp'], { strictDi: true });
  }

  constructor(private upgrade: UpgradeModule) { }
}
