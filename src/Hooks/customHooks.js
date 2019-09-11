import { useRef, useEffect } from 'react'

export const useEffectOnce = callback => {
  /** useRef -> https://reactjs.org/docs/hooks-reference.html#useref
   *  useRef returns a mutable ref object whose .current property is initialized
   *  to the passed argument (initialValue).
   *  The returned object will persist for the full lifetime of the component. */
  const didRun = useRef(false)

  useEffect(() => {
    if (!didRun.current) {
      callback()
      didRun.current = true
    }
  })
}