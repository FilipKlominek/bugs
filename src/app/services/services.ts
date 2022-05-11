import {Bug} from "../models/bug";

export class Services {
  private bugs: Bug[] = [
    new Bug('I am unable to login', 2, true),
    new Bug('The application freezes randomly', 1, true),
    new Bug('The login page has an incorrect icon', 0, true),
    new Bug('I am unable to register', 2, false)
  ];

  get(): Bug[] {
    return this.bugs;
  }

  add(description: string, severity: number) {
    this.bugs.push(new Bug(description, severity, true));
  }
}
