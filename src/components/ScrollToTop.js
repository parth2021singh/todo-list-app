import React from 'react'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

const ScrollToTop = () => {

    const goToBtn=()=>{
        window.scrollTo({top:0,behavior:"smooth"})
    }
  return (
    <div>
      <ArrowCircleUpIcon style={{position:"absolute",right:"50",paddingBottom:"50px",fontSize:"xxx-large"}} onClick={goToBtn}/>
    </div>
  )
}

export default ScrollToTop
