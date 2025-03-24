import { ChevronRight } from 'lucide-react'
import React from 'react'

const Email = () => {
  return (
    <div className="flex gap-2 justify-center">
    <input
      type="text"
      placeholder="Email address"
      className="bg-[#767676] rounded-lg p-2  border text-white"
    />
    <button
      className="
    bg-red-600 p-2 px-4 rounded-lg flex gap-2"
    >
      Get Started
      <ChevronRight />
    </button>
  </div>
  )
}

export default Email