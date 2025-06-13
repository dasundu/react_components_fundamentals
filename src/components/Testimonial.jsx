import React from 'react'

const Testimonial = ({ quote, name,  position }) => {
  return (
    <div className="testimonial">
      <div className="testimonial-header">
        
        <div className="testimonial-info">
          <h4>{name}</h4>
          <p className="position">{position}</p>
        </div>
      </div>
      <blockquote>
        "{quote}"
      </blockquote>
    </div>
  )
}

export default Testimonial