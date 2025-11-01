"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useViewMode } from '@/lib/view-mode-context'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'

export function Navigation() {
  const pathname = usePathname()
  const { viewMode, toggleViewMode } = useViewMode()

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/attractions', label: 'Attractions' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="border-b bg-card">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold tracking-tight">
              Heritage Museum
            </Link>
          </div>

          {/* Main Navigation Links */}
          <div className="flex flex-wrap items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm px-2 py-1",
                  pathname === link.href
                    ? "text-foreground underline underline-offset-4"
                    : "text-muted-foreground"
                )}
                aria-current={pathname === link.href ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mode Toggle */}
          <div className="flex items-center gap-2 border-t pt-4 lg:border-t-0 lg:pt-0">
            <Label 
              htmlFor="view-mode-toggle" 
              className="text-sm font-medium cursor-pointer"
              aria-label={`Current mode: ${viewMode}. Toggle to switch between visual and text modes.`}
            >
              {viewMode === 'visual' ? 'Visual' : 'Text'}
            </Label>
            <Switch
              id="view-mode-toggle"
              checked={viewMode === 'visual'}
              onCheckedChange={toggleViewMode}
              aria-label="Toggle between visual and text display modes"
            />
          </div>
        </div>
      </div>
    </nav>
  )
}
