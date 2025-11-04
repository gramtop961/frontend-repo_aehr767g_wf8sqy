import React, { useState } from 'react';
import { Phone, CheckCircle } from 'lucide-react';

const interests = [
  '3D Animation',
  'VFX & Compositing',
  'Graphic Design',
  'Motion Design',
  'Unsure — Need Guidance',
];

const LeadCapture = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [interest, setInterest] = useState(interests[0]);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const validatePhone = (value) => {
    const cleaned = value.replace(/\D/g, '');
    return cleaned.length >= 10 && cleaned.length <= 13;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!name.trim()) {
      setError('Please enter your name.');
      return;
    }
    if (!validatePhone(phone)) {
      setError('Please enter a valid phone number.');
      return;
    }
    // Simulate success and keep a local record
    const lead = { name: name.trim(), phone: phone.trim(), interest, ts: Date.now() };
    try {
      const existing = JSON.parse(localStorage.getItem('leads') || '[]');
      existing.push(lead);
      localStorage.setItem('leads', JSON.stringify(existing));
    } catch {}
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="lead-form" className="bg-neutral-950 py-16 md:py-20">
        <div className="max-w-2xl mx-auto px-6 md:px-10 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-600/20 text-emerald-300">
            <CheckCircle className="w-7 h-7" />
          </div>
          <h3 className="mt-4 text-2xl md:text-3xl font-semibold text-white">Thanks! We’ll call you shortly</h3>
          <p className="mt-2 text-neutral-300">
            Our counselors will reach out to help you pick the perfect course. Keep your phone handy.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/15 text-white"
          >
            Submit another response
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="lead-form" className="relative bg-neutral-950 py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-white">Speak to a Course Advisor</h3>
            <p className="mt-3 text-neutral-300">
              Drop your number. We’ll call you back with guidance, fees, career paths and a tailored learning plan.
            </p>
            <ul className="mt-6 space-y-3 text-neutral-300 text-sm">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-fuchsia-500" />Portfolio-first approach</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />Live projects & studio mentorship</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />Placement guidance</li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 md:p-8">
            <div className="flex items-center gap-3 text-white">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-600 to-indigo-600">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold">Request a Call Back</h4>
                <p className="text-xs text-neutral-300">100% free counselling — usually within 10 minutes</p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm text-neutral-300 mb-1">Full name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full rounded-lg bg-neutral-900/60 text-white placeholder-neutral-500 border border-white/10 focus:border-fuchsia-500 outline-none px-4 py-2.5"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-neutral-300 mb-1">Phone number</label>
                <input
                  type="tel"
                  inputMode="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. +91 98765 43210"
                  className="w-full rounded-lg bg-neutral-900/60 text-white placeholder-neutral-500 border border-white/10 focus:border-fuchsia-500 outline-none px-4 py-2.5"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-neutral-300 mb-1">Area of interest</label>
                <select
                  className="w-full rounded-lg bg-neutral-900/60 text-white border border-white/10 focus:border-fuchsia-500 outline-none px-4 py-2.5"
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                >
                  {interests.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            </div>

            {error && (
              <p className="mt-3 text-sm text-rose-300">{error}</p>
            )}

            <button
              type="submit"
              className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-fuchsia-600 to-indigo-600 hover:from-fuchsia-500 hover:to-indigo-500 text-white px-6 py-3 font-medium shadow-lg shadow-fuchsia-600/30 transition"
            >
              Get a call now
            </button>
            <p className="mt-3 text-xs text-neutral-400">
              By submitting, you agree to be contacted by our admissions team. We respect your privacy.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LeadCapture;
