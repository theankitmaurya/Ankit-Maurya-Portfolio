import { useState } from 'react'
import { FiMail } from 'react-icons/fi'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'

import { useActiveSection } from '@/hooks/useActiveSection'
import { useScrollVisibility } from '@/hooks/useScrollVisibility'
import { cn } from '@/lib/utils'

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'work', label: 'Work' },
  { id: 'education', label: 'Education' },
  { id: 'writing', label: 'Writing' },
  { id: 'speaking', label: 'Speaking' },
]

const socialLinks = [
  {
    label: 'Mail',
    href: 'mailto:ankitmaurya20223@gmail.com',
    icon: FiMail,
    color: 'text-red-400 hover:text-red-500',
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/theankitmaurya_',
    icon: FaInstagram,
    color: 'text-pink-500 hover:text-pink-400',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/theankitkushwaha/',
    icon: FaLinkedin,
    color: 'text-blue-500 hover:text-blue-400',
  },
]

export function Navigation() {
  const activeSection = useActiveSection()
  const isVisible = useScrollVisibility()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <>
      {/* Mobile Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-start md:hidden">
        <div className="relative">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-sm text-white mix-blend-difference"
          >
            {mobileMenuOpen ? 'Close' : 'Menu'}
          </button>

          <div
            className={cn(
              'flex flex-col items-start gap-3 mt-6 transition-all duration-300',
              mobileMenuOpen
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 -translate-y-4 pointer-events-none'
            )}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  'text-sm text-white mix-blend-difference transition-all duration-300 relative py-1',
                  'hover:opacity-60',
                  activeSection === item.id &&
                    'after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-white'
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Social Icons */}
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => {
            const Icon = link.icon

            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel={
                  link.href.startsWith('mailto')
                    ? undefined
                    : 'noopener noreferrer'
                }
                aria-label={link.label}
                className={cn(
                  'transition-all duration-300 hover:scale-125',
                  link.color
                )}
              >
                <Icon size={20} />
              </a>
            )
          })}
        </div>
      </div>

      {/* Desktop Social Icons */}
      <div className="hidden md:block fixed top-0 right-0 z-50 p-6 md:p-10">
        <div className="flex items-center gap-5 justify-end">
          {socialLinks.map((link) => {
            const Icon = link.icon

            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel={
                  link.href.startsWith('mailto')
                    ? undefined
                    : 'noopener noreferrer'
                }
                aria-label={link.label}
                className={cn(
                  'transition-all duration-300 hover:scale-125',
                  link.color
                )}
              >
                <Icon size={22} />
              </a>
            )
          })}
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav
        className={cn(
          'hidden md:block fixed bottom-0 right-0 z-50 p-6 md:p-10 transition-all duration-500',
          isVisible
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 translate-x-8 pointer-events-none'
        )}
      >
        <div className="flex flex-col items-end gap-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={cn(
                'text-sm text-white mix-blend-difference transition-all duration-300 relative py-1',
                'hover:opacity-60',
                activeSection === item.id &&
                  'after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-white'
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>
    </>
  )
}
