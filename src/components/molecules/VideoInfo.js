import React from 'react'
import playButton from "../../util/images/play-button.svg"
import warning from "../../util/images/warning.png"


const VideoInfo = ({title = "Shreyash", overview= "Hai to bkfd h sdh shbwe nbkj egigew ndibak djksb"}) => {
  return (
    <div className='px-12 pt-80 absolute  w-screen bg-gradient-to-r from-black opacity-90 aspect-video text-white'>
        <h1 className='text-3xl font-bold'>{title}</h1>
        <p className="w-1/3 mt-4 mb-4 text-sm">{overview}</p>
        <div className='flex'>
          <div className='flex items-center w-fit px-8 py-1 rounded-md text-base font-semibold cursor-pointer h-10 mr-4 bg-white'>
            <img
              src={playButton}
              alt="Play button"
              className='w-4 mr-2'
            />
            <span className='text-black'>Play</span>
          </div>
          <div className='flex bg-gray-500 items-center  rounded-md px-6 py-1 text-base font-semibold cursor-pointer text-white w-fit h-10'>
            <img
              src={warning}
              alt="warning"
              className='w-6 mr-2'
            />
            <span>More Info</span>
          </div>
        </div>
    </div>
  )
}

export default VideoInfo