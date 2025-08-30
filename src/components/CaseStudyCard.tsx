import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Metric {
  value: string;
  label: string;
}

interface CaseStudyCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  metrics: Metric[];
}

const CaseStudyCard = ({ id, title, description, image, metrics }: CaseStudyCardProps) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="case-study-card group"
    >
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="case-study-image group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div className="space-y-2">
            {metrics.map((metric, index) => (
              <div key={index} className="flex items-center space-x-2">
                <span className="text-white font-bold">{metric.value}</span>
                <span className="text-white/80 text-sm">{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="case-study-content">
        <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <Button 
          variant="outline" 
          size="sm" 
          asChild
          className="border-primary text-primary hover:bg-primary-50"
        >
          <Link to={`/case-study/${id}`}>
            View Case Study <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </motion.div>
  );
};

export default CaseStudyCard;
