import React from 'react'
import {DefaultPlayer as Video} from 'react-html5video';

import 'react-html5video/dist/styles.css'



const Courses = () => {
  return (
    <Video autoPlay loop src={"../../assets/Course1.mp4"} type="video/mp4"> </Video>
  )
}

export default Courses;
