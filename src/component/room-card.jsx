import { Link } from "react-router-dom";

export default function RoomCard({ kategori, harga, gambar }) {
  return (
    <div data-aos="fade-up" data-aos-duration="3000" data-aos-delay="200">
      <div
        className="
    h-[550px] 
    min-[640px]:h-[650px]
    min-[768px]:h-[750px]
    min-[1024px]:h-[630px]
    w-[250px] 
    min-[375px]:w-[350px]
    min-[640px]:w-[550px]
    min-[768px]:w-[650px]
    min-[1024px]:w-[350px]
    font-raleway 
    border
    rounded-lg 
    drop-shadow-xl 
    bg-white m-4">
        <img
          src={gambar}
          className="
      h-[180px] 
      min-[375px]:h-[250px]
      min-[640px]:h-[350px]
      min-[768px]:h-[400px]
      min-[1024px]:h-[300px]
      w-[250px]  
      min-[375px]:w-[350px]
      min-[640px]:w-[550px]
      min-[768px]:w-[650px]
      min-[1024px]:w-[450px]
      rounded-lg"
        />
        <div className="bg-primary-orange w-fit mt-[-12px] ml-4 px-4 text-center text-lg text-white absolute rounded-lg min-[640px]:text-2xl">
          ${harga}/night
        </div>
        <div className="px-4 mt-8">
          <div className="flex items-center justify-between">
            <p className="capitalize font-roboto text-[20px] lg:text-[25px] font-semibold min-[640px]:text-3xl min-[768px]:text-4xl">
              {kategori}
            </p>
            <p>
              <small className="fa fa-star text-primary-orange text-lg mr-1"></small>
              <small className="fa fa-star text-primary-orange text-lg mr-1"></small>
              <small className="fa fa-star text-primary-orange text-lg mr-1"></small>
              <small className="fa fa-star text-primary-orange text-lg mr-1"></small>
              <small className="fa fa-star text-primary-orange text-lg mr-1"></small>
            </p>
          </div>
          <div className="flex justify-between items-center py-4 text-zinc-600">
            <div className="flex justify-center items-center">
              <i className="fa fa-bed text-primary-orange text-lg"></i>
              <p className="ml-2 min-[768px]:text-2xl">3 Bed</p>
            </div>
            |
            <div className="flex justify-between items-center">
              <i className="fa fa-bath text-primary-orange text-lg min-[768px]:text-2xl"></i>
              <p className="ml-2 min-[768px]:text-2xl">2 Bath</p>
            </div>
            |
            <div className="flex justify-between items-center">
              <i className="fa fa-wifi text-primary-orange text-lg"></i>
              <p className="ml-2 min-[768px]:text-2xl">Wifi</p>
            </div>
          </div>
          <p className="text-zinc-600 min-[768px]:text-xl">
            Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed
            diam stet diam sed stet lorem.
          </p>
          <div className="flex md:justify-center justify-around items-center py-4 gap-2 font-bold">
            <Link to={"/ViewDetail"}>
              <button className="uppercase text-[12px] lg:text-[17px] w-[120px] lg:w-[155px] bg-primary-orange text-white text-center py-3 max-md:px-5 rounded-lg">
                <p>view detail</p>
              </button>
            </Link>
            <Link to={`/book-now/${kategori.split(" ").join("-")}`}>
              <button className="uppercase text-[12px] lg:text-[17px] w-[120px] lg:w-[155px] bg-primary-blue text-white text-center py-3 max-md:px-5 rounded-lg">
                <p>book now</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
