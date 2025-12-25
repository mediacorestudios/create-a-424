import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from 'lucide-react'
import { Toaster as Sonner } from 'sonner'

const Toaster = ({ ...props }) => {
  // Detect theme from document class or media query (no next-themes dependency)
  const getTheme = () => {
    if (typeof document !== 'undefined') {
      if (document.documentElement.classList.contains('dark')) return 'dark'
      if (document.documentElement.classList.contains('light')) return 'light'
    }
    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      return 'dark'
    }
    return 'light'
  }

  return (
    <Sonner
      theme={getTheme()}
      className="toaster group"
      icons={{
        success: <CircleCheckIcon className="size-4" />,
        info: <InfoIcon className="size-4" />,
        warning: <TriangleAlertIcon className="size-4" />,
        error: <OctagonXIcon className="size-4" />,
        loading: <Loader2Icon className="size-4 animate-spin" />,
      }}
      style={{
        '--normal-bg': 'var(--popover)',
        '--normal-text': 'var(--popover-foreground)',
        '--normal-border': 'var(--border)',
        '--border-radius': 'var(--radius)',
      }}
      {...props}
    />
  )
}

export { Toaster }
