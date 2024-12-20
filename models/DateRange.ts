export class DateRange {
  start: Date
  end: Date | null

  constructor(start: Date, end: Date) {
    this.start = start
    this.end = end || null
  }

  toString(): string {
    return `${this.start.toLocaleDateString()} - ${this.end ? this.end.toLocaleDateString() : 'Present'}`
  }
}
