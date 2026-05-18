import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Briefcase, GraduationCap, MapPin, Users, Heart, Sprout, Award, Send, Upload } from 'lucide-react';

const Careers = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.position) return;
    
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: '', email: '', phone: '', position: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const whyJoinUs = [
    { icon: <Briefcase />, title: 'Real Industry Experience', desc: 'Work on cutting-edge solar projects and gain hands-on expertise.' },
    { icon: <Award />, title: 'Growth Opportunities', desc: 'We believe in promoting from within and continuous learning.' },
    { icon: <Sprout />, title: 'Sustainable Projects', desc: 'Make a direct impact on the environment with every project.' },
    { icon: <Heart />, title: 'Friendly Team', desc: 'Join a supportive culture that values collaboration and well-being.' },
  ];

  const internships = [
    { title: 'Solar Design Engineering Intern', duration: '6 Months', mode: 'Hybrid', skills: 'B.Tech EEE/ECE, AutoCAD, PVsyst', stipend: '₹10,000 - ₹15,000/mo' },
    { title: 'Solar Site Operations Intern', duration: '3-6 Months', mode: 'On-site', skills: 'B.Tech EEE, Project Management', stipend: '₹12,000/mo' },
    { title: 'Electrical Testing Intern', duration: '3 Months', mode: 'On-site', skills: 'Diploma/B.Tech EEE, Troubleshooting', stipend: '₹10,000/mo' },
    { title: 'Renewable Energy Research Intern', duration: '3-6 Months', mode: 'Hybrid', skills: 'B.Tech EEE/ECE, Analytical Skills', stipend: 'Performance Based' }
  ];

  const openings = [
    { title: 'Solar Site Engineer', location: 'Hyderabad, TS', experience: '2-4 Years', type: 'Full-time', desc: 'Lead installation teams, oversee electrical wiring, and ensure quality control on residential and commercial sites.' },
    { title: 'Senior Electrical Design Engineer', location: 'Hyderabad, TS', experience: '3-5 Years', type: 'Full-time', desc: 'Design large-scale grid-connected and off-grid solar PV systems, SLDs, and conduct shade analysis.' },
    { title: 'Installation & Commissioning Technician', location: 'Multiple Locations', experience: '1-3 Years', type: 'Full-time', desc: 'Perform physical installation, stringing, and commissioning of solar panels, inverters, and battery systems.' },
    { title: 'O&M Engineer (Operations & Maintenance)', location: 'Hyderabad, TS', experience: '2-4 Years', type: 'Full-time', desc: 'Conduct preventive and corrective maintenance of solar plants to ensure optimal energy generation.' }
  ];

  return (
    <div className="pt-24 pb-20 overflow-hidden bg-slate-50">
      
      {/* HERO SECTION */}
      <section className="relative pt-20 pb-32 px-6">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl mix-blend-multiply opacity-70 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl mix-blend-multiply opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-40 w-72 h-72 bg-emerald-400/20 rounded-full blur-3xl mix-blend-multiply opacity-70 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Careers at SNPS Solar</span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-secondary mb-6 leading-tight">
              Build Your Career in <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Renewable Energy</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Join SNPS Solar and help power a sustainable future. We are looking for passionate, driven, and innovative individuals to join our growing team. Whether you are an experienced professional or a recent graduate looking for hands-on internships, we have a place for you to make a real impact in the green energy sector.
            </p>
            <a href="#apply" className="btn-primary inline-flex items-center gap-2 text-lg">
              Apply Now <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* WHY JOIN US */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-secondary mb-4">Why Join Us</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">Discover the benefits and culture that make SNPS Solar a great place to grow your career.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyJoinUs.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {React.cloneElement(item.icon, { size: 28 })}
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR CORE VALUES */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-secondary mb-4">Our Core Values</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">The principles that guide everything we do at SNPS Solar.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Innovation First", desc: "We constantly seek new technologies and better ways to harness solar power efficiently." },
              { title: "Uncompromising Quality", desc: "From panels to installation, we never cut corners. Excellence is our baseline." },
              { title: "Customer Centricity", desc: "We build long-term relationships by putting our clients' needs at the heart of our solutions." }
            ].map((value, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm"
              >
                <div className="text-4xl font-black text-primary/20 mb-4">0{idx + 1}</div>
                <h3 className="text-xl font-bold text-secondary mb-3">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERNSHIP PROGRAMS */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-4xl font-black text-secondary mb-4">Internship Programs</h2>
            <p className="text-slate-600 text-lg">Kickstart your career with our hands-on internship programs.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {internships.map((internship, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-primary rounded-l-3xl"></div>
                <h3 className="text-xl font-bold text-secondary mb-4 pr-8">{internship.title}</h3>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <CheckCircle2 size={16} className="text-primary" />
                    <span><span className="font-semibold text-secondary">Duration:</span> {internship.duration}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <CheckCircle2 size={16} className="text-primary" />
                    <span><span className="font-semibold text-secondary">Mode:</span> {internship.mode}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <CheckCircle2 size={16} className="text-primary" />
                    <span><span className="font-semibold text-secondary">Skills:</span> {internship.skills}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <CheckCircle2 size={16} className="text-primary" />
                    <span><span className="font-semibold text-secondary">Stipend:</span> {internship.stipend}</span>
                  </div>
                </div>
                
                <a href="#apply" onClick={() => setFormState(prev => ({...prev, position: internship.title}))} className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary-dark transition-colors group">
                  Apply for Internship <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CURRENT OPENINGS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 flex justify-between items-end flex-wrap gap-4">
            <div>
              <h2 className="text-4xl font-black text-secondary mb-4">Current Openings</h2>
              <p className="text-slate-600 text-lg">Join our team of professionals driving the renewable energy revolution.</p>
            </div>
          </div>

          <div className="space-y-4">
            {openings.map((job, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-secondary mb-2">{job.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-4 font-medium">
                    <span className="flex items-center gap-1.5"><MapPin size={16} /> {job.location}</span>
                    <span className="flex items-center gap-1.5"><GraduationCap size={16} /> {job.experience}</span>
                    <span className="flex items-center gap-1.5"><Briefcase size={16} /> {job.type}</span>
                  </div>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">{job.desc}</p>
                </div>
                <div className="shrink-0">
                  <a href="#apply" onClick={() => setFormState(prev => ({...prev, position: job.title}))} className="w-full md:w-auto text-center block px-8 py-3 bg-secondary text-white font-bold rounded-full transition-all duration-300 hover:bg-primary hover:-translate-y-1 hover:shadow-lg">
                    Apply Now
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPANY CULTURE & GALLERY */}
      <section className="py-24 bg-secondary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 rounded-l-full blur-3xl translate-x-1/3"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Life at SNPS</span>
              <h2 className="text-4xl md:text-5xl font-black mb-6">Innovation & Green Energy Mission</h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-10">
                At SNPS Solar, we don't just build solar plants; we build a sustainable future. Our culture is rooted in innovation, collaboration, and a shared passion for protecting our planet. We empower our team to think big and create solutions that matter.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-black text-primary mb-2">50+</div>
                  <div className="text-slate-400 font-medium">Projects Completed</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-primary mb-2">20+</div>
                  <div className="text-slate-400 font-medium">Team Members</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-primary mb-2">100+</div>
                  <div className="text-slate-400 font-medium">Happy Clients</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-primary mb-2">3+</div>
                  <div className="text-slate-400 font-medium">Years of Excellence</div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <img src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Team collaborating" className="rounded-3xl shadow-2xl object-cover h-64 w-full" />
                <img src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Solar panel installation" className="rounded-3xl shadow-2xl object-cover h-48 w-full" />
              </div>
              <div className="space-y-4">
                <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Sustainable future" className="rounded-3xl shadow-2xl object-cover h-48 w-full" />
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Office culture" className="rounded-3xl shadow-2xl object-cover h-64 w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section id="apply" className="py-24 bg-slate-50 relative">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-secondary mb-4">Submit Your Application</h2>
            <p className="text-slate-600 text-lg">Take the first step towards an exciting career in solar energy.</p>
          </div>

          <div className="bg-white rounded-3xl md:rounded-[2.5rem] shadow-xl p-6 md:p-12 border border-slate-100 relative overflow-hidden">
            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-20 text-center flex flex-col items-center justify-center"
              >
                <div className="w-24 h-24 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={48} />
                </div>
                <h3 className="text-3xl font-black text-secondary mb-4">Application Sent!</h3>
                <p className="text-slate-600 text-lg max-w-md mx-auto">
                  Thank you for applying. Our HR team will review your application and get back to you soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Full Name *</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Email Address *</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formState.phone}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Position Applying For *</label>
                    <select 
                      name="position"
                      required
                      value={formState.position}
                      onChange={handleInputChange}
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none"
                    >
                      <option value="" disabled>Select a position...</option>
                      <optgroup label="Internships">
                        {internships.map(i => <option key={i.title} value={i.title}>{i.title}</option>)}
                      </optgroup>
                      <optgroup label="Full-Time Roles">
                        {openings.map(o => <option key={o.title} value={o.title}>{o.title}</option>)}
                      </optgroup>
                      <option value="General Application">General Application</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Cover Letter / Message</label>
                  <textarea 
                    name="message"
                    value={formState.message}
                    onChange={handleInputChange}
                    placeholder="Tell us why you'd be a great fit for this role..."
                    rows={4}
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                  ></textarea>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Resume Upload (Optional for now)</label>
                  <div className="w-full px-5 py-8 bg-slate-50 border-2 border-dashed border-slate-300 rounded-2xl flex flex-col items-center justify-center text-slate-500 hover:bg-slate-100 hover:border-primary transition-all cursor-pointer group">
                    <Upload size={32} className="mb-3 text-slate-400 group-hover:text-primary transition-colors" />
                    <span className="font-medium">Click to upload or drag & drop</span>
                    <span className="text-sm mt-1">PDF, DOCX up to 5MB</span>
                  </div>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300 ${isSubmitting ? 'bg-slate-200 text-slate-500 cursor-not-allowed' : 'bg-primary text-secondary hover:bg-primary-dark hover:shadow-xl hover:-translate-y-1 active:scale-95'}`}
                >
                  {isSubmitting ? 'Submitting...' : (
                    <>Send Application <Send size={20} /></>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-secondary mb-6 leading-tight">Ready to Shape the Future <br className="hidden md:block"/>with Solar Energy?</h2>
          <a href="#apply" className="btn-primary inline-flex text-lg sm:text-xl px-8 sm:px-10 py-4">
            Send Your Application
          </a>
        </div>
      </section>

    </div>
  );
};

export default Careers;
