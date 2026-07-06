import {
  ArrowRight, Building2, Factory, GraduationCap, HardHat, HeartPulse, Hotel,
  Mountain, Shield, ShoppingCart, Siren, Truck, Users,
} from 'lucide-react';
import { InnerHero, PremiumPage } from '../components/PremiumPages';

const industries = [
  {
    icon: Shield,
    title: 'Security & Surveillance',
    intro: 'Keep patrol teams, checkpoints and control rooms connected across every shift.',
    detail: 'Security operations depend on fast escalation and an accurate record of events. EVOX helps guards, supervisors and command teams communicate discreetly while body cameras provide dependable visual evidence.',
    uses: ['Patrol coordination', 'Incident documentation', 'Checkpoint communication'],
    products: 'X1 Pro · X1 Mini · XC-19',
    outcome: 'Faster response. Stronger accountability.',
  },
  {
    icon: HardHat,
    title: 'Construction',
    intro: 'Clear communication across noisy, changing and safety-critical worksites.',
    detail: 'From lifting operations to contractor coordination, site teams need instructions to travel instantly. Rugged radios keep supervisors, safety officers and equipment operators aligned without relying on mobile coverage.',
    uses: ['Safety broadcasts', 'Crane and equipment coordination', 'Multi-zone supervision'],
    products: 'EVOX Ultra · X1 Pro · PTT Super Mini',
    outcome: 'Fewer delays. Safer decisions.',
  },
  {
    icon: Hotel,
    title: 'Hospitality',
    intro: 'Connect guest-facing teams without interrupting the guest experience.',
    detail: 'Front desk, housekeeping, engineering and security must work as one invisible service layer. Compact EVOX radios make it easy to resolve requests quickly while keeping communication professional and discreet.',
    uses: ['Room readiness updates', 'Maintenance dispatch', 'Guest and event support'],
    products: 'PTT Super Mini · X1 Pro',
    outcome: 'Quieter coordination. Better service.',
  },
  {
    icon: Factory,
    title: 'Manufacturing',
    intro: 'Reliable communication from the production floor to maintenance and dispatch.',
    detail: 'Industrial teams operate around noise, machinery and strict production targets. EVOX radios support immediate coordination between line supervisors, maintenance crews, stores and safety teams.',
    uses: ['Breakdown response', 'Production handovers', 'Warehouse coordination'],
    products: 'EVOX Ultra · X1 Pro',
    outcome: 'Less downtime. More control.',
  },
  {
    icon: Truck,
    title: 'Transportation',
    intro: 'Coordinate drivers, loading bays, yards and dispatch in real time.',
    detail: 'Transport operations lose time when teams work with incomplete information. EVOX creates a direct communication layer for vehicle movement, loading status, route changes and urgent operational updates.',
    uses: ['Yard movement', 'Loading and dispatch', 'Fleet incident response'],
    products: 'X1 Pro · EVOX Ultra · XC-19',
    outcome: 'Smoother movement. Faster turnaround.',
  },
  {
    icon: GraduationCap,
    title: 'Education',
    intro: 'Give campus security and facility teams a dependable line of communication.',
    detail: 'Schools, colleges and large campuses require calm coordination across entrances, buildings and public areas. EVOX supports routine operations as well as rapid response during medical or security incidents.',
    uses: ['Gate and visitor management', 'Campus patrols', 'Emergency coordination'],
    products: 'X1 Pro · X1 Mini · PTT Super Mini',
    outcome: 'A safer, more responsive campus.',
  },
  {
    icon: HeartPulse,
    title: 'Healthcare',
    intro: 'Support rapid coordination without adding friction to clinical environments.',
    detail: 'Hospitals depend on facilities, security, transport and emergency teams working alongside clinical staff. Compact communication devices help route assistance quickly while respecting sensitive environments.',
    uses: ['Emergency assistance', 'Patient transport', 'Facility and security response'],
    products: 'PTT Super Mini · X1 Pro',
    outcome: 'Quicker support. Calmer operations.',
  },
  {
    icon: Users,
    title: 'Events',
    intro: 'Keep organisers, production crews and venue security working from one plan.',
    detail: 'Live events change by the minute. EVOX helps front-of-house teams, technical crews, logistics, parking and security respond together—from setup through final guest exit.',
    uses: ['Production cues', 'Crowd and access control', 'Vendor coordination'],
    products: 'X1 Pro · PTT Super Mini · X1 Mini',
    outcome: 'One team. One live picture.',
  },
  {
    icon: ShoppingCart,
    title: 'Retail',
    intro: 'Connect the sales floor, stockroom, loading area and loss-prevention team.',
    detail: 'Retail teams need to act quickly without leaving customers unattended. Discreet radios help locate stock, request assistance, manage queues and respond to security concerns across the store.',
    uses: ['Stock checks', 'Queue and floor support', 'Loss prevention'],
    products: 'PTT Super Mini · X1 Mini',
    outcome: 'Faster service. Better awareness.',
  },
  {
    icon: Building2,
    title: 'Infrastructure',
    intro: 'Create dependable links across distributed assets and complex operations.',
    detail: 'Utilities, facilities and infrastructure projects often span wide areas with multiple contractors and control points. EVOX supports structured communication between field teams, supervisors and central operations.',
    uses: ['Field maintenance', 'Contractor coordination', 'Control-room escalation'],
    products: 'EVOX Ultra · X1 Pro · XC-19',
    outcome: 'Connected teams. Resilient operations.',
  },
  {
    icon: Siren,
    title: 'Emergency Services',
    intro: 'Communication designed for urgency, clarity and command coordination.',
    detail: 'Response teams cannot afford repeated instructions or missed calls. Rugged EVOX devices support rapid tasking, scene coordination and clear communication between responders and command personnel.',
    uses: ['Scene command', 'Team deployment', 'Search and response coordination'],
    products: 'EVOX Ultra · X1 Pro · X1 Mini',
    outcome: 'Clearer command when seconds matter.',
  },
  {
    icon: Mountain,
    title: 'Outdoor & Tourism',
    intro: 'Stay connected where terrain, weather and mobile networks become unpredictable.',
    detail: 'Guides, resorts, adventure operators and remote-site teams need equipment that remains simple and dependable outdoors. EVOX supports group movement, guest safety and operational coordination.',
    uses: ['Guide communication', 'Guest safety', 'Remote property operations'],
    products: 'EVOX Ultra · X1 Pro · PTT Super Mini',
    outcome: 'More confidence beyond coverage.',
  },
];

