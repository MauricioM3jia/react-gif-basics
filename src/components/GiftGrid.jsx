
import { GifItem } from './GifItem';

import { useFetchGifs } from '../hooks/useFetchGifs';


export const GiftGrid = ({category}) => {

    const {images,isloading}= useFetchGifs(category);
 
  
  return (
    <>
        <h3>{category}</h3>

        {
          isloading && (<h2>Loading</h2>)
        }
       <div className='card-grid'>
          {
            images.map((image) => (
              <GifItem key={image.id}
              {...image}></GifItem>
              


            ))
          }
       </div>
    </>
  )
}
