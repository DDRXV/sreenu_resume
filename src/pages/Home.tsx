import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, ChevronDown, Mail, Phone, Linkedin, Github, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import CaseStudyCard from '@/components/CaseStudyCard';
import MetricCard from '@/components/MetricCard';
import SkillsMatrix from '@/components/SkillsMatrix';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import ContactForm from '@/components/ContactForm';

const Home = () => {
  const [activeTab, setActiveTab] = useState('summary');
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const caseStudiesRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [metricsRef, metricsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const caseStudies = [
    {
      id: 1,
      title: 'E-commerce Conversion Optimization',
      description: 'Increased conversion rate by 45% through data-driven UX improvements',
      image: '/images/case-study-1.jpg',
      metrics: [
        { value: '+45%', label: 'Conversion Rate' },
        { value: '-28%', label: 'Bounce Rate' },
        { value: '+$2.4M', label: 'Annual Revenue' }
      ]
    },
    {
      id: 2,
      title: 'B2B Lead Generation Campaign',
      description: 'Generated 127% more qualified leads while reducing cost per acquisition',
      image: '/images/case-study-2.jpg',
      metrics: [
        { value: '+127%', label: 'Qualified Leads' },
        { value: '-32%', label: 'Cost per Lead' },
        { value: '+$1.8M', label: 'Pipeline Value' }
      ]
    },
    {
      id: 3,
      title: 'SaaS Product Launch Strategy',
      description: 'Executed multi-channel launch that exceeded first-year targets by 78%',
      image: '/images/case-study-3.jpg',
      metrics: [
        { value: '+78%', label: 'Target Achievement' },
        { value: '12,500+', label: 'New Users' },
        { value: '4.8/5', label: 'User Satisfaction' }
      ]
    }
  ];

  const keyMetrics = [
    { value: '+127%', label: 'Average Conversion Increase' },
    { value: '-32%', label: 'Cost per Acquisition Reduction' },
    { value: '+$4.2M', label: 'Revenue Generated' },
    { value: '15+', label: 'Successful Campaigns' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header 
        onNavigate={{
          about: () => scrollToSection(aboutRef),
          experience: () => scrollToSection(experienceRef),
          caseStudies: () => scrollToSection(caseStudiesRef),
          skills: () => scrollToSection(skillsRef),
          testimonials: () => scrollToSection(testimonialsRef),
          contact: () => scrollToSection(contactRef)
        }}
      />
      
      {/* Hero Section */}
      <section 
        ref={heroRef} 
        className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-primary-50 to-secondary py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              Srinivas N
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-8">
              Digital Marketing Manager
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
              Driving measurable business growth through data-driven digital marketing strategies. 
              Specialized in conversion optimization, lead generation, and ROI-focused campaigns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => scrollToSection(caseStudiesRef)}
                className="bg-primary hover:bg-primary-700 text-white"
              >
                View Case Studies <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => scrollToSection(contactRef)}
                className="border-primary text-primary hover:bg-primary-50"
              >
                Contact Me
              </Button>
            </div>
          </motion.div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown 
              className="h-8 w-8 text-primary cursor-pointer" 
              onClick={() => scrollToSection(aboutRef)}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section 
        ref={aboutRef} 
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-heading text-center">About Me</h2>
          <Tabs 
            defaultValue="summary" 
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full max-w-4xl mx-auto"
          >
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="summary">Summary</TabsTrigger>
              <TabsTrigger value="approach">Approach</TabsTrigger>
              <TabsTrigger value="expertise">Expertise</TabsTrigger>
            </TabsList>
            <TabsContent value="summary" className="text-lg">
              <p className="mb-4">
                With over 8 years of experience in digital marketing, I specialize in creating data-driven strategies 
                that deliver measurable results. My background spans across e-commerce, SaaS, and B2B industries, 
                where I&apos;ve consistently exceeded KPIs and business objectives.
              </p>
              <p>
                I believe in a holistic approach to digital marketing that combines analytical thinking with creative 
                execution. My focus is always on ROI and business impact, ensuring that every marketing dollar 
                spent contributes to growth and profitability.
              </p>
            </TabsContent>
            <TabsContent value="approach" className="text-lg">
              <p className="mb-4">
                My approach to digital marketing is built on three core principles:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Data-First Decision Making:</strong> Every strategy begins with thorough research and ends with comprehensive analysis.</li>
                <li><strong>Customer-Centric Execution:</strong> Understanding the target audience is key to creating campaigns that resonate and convert.</li>
                <li><strong>Continuous Optimization:</strong> Marketing is never {`done`} - I constantly test, learn, and refine to improve performance.</li>
              </ul>
              <p>
                This methodology has consistently delivered exceptional results across various industries and marketing objectives.
              </p>
            </TabsContent>
            <TabsContent value="expertise" className="text-lg">
              <p className="mb-4">
                My areas of expertise include:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Conversion Rate Optimization:</strong> Turning visitors into customers through data-driven UX improvements.</li>
                <li><strong>Performance Marketing:</strong> Managing high-ROI paid campaigns across search, social, and display channels.</li>
                <li><strong>Marketing Analytics:</strong> Implementing robust tracking and reporting systems to measure true business impact.</li>
                <li><strong>Content Strategy:</strong> Creating content that educates, engages, and converts throughout the customer journey.</li>
                <li><strong>Marketing Automation:</strong> Building scalable systems that nurture leads and drive conversions.</li>
              </ul>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Key Metrics Section */}
      <section 
        ref={metricsRef} 
        className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary"
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={metricsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {keyMetrics.map((metric, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={metricsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <MetricCard value={metric.value} label={metric.label} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Timeline Section */}
      <section 
        ref={experienceRef} 
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-heading text-center">Professional Experience</h2>
          <ExperienceTimeline />
        </div>
      </section>

      {/* Case Studies Section */}
      <section 
        ref={caseStudiesRef} 
        className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary"
      >
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-heading text-center">Case Studies</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Explore some of my most successful digital marketing campaigns and their measurable results.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <CaseStudyCard 
                key={study.id}
                id={study.id}
                title={study.title}
                description={study.description}
                image={study.image}
                metrics={study.metrics}
              />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button 
              size="lg" 
              as={Link} 
              to="/contact"
              className="bg-primary hover:bg-primary-700 text-white"
            >
              Discuss Your Project <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section 
        ref={skillsRef} 
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-heading text-center">Skills & Expertise</h2>
          <SkillsMatrix />
        </div>
      </section>

      {/* Testimonials Section */}
      <section 
        ref={testimonialsRef} 
        className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary"
      >
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-heading text-center">Client Testimonials</h2>
          <TestimonialCarousel />
        </div>
      </section>

      {/* Contact Section */}
      <section 
        ref={contactRef} 
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-heading text-center">Get In Touch</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-primary mr-3" />
                    <a href="mailto:srinu.liferocks@gmail.com" className="text-foreground hover:text-primary transition-colors">
                      srinu.liferocks@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-primary mr-3" />
                    <a href="tel:+919036162339" className="text-foreground hover:text-primary transition-colors">
                      +91 9036162339
                    </a>
                  </div>
                  <div className="pt-6">
                    <h4 className="text-sm font-medium text-muted-foreground mb-3">Connect with me</h4>
                    <div className="flex space-x-4">
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                        <Twitter className="h-5 w-5" />
                      </a>
                      <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                        <Github className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
