'use client'
import { debounce } from '@mui/material/utils'
import { useEffect, useState } from 'react'

const useWindowSize = () => {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  const windowWidthListener = debounce(() => {
    if (window) setWidth(window.innerWidth)
  }, 250)

  const windowHeightListener = debounce(() => {
    if (window) setHeight(window.innerHeight)
  })

  useEffect(() => {
    if (window) {
      setWidth(window.innerWidth)
      window.addEventListener('resize', windowWidthListener)
    }

    return () => {
      windowWidthListener.clear()
      window && window.removeEventListener('resize', windowWidthListener)
    }
  }, [windowWidthListener])

  useEffect(() => {
    if (window) {
      setHeight(window.innerHeight)
      window.addEventListener('resize', windowHeightListener)
    }

    return () => {
      windowHeightListener.clear()
      window && window.removeEventListener('resize', windowHeightListener)
    }
  }, [windowHeightListener])
  return { width, height }
}

export default useWindowSize
