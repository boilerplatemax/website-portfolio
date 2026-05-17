import { useState } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '../components/Icon.jsx';

const BUDGETS = ['Under $2k', '$2k – $5k', '$5k – $10k', '$10k+'];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    budget: BUDGETS[1],
    message: '',
  });

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = `Hi Max,%0D%0A%0D%0A${encodeURIComponent(form.message)}%0D%0A%0D%0A— ${encodeURIComponent(
      form.name,
    )}${form.company ? ` (${encodeURIComponent(form.company)})` : ''}%0D%0ABudget: ${encodeURIComponent(
      form.budget,
    )}`;
    window.location.href = `mailto:maximsdev@gmail.com?subject=${encodeURIComponent(
      `New project enquiry — ${form.name}`,
    )}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section className="pt-32 pb-10">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow">Contact</span>
            <h1 className="mt-4 heading-xl">
              Let&apos;s build something <span className="gradient-text">great</span>.
            </h1>
            <p className="mt-5 max-w-md text-lg text-ink-600 dark:text-ink-300">
              Tell us about your project. We&apos;ll get back within one business day with next steps and a rough timeline.
            </p>

            <ul className="mt-10 space-y-4">
              <li>
                <a
                  href="mailto:maximsdev@gmail.com"
                  className="card flex items-center gap-4 p-5 hover:-translate-y-0.5 hover:shadow-glow"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand-500/15 to-accent-500/15 text-brand-600 dark:text-brand-400">
                    <Icon name="mail" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-ink-500 dark:text-ink-400">Email</p>
                    <p className="font-semibold text-ink-900 dark:text-ink-50">maximsdev@gmail.com</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="tel:+14165793253"
                  className="card flex items-center gap-4 p-5 hover:-translate-y-0.5 hover:shadow-glow"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand-500/15 to-accent-500/15 text-brand-600 dark:text-brand-400">
                    <Icon name="phone" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-ink-500 dark:text-ink-400">Phone</p>
                    <p className="font-semibold text-ink-900 dark:text-ink-50">(416) 579-3253</p>
                  </div>
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="card p-6 sm:p-8"
          >
            {submitted ? (
              <div className="grid place-items-center py-12 text-center">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-accent-500/15 text-accent-600">
                  <Icon name="check" className="h-7 w-7" />
                </span>
                <h2 className="mt-4 font-display text-xl font-semibold">Thanks — your draft is ready</h2>
                <p className="mt-2 max-w-sm text-sm text-ink-600 dark:text-ink-300">
                  We opened your email client with a pre-filled message. Hit send and we&apos;ll be in touch shortly.
                </p>
              </div>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name" required>
                  <input
                    type="text"
                    value={form.name}
                    onChange={update('name')}
                    required
                    className="input"
                    placeholder="Your name"
                  />
                </Field>
                <Field label="Email" required>
                  <input
                    type="email"
                    value={form.email}
                    onChange={update('email')}
                    required
                    className="input"
                    placeholder="you@example.com"
                  />
                </Field>
                <Field label="Company" className="sm:col-span-2">
                  <input
                    type="text"
                    value={form.company}
                    onChange={update('company')}
                    className="input"
                    placeholder="Optional"
                  />
                </Field>
                <Field label="Budget" className="sm:col-span-2">
                  <div className="flex flex-wrap gap-2">
                    {BUDGETS.map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setForm((f) => ({ ...f, budget: b }))}
                        className={`rounded-full border px-3 py-1.5 text-sm font-semibold transition ${
                          form.budget === b
                            ? 'border-brand-500 bg-brand-500 text-white'
                            : 'border-ink-200 bg-white text-ink-700 hover:border-ink-300 dark:border-ink-700 dark:bg-ink-900 dark:text-ink-200'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </Field>
                <Field label="Tell us about the project" required className="sm:col-span-2">
                  <textarea
                    value={form.message}
                    onChange={update('message')}
                    required
                    rows={5}
                    className="input"
                    placeholder="A few sentences about your goals, audience and timeline."
                  />
                </Field>

                <div className="sm:col-span-2">
                  <button type="submit" className="btn-primary w-full">
                    Send enquiry
                    <Icon name="arrow" className="h-4 w-4" />
                  </button>
                  <p className="mt-3 text-center text-xs text-ink-500 dark:text-ink-400">
                    We&apos;ll never share your details. Replies usually within one business day.
                  </p>
                </div>
              </div>
            )}
          </motion.form>
        </div>
      </div>

      <style>{`
        .input {
          width: 100%;
          border-radius: 0.9rem;
          border: 1px solid rgb(212 216 232);
          background: rgba(255,255,255,0.7);
          padding: 0.7rem 0.9rem;
          font-size: 0.92rem;
          color: rgb(13 16 36);
          transition: border-color 0.15s, box-shadow 0.15s;
        }
        .input::placeholder { color: rgb(122 133 179); }
        .input:focus {
          outline: none;
          border-color: rgb(99 102 241);
          box-shadow: 0 0 0 4px rgba(99,102,241,0.15);
        }
        .dark .input {
          background: rgba(13,16,36,0.7);
          border-color: rgb(42 49 87);
          color: rgb(236 238 246);
        }
      `}</style>
    </section>
  );
}

function Field({ label, required, className = '', children }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1.5 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-ink-500 dark:text-ink-400">
        {label}
        {required && <span className="ml-1 text-brand-500">*</span>}
      </span>
      {children}
    </label>
  );
}
