import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

interface MetricCardProps {
  value: string;
  label: string;
}

const MetricCard = ({ value, label }: MetricCardProps) => {
  return (
    <Card className="metric-card border-border">
      <CardContent className="p-4">
        <motion.span 
          className="metric-value"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {value}
        </motion.span>
        <span className="metric-label">{label}</span>
      </CardContent>
    </Card>
  );
};

export default MetricCard;
