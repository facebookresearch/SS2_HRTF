import { useRef, useEffect } from "react"

// https://blog.logrocket.com/accessing-previous-props-state-react-hooks/
export default function trackDirty(value) {
    const ref = useRef()
    useEffect(() => {
      ref.current = value 
    },[value]) 
    return ref.current != value
  }