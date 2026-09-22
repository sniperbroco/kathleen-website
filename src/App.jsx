import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import WorkOverview from './components/WorkOverview'
import CaseStudy from './components/CaseStudy'
import Tools from './components/Tools'
import Contact from './components/Contact'
import Footer from './components/Footer'
import InboxDemo from './components/caseStudies/InboxDemo'
import CalendarDemo from './components/caseStudies/CalendarDemo'
import TravelDemo from './components/caseStudies/TravelDemo'
import FileOrgDemo from './components/caseStudies/FileOrgDemo'
import TaskDemo from './components/caseStudies/TaskDemo'
import SupportDemo from './components/caseStudies/SupportDemo'
import SopDemo from './components/caseStudies/SopDemo'
import AutomationDemo from './components/caseStudies/AutomationDemo'
import { caseStudies } from './content'
import './App.css'

const ACCENTS = ['coral', 'gold', 'sage']

const DEMOS = {
  inbox: InboxDemo,
  calendar: CalendarDemo,
  travel: TravelDemo,
  files: FileOrgDemo,
  tasks: TaskDemo,
  support: SupportDemo,
  sop: SopDemo,
  automation: AutomationDemo,
}

function App() {
  const items = caseStudies.map((cs, i) => ({
    ...cs,
    accent: ACCENTS[i % 3],
    Demo: DEMOS[cs.id],
  }))

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />

        <section id="work" className="work">
          <h2 className="section-label">Case Studies</h2>
          <p className="work-intro">
            Fictional scenarios built to demonstrate how I&apos;d handle real
            executive-support work — the problem, what I did, the result, and
            the tools involved.
          </p>

          <WorkOverview items={items} />

          <div className="case-study-list">
            {items.map((cs, i) => (
              <CaseStudy
                key={cs.id}
                id={cs.id}
                number={cs.number}
                icon={cs.icon}
                title={cs.title}
                tagline={cs.tagline}
                problem={cs.problem}
                action={cs.action}
                result={cs.result}
                tools={cs.tools}
                accent={cs.accent}
                reverse={i % 2 === 1}
                defaultOpen={i === 0}
              >
                <cs.Demo />
              </CaseStudy>
            ))}
          </div>
        </section>

        <Tools />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
