"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, Send, CheckCircle2 } from "lucide-react";
import { services } from "@/data/services";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, "Tell us a little more about the job (min. 10 characters)"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(values: ContactFormValues) {
    // Wire this up to your backend / email service of choice.
    // For now we simulate a network call so the success state is visible.
    await new Promise((resolve) => setTimeout(resolve, 700));
    console.log("Contact form submission:", values);
    setSubmitted(true);
    reset();
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-start gap-3 border border-gold/30 bg-bg-warm p-8"
      >
        <CheckCircle2 className="h-8 w-8 text-gold" />
        <h3 className="font-display text-xl font-semibold text-navy">Message sent.</h3>
        <p className="text-steel">
          Thanks for reaching out — we&apos;ll get back to you shortly to schedule a
          site visit or assessment.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-2 text-sm font-medium text-gold underline-offset-4 hover:underline"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-navy">
            Full name
          </label>
          <input
            id="name"
            type="text"
            {...register("name")}
            className="w-full border border-navy/15 bg-white px-3.5 py-2.5 text-[15px] text-ink outline-none transition-colors focus:border-gold"
            placeholder="Your name"
          />
          {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-navy">
            Email address
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className="w-full border border-navy/15 bg-white px-3.5 py-2.5 text-[15px] text-ink outline-none transition-colors focus:border-gold"
            placeholder="you@example.com"
          />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-navy">
            Phone <span className="text-steel">(optional)</span>
          </label>
          <input
            id="phone"
            type="tel"
            {...register("phone")}
            className="w-full border border-navy/15 bg-white px-3.5 py-2.5 text-[15px] text-ink outline-none transition-colors focus:border-gold"
            placeholder="+971 5x xxx xxxx"
          />
        </div>

        <div>
          <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-navy">
            Service needed
          </label>
          <select
            id="service"
            {...register("service")}
            className="w-full border border-navy/15 bg-white px-3.5 py-2.5 text-[15px] text-ink outline-none transition-colors focus:border-gold"
            defaultValue=""
          >
            <option value="" disabled>
              Select a service
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-navy">
          Tell us about the job
        </label>
        <textarea
          id="message"
          rows={5}
          {...register("message")}
          className="w-full border border-navy/15 bg-white px-3.5 py-2.5 text-[15px] text-ink outline-none transition-colors focus:border-gold"
          placeholder="Site location, the issue you're facing, and your timeline…"
        />
        {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center gap-2 bg-gold px-7 py-3 text-sm font-semibold text-navy transition-colors hover:bg-gold-light disabled:opacity-60"
      >
        <AnimatePresence mode="wait" initial={false}>
          {isSubmitting ? (
            <motion.span key="loading" className="flex items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <Loader2 className="h-4 w-4 animate-spin" /> Sending&hellip;
            </motion.span>
          ) : (
            <motion.span key="idle" className="flex items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <Send className="h-4 w-4" /> Send Message
            </motion.span>
          )}
        </AnimatePresence>
      </button>
    </form>
  );
}
