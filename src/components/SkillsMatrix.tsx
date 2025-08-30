import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

interface Skill {
  name: string;
  proficiency: number;
  description?: string;
}

interface SkillCategory {
  id: string;
  name: string;
  skills: Skill[];
}

const SkillsMatrix = () => {
  const [activeTab, setActiveTab] = useState('marketing');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const skillCategories: SkillCategory[] = [
    {
      id: 'marketing',
      name: 'Digital Marketing',
      skills: [
        { name: 'Conversion Rate Optimization', proficiency: 95, description: 'Expert in improving conversion rates through data-driven testing and optimization' },
        { name: 'Performance Marketing', proficiency: 90, description: 'Highly skilled in managing paid campaigns across search, social, and display channels' },
        { name: 'Content Marketing', proficiency: 85, description: 'Experienced in creating strategic content that drives engagement and conversions' },
        { name: 'SEO Strategy', proficiency: 80, description: 'Strong knowledge of technical SEO, keyword research, and content optimization' },
        { name: 'Email Marketing', proficiency: 85, description: 'Proficient in email campaign strategy, segmentation, and automation' }
      ]
    },
    {
      id: 'analytics',
      name: 'Analytics & Data',
      skills: [
        { name: 'Google Analytics', proficiency: 95, description: 'Expert in implementation, analysis, and extracting actionable insights' },
        { name: 'A/B Testing', proficiency: 90, description: 'Experienced in designing and analyzing statistically significant tests' },
        { name: 'Data Visualization', proficiency: 85, description: 'Skilled in creating clear, actionable dashboards and reports' },
        { name: 'Attribution Modeling', proficiency: 80, description: 'Knowledge of multi-touch attribution and customer journey analysis' },
        { name: 'SQL & Data Analysis', proficiency: 75, description: 'Capable of querying and analyzing marketing data directly' }
      ]
    },
    {
      id: 'tools',
      name: 'Marketing Tools',
      skills: [
        { name: 'Google Ads', proficiency: 90, description: 'Expert in campaign structure, optimization, and advanced targeting' },
        { name: 'Facebook Ads Manager', proficiency: 85, description: 'Skilled in audience targeting, creative testing, and campaign optimization' },
        { name: 'HubSpot', proficiency: 80, description: 'Experienced with marketing automation, CRM, and lead nurturing' },
        { name: 'SEMrush / Ahrefs', proficiency: 85, description: 'Proficient in competitive analysis and SEO research tools' },
        { name: 'Hotjar / Fullstory', proficiency: 90, description: 'Expert in user behavior analysis and qualitative research' }
      ]
    },
    {
      id: 'strategy',
      name: 'Strategy & Leadership',
      skills: [
        { name: 'Marketing Strategy', proficiency: 90, description: 'Skilled in developing comprehensive, data-driven marketing strategies' },
        { name: 'Team Leadership', proficiency: 85, description: 'Experience managing and developing high-performing marketing teams' },
        { name: 'Project Management', proficiency: 80, description: 'Proficient in managing complex marketing projects and campaigns' },
        { name: 'Stakeholder Communication', proficiency: 90, description: 'Strong ability to communicate results and strategy to executives' },
        { name: 'Budget Management', proficiency: 85, description: 'Experienced in optimizing marketing spend for maximum ROI' }
      ]
    }
  ];

  const getSkillLevel = (proficiency: number): string => {
    if (proficiency >= 90) return 'Expert';
    if (proficiency >= 80) return 'Advanced';
    if (proficiency >= 70) return 'Proficient';
    if (proficiency >= 50) return 'Intermediate';
    return 'Beginner';
  };

  const getSkillColor = (proficiency: number): string => {
    if (proficiency >= 90) return 'bg-primary';
    if (proficiency >= 80) return 'bg-primary-600';
    if (proficiency >= 70) return 'bg-primary-500';
    if (proficiency >= 50) return 'bg-primary-400';
    return 'bg-primary-300';
  };

  return (
    <div ref={ref} className="w-full max-w-4xl mx-auto">
      <Tabs 
        defaultValue="marketing" 
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full"
      >
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
          {skillCategories.map(category => (
            <TabsTrigger key={category.id} value={category.id}>
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {skillCategories.map(category => (
          <TabsContent key={category.id} value={category.id} className="space-y-8">
            {category.skills.map((skill, index) => (
              <motion.div 
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">{skill.name}</h3>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </div>
                  <Badge variant="outline" className="ml-2">
                    {getSkillLevel(skill.proficiency)}
                  </Badge>
                </div>
                <div className="relative">
                  <Progress 
                    value={skill.proficiency} 
                    className="h-2"
                    indicatorClassName={getSkillColor(skill.proficiency)}
                  />
                </div>
              </motion.div>
            ))}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default SkillsMatrix;
