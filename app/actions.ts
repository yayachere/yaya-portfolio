"use server"

import { z } from "zod"

// Define validation schema
const ContactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

type ContactFormInputs = z.infer<typeof ContactFormSchema>

export async function submitContactForm(formData: FormData) {
  // Artificial delay to simulate network request
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Parse and validate form data
  const validatedFields = ContactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  })

  // Return early if validation fails
  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  const { name, email, message } = validatedFields.data

  try {
    // In a real application, you would send an email or store the message in a database
    // For example:
    // await sendEmail({ name, email, message })
    // or
    // await db.insert({ name, email, message }).into('contacts')

    console.log("Form submission received:", { name, email, message })

    // Return success response
    return {
      success: true,
      data: { name, email, message },
    }
  } catch (error) {
    // Return error response
    return {
      success: false,
      errors: {
        form: ["Failed to send message. Please try again later."],
      },
    }
  }
}