export function IndustriesPage() {
  return (
    <PremiumPage
      title="Communication Solutions by Industry | EVOX India"
      description="Explore EVOX communication and recording solutions for security, construction, hospitality, healthcare, retail and other operations."
      canonicalUrl="https://evoxindia.in/industries"
      hero={<InnerHero eyebrow="Built for real operations" title="One platform." accent="Many environments." description="EVOX communication tools adapt to the pace, noise and operational demands of teams across India." aside={<div className="inner-stat"><strong>12+</strong><span>industry environments</span></div>} />}
    >
      <section className="industry-intro">
        <div className="premium-shell industry-intro-grid">
          <div>
            <p className="premium-kicker">Designed around the work</p>
            <h2>Every environment<br />changes the brief.</h2>
          </div>
          <p>
            The right communication system depends on range, noise, team size, privacy,
            shift length and the consequences of a missed message. We configure EVOX
            solutions around those realities—not a generic equipment list.
          </p>
        </div>
      </section>

      <section className="industry-list">
        <div className="premium-shell">
          <div className="inner-section-heading">
            <p className="premium-kicker">Where EVOX works</p>
            <h2>Solutions shaped<br />by the environment.</h2>
          </div>
          <div className="industry-detail-grid">
            {industries.map((industry, index) => {
              const IndustryIcon = industry.icon;
              return (
                <article key={industry.title}>
                  <div className="industry-card-top">
                    <IndustryIcon />
                    <span>{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <h3>{industry.title}</h3>
                  <p className="industry-card-intro">{industry.intro}</p>
                  <p className="industry-card-detail">{industry.detail}</p>
                  <div className="industry-use-cases">
                    <span>Common applications</span>
                    <ul>{industry.uses.map(use => <li key={use}>{use}</li>)}</ul>
                  </div>
                  <div className="industry-products">
                    <span>Recommended lineup</span>
                    <strong>{industry.products}</strong>
                  </div>
                  <div className="industry-outcome">{industry.outcome}</div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="industry-process">
        <div className="premium-shell industry-process-layout">
          <div>
            <p className="premium-kicker light">From requirement to rollout</p>
            <h2>A system that fits<br />the way you operate.</h2>
          </div>
          <div className="industry-process-steps">
            <div><span>01</span><strong>Understand the environment</strong><p>We map users, zones, range, noise and operating conditions.</p></div>
            <div><span>02</span><strong>Specify the right devices</strong><p>Radios, cameras and accessories are matched to each role.</p></div>
            <div><span>03</span><strong>Support the deployment</strong><p>Our team helps with configuration, onboarding and after-sales support.</p></div>
          </div>
        </div>
      </section>

      <section className="inner-cta">
        <div className="premium-shell">
          <div>
            <p className="premium-kicker light">Your environment is unique</p>
            <h2>Let’s specify the right system.</h2>
          </div>
          <button className="premium-button white" onClick={() => (window as any).navigateToGetQuote?.()}>
            Talk to an expert <ArrowRight size={17} />
          </button>
        </div>
      </section>
    </PremiumPage>
  );
}
