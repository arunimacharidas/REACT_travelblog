import React from 'react';
import './post.css';

export default function Post() {
  return (
    <div className='post'>
      <div className='postinfo'>
        <span className='postcat'>KASHMIR</span>
        <div>
          <span className='posttitle'>Kashmir is the northernmost geographical region.</span>
        </div>
        <hr />
        <p className='description'>
          Majestic Himalayan Beauty: Nestled amidst the snow-capped peaks of the Himalayas, Kashmir's landscape is a breathtaking sight to behold. The region is adorned with lush green valleys, glistening rivers, serene lakes, and verdant meadows, making it an idyllic destination for nature lovers.
        </p>
      </div>

      <div className="image-container">
      <img className='postimg' src='https://cdn.pixabay.com/photo/2021/06/27/12/32/river-6368659_640.jpg' alt='' style={{ width: '150px', height: '200px' }} />
      <img className='postimg' src='https://cdn.pixabay.com/photo/2019/02/03/04/34/snow-3971865_640.jpg' alt='' style={{ width: '150px', height: '200px' }} />
       <img className='postimg' src='https://cdn.pixabay.com/photo/2018/08/15/20/29/srinagar-3609032_640.jpg' alt='' style={{ width: '150px', height: '200px' }} />


      </div>
      <div className='postinfo'>
        <span className='postcat'>JAIPUR</span>
        <div>
          <span className='posttitle'>Jaipur, the capital city of the Indian state of Rajasthan, is famously known as the "Pink City."</span>
        </div>
        <hr />
        <p className='description'>
        Historical Significance: Jaipur was founded in 1727 by Maharaja Sawai Jai Singh II, the ruler of Amber, and was planned and designed by the architect Vidyadhar Bhattacharya. The city was planned according to the principles of Vastu Shastra and Shilpa Shastra, ancient Indian architectural texts. 
        </p>
      </div>

      <div className="image-container">
      <img className='postimg' src='https://media.istockphoto.com/id/1398087835/photo/pink-palace-hawa-mahal-jaipur-india-beautiful-sunset-view.webp?b=1&s=612x612&w=0&k=20&c=bD4EQWgn3kgYjz71PgyB8N7YgRFhRII824Tez1fR1MM=' alt='' style={{ width: '150px', height: '200px' }} />
      <img className='postimg' src='https://cdn.pixabay.com/photo/2019/04/07/07/51/jal-mahal-4109105_640.jpg' alt='' style={{ width: '150px', height: '200px' }} />
       <img className='postimg' src='https://cdn.pixabay.com/photo/2019/04/07/07/52/palace-4109106_640.jpg' alt='' style={{ width: '150px', height: '200px' }} />

      </div>
      <div className='postinfo'>
        <span className='postcat'>KERALA</span>
        <div>
          <span className='posttitle'>Kashmir is the northernmost geographical region.</span>
        </div>
        <hr />
        <p className='description'>
        Backwaters: The backwaters of Kerala are one of its most famous attractions. These serene and meandering waterways consist of interconnected lakes, canals, and lagoons, lined with lush greenery and coconut palms. Houseboat cruises in the backwaters offer a relaxing and memorable experience.
        </p>
      </div>

      <div className="image-container">
      <img className='postimg' src='https://media.istockphoto.com/id/1017900834/photo/houseboats-on-the-backwaters-of-kerala-in-alappuzha.webp?b=1&s=612x612&w=0&k=20&c=Me0uorgiikRHtrloQ87LEid0Atgar5NcLnu2drObAp8=' alt='' style={{ width: '150px', height: '200px' }} />
      <img className='postimg' src='https://cdn.pixabay.com/photo/2016/09/02/12/56/munnar-1639120_640.jpg' alt='' style={{ width: '150px', height: '200px' }} />
       <img className='postimg' src='https://cdn.pixabay.com/photo/2020/04/13/09/11/trivandrum-5037425_640.jpg' alt='' style={{ width: '150px', height: '200px' }} />
       </div>
      <div className='postinfo'>
        <span className='postcat'>HAMPI</span>
        <div>
          <span className='posttitle'>
         Hampi is an ancient and historical village </span>
        </div>
        <hr />
        <p className='description'>
        Historical Significance: Hampi's history dates back to the 14th century when it served as the capital of the Vijayanagara Empire from the 14th to the 16th century. The empire was known for its grandeur, prosperity, and patronage of art and culture
        </p>
      </div>

      <div className="image-container">
      <img className='postimg' src='https://cdn.pixabay.com/photo/2014/03/04/13/16/stone-chariot-279466_640.jpg' alt='' style={{ width: '150px', height: '200px' }} />
      <img className='postimg' src='https://cdn.pixabay.com/photo/2019/06/22/08/56/hampi-4291151_640.jpg' alt='' style={{ width: '150px', height: '200px' }} />
       <img className='postimg' src='https://cdn.pixabay.com/photo/2014/03/04/13/28/pillars-279474_640.jpg' alt='' style={{ width: '150px', height: '200px' }} />

      </div>
    </div>
  );
}


