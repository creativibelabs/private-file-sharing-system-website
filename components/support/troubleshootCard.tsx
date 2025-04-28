import Image from 'next/image'
import React from 'react'
import { GoArrowUpRight } from 'react-icons/go'

const troubleshootCard = () => {
    {/* Search Result Troubleshooting x CardDesign  */}

  return (
    <div className="p-2 border border-emerald-500 rounded-xl inline-block" style={{
        backgroundImage: "url(/images/noise-texture.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
          <Image src={"/images/white-bg.png"} alt="img" height={300} width={350} className="cover" />
          <div>
            <p className="mt-2">A Decisive Victory for Progressive Policies</p>
            <p className="text-gray-400 text-sm mb-4">Politics</p>
            <button className="flex justify-center items-center gap-2 border-white/70 backdrop-blur border rounded-full px-6 py-3 bg-emerald-900/40">Read More <span><GoArrowUpRight /></span></button>
          </div>
      </div>
  )
}

export default troubleshootCard