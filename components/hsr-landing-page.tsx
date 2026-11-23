'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ArrowDown, ArrowRight, Award, BookOpen, BriefcaseBusiness, Check, ChevronDown, Compass, GraduationCap, Menu, MessageCircle, Network, ShieldCheck, Sparkles, X } from 'lucide-react'

const payUrl = 'https://rzp.io/rzp/sjsaG9l'
const logoUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Bg5SY0SXEOHPJELTGdCPl0ri6mVp7B.png'
const mentorImage = 'https://mediumpurple-sandpiper-111248.hostingersite.com/wp-content/uploads/2026/05/IMG_5050.JPG.jpeg'
const gallery = [
  'https://thomestowers.com/wp-content/uploads/2026/06/IMG_8163-scaled.jpg',
  'https://thomestowers.com/wp-content/uploads/2026/06/IMG_9210-scaled.jpg',
  'https://thomestowers.com/wp-content/uploads/2026/06/IMG_9222-scaled.jpg',
  'https://thomestowers.com/wp-content/uploads/2026/06/IMG_9212-scaled.jpg',
  'https://thomestowers.com/wp-content/uploads/2026/06/IMG_8109-scaled.jpg',
  'https://thomestowers.com/wp-content/uploads/2026/06/IMG_0297-scaled.jpg',
  'https://thomestowers.com/wp-content/uploads/2026/06/IMG_20251214_125219.jpg',
]
const topics = ['Real estate fundamentals', 'Hyderabad market insights', 'RERA, HMDA & DTCP', 'Property documentation', 'Sales & negotiation', 'Communication & marketing', 'Digital marketing', 'Professional development']
const benefits = [
  { icon: Award, title: 'Expert-led learning', body: 'Learn from experienced trainers with real-world industry knowledge.' },
  { icon: Compass, title: 'Local market context', body: 'Build a stronger understanding of Hyderabad’s property landscape.' },
  { icon: BookOpen, title: 'Practical knowledge', body: 'Explore regulations, documentation and everyday real estate practice.' },
  { icon: MessageCircle, title: 'Communication skills', body: 'Develop the confidence to engage clearly and professionally.' },
  { icon: Network, title: 'Professional mentorship', body: 'Learn with guidance from mentors and lead trainers.' },
  { icon: BriefcaseBusiness, title: 'Career development', body: 'Strengthen the skills needed to take your next step in real estate.' },
]
const members = [
  { name: 'Dr. Gampa Nageshwar Rao', role: 'Chief Mentor & Lead Trainer', image: mentorImage, initials: 'GN', featured: true },
  { name: 'Rajasekhar', role: 'Core Team & Lead Trainer', image: 'https://mediumpurple-sandpiper-111248.hostingersite.com/wp-content/uploads/2026/01/1.png', initials: 'R' },
  { name: 'Manish Kumar', role: 'Core Team & Lead Trainer', image: 'https://mediumpurple-sandpiper-111248.hostingersite.com/wp-content/uploads/2026/01/2.png', initials: 'MK' },
  { name: 'Deshwanth', role: 'Core Team & Lead Trainer', image: 'https://thomestowers.com/wp-content/uploads/2026/11/WhatsApp_Image_2026-11-23_at_6.53.18_PM-removebg-preview.png', initials: 'DW' },
]
const faqs = [
  ['What is Hyderabad School of Real Estate?', 'HSR is a real estate training institute in Hyderabad offering learning in property regulations, documentation, sales and communication.'],
  ['Who can join HSR training?', 'The training is intended for people exploring a career in real estate as well as professionals looking to strengthen their knowledge. Contact HSR for the latest eligibility details.'],
  ['Who are the HSR mentors and trainers?', 'The HSR core team includes Dr. Gampa Nageshwar Rao, Chief Mentor & Lead Trainer, alongside Rajasekhar, Manish Kumar and Jashwanth Deswanth.'],
  ['What topics are covered?', 'The institute’s website describes training in RERA, HMDA and DTCP regulations, property documentation, sales, communication and marketing. Ask HSR for the current course outline.'],
  ['What is the registration fee?', 'The registration offer displayed here is ₹999. Confirm the amount on the official payment page before completing payment.'],
  ['How do I register?', 'Select any Register Now button to open HSR’s Razorpay payment link.'],
  ['How do I make the payment?', 'Payment is completed on the Razorpay page. Please review the final amount and merchant details there before paying.'],
]

