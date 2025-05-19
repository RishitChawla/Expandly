"use client"

import { useState, useRef } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2, AlertCircle } from 'lucide-react'

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle")
  const formRef = useRef<HTMLFormElement>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    setFormStatus("idle")

    try {
      // Create a hidden form element
      const hiddenForm = document.createElement("form")
      hiddenForm.method = "POST"
      hiddenForm.action = "https://formsubmit.co/expandly.site@gmail.com"
      hiddenForm.style.display = "none"
      
      // Add form values
      Object.entries(values).forEach(([key, value]) => {
        if (value) {
          const input = document.createElement("input")
          input.type = "hidden"
          input.name = key
          input.value = value.toString()
          hiddenForm.appendChild(input)
        }
      })
      
      // Add FormSubmit extras
      const subjectInput = document.createElement("input")
      subjectInput.type = "hidden"
      subjectInput.name = "_subject"
      subjectInput.value = "New Contact Form Submission"
      hiddenForm.appendChild(subjectInput)
      
      const templateInput = document.createElement("input")
      templateInput.type = "hidden"
      templateInput.name = "_template"
      templateInput.value = "table"
      hiddenForm.appendChild(templateInput)
      
      const replyToInput = document.createElement("input")
      replyToInput.type = "hidden"
      replyToInput.name = "_replyto"
      replyToInput.value = values.email
      hiddenForm.appendChild(replyToInput)
      
      // Add next URL to redirect back to the same page
      const nextInput = document.createElement("input")
      nextInput.type = "hidden"
      nextInput.name = "_next"
      nextInput.value = window.location.href
      hiddenForm.appendChild(nextInput)
      
      // Add captcha setting (false to disable FormSubmit's captcha)
      const captchaInput = document.createElement("input")
      captchaInput.type = "hidden"
      captchaInput.name = "_captcha"
      captchaInput.value = "false"
      hiddenForm.appendChild(captchaInput)
      
      // Add form to body
      document.body.appendChild(hiddenForm)
      
      // Submit the form
      hiddenForm.submit()
      
      // Since the form will redirect, we don't need to handle success here
      // But we'll set success status anyway in case the redirect is blocked
      setFormStatus("success")
      form.reset()
      
    } catch (error) {
      console.error("Error submitting form:", error)
      setFormStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="space-y-6">
      {formStatus === "success" && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
          <div className="flex items-start">
            <CheckCircle2 className="h-5 w-5 text-green-600" />
            <div className="ml-3">
              <h3 className="text-green-800 text-lg font-medium">Message Sent Successfully!</h3>
              <p className="mt-2 text-green-700 text-sm">
                Thank you for contacting us. We've received your message and will get back to you as soon as possible.
              </p>
              <div className="mt-4">
                <Button type="button" className="bg-green-600 hover:bg-green-700 text-white" onClick={() => setFormStatus("idle")}>
                  Send Another Message
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {formStatus === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <div className="flex items-start">
            <AlertCircle className="h-5 w-5 text-red-600" />
            <div className="ml-3">
              <h3 className="text-red-800 text-lg font-medium">Message Could Not Be Sent</h3>
              <p className="mt-2 text-red-700 text-sm">
                There was an error sending your message. Please try again or contact us directly at expandly.site@gmail.com.
              </p>
              <div className="mt-4">
                <Button type="button" className="bg-red-600 hover:bg-red-700 text-white" onClick={() => setFormStatus("idle")}>
                  Try Again
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {(formStatus === "idle" || formStatus === "error") && (
        <Form {...form}>
          <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl><Input placeholder="Your name" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl><Input placeholder="your.email@example.com" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone (optional)</FormLabel>
                  <FormControl><Input placeholder="Your phone number" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company (optional)</FormLabel>
                  <FormControl><Input placeholder="Your company name" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea placeholder="How can we help you with your global expansion?" className="min-h-[120px]" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </Form>
      )}
    </div>
  )
}