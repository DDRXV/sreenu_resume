import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar1 as Calendar, Building, Award, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  skills: string[];
  expanded?: boolean;
}

const ExperienceTimeline = () => {
  const [experiences, setExperiences] = useState<Experience[]>([
  {
    id: 1,
    title: "Senior Digital Marketing Manager",
    company: "TechCorp Inc.",
    period: "2020 - Present",
    description: "Leading the digital marketing team in developing and executing comprehensive marketing strategies across multiple channels. Responsible for optimizing conversion rates, managing paid campaigns, and implementing data-driven improvements.",
    achievements: [
    "Increased e-commerce conversion rate by 45% through systematic A/B testing and UX improvements",
    "Reduced customer acquisition cost by 32% while maintaining lead quality",
    "Implemented advanced attribution modeling that improved ROAS by 28%",
    "Led the marketing strategy for two successful product launches"],

    skills: ["Conversion Optimization", "Performance Marketing", "A/B Testing", "Team Leadership", "Marketing Analytics"]
  },
  {
    id: 2,
    title: "Digital Marketing Specialist",
    company: "Growth Marketing Agency",
    period: "2017 - 2020",
    description: "Managed digital marketing campaigns for B2B and B2C clients across various industries. Specialized in lead generation, content marketing, and marketing automation.",
    achievements: [
    "Generated 127% more qualified leads for a SaaS client while reducing cost per lead",
    "Developed content strategy that increased organic traffic by 85% in 12 months",
    "Implemented marketing automation workflows that improved lead nurturing efficiency by 40%",
    "Managed $500K+ in annual digital advertising spend across multiple clients"],

    skills: ["Lead Generation", "Content Marketing", "Marketing Automation", "SEO", "PPC Advertising"]
  },
  {
    id: 3,
    title: "Marketing Coordinator",
    company: "E-commerce Solutions Ltd",
    period: "2015 - 2017",
    description: "Supported the marketing team in executing digital campaigns, managing social media presence, and analyzing marketing performance data.",
    achievements: [
    "Helped increase social media engagement by 65% through targeted content strategy",
    "Assisted in email marketing campaigns that generated $1.2M in revenue",
    "Conducted competitor analysis that informed successful product positioning",
    "Coordinated with design team to improve marketing creative performance"],

    skills: ["Social Media Marketing", "Email Marketing", "Market Research", "Analytics", "Project Coordination"]
  }]
  );

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const toggleExpand = (id: number) => {
    setExperiences(experiences.map((exp) =>
    exp.id === id ? { ...exp, expanded: !exp.expanded } : exp
    ));
  };

  return (
    <div ref={ref} className="timeline-container">
      <div className="timeline-line"></div>
      
      {experiences.map((experience, index) => {
        const isEven = index % 2 === 0;
        return (
          <motion.div
            key={experience.id}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="timeline-item">

            {isEven ?
            <>
                <div className="timeline-content">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-primary">{experience.title}</h3>
                    <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleExpand(experience.id)}
                    className="p-1 h-auto">

                      {experience.expanded ?
                    <ChevronUp className="h-5 w-5" /> :
                    <ChevronDown className="h-5 w-5" />
                    }
                    </Button>
                  </div>
                  <div className="flex items-center text-muted-foreground mb-3">
                    <Building className="h-4 w-4 mr-1" />
                    <span className="mr-3">{experience.company}</span>
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{experience.period}</span>
                  </div>
                  <p className="mb-4">{experience.description}</p>
                  
                  {experience.expanded &&
                <div className="mt-4">
                      <h4 className="font-semibold mb-2 flex items-center">
                        <Award className="h-4 w-4 mr-1 text-primary" /> Key Achievements
                      </h4>
                      <ul className="list-disc pl-5 mb-4 space-y-1">
                        {experience.achievements.map((achievement, i) =>
                    <li key={i}>{achievement}</li>
                    )}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {experience.skills.map((skill, i) =>
                    <Badge key={i} variant="secondary" className="skill-badge">
                            {skill}
                          </Badge>
                    )}
                      </div>
                    </div>
                }
                </div>
                <div className="timeline-marker"></div>
                <div className="w-[45%]"></div>
              </> :

            <>
                <div className="w-[45%]"></div>
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-primary">{experience.title}</h3>
                    <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleExpand(experience.id)}
                    className="p-1 h-auto">

                      {experience.expanded ?
                    <ChevronUp className="h-5 w-5" /> :
                    <ChevronDown className="h-5 w-5" />
                    }
                    </Button>
                  </div>
                  <div className="flex items-center text-muted-foreground mb-3">
                    <Building className="h-4 w-4 mr-1" />
                    <span className="mr-3">{experience.company}</span>
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{experience.period}</span>
                  </div>
                  <p className="mb-4">{experience.description}</p>
                  
                  {experience.expanded &&
                <div className="mt-4">
                      <h4 className="font-semibold mb-2 flex items-center">
                        <Award className="h-4 w-4 mr-1 text-primary" /> Key Achievements
                      </h4>
                      <ul className="list-disc pl-5 mb-4 space-y-1">
                        {experience.achievements.map((achievement, i) =>
                    <li key={i}>{achievement}</li>
                    )}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {experience.skills.map((skill, i) =>
                    <Badge key={i} variant="secondary" className="skill-badge">
                            {skill}
                          </Badge>
                    )}
                      </div>
                    </div>
                }
                </div>
              </>
            }
          </motion.div>);

      })}
    </div>);

};

export default ExperienceTimeline;