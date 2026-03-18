import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useSubmitContactForm } from "../hooks/useQueries";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function ContactModal({ open, onClose }: Props) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const mutation = useSubmitContactForm();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    try {
      await mutation.mutateAsync({
        id: crypto.randomUUID(),
        name: form.name,
        email: form.email,
        company: form.company,
        message: form.message,
        timestamp: BigInt(Date.now()) * 1000000n,
      });
      setSubmitted(true);
    } catch {
      toast.error("Failed to send message. Please try again.");
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setForm({ name: "", email: "", company: "", message: "" });
      setSubmitted(false);
    }, 300);
  };

  return (
    <Dialog open={open} onOpenChange={(v) => !v && handleClose()}>
      <DialogContent
        data-ocid="contact.dialog"
        className="max-w-lg rounded-none border-none p-0 overflow-hidden"
      >
        {/* Header strip */}
        <div className="section-navy px-8 py-6">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl font-bold text-white">
              Get in Touch
            </DialogTitle>
            <p className="text-white/60 text-sm mt-1">
              We'd love to hear from you. Fill in the form and we'll be in touch
              shortly.
            </p>
          </DialogHeader>
        </div>

        <div className="px-8 py-6">
          {submitted ? (
            <div className="flex flex-col items-center py-8 text-center">
              <CheckCircle className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="font-display text-xl font-bold text-primary mb-2">
                Message Sent!
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                Thank you for reaching out. Our team will contact you within 24
                hours.
              </p>
              <Button
                data-ocid="contact.close_button"
                onClick={handleClose}
                className="bg-primary hover:bg-primary/90 text-white rounded-none px-8"
              >
                Close
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label
                    htmlFor="name"
                    className="text-xs uppercase tracking-wider font-semibold"
                  >
                    Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    data-ocid="contact.input"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="rounded-none border-border focus-visible:ring-primary"
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <Label
                    htmlFor="email"
                    className="text-xs uppercase tracking-wider font-semibold"
                  >
                    Email *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    data-ocid="contact.input"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="rounded-none border-border focus-visible:ring-primary"
                    required
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label
                  htmlFor="company"
                  className="text-xs uppercase tracking-wider font-semibold"
                >
                  Company
                </Label>
                <Input
                  id="company"
                  name="company"
                  data-ocid="contact.input"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Your company"
                  className="rounded-none border-border focus-visible:ring-primary"
                />
              </div>
              <div className="space-y-1.5">
                <Label
                  htmlFor="message"
                  className="text-xs uppercase tracking-wider font-semibold"
                >
                  Message *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  data-ocid="contact.input"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  rows={4}
                  className="rounded-none border-border focus-visible:ring-primary resize-none"
                  required
                />
              </div>
              <div className="flex gap-3 pt-2">
                <Button
                  type="submit"
                  data-ocid="contact.submit_button"
                  disabled={mutation.isPending}
                  className="flex-1 bg-primary hover:bg-accent-gold hover:text-primary text-white font-semibold rounded-none transition-all duration-200"
                >
                  {mutation.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  data-ocid="contact.close_button"
                  onClick={handleClose}
                  className="rounded-none border-border"
                >
                  Cancel
                </Button>
              </div>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
