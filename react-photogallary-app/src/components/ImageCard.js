import React from 'react'
import CardTags from './CardTags';

function ImageCard({image}) {
    console.log(image.tags);
    const tags=image.tags.split(',');
  return (
    <div className="card">
        <img src={image.previewURL} alt='img'></img>
        <h2>Photo By {image.user} </h2>
        <ul>
          <li>
            <span><strong>views: </strong> {image.views}</span>
          </li>
          <li>
            <span><strong>Downloads: </strong> {image.downloads}</span>
          </li>
          <li>
            <span><strong>Likes: </strong> {image.likes}</span>
          </li>
        </ul>
        <div className="tags">
          {tags.map(tag=>(
            <CardTags tag={tag.trim()} id={image.id}></CardTags>
          ))}
    </div>
      </div>
  )
}

export default ImageCard