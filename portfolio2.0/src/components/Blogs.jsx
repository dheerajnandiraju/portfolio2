import React from 'react'
import "./Blogs.css"
import CircularGallery from './CircularGallery'

function Blogs() {
  return (
  
    <div style={{ verticalAlign: "center", }}>
        <heading style={{paddingLeft:'5vw'}} className="he">Snapshots</heading>
        
        <div style={{ height: '600px', position: 'relative' , }}>
            <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
        </div>
    
    
       </div>

  )
}

export default Blogs
