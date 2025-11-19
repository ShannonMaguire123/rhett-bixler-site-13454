import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Download, Instagram, Music2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    // Submit to database
    const { error } = await supabase
      .from('contact_submissions')
      .insert([
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }
      ]);

    if (error) {
      console.error('Error submitting form:', error);
      toast.error("Failed to send message. Please try again.");
      return;
    }

    // Send email notification
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-contact-email`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
          }),
        }
      );

      if (!response.ok) {
        console.error('Failed to send email notification');
      }
    } catch (emailError) {
      console.error('Error sending email:', emailError);
      // Don't show error to user as the form was still saved
    }

    toast.success("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-8">Bookings & Contact</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-b from-card to-background border border-border rounded-[1.125rem] p-6 shadow-lg card-glow">
            <p className="text-foreground/90 mb-4">For bookings, promos, or press inquiries:</p>
            <div className="space-y-3 mb-6">
              <p className="text-foreground">
                <strong>Email:</strong>{" "}
                <a href="mailto:rhett@rhettbixler.com" className="text-primary hover:underline">
                  rhett@rhettbixler.com
                </a>
              </p>
              <p className="text-foreground">
                <strong>Press kit:</strong>{" "}
                <a href="/Rhett_Bixler_Press_Kit_2025.pdf" download className="text-primary hover:underline inline-flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Download PDF
                </a>
              </p>
            </div>
            <div className="flex flex-wrap gap-4 pt-4 border-t border-border">
              <a
                href="#"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
                <span>Instagram</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                aria-label="SoundCloud"
              >
                <Music2 className="w-5 h-5" />
                <span>SoundCloud</span>
              </a>
            </div>
          </div>
          <div className="bg-gradient-to-b from-card to-background border border-border rounded-[1.125rem] p-6 shadow-lg card-glow">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-foreground">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1.5 bg-input border-border"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-foreground">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1.5 bg-input border-border"
                />
              </div>
              <div>
                <Label htmlFor="message" className="text-foreground">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="mt-1.5 bg-input border-border resize-none"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-background font-semibold"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
