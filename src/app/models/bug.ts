export class Bug {

  constructor(description: string, severity: number, isActive: boolean) {
    this.description = description;
    this.severity = severity;
    this.isActive = isActive;
  }

  description: string = '';
  severity: number = 0;
  isActive: boolean = true;

  fix() {
    this.isActive = false;
  }

  unFix() {
    this.isActive = true;
  }
}
