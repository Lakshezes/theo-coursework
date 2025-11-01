"use client"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { useViewMode } from '@/lib/view-mode-context'

export default function ContactPage() {
  const { viewMode } = useViewMode()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send the form data to a server
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Page Header */}
      <div className="space-y-4 mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Contact Us
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Have questions about visiting? Want to learn more about our exhibitions? 
          We'd love to hear from you.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
        {/* Contact Form */}
        <div>
          {viewMode === 'visual' ? (
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send us a message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">
                      Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      aria-required="true"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">
                      Email <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      aria-required="true"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="What is this regarding?"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">
                      Message <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us more..."
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      aria-required="true"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full" 
                    size="lg"
                    disabled={submitted}
                  >
                    {submitted ? '✓ Message Sent!' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          ) : (
            <div className="border rounded-lg p-6 space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-2">Send us a message</h2>
                <p className="text-sm text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <Label htmlFor="name-text">Name (required)</Label>
                  <Input
                    id="name-text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    aria-required="true"
                  />
                </div>

                <div className="space-y-1">
                  <Label htmlFor="email-text">Email (required)</Label>
                  <Input
                    id="email-text"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    aria-required="true"
                  />
                </div>

                <div className="space-y-1">
                  <Label htmlFor="subject-text">Subject</Label>
                  <Input
                    id="subject-text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-1">
                  <Label htmlFor="message-text">Message (required)</Label>
                  <Textarea
                    id="message-text"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    aria-required="true"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={submitted}
                >
                  {submitted ? 'Message Sent!' : 'Send Message'}
                </Button>
              </form>
            </div>
          )}
        </div>

        {/* Museum Information */}
        <div className="space-y-6">
          {viewMode === 'visual' ? (
            <>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Location</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="font-medium">Heritage Museum</p>
                  <p className="text-muted-foreground">
                    123 Museum Way<br />
                    Cultural District<br />
                    New York, NY 10001
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Hours</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday - Sunday</span>
                    <span className="font-medium">10:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Holidays</span>
                    <span className="font-medium">10:00 AM - 5:00 PM</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Contact Info</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm">
                    <span className="text-muted-foreground">Phone:</span>{' '}
                    <a href="tel:+15551234567" className="font-medium hover:underline">
                      +1 (555) 123-4567
                    </a>
                  </p>
                  <p className="text-sm">
                    <span className="text-muted-foreground">Email:</span>{' '}
                    <a href="mailto:info@heritagemuseum.org" className="font-medium hover:underline">
                      info@heritagemuseum.org
                    </a>
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Admission</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Adults</span>
                    <span className="font-medium">$15.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Students & Seniors</span>
                    <span className="font-medium">$10.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Children (under 12)</span>
                    <span className="font-medium">Free</span>
                  </div>
                  <p className="text-xs text-muted-foreground pt-2 border-t">
                    Free admission first Sunday of every month
                  </p>
                </CardContent>
              </Card>
            </>
          ) : (
            <div className="border rounded-lg p-6 space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-3">Museum Information</h2>
                
                <div className="space-y-4 text-sm">
                  <div>
                    <h3 className="font-medium mb-1">Location</h3>
                    <p className="text-muted-foreground">
                      Heritage Museum, 123 Museum Way, Cultural District, New York, NY 10001
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium mb-1">Hours</h3>
                    <ul className="text-muted-foreground space-y-1">
                      <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
                      <li>Saturday - Sunday: 10:00 AM - 7:00 PM</li>
                      <li>Holidays: 10:00 AM - 5:00 PM</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-medium mb-1">Contact</h3>
                    <ul className="text-muted-foreground space-y-1">
                      <li>Phone: +1 (555) 123-4567</li>
                      <li>Email: info@heritagemuseum.org</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-medium mb-1">Admission</h3>
                    <ul className="text-muted-foreground space-y-1">
                      <li>Adults: $15.00</li>
                      <li>Students & Seniors: $10.00</li>
                      <li>Children (under 12): Free</li>
                      <li className="text-xs pt-1">Free admission first Sunday of every month</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

