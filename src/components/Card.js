import React from 'react'

const Card = ({item, id, index, handleClick}) => {

  
  const itemClass = item.state ? `active ${item.state}` : ''

  return (
    <div className={`card-container ${itemClass}`} onClick={() => {handleClick(id,index)}}>
      <img src={item.image} alt={item.name} />
    </div>
  )
}

export default Card   