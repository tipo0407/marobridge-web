import "./styles.css";

const email = "marobridge.global@gmail.com";
const mailto = `mailto:${email}?subject=Part%20sourcing%20request&body=Hi%20MaroBridge%2C%0A%0AEquipment%20brand%20%2F%20model%3A%0APart%20number%20(if%20known)%3A%0AQuantity%3A%0AWhat%20makes%20it%20hard%20to%20source%3A%0A%0AI%20can%20attach%20a%20photo%20or%20drawing%20to%20this%20email.%0A`;

export default function Home() {
  return (
    <main>
      <header className="nav">
        <a className="brand" href="#top">MaroBridge</a>
        <a className="navCta" href={mailto}>Send a part</a>
      </header>

      <section className="hero" id="top">
        <div className="eyebrow">Industrial parts sourcing · Bellevue, Washington</div>
        <h1>One hard-to-find part.<br/>We’ll take a serious look.</h1>
        <p className="lede">
          Send us a part number, equipment model, photo, or drawing. We help maintenance,
          service, and parts teams search for discontinued, long-lead-time, and difficult
          replacement parts through a broader supplier network.
        </p>
        <div className="actions">
          <a className="primary" href={mailto}>Send us a part</a>
          <a className="secondary" href="#how">How it works</a>
        </div>
        <p className="micro">No obligation. If we can’t find a credible option, we’ll tell you.</p>
      </section>

      <section className="proof">
        <div>
          <span className="kicker">Best fit</span>
          <h2>When the normal channel stops working.</h2>
        </div>
        <div className="chips">
          <span>Discontinued OEM parts</span>
          <span>Long lead times</span>
          <span>Legacy equipment</span>
          <span>Small mechanical components</span>
          <span>Hard-to-identify replacements</span>
        </div>
      </section>

      <section className="how" id="how">
        <div className="sectionHead">
          <span className="kicker">How it works</span>
          <h2>Low-friction sourcing support.</h2>
        </div>
        <div className="steps">
          <article><span>01</span><h3>Send the part</h3><p>Part number, machine model, photo, dimensions, drawing, or even a short description.</p></article>
          <article><span>02</span><h3>We search</h3><p>We look across supplier channels and evaluate plausible OEM, aftermarket, or equivalent options.</p></article>
          <article><span>03</span><h3>You review</h3><p>We send back what we found, with the information available so you can decide whether it is worth pursuing.</p></article>
        </div>
      </section>

      <section className="why">
        <div>
          <span className="kicker">Why MaroBridge</span>
          <h2>Built for the awkward parts nobody wants to chase.</h2>
        </div>
        <p>
          Many service teams already have strong distributors. We are not trying to replace them.
          MaroBridge is for the exceptions: the odd bracket, housing, fitting, knob, legacy assembly,
          or other replacement part that is consuming too much technician or buyer time.
        </p>
      </section>

      <section className="cta">
        <span className="kicker">Have one in mind?</span>
        <h2>Send the real part you’re stuck on.</h2>
        <p>We would rather investigate one concrete request than make broad sourcing promises.</p>
        <a className="primary light" href={mailto}>Email MaroBridge</a>
      </section>

      <footer>
        <div>
          <strong>MaroBridge</strong>
          <p>Hard-to-find industrial parts sourcing</p>
        </div>
        <div className="contact">
          <a href={`mailto:${email}`}>{email}</a>
          <span>1915 140th Ave NE #1888<br/>Bellevue, WA 98005</span>
        </div>
      </footer>
    </main>
  );
}
