import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetail = () => {
 const params = useParams()
 console.log(params.kuchbhilikhdooo);
 

  return (
    <div>
      
      <h2>{params.kuchbhilikhdooo}<br/> This is Kuch bhii page where kuch bhii is shownnn....</h2>
    </div>
  )
}

export default CourseDetail
