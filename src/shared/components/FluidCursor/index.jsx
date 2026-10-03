import React, { useEffect } from 'react'
import fluidCursor from '../../hooks/useFluidCursor'

const FluidCursor = () => {
  useEffect(() => {
    const cleanup = fluidCursor()
    return cleanup
  }, [])

  return <canvas id="fluid" className="fluid-canvas" />
}

export default FluidCursor
