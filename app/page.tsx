import Image from 'next/image'

const destinations = [
  { name: 'Himalayan Escapes', detail: 'Manali · 6 days', image: '/yash-trips-destinations.png' },
  { name: 'Coastal Stories', detail: 'Goa · 4 days', image: '/yash-trips-hero.png' },
  { name: 'Royal Rajasthan', detail: 'Jaipur · 5 days', image: '/yash-trips-destinations.png' },
]

export default function Page() {
  return (
    <main className="site-shell">
      <section className="hero">
        <div className="hero-image"><Image src="/yash-trips-hero.png" alt="A peaceful mountain landscape discovered with Yash Trips" fill priority sizes="(max-width: 900px) 100vw, 58vw" /></div>
        <header className="nav"><a className="brand brand-primary" href="#top" aria-label="Yash Trips home"><Image src="/yash-trips-logo.png" alt="Yash Trips" width={46} height={46} /><span className="brand-name"><strong>YASH</strong><i>TRIPS</i><small>CURATED JOURNEYS</small></span></a><nav><a href="#journeys">Journeys</a><a href="#story">Our story</a><a href="#contact">Contact</a></nav><a className="nav-cta" href="#contact">Plan a trip <span>↗</span></a></header>
        <div className="hero-copy" id="top"><p className="eyebrow">Travel with intention</p><h1>Go where<br /><em>you feel alive.</em></h1><p className="hero-text">Thoughtful journeys, hidden corners, and the kind of memories that stay with you long after you return.</p><a className="button button-light" href="#journeys">Explore journeys <span>↗</span></a></div>
        <div className="hero-note"><span>01</span><span className="line" /><span>Discover your next story</span></div>
      </section>

      <section className="intro section-pad" id="story"><div className="section-label">01 / The Yash Trips way</div><div className="intro-grid"><h2>Not just a holiday.<br /><em>A new perspective.</em></h2><div><p className="large-copy">We believe the best journeys are the ones that change the way you see the world — and yourself.</p><p>Yash Trips brings together local insight, unrushed itineraries, and places that feel a little more personal. From the first idea to the road home, every detail is made to feel effortless.</p><a className="text-link" href="#contact">Meet Yash Trips <span>↗</span></a></div></div></section>

      <section className="journeys section-pad" id="journeys"><div className="section-heading"><div><div className="section-label">02 / Go somewhere beautiful</div><h2>Journeys worth<br /><em>remembering.</em></h2></div><a className="text-link" href="#contact">View all journeys <span>↗</span></a></div><div className="cards">{destinations.map((destination, index) => <article className="destination-card" key={destination.name}><div className="card-image"><Image src={destination.image} alt={`${destination.name} by Yash Trips`} fill sizes="(max-width: 700px) 100vw, 33vw" /><span className="card-number">0{index + 1}</span></div><div className="card-meta"><div><h3>{destination.name}</h3><p>{destination.detail}</p></div><span className="arrow">↗</span></div></article>)}</div></section>

      <section className="quote"><div className="quote-mark">“</div><blockquote>We don&apos;t collect destinations.<br /><em>We collect the feeling of being there.</em></blockquote><p>— The Yash Trips journal</p></section>

      <section className="contact section-pad" id="contact"><div className="contact-inner"><div><div className="section-label">03 / Start your story</div><h2>Where will you<br /><em>go next?</em></h2></div><div className="contact-copy"><p>Tell us what you&apos;re dreaming of. We&apos;ll help you make it real.</p><a className="button button-dark" href="https://wa.me/919909996336?text=Hello%20Yash%20Trips%2C%20I%27d%20like%20to%20plan%20a%20trip." target="_blank" rel="noopener noreferrer">Let&apos;s talk <span>↗</span></a></div></div></section>
      <footer><a className="brand" href="#top"><Image src="/yash-trips-logo.png" alt="Yash Trips" width={38} height={38} /><span>YASH <i>TRIPS</i></span></a><p>Made for curious minds and open roads.</p><p>© 2026 Yash Trips</p></footer>
    </main>
  )
}
