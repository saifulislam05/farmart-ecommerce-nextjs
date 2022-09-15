import { setBackgroundImage } from '../../utils/helpers'
const HomePoster = () => {
  return (
    <section className='py-8'>
      <div className="container">
        <div className="flex  flex-wrap justify-between">

          {/* First poster  */}
          <div className='md:w-[32%] mb-5 w-full md:py-14 md:px-12 py-10 px-6 rounded-lg ' style={setBackgroundImage('	https://demo4.drfuri.com/farmart2/wp-content/uploads/sites/11/2021/05/homepage-new-banner-2.png', { backgroundPosition: 'center center', backgroundColor: '#fac251', backgroundSize: "cover" })}>
            <div className='flex flex-col justify-between h-full'>
              <div>
                <h2 className="md:text-3xl sm:text-2xl text-xl font-bold text-title">
                  Mango Juice<br />Bottle
                </h2>

              </div>
              <a href="/" className='text-color text-lg md:mt-8 mt-6'>20% off for new customers </a>
            </div>
          </div>

          {/* Middle Poster  */}
          <div className='md:w-[32%] mb-5 w-full md:py-14 md:px-12 py-10 px-6 rounded-lg ' style={setBackgroundImage('	https://demo4.drfuri.com/farmart2/wp-content/uploads/sites/11/2021/05/homepage-new-banner-3.png', { backgroundPosition: 'bottom right', backgroundColor: '#d4dde4', backgroundSize: "unset" })}>
            <div className='flex flex-col justify-between h-full'>
              <div>
                <span className="text-orange text-3xl ">$14.5</span>
                <h2 className="md:text-3xl sm:text-lg text-base font-bold text-title">
                  Meat pork
                </h2>
              </div>
              <span className='text-gray-500 text-lg md:mt-8 mt-6'>250g</span>
            </div>
          </div>

          {/* Last Poster  */}
          <div className='md:w-[32%] mb-5 w-full md:py-14 md:px-12 py-10 px-6 rounded-lg ' style={setBackgroundImage('	https://demo4.drfuri.com/farmart2/wp-content/uploads/sites/11/2021/05/homepage-new-banner-4.png', { backgroundPosition: 'center center', backgroundColor: '#fac251', backgroundSize: "cover" })}>
            <div className='flex flex-col justify-between h-full'>
              <div>
                <h2 className="md:text-3xl sm:text-2xl text-xl font-bold text-white ">
                  Olive oil
                </h2>
                <p className='text-white md:mt-7 mt-4 font-semibold'>Best product to make <br />your favore </p>
              </div>
              <span className='text-white text-lg md:mt-8 mt-6'>ONLY</span>
              <span className='text-white text-3xl '>$14.5</span>
            </div>
          </div>


        </div>

      </div>
    </section>
  )
}

export default HomePoster