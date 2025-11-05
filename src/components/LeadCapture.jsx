import React, { useEffect, useMemo, useState } from 'react';
import { CheckCircle, Phone } from 'lucide-react';

const interests = [
  '3D Animation',
  'VFX & Compositing',
  'Architecture Visualization',
  'Character Modeling',
];

const LeadCapture = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [interest, setInterest] = useState(interests[0]);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const phoneValid = useMemo(() => /^[0-9]{10,13}$/.test(phone), [phone]);

  useEffect(() => {
    setError('');
  }, [name, phone, interest]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please enter your name.');
      return;
    }
    if (!phoneValid) {
      setError('Enter a valid phone number (10–13 digits).');
      return;
    }

    const payload = {
      name: name.trim(),
      phone: phone.trim(),
      interest,
      createdAt: new Date().toISOString(),
    };

    try {
      const existing = JSON.parse(localStorage.getItem('leads') || '[]');
      existing.push(payload);
      localStorage.setItem('leads', JSON.stringify(existing));
    } catch (err) {
      // if localStorage fails, continue without blocking UX
    }

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="bg-black text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16 text-center">
          <div className="mx-auto max-w-md">
            <CheckCircle className="mx-auto h-12 w-12 text-emerald-400" />
            <h3 className="mt-4 text-2xl font-bold">Thanks! We’ll call you shortly</h3>
            <p className="mt-2 text-white/70">Our team will reach out at {phone} to guide you through next steps.</p>
            <button onClick={() => setSubmitted(false)} className="mt-6 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-white hover:bg-white/10 transition">
              Submit another lead
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="lead-form" className="relative bg-black text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
        <div className="mb-6 sm:mb-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold">Get a call back</h2>
          <p className="mt-2 text-white/70 text-sm sm:text-base">Tell us what you’re interested in. We’ll call with details and curriculum.</p>
        </div>

        <form onSubmit={handleSubmit} className="mx-auto max-w-xl rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 backdrop-blur">
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm text-white/80">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your full name"
                className="mt-1 w-full rounded-lg bg-black/60 border border-white/10 px-4 py-3 outline-none focus:border-cyan-300"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-white/80">Phone</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                placeholder="10–13 digits"
                className={`mt-1 w-full rounded-lg bg-black/60 border px-4 py-3 outline-none focus:border-cyan-300 ${phone && !phoneValid ? 'border-rose-400' : 'border-white/10'}`}
                inputMode="numeric"
                pattern="[0-9]{10,13}"
                required
              />
              {phone && !phoneValid && (
                <p className="mt-1 text-xs text-rose-400">Enter a valid phone number (10–13 digits).</p>
              )}
            </div>

            <div>
              <label className="block text-sm text-white/80">Interest</label>
              <select
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
                className="mt-1 w-full rounded-lg bg-black/60 border border-white/10 px-4 py-3 outline-none focus:border-cyan-300"
              >
                {interests.map((i) => (
                  <option key={i} value={i}>{i}</option>
                ))}
              </select>
            </div>

            {error && (
              <div className="rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-200 px-4 py-2 text-sm">
                {error}
              </div>
            )}

            <button type="submit" className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-400 px-5 py-3 text-black font-semibold shadow-lg shadow-cyan-400/30 hover:brightness-95 active:brightness-90 transition">
              <Phone className="h-5 w-5" />
              Request a call
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LeadCapture;
