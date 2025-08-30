import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, Linkedin, Github, Twitter, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-50 to-secondary">
        <div className="container mx-auto max-w-6xl">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary-700 mb-6 transition-colors">
            <ArrowLeft className="mr-2 h-5 w-5" /> Back to home
          </Link>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Get In Touch
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-8">
              Have a project in mind or want to discuss how data-driven digital marketing can help your business? I&apos;d love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-primary mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <a href="mailto:srinu.liferocks@gmail.com" className="text-foreground hover:text-primary transition-colors">
                      srinu.liferocks@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-primary mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <a href="tel:+919036162339" className="text-foreground hover:text-primary transition-colors">
                      +91 9036162339
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-muted-foreground">San Francisco, California</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-primary mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium">Availability</h3>
                    <p className="text-muted-foreground">Monday - Friday, 9AM - 5PM PST</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-lg font-medium mb-4">Connect with me</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary text-foreground hover:bg-primary hover:text-white transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary text-foreground hover:bg-primary hover:text-white transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary text-foreground hover:bg-primary hover:text-white transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </div>
              
              <Card className="border-border bg-secondary">
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-4">How I Can Help</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                      <span>Digital marketing strategy development</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                      <span>Conversion rate optimization</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                      <span>Performance marketing campaigns</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                      <span>Marketing analytics implementation</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                      <span>Digital marketing training and workshops</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