function Logo({ light = false }: { light?: boolean }) {
  return <a href="#top" className={`brand ${light ? 'brand-light' : ''}`} aria-label="Hyderabad School of Real Estate home">
    <Image src={logoUrl} alt="Hyderabad School of Real Estate logo" width={1840} height={864} priority className="brand-image" unoptimized />
  </a>
}
function ButtonLink({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <a className={`button-link ${className}`} href={payUrl} target="_blank" rel="noopener noreferrer"><span className="button-link-label">{children}</span><span className="button-link-price"><del>₹10,000</del><strong>₹999 <small>ONLY</small></strong></span><ArrowRight size={17} aria-hidden="true" /></a>
}

export default function HsrLandingPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null)
  const [teamPaused, setTeamPaused] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  return <main id="top">
    <header className="site-header">
      <div className="header-inner"><Logo /><button className="menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'} aria-label="Main navigation"><a href="#about" onClick={() => setMenuOpen(false)}>About</a><a href="#learning" onClick={() => setMenuOpen(false)}>What you’ll learn</a><a href="#team" onClick={() => setMenuOpen(false)}>Our team</a><a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a><ButtonLink className="nav-cta">Register</ButtonLink></nav>
      </div>
    </header>

    <section className="hero section-wrap">
      <div className="hero-copy"><div className="eyebrow"><span className="eyebrow-dot" /> REAL ESTATE EDUCATION · HYDERABAD</div><div className="hero-intro-portrait"><Image src={mentorImage} alt="Dr. Gampa Nageshwar Rao, HSR Chief Mentor and Lead Trainer" width={900} height={1100} priority className="hero-intro-portrait-image" unoptimized /><span>Dr. Gampa Nageshwar Rao · Chief Mentor</span></div><h1>Build your career<br />in real estate <span>with HSR.</span></h1><p className="hero-intro">Practical knowledge. Expert mentorship. A more confident start in Hyderabad’s real estate industry.</p>
        <div className="hero-points"><span><Check /> Professional coaching</span><span><Check /> Industry mentorship</span><span><Check /> Hyderabad market insights</span></div><div className="hero-actions"><ButtonLink>Register now</ButtonLink><a className="text-link" href="#about">Explore HSR <ArrowDown size={15} /></a></div><p className="hero-note"><ShieldCheck size={15} /> Secure payment via Razorpay</p>
      </div>
      <div className="hero-visual"><div className="hero-photo-frame"><Image src={mentorImage} alt="Dr. Gampa Nageshwar Rao, HSR Chief Mentor and Lead Trainer" width={900} height={1100} priority className="hero-photo" unoptimized /><div className="photo-caption"><span className="caption-mark">HSR</span><div><strong>Learn from the field.</strong><small>Meet your mentor</small></div><ArrowRight size={18} /></div></div><div className="hero-stamp"><span>LEARN</span><b>LOCAL</b><small>Grow with HSR</small></div><div className="hero-line" /></div>
    </section>
    <div className="ticker" aria-label="HSR training focus"><div className="ticker-inner"><span>REAL ESTATE FUNDAMENTALS</span><i>✳</i><span>RERA · HMDA · DTCP</span><i>✳</i><span>SALES & COMMUNICATION</span><i>✳</i><span>HYDERABAD MARKET INSIGHTS</span></div></div>

    <section id="about" className="about section-wrap section-pad"><div className="section-kicker">01 / ABOUT HSR</div><div className="about-grid"><h2>Build knowledge.<br /><span>Move forward.</span></h2><div className="about-copy"><p className="lead">A stronger real estate career begins with a clearer understanding of the work.</p><p>Hyderabad School of Real Estate is a professional learning institute focused on real estate education, practical knowledge and mentorship. Its training covers the regulations, documentation, sales and communication skills relevant to Hyderabad’s property market.</p><a className="underlined-link" href="https://www.hsre.in/" target="_blank" rel="noopener noreferrer">Explore the official HSR website <ArrowRight size={16} /></a></div></div><div className="about-facts"><div><span>01</span><b>Expert-led<br />learning</b></div><div><span>02</span><b>Practical<br />knowledge</b></div><div><span>03</span><b>Hyderabad<br />market context</b></div><div><span>04</span><b>Career<br />development</b></div></div></section>

    <section id="learning" className="learning section-pad"><div className="section-wrap"><div className="section-kicker">02 / THE LEARNING</div><div className="section-heading-row"><div><h2>Knowledge for<br /><span>the real world.</span></h2></div><p>Explore essential areas of real estate practice, grounded in the topics covered by HSR’s training programme.</p></div><div className="topic-grid">{topics.map((topic, i) => <article className="topic-card" key={topic}><span className="topic-num">0{i + 1}</span><div className="topic-icon">{i % 2 === 0 ? <BookOpen /> : <Sparkles />}</div><h3>{topic}</h3><ArrowRight className="topic-arrow" size={18} /></article>)}</div><p className="fine-print">Course topics are based on information published on hsre.in. Please contact HSR to confirm the latest syllabus.</p></div></section>

    <section id="team" className="team section-pad"><div className="section-wrap"><div className="section-kicker">03 / PEOPLE BEHIND HSR</div><div className="section-heading-row"><div><h2>Meet the HSR<br /><span>core team.</span></h2></div><p>Learn from experienced real estate professionals and lead trainers.</p></div><div className="team-carousel-toolbar"><span>MEET THE PEOPLE BEHIND HSR</span><button className="team-carousel-toggle" type="button" onClick={() => setTeamPaused(!teamPaused)} aria-pressed={teamPaused}>{teamPaused ? 'Play team' : 'Pause team'}</button></div><div className="team-carousel" data-paused={teamPaused}><div className="team-track"><div className="team-set">{members.map((member, index) => <article className={`team-card ${member.featured ? 'team-featured' : ''}`} key={member.name}><div className="team-photo">{member.image ? <Image src={member.image} alt={member.name} width={700} height={850} loading="lazy" unoptimized /> : <div className="initials-portrait" aria-label={`Portrait of ${member.name} not yet supplied`}><span>{member.initials}</span><small>HSR CORE TEAM</small></div>}<span className="team-index">0{index + 1}</span></div><div className="team-info"><div><h3>{member.name}</h3><p>{member.role}</p></div><ArrowRight size={18} /></div></article>)}</div><div className="team-set" aria-hidden="true">{members.map((member, index) => <article className={`team-card ${member.featured ? 'team-featured' : ''}`} key={`loop-${member.name}`}><div className="team-photo">{member.image ? <Image src={member.image} alt="" width={700} height={850} loading="lazy" unoptimized /> : <div className="initials-portrait" aria-hidden="true"><span>{member.initials}</span><small>HSR CORE TEAM</small></div>}<span className="team-index">0{index + 1}</span></div><div className="team-info"><div><h3>{member.name}</h3><p>{member.role}</p></div><ArrowRight size={18} /></div></article>)}</div></div></div></div></section>

    <section className="benefits section-pad"><div className="section-wrap"><div className="section-kicker">04 / YOUR NEXT STEP</div><div className="benefits-layout"><div><h2>More than<br />a course.<br /><span>A foundation.</span></h2><p>Build a practical base for the conversations, decisions and opportunities that shape a real estate career.</p><ButtonLink>Start learning</ButtonLink></div><div className="benefit-grid">{benefits.map(({ icon: Icon, title, body }, i) => <article className="benefit-card" key={title}><span className="benefit-icon"><Icon size={20} /></span><span className="benefit-num">0{i + 1}</span><h3>{title}</h3><p>{body}</p></article>)}</div></div></div></section>

    <section id="gallery" className="gallery-section section-pad"><div className="section-wrap"><div className="section-kicker">05 / INSIDE HSR</div><div className="section-heading-row"><div><h2>Glimpses of HSR<br /><span>training sessions.</span></h2></div><p>A glimpse into our learning environment, training sessions and student experiences.</p></div><div className="gallery-grid">{gallery.map((src, index) => <button className={`gallery-item gallery-item-${index + 1}`} key={src} onClick={() => setSelectedPhoto(src)} aria-label={`Enlarge HSR training photo ${index + 1}`}><Image src={src} alt={`HSR training session ${index + 1}`} width={1000} height={700} loading="lazy" unoptimized /><span className="gallery-zoom">View photo <ArrowRight size={15} /></span></button>)}</div></div></section>

    <section className="offer-section section-pad"><div className="offer-card section-wrap"><div className="offer-left"><div className="section-kicker">YOUR NEXT CHAPTER STARTS HERE</div><h2>Start your real estate<br />journey <em>today.</em></h2><p>Invest in your skills, your confidence and your next opportunity.</p><div className="offer-includes"><span><Check /> Expert-led training</span><span><Check /> Practical industry learning</span><span><Check /> Hyderabad market focus</span></div></div><div className="offer-price"><span className="original-price">Registration fee <s>₹10,000</s></span><span className="offer-label">SPECIAL OFFER</span><div className="price">₹<strong>999</strong><small>ONLY</small></div><ButtonLink className="offer-cta">Register now</ButtonLink><small className="secure-note"><ShieldCheck size={14} /> Payment handled securely by Razorpay</small></div></div></section>

    <section className="faq-section section-pad"><div className="section-wrap faq-layout"><div><div className="section-kicker">06 / GOOD TO KNOW</div><h2>Questions,<br /><span>answered.</span></h2><p>Still deciding? Talk to the HSR team for details about the current programme.</p><a href="tel:+918977533213" className="underlined-link">Call 89775 33213 <ArrowRight size={16} /></a></div><div className="faq-list">{faqs.map(([question, answer], i) => <div className={`faq-row ${openFaq === i ? 'faq-open' : ''}`} key={question}><button onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i}><span>{question}</span><ChevronDown size={18} /></button>{openFaq === i && <p>{answer}</p>}</div>)}</div></div></section>

    <section className="final-cta"><div className="final-inner"><div className="section-kicker">TAKE THE FIRST STEP</div><h2>Your real estate<br />journey starts <em>here.</em></h2><ButtonLink>Register now</ButtonLink><span className="cta-detail">Secure payment on Razorpay <ArrowRight size={14} /></span></div><div className="final-orbit" aria-hidden="true" /></section>
    <footer className="site-footer"><div className="section-wrap"><div className="footer-top"><Logo light /><div className="footer-contact"><span>GET IN TOUCH</span><a href="tel:+918977533213">+91 89775 33213</a><a href="mailto:info@hsre.in">info@hsre.in</a></div><div className="footer-contact"><span>FIND US</span><p>Hyderabad, Telangana, India</p><a href="https://www.hsre.in/" target="_blank" rel="noopener noreferrer">hsre.in <ArrowRight size={14} /></a></div><div className="footer-contact"><span>FOLLOW HSR</span><a href="https://www.hsre.in/" target="_blank" rel="noopener noreferrer">Official website <ArrowRight size={14} /></a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Hyderabad School of Real Estate</span><div><a href="https://www.hsre.in/privacy-policy/" target="_blank" rel="noopener noreferrer">Privacy policy</a><a href="https://www.hsre.in/terms-and-conditions/" target="_blank" rel="noopener noreferrer">Terms & conditions</a></div><span>Learn local. Grow with HSR.</span></div></div></footer>
    <div className="mobile-register"><div><span>REGISTRATION OFFER</span><strong>₹999 <small>ONLY</small></strong></div><ButtonLink>Register now</ButtonLink></div>
    {selectedPhoto && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Enlarged training photo" onClick={() => setSelectedPhoto(null)}><button className="lightbox-close" aria-label="Close enlarged photo" onClick={() => setSelectedPhoto(null)}><X /></button><Image src={selectedPhoto} alt="Enlarged HSR training session" width={1600} height={1100} unoptimized onClick={(event) => event.stopPropagation()} /></div>}
  </main>
}
