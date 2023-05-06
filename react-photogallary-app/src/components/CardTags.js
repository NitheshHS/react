import React from 'react'

function CardTags({id, tag}) {
  return (
    <span key={id}>#{tag}</span>
  )
}

export default CardTags