

function Banner() {
  return (
    <html lang="id-ID">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width" />
        {/* You may include jQuery if needed */}
        {/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script> */}
        <style>
          {/* You can add CSS styles here */}
          {`
            header {
              background: url('https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
            }
          `}
        </style>
      </head>
      <body className="mt-[50px]">
       
        <div id="nav-opened" className="fixed left-0 right-0 hidden bg-white mx-2 mt-16 rounded-br rounded-bl shadow z-10  ">
          <div className="p-2 divide-y divide-gray-600 flex flex-col">
            <a href="#about" className="p-2 font-semibold hover:text-indigo-700">
              About
            </a>
            <a href="#whyus" className="p-2 font-semibold hover:text-indigo-700">
              Why Us ?
            </a>
            <a href="#showcase" className="p-2 font-semibold hover:text-indigo-700">
              Our Products
            </a>
          </div>
        </div>
        <header id="up" className="bg-center bg-fixed bg-no-repeat bg-center bg-cover h-screen relative ">
          <div className="h-screen bg-opacity-50 bg-black flex items-center justify-center" style={{ background: 'rgba(0,0,0,0.5)' }}>
            <div className="mx-2 text-center">
              <h1 className="text-gray-100 font-extrabold text-4xl xs:text-5xl md:text-6xl">
                <span className="text-white">Right</span> Place To
              </h1>
              <h2 className="text-gray-200 font-extrabold text-3xl xs:text-4xl md:text-5xl leading-tight">
                Get a <span className="text-white">Better</span> and <span className="text-white">Professionals</span> Design
              </h2>
              <div className="inline-flex">
                <button className="p-2 my-5 mx-2 bg-indigo-700 hover:bg-indigo-800 font-bold text-white rounded border-2 border-transparent hover:border-indigo-800 shadow-md transition duration-500 md:text-xl">
                  Hire US!
                </button>
                <a href="#about">
                  <button className="p-2 my-5 mx-2 bg-transparent border-2 bg-indigo-200 bg-opacity-75 hover:bg-opacity-100 border-indigo-700 rounded hover:border-indigo-800 font-bold text-indigo-800 shadow-md transition duration-500 md:text-lg">
                    Learn More
                  </button>
                </a>
              </div>
            </div>
          </div>
        </header>
      </body>
    </html>
  );
}

export default Banner;
