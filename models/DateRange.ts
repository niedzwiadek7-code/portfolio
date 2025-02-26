export class DateRange {
  start: Date
  end: Date | null

  constructor(start: Date, end: Date | null) {
    this.start = start
    this.end = end || null
  }

  static createFromObject(
    obj: { start: Date, end: Date | null }
  ): DateRange {
    return new DateRange(
      new Date(obj.start),
      obj.end ? new Date(obj.end) : null
    )
  }

  toString(): string {
    return `${this.start.toLocaleDateString()} - ${this.end ? this.end.toLocaleDateString() : 'Present'}`
  }
}
