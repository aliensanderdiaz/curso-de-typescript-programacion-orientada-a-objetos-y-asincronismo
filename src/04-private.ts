export class MyDate {
  public year: number;
  public month: number;
  public day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year
    this.month = month
    this.day = day
  }

  public printFormat(): string {
    return `${ this.day }/${ this.month }/${ this.year }`
  }

  public add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this.day += amount
    }
    if (type === 'months') {
      this.month += amount
    }
    if (type === 'years') {
      this.year += amount
    }
  }
}

const myDate = new MyDate(2021,3,13)
console.log({ myDate: myDate.printFormat() })
myDate.add(10, 'days')
console.log({ myDate: myDate.printFormat() })
