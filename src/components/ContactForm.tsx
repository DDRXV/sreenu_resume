import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, Loader as Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage } from
'@/components/ui/form';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' })
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    // Simulate API call
    try {
      // In a real application, you would send the data to your backend
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.success("Message sent successfully! We'll get back to you soon.");
      form.reset();
    } catch (error) {
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="border-border">
      <CardContent className="p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) =>
                <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                      placeholder="Your name"
                      {...field}
                      className="contact-form-input" />

                    </FormControl>
                    <FormMessage />
                  </FormItem>
                } />

              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) =>
                <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                      type="email"
                      placeholder="Your email address"
                      {...field}
                      className="contact-form-input" />

                    </FormControl>
                    <FormMessage />
                  </FormItem>
                } />

            </div>
            
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) =>
              <FormItem>
                  <FormLabel>Subject</FormLabel>
                  <FormControl>
                    <Input
                    placeholder="What is this regarding?"
                    {...field}
                    className="contact-form-input" />

                  </FormControl>
                  <FormMessage />
                </FormItem>
              } />

            
            <FormField
              control={form.control}
              name="message"
              render={({ field }) =>
              <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                    placeholder="Your message"
                    rows={5}
                    {...field}
                    className="contact-form-input resize-none" />

                  </FormControl>
                  <FormMessage />
                </FormItem>
              } />

            
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-primary-700 text-white">

              {isSubmitting ?
              <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </> :

              <>
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </>
              }
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>);

};

export default ContactForm;