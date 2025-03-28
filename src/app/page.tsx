import Header from "./component/layout/Header";
import Footer from "./component/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <div className="relative w-full h-[500px] md:h-[700px] bg-black overflow-hidden border-t border-b border-white/20">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-800 to-black opacity-90"></div>
        <div
          className="absolute top-1/3 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full opacity-40 animate-glow"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.12) 0%, rgba(0,0,0,0.8) 70%)",
          }}
        ></div>
        <div
          className="absolute top-2/3 right-1/4 w-[200px] md:w-[400px] h-[200px] md:h-[400px] rounded-full opacity-30 animate-float"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.18) 0%, rgba(0,0,0,0) 100%)",
          }}
        ></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold tracking-wide animate-fade-in">
            DESIGN YOUR HOME
          </h1>
          <p className="mt-4 text-base md:text-lg opacity-80 animate-fade-in">
            Luxury & Comfort in Every Detail
          </p>
        </div>
      </div>
      <div className="w-[90%] md:w-[70%] flex flex-col md:flex-row justify-between items-center min-h-[1000px] md:h-[250px] mx-auto gap-6 md:gap-10 py-8 md:py-0">
        <div className="w-full md:w-1/4 h-[180px] flex flex-col justify-center items-center border border-gray-400 text-center">
          <svg
            className="h-[30px] w-[30px] fill-[rgba(170,132,83,1)]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8l0 378.1C394 378 431.1 230.1 432 141.4L256 66.8s0 0 0 0z" />
          </svg>
          <div className="mt-2 font-bold">Information Security</div>
          <div className="mt-1 text-[14px] px-2 text-gray-500">
            We are committed to absolute confidentiality of customer
            information, ensuring safety and privacy.
          </div>
        </div>

        <div className="w-full md:w-1/4 h-[180px] flex flex-col justify-center items-center border border-gray-400 text-center">
          <svg
            className="h-[30px] w-[30px] fill-[rgba(170,132,83,1)]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path d="M512 80c8.8 0 16 7.2 16 16l0 32L48 128l0-32c0-8.8 7.2-16 16-16l448 0zm16 144l0 192c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16l0-192 480 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24l48 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-48 0zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-112 0z" />
          </svg>
          <div className="mt-2 font-bold">Payment Secured</div>
          <div className="mt-1 text-[14px] px-2 text-gray-500">
            Your payment has been successfully secured and processed.
            Transactions are encrypted and protected.
          </div>
        </div>
        <div className="w-full md:w-1/4 h-[180px] flex flex-col justify-center items-center border border-gray-400 text-center">
          <svg
            className="h-[30px] w-[30px] fill-[rgba(170,132,83,1)]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M256 80C149.9 80 62.4 159.4 49.6 262c9.4-3.8 19.6-6 30.4-6c26.5 0 48 21.5 48 48l0 128c0 26.5-21.5 48-48 48c-44.2 0-80-35.8-80-80l0-16 0-48 0-48C0 146.6 114.6 32 256 32s256 114.6 256 256l0 48 0 48 0 16c0 44.2-35.8 80-80 80c-26.5 0-48-21.5-48-48l0-128c0-26.5 21.5-48 48-48c10.8 0 21 2.1 30.4 6C449.6 159.4 362.1 80 256 80z" />
          </svg>
          <div className="mt-2 font-bold">24/7 Consulting</div>
          <div className="mt-1 text-[14px] px-2 text-gray-500">
            Expert support available anytime, anywhere. Get professional advice
            and solutions around the clock.
          </div>
        </div>
        <div className="w-full md:w-1/4 h-[180px] flex flex-col justify-center items-center border border-gray-400 text-center">
          <svg
            className="h-[30px] w-[30px] fill-[rgba(170,132,83,1)]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
          >
            <path d="M372.2 52c0 20.9-12.4 39-30.2 47.2L448 192l104.4-20.9c-5.3-7.7-8.4-17.1-8.4-27.1c0-26.5 21.5-48 48-48s48 21.5 48 48c0 26-20.6 47.1-46.4 48L481 442.3c-10.3 23-33.2 37.7-58.4 37.7l-205.2 0c-25.2 0-48-14.8-58.4-37.7L46.4 192C20.6 191.1 0 170 0 144c0-26.5 21.5-48 48-48s48 21.5 48 48c0 10.1-3.1 19.4-8.4 27.1L192 192 298.1 99.1c-17.7-8.3-30-26.3-30-47.1c0-28.7 23.3-52 52-52s52 23.3 52 52z" />
          </svg>
          <div className="mt-2 font-bold">Premium Service</div>
          <div className="mt-1 text-[14px] px-2 text-gray-500">
            Experience top quality with professionalism, dedication and superior
            amenities to meet all your needs!
          </div>
        </div>
      </div>
          
      <Footer />
    </>
  );
}
