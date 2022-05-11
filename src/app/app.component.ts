import {Component} from '@angular/core';
import {Services} from "./services/services";
import {Bug} from "./models/bug";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private readonly services: Services = new Services();

  description: string = '';
  severity: number = 0;

  get bugs(): Bug[] {
    return this.services.get();
  }

  getActive(): Bug[] {
    return this.services.get()
      .filter(bug => bug.isActive);
  }

  getInactive(): Bug[] {
    return this.services.get()
      .filter(bug => !bug.isActive);
  }

  fix(bug: Bug) {
    bug.fix();
  }

  unFix(bug: Bug) {
    bug.unFix();
  }

  create(description: string, severity: number) {
    this.services.add(description, severity);
  }
}
