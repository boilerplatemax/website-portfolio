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
    <section className="pt-32 pb-10 sm:pt-40">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="eyebrow">Contact</span>
            <h1 className="mt-6 heading-xl">
              Let&apos;s build something <span className="gradient-text">good</span>.
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-600 dark:text-ink-300">
              Tell me about your project and I&apos;ll get back within one business
              day with next steps and a rough timeline.
            </p>

            <ul className="mt-10 space-y-3">
              <li>
                <a
                  href="mailto:maximsdev@gmail.com"
                  className="card flex items-center gap-4 p-5 hover:-translate-y-0.5 hover:border-ink-300 dark:hover:border-ink-700"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-ink-200 bg-ink-100 text-clay-600 dark:border-ink-700 dark:bg-ink-800 dark:text-clay-400">
                    <Icon name="mail" />
                  </span>
                  <div>
                    <p className="font-mono text-[0.65rem] uppercase tracking-label text-ink-500 dark:text-ink-400">Email</p>
                    <p className="mt-0.5 font-medium text-ink-900 dark:text-ink-50">maximsdev@gmail.com</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="tel:+14165793253"
                  className="card flex items-center gap-4 p-5 hover:-translate-y-0.5 hover:border-ink-300 dark:hover:border-ink-700"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-ink-200 bg-ink-100 text-clay-600 dark:border-ink-700 dark:bg-ink-800 dark:text-clay-400">
                    <Icon name="phone" />
                  </span>
                  <div>
                    <p className="font-mono text-[0.65rem] uppercase tracking-label text-ink-500 dark:text-ink-400">Phone</p>
                    <p className="mt-0.5 font-medium text-ink-900 dark:text-ink-50">(416) 579-3253</p>
                  </div>
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="card p-6 sm:p-8"
          >
            {submitted ? (
              <div className="grid place-items-center py-12 text-center">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-clay-500/15 text-clay-600 dark:text-clay-400">
                  <Icon name="check" className="h-7 w-7" />
                </span>
                <h2 className="mt-4 font-display text-xl font-medium">Your draft is ready</h2>
                <p className="mt-2 max-w-sm text-sm text-ink-600 dark:text-ink-300">
                  I opened your email client with a pre-filled message. Hit send and
                  I&apos;ll be in touch shortly.
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
                        className={`rounded-full border px-3.5 py-1.5 text-sm transition ${
                          form.budget === b
                            ? 'border-ink-900 bg-ink-900 text-ink-50 dark:border-ink-50 dark:bg-ink-50 dark:text-ink-900'
                            : 'border-ink-200 bg-transparent text-ink-600 hover:border-ink-400 dark:border-ink-700 dark:text-ink-300'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </Field>
                <Field label="Tell me about the project" required className="sm:col-span-2">
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
                  <p className="mt-3 text-center font-mono text-[0.65rem] uppercase tracking-[0.1em] text-ink-500 dark:text-ink-400">
                    I&apos;ll never share your details · Replies within one business day
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
          border-radius: 0.85rem;
          border: 1px solid #e6e1d4;
          background: #faf9f4;
          padding: 0.7rem 0.9rem;
          font-size: 0.92rem;
          color: #1b1712;
          transition: border-color 0.15s, box-shadow 0.15s;
        }
        .input::placeholder { color: #a79e8c; }
        .input:focus {
          outline: none;
          border-color: #c86a3f;
          box-shadow: 0 0 0 3px rgba(200, 106, 63, 0.18);
        }
        .dark .input {
          background: #1b1712;
          border-color: #453f34;
          color: #f2efe6;
        }
        .dark .input::placeholder { color: #7d7466; }
      `}</style>
    </section>
  );
}

function Field({ label, required, className = '', children }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1.5 inline-block font-mono text-[0.65rem] font-medium uppercase tracking-[0.16em] text-ink-500 dark:text-ink-400">
        {label}
        {required && <span className="ml-1 text-clay-500">*</span>}
      </span>
      {children}
    </label>
  );
}
