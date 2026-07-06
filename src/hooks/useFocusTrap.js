import { useEffect, useRef } from 'react'

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'

/**
 * Traps keyboard focus inside a modal container while it's open, and
 * restores focus to the element that triggered the modal on close.
 *
 * @param {boolean} isOpen - whether the modal is currently open
 * @param {() => void} onClose - callback to close the modal (invoked on Escape)
 * @param {() => void} [onPrev] - optional callback for ArrowLeft
 * @param {() => void} [onNext] - optional callback for ArrowRight
 */
export function useFocusTrap(isOpen, onClose, onPrev, onNext) {
  const containerRef = useRef(null)
  const previouslyFocused = useRef(null)

  useEffect(() => {
    if (!isOpen) return

    previouslyFocused.current = document.activeElement

    const container = containerRef.current
    const focusFirst = () => {
      const focusables = container?.querySelectorAll(FOCUSABLE_SELECTOR)
      if (focusables && focusables.length > 0) {
        focusables[0].focus()
      } else {
        container?.focus()
      }
    }
    focusFirst()

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
        return
      }
      if (e.key === 'ArrowLeft' && onPrev) {
        onPrev()
        return
      }
      if (e.key === 'ArrowRight' && onNext) {
        onNext()
        return
      }
      if (e.key === 'Tab') {
        const focusables = Array.from(
          container?.querySelectorAll(FOCUSABLE_SELECTOR) ?? []
        )
        if (focusables.length === 0) return
        const first = focusables[0]
        const last = focusables[focusables.length - 1]

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown, true)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown, true)
      document.body.style.overflow = prevOverflow
      previouslyFocused.current?.focus?.()
    }
  }, [isOpen, onClose, onPrev, onNext])

  return containerRef
}
