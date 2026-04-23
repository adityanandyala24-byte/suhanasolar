import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

const Team = () => {
  const leadership = [
    { name: "Sri. J.V. Krishna Prasad", role: "Honorary President", image: "/vk-prasad.jpeg", objectPosition: "center 15%" },
    { name: "Sri. Sk Sabeer Basha", edu: "B.Tech (EEE)", role: "Managing Director", image: "/sabeer.jpeg", objectPosition: "center 10%", scale: 1.1 },
    { name: "Sri. Sk Salman Basha", edu: "M.Tech (PhD)", role: "Managing Partner", image: "/basha.jpeg", objectPosition: "center 10%" }
  ];

  const staff = [
    { name: "Mr. Sk Kamal", role: "Business Development Manager", image: "/kamal.jpeg", objectPosition: "center 15%" },
    { name: "Mr. Sk Imran", role: "Manager (Stores)", image: "/imran.png", objectPosition: "center 10%" },
    { name: "Mr. M. Satish Kumar", role: "Accountant" },
    { name: "Mr. Sk Mastan", role: "Manager (Installations)", image: "/mastan.jpeg", scale: 1.3, objectPosition: "center 20%" },
    { name: "Mr. Sk. Shabbir DEEE", role: "Technical Advisor", image: "/shabbir.jpeg", objectPosition: "center top" },
    { name: "Mr. Manoj Prabhakar", role: "Team Leader (Technical)", image: "/manoj.jpeg", objectPosition: "center top" },
    { name: "Mr. Srinu", role: "Transport Supervisor", image: "/srinu.jpeg", objectPosition: "center top" }
  ];

  // For infinite scroll effect, we duplicate the staff array
  const scrollingStaff = [...staff, ...staff];

  return (
    <section id="team" className="py-8 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-[10px] tracking-widest uppercase mb-3">
          Our Team
        </div>
        
        <h2 className="text-3xl md:text-4xl font-black text-secondary tracking-tight mb-1">
          Meet the <span className="text-primary italic">Experts</span>
        </h2>
        
        <p className="text-slate-500 max-w-2xl mx-auto mb-6 text-sm md:text-base">
          The brilliant minds driving the solar revolution forward with decades of combined experience.
        </p>

        {/* Leadership - 2 side by side */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-8">
          {leadership.map((member, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center group w-48 md:w-56 cursor-pointer"
            >
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-slate-50 mb-3 border-4 border-primary/5 shadow-lg flex items-center justify-center overflow-hidden relative group-hover:border-primary/20 group-hover:scale-105 transition-all duration-500">
                {member.image ? (
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform group-hover:scale-[1.15]" 
                    style={{ 
                      objectPosition: member.objectPosition || 'center',
                      transform: `scale(${member.scale || 1})`
                    }}
                  />
                ) : (
                  <User size={48} className="text-slate-200 group-hover:text-primary/40 transition-colors" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-lg md:text-xl font-black text-secondary mb-0.5">{member.name}</h3>
              {member.edu && <span className="text-[10px] font-bold text-slate-400 mb-1.5">{member.edu}</span>}
              <span className="px-4 py-1 bg-primary text-secondary text-[9px] font-black rounded-full uppercase tracking-widest mt-0.5 shadow-md shadow-primary/10">{member.role}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scrolling Staff Section */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />
        
        <motion.div 
          className="flex gap-10 items-start py-6"
          animate={{
            x: ["0%", "-50%"]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ width: "fit-content" }}
        >
          {scrollingStaff.map((member, i) => (
            <div key={i} className="flex flex-col items-center group min-w-[160px] md:min-w-[200px] cursor-pointer">
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-slate-50 mb-4 border-2 border-slate-100 shadow-md flex items-center justify-center overflow-hidden group-hover:-translate-y-1.5 group-hover:border-primary/40 transition-all duration-500 group-hover:shadow-primary/5">
                {member.image ? (
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform group-hover:scale-[1.15]" 
                    style={{ 
                      objectPosition: member.objectPosition || 'center',
                      transform: `scale(${member.scale || 1})`
                    }}
                  />
                ) : (
                  <User size={36} className="text-slate-200 group-hover:text-primary/60 transition-colors" />
                )}
              </div>
              <h4 className="text-base font-bold text-secondary mb-0 whitespace-nowrap">{member.name}</h4>
              <span className="text-[9px] font-bold text-primary/80 text-center uppercase tracking-wide">{member.role}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
