import React from 'react'

const Subtitle = ({ title, btntitle, pathtitle }) => {
  return (

    <div className="d-flex justify-content-between pt-4">
      <div className="sub-title">{title}</div>
      {btntitle ? (
        <a href={`${pathtitle}`} style={{ textDecoration: 'none', color: 'black' }}>
          <div className="shoping-now">{btntitle} </div>
        </a>
      ) : null}

    </div>

  )
}

export default Subtitle