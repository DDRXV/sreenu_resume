import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  title: string;
  company: string;
  image?: string;
}

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "Srinivas transformed our digital presence with data-driven strategies that delivered measurable results. His methodical approach to conversion optimization uncovered insights we had missed for years.",
      author: "Sarah Johnson",
      title: "E-commerce Director",
      company: "FashionRetail Inc.",
      image: "/images/testimonial-1.jpg"
    },
    {
      id: 2,
      quote: "Working with Srinivas was a game-changer for our lead generation efforts. He didn't just improve our metrics - he transformed how we think about lead quality and sales alignment.",
      author: "Michael Chen",
      title: "VP of Marketing",
      company: "TechSolutions Corp",
      image: "/images/testimonial-2.jpg"
    },
    {
      id: 3,
      quote: "Srinivas took our product launch from 'another SaaS tool' to a genuine market event. His strategic approach and attention to detail ensured we made maximum impact with our limited resources.",
      author: "Priya Patel",
      title: "Founder & CEO",
      company: "CloudWorks Inc.",
      image: "/images/testimonial-3.jpg"
    }
  ];

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="relative h-[300px] md:h-[250px] overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: 'tween', duration: 0.5 }}
            className="absolute w-full h-full"
          >
            <Card className="testimonial-card h-full border-border">
              <CardContent className="p-6 md:p-8 h-full flex flex-col justify-between">
                <div>
                  <Quote className="h-8 w-8 text-primary/20 mb-4" />
                  <p className="italic text-lg mb-6">{`${testimonials[currentIndex].quote}`}</p>
                </div>
                <div className="flex items-center">
                  {testimonials[currentIndex].image && (
                    <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                      <img 
                        src={testimonials[currentIndex].image} 
                        alt={testimonials[currentIndex].author} 
                        className="h-full w-full object-cover"
                      />
                    </div>
                  )}
                  <div>
                    <p className="font-medium">{testimonials[currentIndex].author}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonials[currentIndex].title}, {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
      
      <div className="flex justify-center mt-6 space-x-2">
        <Button 
          variant="outline" 
          size="icon" 
          onClick={prevTestimonial}
          className="rounded-full border-border hover:bg-muted"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        {testimonials.map((_, index) => (
          <Button 
            key={index}
            variant="ghost" 
            size="sm" 
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`w-2 h-2 p-0 rounded-full ${index === currentIndex ? 'bg-primary' : 'bg-muted hover:bg-primary/50'}`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
        <Button 
          variant="outline" 
          size="icon" 
          onClick={nextTestimonial}
          className="rounded-full border-border hover:bg-muted"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
