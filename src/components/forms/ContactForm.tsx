"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FaWhatsapp } from "react-icons/fa";
import { services } from "@/data/services";
import { company, whatsappHref } from "@/data/company";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name"),
  phone: z.string().trim().min(8, "Please enter a contact number"),
  email: z.union([z.literal(""), z.string().trim().email("Enter a valid email address")]).optional(),
  service: z.string().optional(),
  message: z.string().trim().min(10, "Please add a few details about the job"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

// Underline-only fields: no boxes, the line turns gold on focus.
const inputCls =
  "w-full border-0 border-b-2 border-navy/15 bg-transparent px-0 py-2.5 text-[15px] text-ink transition-colors duration-300 placeholder:text-steel/60 focus:border-gold focus:outline-none focus:ring-0 aria-[invalid=true]:border-red-600";
const labelCls = "mb-1.5 block text-sm font-medium text-navy";
const errorCls = "mt-1 text-xs text-red-700";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", phone: "", email: "", service: "", message: "" },
  });

  function onSubmit(values: ContactFormValues) {
    const lines = [
      `Hello ${company.tradeName},`,
      "",
      "I would like to request a quotation.",
      "",
      `*Name:* ${values.name}`,
      `*Phone:* ${values.phone}`,
      values.email ? `*Email:* ${values.email}` : null,
      `*Service:* ${values.service || "Not specified"}`,
      "",
      "*Job details:*",
      values.message,
    ].filter((l): l is string => l !== null);

    window.open(whatsappHref(lines.join("\n")), "_blank", "noopener,noreferrer");
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-7">
      <div className="grid gap-7 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelCls}>
            Full name
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            aria-invalid={!!errors.name}
            {...register("name")}
            className={inputCls}
          />
          {errors.name && <p className={errorCls}>{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="phone" className={labelCls}>
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            aria-invalid={!!errors.phone}
            {...register("phone")}
            className={inputCls}
            placeholder="+971 5x xxx xxxx"
          />
          {errors.phone && <p className={errorCls}>{errors.phone.message}</p>}
        </div>
      </div>

      <div className="grid gap-7 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={labelCls}>
            Email <span className="font-normal text-steel">(optional)</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            aria-invalid={!!errors.email}
            {...register("email")}
            className={inputCls}
          />
          {errors.email && <p className={errorCls}>{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="service" className={labelCls}>
            Service needed
          </label>
          <select id="service" {...register("service")} className={inputCls}>
            <option value="">Select a service</option>
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
        <label htmlFor="message" className={labelCls}>
          About the job
        </label>
        <textarea
          id="message"
          rows={4}
          aria-invalid={!!errors.message}
          {...register("message")}
          className={inputCls}
          placeholder="Site location, what the problem is, and when you need it done"
        />
        {errors.message && <p className={errorCls}>{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        className="chamfer-sm group inline-flex w-full items-center justify-center gap-2 bg-whatsapp sm:w-auto px-7 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-whatsapp-dark focus-visible:bg-whatsapp-dark focus-visible:underline focus-visible:outline-none"
      >
        <FaWhatsapp size={17} className="transition-transform duration-300 group-hover:scale-110" /> Continue on WhatsApp
      </button>
    </form>
  );
}
