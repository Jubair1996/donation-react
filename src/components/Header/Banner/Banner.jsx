const Banner = () => {
  return (
    <div className="relative grid h-[80vh] w-full  flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700 mix-blend-multiply md:mix-blend-overlay">
      <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-[url('https://i.ibb.co/hsrbyZL/382818708-3442082969437294-4030565122765922283-n.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
        <div className=" absolute inset-0 h-full w-full bg-gradient-to-t from-white/70 via-white"></div>
      </div>
      <div className="relative p-6 py-14 px-6 md:px-12">
        <h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-black antialiased">
          I Grow By Helping People In Need
        </h2>
        <div className="mb-4 block font-sans text-xl font-semibold leading-snug tracking-normal antialiased">
          <input
            className="px-4 w-[75%] text-black py-2 rounded"
            type="text"
            placeholder="Search Here..."
          />
          <button className="text-white bg-pink-500 py-2 px-4 rounded -ms-1">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
