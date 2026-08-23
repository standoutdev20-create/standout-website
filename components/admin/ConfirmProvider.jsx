'use client'

import { createContext, useCallback, useContext, useRef, useState } from 'react'
import { AlertTriangle } from 'lucide-react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'

const ConfirmContext = createContext(null)

const DEFAULTS = {
  title: 'Are you sure?',
  description: 'This action cannot be undone.',
  confirmLabel: 'Confirm',
  cancelLabel: 'Cancel',
  destructive: false,
}

export function ConfirmProvider({ children }) {
  const [open, setOpen] = useState(false)
  const [options, setOptions] = useState(DEFAULTS)
  const resolverRef = useRef(null)

  const confirm = useCallback((opts = {}) => {
    setOptions({ ...DEFAULTS, ...opts })
    setOpen(true)
    return new Promise((resolve) => {
      resolverRef.current = resolve
    })
  }, [])

  function settle(value) {
    resolverRef.current?.(value)
    resolverRef.current = null
    setOpen(false)
  }

  return (
    <ConfirmContext.Provider value={confirm}>
      {children}
      <AlertDialog
        open={open}
        onOpenChange={(next) => {
          if (!next) settle(false)
        }}
      >
        <AlertDialogContent className="max-w-[400px] gap-5 rounded-2xl border-slate-200 p-6 shadow-xl sm:rounded-2xl">
          <AlertDialogHeader className="space-y-3 sm:text-left">
            <div
              className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                options.destructive
                  ? 'bg-red-50 text-red-600'
                  : 'bg-blue-50 text-blue-600'
              }`}
            >
              <AlertTriangle size={20} strokeWidth={2} />
            </div>
            <AlertDialogTitle className="text-lg font-semibold tracking-tight text-slate-900">
              {options.title}
            </AlertDialogTitle>
            <AlertDialogDescription className="text-sm leading-relaxed text-slate-500">
              {options.description}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="gap-2 sm:space-x-0">
            <AlertDialogCancel asChild>
              <Button type="button" variant="outline" onClick={() => settle(false)}>
                {options.cancelLabel}
              </Button>
            </AlertDialogCancel>
            <AlertDialogAction asChild>
              <Button
                type="button"
                variant={options.destructive ? 'destructive' : 'default'}
                onClick={() => settle(true)}
              >
                {options.confirmLabel}
              </Button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </ConfirmContext.Provider>
  )
}

export function useConfirm() {
  const confirm = useContext(ConfirmContext)
  if (!confirm) {
    throw new Error('useConfirm must be used within ConfirmProvider')
  }
  return confirm
}
