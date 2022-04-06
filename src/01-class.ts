const date = new Date()
const date2 = new Date(1993,1,12)

date.getHours()
date2.getHours()

console.log({
  date, date2
})

export class MyDate {
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year
    this.month = month
    this.day = day
  }
}

const myDate = new MyDate(2021,3,13)
console.log({ myDate })
