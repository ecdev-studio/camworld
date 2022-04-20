import React, {useState} from 'react'
import styles from './Preview_.module.scss'

const Preview = ({alt, images}) => {

  const [mainImage, setMainImage] = useState(images[0].url)

  const currentImage = mainImage === 'undefined'? images[0].url : mainImage;

  const handleChangeImage = (e) =>{
    setMainImage(e.target.src)
  }

  const renderItems = (items) =>{
    return items.map((item, index) =>{
      return(
        <button className={styles.thumbs__item} key={index} onClick={handleChangeImage} onKeyDown={handleChangeImage}>
          <img src={item.url} alt={alt}/>
        </button>
      )
    })
  }

  return (
    <div className={styles.preview}>
      <div className={styles.preview__left}>
        <div className={styles.thumbs}>
          {renderItems(images)}
        </div>
      </div>
      <div className={styles.preview__right}>
        <img src={currentImage} alt={alt}/>
      </div>
    </div>
  );
};
export default Preview;