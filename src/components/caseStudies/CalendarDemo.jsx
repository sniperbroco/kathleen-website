import { calendarDemoData } from '../../content'

const { before: BEFORE, after: AFTER, quote: QUOTE } = calendarDemoData

function CalendarDemo() {
  return (
    <div className="demo calendar-demo">
      <div className="calendar-columns">
        <div>
          <p className="demo-caption">Before — no prep time, no lunch</p>
          <ul className="schedule-list">
            {BEFORE.map((slot) => (
              <li key={slot.time} className={slot.flag ? 'flagged' : ''}>
                <span className="schedule-time">{slot.time}</span>
                <span>{slot.item}</span>
                {slot.flag && <span className="schedule-flag">back-to-back, no buffer</span>}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="demo-caption">After — reorganized</p>
          <ul className="schedule-list">
            {AFTER.map((slot) => (
              <li key={slot.time} className={slot.added || slot.moved ? 'highlighted' : ''}>
                <span className="schedule-time">{slot.time}</span>
                <span>{slot.item}</span>
                {slot.added && <span className="schedule-flag good">added</span>}
                {slot.moved && <span className="schedule-flag good">moved</span>}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <blockquote className="demo-quote">&ldquo;{QUOTE}&rdquo;</blockquote>
    </div>
  )
}

export default CalendarDemo
