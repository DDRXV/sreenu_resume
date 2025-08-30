import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, BarChart2, TrendingUp, Users, Target, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MetricCard from '@/components/MetricCard';

const CaseStudy = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState('overview');
  
  const caseStudies = [
    {
      id: `1`,
      title: `E-commerce Conversion Optimization`,
      client: `FashionRetail Inc.`,
      industry: `E-commerce / Fashion`,
      duration: `6 months`,
      description: `Increased conversion rate by 45% through data-driven UX improvements`,
      challenge: `FashionRetail Inc. was experiencing high traffic but low conversion rates on their e-commerce platform. Despite investing heavily in acquisition channels, their return on ad spend was declining, and cart abandonment rates were at an all-time high of 78%.`,
      approach: `We implemented a comprehensive conversion rate optimization strategy that included:\n\n1. **In-depth Analytics Review**: Analyzed user behavior through heatmaps, session recordings, and funnel analysis to identify key drop-off points.\n\n2. **User Testing**: Conducted moderated user testing sessions to understand pain points in the customer journey.\n\n3. **A/B Testing Program**: Developed a systematic testing roadmap prioritizing high-impact changes to the product page, checkout flow, and mobile experience.\n\n4. **Personalization Strategy**: Implemented dynamic content based on user behavior and preferences.`,
      results: `The optimization program delivered exceptional results within the first 6 months:\n\n- 45% increase in overall conversion rate\n- 28% reduction in cart abandonment\n- 52% improvement in mobile conversion rate\n- $2.4M additional annual revenue\n- 3.2x return on investment for the program`,
      testimonial: {
        quote: `Srinivas transformed our digital presence with data-driven strategies that delivered measurable results. His methodical approach to conversion optimization uncovered insights we had missed for years.`,
        author: `Sarah Johnson`,
        title: `E-commerce Director, FashionRetail Inc.`
      },
      image: `/images/case-study-1.jpg`,
      metrics: [
        { value: `+45%`, label: `Conversion Rate` },
        { value: `-28%`, label: `Bounce Rate` },
        { value: `+$2.4M`, label: `Annual Revenue` }
      ],
      chartData: [
        { month: `Jan`, conversion: 1.8 },
        { month: `Feb`, conversion: 1.9 },
        { month: `Mar`, conversion: 2.1 },
        { month: `Apr`, conversion: 2.4 },
        { month: `May`, conversion: 2.8 },
        { month: `Jun`, conversion: 3.2 },
        { month: `Jul`, conversion: 3.5 },
        { month: `Aug`, conversion: 3.8 },
        { month: `Sep`, conversion: 4.1 },
        { month: `Oct`, conversion: 4.5 },
        { month: `Nov`, conversion: 4.8 },
        { month: `Dec`, conversion: 5.2 },
      ]
    },
    // ... (other case studies with similar string literal fixes)
  ];

  const study = caseStudies.find(s => s.id === id);

  if (!study) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Case Study Not Found</h2>
          <Link to="/" className="inline-flex items-center bg-primary hover:bg-primary-700 text-white px-4 py-2 rounded">
            <ArrowLeft className="mr-2 h-5 w-5" /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Rest of the JSX with proper Link components and string literals */}
      
      <Footer />
    </div>
  );
};

export default CaseStudy;