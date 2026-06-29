import { useState, FormEvent } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { content } from '../content'
import styles from './Contact.module.css'

export default function Contact() {
  const sectionRef = useScrollReveal() as React.RefObject<HTMLElement>
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Valid email required'
    if (form.message.trim().length < 10) e.message = 'Message too short'
    return e
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    setSent(true)
  }

  return (
    <section className="section" id="contact" ref={sectionRef as React.RefObject<HTMLElement>}>
      <div className="container">
        <p className="section-label reveal">Get in Touch</p>

        <h2 className={`${styles.statement} reveal reveal-d1`}>
          Let's create something<br />remarkable together.
        </h2>

        <hr className="hairline" style={{ margin: '3rem 0 4rem' }} />

        <div className={styles.layout}>
          {/* Contact card */}
          <div className={`${styles.card} reveal`}>
            <h3 className={styles.cardTitle}>Contact</h3>

            <a href={`mailto:${content.email}`} className={styles.contactRow}>
              <IconMail />
              <span>{content.email}</span>
            </a>

            <a href={`tel:${content.phone.replace(/\s/g, '')}`} className={styles.contactRow}>
              <IconPhone />
              <span>{content.phone}</span>
            </a>

            <p className={styles.contactRow} style={{ cursor: 'default' }}>
              <IconMap />
              <span>{content.location}</span>
            </p>

            <hr className="hairline" style={{ margin: '1.5rem 0' }} />

            <div className={styles.socials}>
              {Object.entries(content.social).map(([key, href]) => (
                <a key={key} href={href} className={styles.socialLink} aria-label={key} target="_blank" rel="noopener noreferrer">
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                  <span className={styles.socialArrow}>↗</span>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className={`${styles.formWrap} reveal reveal-d2`}>
            {sent ? (
              <div className={styles.successMsg}>
                <p className={styles.successTitle}>Message sent.</p>
                <p className={styles.successSub}>Thank you — I'll be in touch soon.</p>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit} noValidate>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="name">Name</label>
                  <input
                    id="name"
                    type="text"
                    className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    autoComplete="name"
                  />
                  {errors.name && <span className={styles.error}>{errors.name}</span>}
                </div>

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com"
                    autoComplete="email"
                  />
                  {errors.email && <span className={styles.error}>{errors.email}</span>}
                </div>

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about your project..."
                    rows={5}
                  />
                  {errors.message && <span className={styles.error}>{errors.message}</span>}
                </div>

                <button type="submit" className={`glass-btn ${styles.submitBtn}`}>
                  Send Message
                  <IconArrow />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function IconMail() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
}

function IconPhone() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.29h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.88a16 16 0 0 0 6.29 6.29l.95-.94a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
}

function IconMap() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
}

function IconArrow() {
  return <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
}
