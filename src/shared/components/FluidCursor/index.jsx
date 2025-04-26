import React, { useEffect } from 'react'
import fluidCursor from '../../hooks/useFluidCursor'
const FluidCursor = () => {
  useEffect(() => {
    fluidCursor()
  }, [])
  return (
    <div className="relative top-0 left-0 z-2">
      <canvas id="fluid" className="w-full h-full absolute" />
    </div>
  )
}
export default FluidCursor
