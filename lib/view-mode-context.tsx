"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'

type ViewMode = 'visual' | 'text'
type ContrastMode = 'normal' | 'high'

interface ViewModeContextType {
  viewMode: ViewMode
  contrastMode: ContrastMode
  toggleViewMode: () => void
  toggleContrastMode: () => void
  setViewMode: (mode: ViewMode) => void
  setContrastMode: (mode: ContrastMode) => void
}

const ViewModeContext = createContext<ViewModeContextType | undefined>(undefined)

export function ViewModeProvider({ children }: { children: React.ReactNode }) {
  const [viewMode, setViewModeState] = useState<ViewMode>('visual')
  const [contrastMode, setContrastModeState] = useState<ContrastMode>('normal')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Load saved preferences from localStorage
    const savedViewMode = localStorage.getItem('museum-view-mode') as ViewMode
    const savedContrastMode = localStorage.getItem('museum-contrast-mode') as ContrastMode
    
    if (savedViewMode === 'visual' || savedViewMode === 'text') {
      setViewModeState(savedViewMode)
    }
    
    if (savedContrastMode === 'normal' || savedContrastMode === 'high') {
      setContrastModeState(savedContrastMode)
    }
  }, [])

  useEffect(() => {
    if (!mounted) return
    
    // Apply high contrast class to document
    if (contrastMode === 'high') {
      document.documentElement.classList.add('high-contrast')
    } else {
      document.documentElement.classList.remove('high-contrast')
    }
  }, [contrastMode, mounted])

  const setViewMode = (mode: ViewMode) => {
    setViewModeState(mode)
    localStorage.setItem('museum-view-mode', mode)
  }

  const setContrastMode = (mode: ContrastMode) => {
    setContrastModeState(mode)
    localStorage.setItem('museum-contrast-mode', mode)
  }

  const toggleViewMode = () => {
    const newMode = viewMode === 'visual' ? 'text' : 'visual'
    setViewMode(newMode)
  }

  const toggleContrastMode = () => {
    const newMode = contrastMode === 'normal' ? 'high' : 'normal'
    setContrastMode(newMode)
  }

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <ViewModeContext.Provider
        value={{
          viewMode: 'visual',
          contrastMode: 'normal',
          toggleViewMode: () => {},
          toggleContrastMode: () => {},
          setViewMode: () => {},
          setContrastMode: () => {},
        }}
      >
        {children}
      </ViewModeContext.Provider>
    )
  }

  return (
    <ViewModeContext.Provider
      value={{
        viewMode,
        contrastMode,
        toggleViewMode,
        toggleContrastMode,
        setViewMode,
        setContrastMode,
      }}
    >
      {children}
    </ViewModeContext.Provider>
  )
}

export function useViewMode() {
  const context = useContext(ViewModeContext)
  if (context === undefined) {
    throw new Error('useViewMode must be used within a ViewModeProvider')
  }
  return context
}

