
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Camera, Users, Heart } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: Camera, number: "25+", label: "Years Experience" },
    { icon: Users, number: "500+", label: "Events Covered" },
    { icon: Award, number: "100%", label: "Client Satisfaction" },
    { icon: Heart, number: "∞", label: "Passion for Photography" },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black/0 to-black/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-montserrat">
            About <span className="text-gradient">Our Studio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Capturing life's precious moments with passion and precision
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-effect p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">Meet Venkatesh</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                With over 25 years of experience in the photography and videography industry, 
                Venkatesh has been the creative force behind Leo HD Video & Studio. His passion 
                for capturing life's most precious moments has made him one of Cuddalore's most 
                trusted photographers.
              </p>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                Having covered more than 500 events, from intimate weddings to grand celebrations, 
                Venkatesh brings a unique blend of traditional photography techniques and modern 
                digital innovation to every project.
              </p>

              <div className="flex items-center gap-4 text-gold-400">
                <Award className="h-8 w-8" />
                <div>
                  <p className="font-semibold">Award-Winning Photographer</p>
                  <p className="text-sm text-gray-400">Recognized for excellence in wedding photography</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="glass-effect p-6 rounded-xl text-center hover-scale"
              >
                <stat.icon className="h-12 w-12 text-gold-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="glass-effect p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              "To preserve your most cherished memories through the art of photography and videography, 
              ensuring that every smile, every tear of joy, and every precious moment is captured in 
              stunning high definition for generations to come."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
