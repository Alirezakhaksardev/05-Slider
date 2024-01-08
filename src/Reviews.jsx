import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import data from './data';
import { useState } from 'react';

function Reviews() {

  const [index , setIndex] = useState(0);
  const {name, image , job , text} = data[index];

  const nextSlide = () =>{
    setIndex(index => {
      let newIndex = index + 1 ;
      if(newIndex == data.length) return 0;
      return newIndex; 
    })
  }

  const prevSlide = () =>{
    setIndex(index => {
      let newIndex = index - 1 ;
      if(newIndex < 0) return data.length - 1
      return newIndex; 
    });
  }

  const randomPerson = () =>{
    let randomNumber = Math.floor(Math.random() * data.length);
    if(randomNumber == index) randomNumber = index + 1;
    if(randomNumber == data.length) randomNumber = 0;
    setIndex(randomNumber)
  }

  return (
    <div className='reviews'>
        <div className='review-img'>
          <img src={image} alt={name} />
        </div>
        <h4 className='author'>
          {name}
        </h4>
        <p className='job'>
          {job}
        </p>
        <p className="info">
          {text}
        </p>
        <div className="review-button">
             <button onClick={nextSlide}><FaChevronRight /></button>
             <button onClick={prevSlide}><FaChevronLeft /></button>
        </div>
        <button className="random-btn" onClick={randomPerson}>عشقی</button>
    </div>
  )
}

export default Reviews