import { calendarDemoData } from '../../content'
import ScreenshotSlot from '../ScreenshotSlot'
import { Block, Stepper } from './shared'

const { profile: PROFILE, method: METHOD, colors: COLORS, changes: CHANGES, before: BEFORE, after: AFTER } =
  calendarDemoData

function CalendarDemo() {
  return (
    <div className="demo calendar-demo">
      <Block title="Executive profile">
        <dl className="profile-card">
          {PROFILE.map((row) => (
            <div key={row.label}>
              <dt>{row.label}</dt>
              <dd>{row.value}</dd>
            </div>
          ))}
        </dl>
      </Block>

      <Block title="My approach">
        <Stepper steps={METHOD} />
      </Block>

      <Block title="Color system" note="Every event is color-coded by category so priorities are visible at a glance.">
        <ul className="color-key">
          {COLORS.map((c) => (
            <li key={c.name}>
              <span className="color-dot" style={{ background: c.color }} />
              {c.name}
            </li>
          ))}
        </ul>
      </Block>

      <Block title="Monday, before and after">
        <div className="calendar-columns">
          <div className="cs-card">
            <p className="demo-caption">Before — overlapping commitments</p>
            <ul className="schedule-list">
              {BEFORE.map((row) => (
                <li key={`${row.time}-${row.item}`} className={row.flag ? 'flagged' : undefined}>
                  <span className="schedule-time">{row.time}</span>
                  {row.item}
                  {row.flag && <span className="schedule-flag">{row.flag}</span>}
                </li>
              ))}
            </ul>
          </div>
          <div className="cs-card">
            <p className="demo-caption">After — no overlaps</p>
            <ul className="schedule-list">
              {AFTER.map((row) => (
                <li
                  key={`${row.time}-${row.item}`}
                  className={row.tag ? 'highlighted' : undefined}
                  style={{ borderLeft: `5px solid ${row.color}` }}
                >
                  <span className="schedule-time">{row.time}</span>
                  {row.item}
                  {row.tag && <span className="schedule-flag good">{row.tag}</span>}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Block>

      <Block title="The changes I made, day by day">
        <div className="day-grid">
          {CHANGES.map((day) => (
            <div className="cs-card day-card" key={day.day}>
              <h5>{day.day}</h5>
              <ul>
                {day.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Block>

      <Block title="In Google Calendar" note="Swipe or use the arrows: before, during, and after.">
        <ScreenshotSlot
          id="calendar"
          label="Calendar screenshot"
          carousel
          captions={[
            'Before — overlapping week',
            'During — editing an event',
            'During — applying a color label',
            'During — Monday, rescheduled',
            'After — organized, color-coded week',
          ]}
        />
      </Block>
    </div>
  )
}

export default CalendarDemo
