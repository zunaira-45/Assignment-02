
import React from 'react';

const Hero = () => {
  return (
    <div className='text-center'>
      <div className='text-3xl bg-yellow-500 font-bold font-serif p-3'>
        <h1>WELCOME TO NEXT BURGER</h1>
      </div>
      <div className='text-xl bg-green-300 font-serif border-s-black'>
        Welcome to Next Burger, your ultimate destination for mouthwatering burgers
        crafted with the freshest ingredients! Our menu features a delicious variety of gourmet burgers,
        from classic cheeseburgers to innovative specialty creations that will tantalize your taste buds.
        Each burger is grilled to perfection and served on a toasted bun, accompanied by crispy fries
        and a selection of house-made sauces. Whether you are dining in or taking out, 
        we promise a flavorful experience that will satisfy your cravings. Join us for a burger adventure today!
      </div>
      <div className='font-bold text-3xl bg-red-700 p-3'>
        <h1>ORDER DELICIOUS BURGER</h1>
      </div>
      <h1 className='text-2xl font-bold font-serif'>OUR SPECIALITIES</h1>
 <div className='bg-[url("/images/bur.jpg")] h-[200px] bg-no-repeat bg-left-bottom p-3 border-3'>
 <p>
  <h1 className='text-2xl font-bold font-serif bg-red-300 p-1'>BEEF BURGER</h1>
  <p className='text-2xl font-serif text-center'>
    our cheeseburger features a juicy beef patty, melted cheddar cheese
  on a toasted bun, and a side of crispy fries. It's the perfect comfort food for any occasion.
  </p>
 </p>
      </div>
 <div className='bg-[url("/images/burger.jpg")] h-[200px] bg-no-repeat bg-right-bottom border-3 p-3'>
  <p>
    <h1 className='text-2xl font-bold font-serif bg-red-300 p-1'>SPECIAL CHEESE BURGER</h1>
    <p className='text-2xl font-serif text-center'>
      our special cheeseburger features a juicy beef patty, melted cheddar cheese, crispy bacon,
      and a fried egg on a toasted bun, and a side of crispy fries. It's the
      perfect comfort food for any occasion.
      </p>
  </p>
  <button type='submit' className='bg-blue-500 text-white p-2 rounded'>
          ORDER NOW
        </button>


 </div>
 <div>
 </div>
    </div>
  );
};

export default Hero;