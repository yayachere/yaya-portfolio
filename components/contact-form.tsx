"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CheckCircle2, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { submitContactForm } from "@/app/actions"

type FormState = {
  errors?: {
    name?: string[]
    email?: string[]
    message?: string[]
    form?: string[]
  }
  success?: boolean
  isSubmitting: boolean
}

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>({
    isSubmitting: false,
  })

  async function handleSubmit(formData: FormData) {
    setFormState({ isSubmitting: true })

    const result = await submitContactForm(formData)

    if (result.success) {
      // Reset form on success
      const form = document.getElementById("contact-form") as HTMLFormElement
      form.reset()

      setFormState({
        isSubmitting: false,
        success: true,
        errors: undefined,
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormState((prev) => ({ ...prev, success: undefined }))
      }, 5000)
    } else {
      setFormState({
        isSubmitting: false,
        success: false,
        errors: result.errors,
      })
    }
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <form id="contact-form" action={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="Your name"
            required
            aria-describedby={formState.errors?.name ? "name-error" : undefined}
          />
          {formState.errors?.name && (
            <p id="name-error" className="text-sm text-red-500">
              {formState.errors.name[0]}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="your.email@example.com"
            required
            aria-describedby={formState.errors?.email ? "email-error" : undefined}
          />
          {formState.errors?.email && (
            <p id="email-error" className="text-sm text-red-500">
              {formState.errors.email[0]}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Your message..."
            rows={5}
            required
            aria-describedby={formState.errors?.message ? "message-error" : undefined}
          />
          {formState.errors?.message && (
            <p id="message-error" className="text-sm text-red-500">
              {formState.errors.message[0]}
            </p>
          )}
        </div>

        {formState.errors?.form && (
          <div className="rounded-md bg-red-50 p-3 text-red-500 dark:bg-red-900/30">{formState.errors.form[0]}</div>
        )}

        {formState.success && (
          <motion.div
            className="rounded-md bg-green-50 p-3 text-green-500 flex items-center gap-2 dark:bg-green-900/30"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <CheckCircle2 className="h-5 w-5" />
            <span>Message sent successfully! I'll get back to you soon.</span>
          </motion.div>
        )}

        <Button type="submit" className="w-full" disabled={formState.isSubmitting}>
          {formState.isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </Button>
      </form>
    </motion.div>
  )
}
