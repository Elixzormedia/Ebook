import { AccordionItem } from "./components/Accordian";
import Timer from "./components/Timer";
const payLink = "https://buy.stripe.com/14kdQR7BYcnK35K7sQ";

export default function App() {
  const targetTime =
    new Date().getTime() + Math.random() * 60 * 60 * 1000 + 60 * 60 * 1000;

  return (
    <main className="min-h-[50vh] bg-[#19191B] main">
      <header className="flex items-center justify-between pt-6 md:px-14 md:pt-12 px-7">
        <a href="/" className="transition-all duration-200 hover:scale-105">
          <img
            src="/images/logo.webp"
            alt="logo"
            className="object-contain w-20 h-20 md:h-auto md:w-auto"
          />
        </a>

        <a
          href={payLink}
          className="btn text-sm md:text-[20px] hover:scale-105 transition-all duration-200 md:py-[16px]">
          Buy Now $19
        </a>
      </header>

      <section className="flex min-h-[70vh] md:min-h-screen w-full items-center justify-center px-3 md:pb-40 flex-col">
        <img
          src="/images/book.webp"
          alt="book"
          className="pt-20 transition-all duration-200 hover:scale-105"
        />

        <div className="mt-16 text-white">
          <h1 className="headline text-2xl md:text-[80px] whitespace-normal leading-tight">
            Learn everything about YouTube automation
          </h1>
          <p className="subheadline mt-14 md:text-[36px] text-xl whitespace-normal">
            Generated over $8 million through YouTube
          </p>
        </div>
      </section>

      <hr className="h-px border-none mt-20 mb-20 md:mt-0 bg-[#747474] sm:max-w-[1200px] sm:mx-auto  mx-4" />

      <section className="min-h-[50vh] mb-20">
        <div className="flex flex-col items-center text-white md:flex-row">
          <div className="w-[350px] h-[200px] md:w-[800px] md:h-[400px] rounded-xl overflow-hidden p-0 mx-4 relative rounded-t-2xl mt-4">
            <div className="p-4 md:p-0">
              <iframe
                src="https://www.youtube.com/embed/t0Q2otsqC4I?si=Kh5HZEVGWAmnBMY4"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                frameBorder={0}
                allowFullScreen
                className="w-full h-full overflow-hidden rounded-xl"
              />
            </div>
          </div>

          <div className="mt-10 md:ml-16 md:mt-0">
            <h1 className="flex items-center justify-center space-x-3 font-medium">
              <span className="text-[30px] md:text-[50px]">$19</span>{" "}
              <span className="btn w-[116px]">Save 91%</span>{" "}
              <span className="line-through font-medium text-[28px] md:text-[40px] text-[#CECECE]">
                $197
              </span>
            </h1>
            <p className="text-[20px] font-poppins">
              if ordered before <Timer targetTime={targetTime} />
            </p>

            <div className="flex items-center justify-center mt-8 transition-all duration-200 hover:scale-105">
              <a
                href={payLink}
                className="btn md:w-60 md:h-20 p-2.5 text-center"
                style={{ fontSize: "30px" }}>
                <div className="flex items-center justify-center h-full">
                  Buy Now
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <hr className="h-px border-none mt-8 md:mt-0 bg-[#747474] sm:max-w-[1200px] sm:mx-auto mb-20 mx-4" />

      <section className="min-h-screen">
        <h1 className="font-inter text-[40px] md:text-[70px] text-center text-white font-bold mb-24 md:-mt-4">
          You will learn
        </h1>
        <AccordionItem />
      </section>

      <section className="min-h-[50vh] mt-10 md:mt-32 pb-10 md:pb-20">
        <div className="grid items-center grid-cols-1 text-white md:grid-cols-2">
          <div className="flex items-center justify-center w-full h-full -mt-10 md:-ml-14 md:mt-0">
            <img
              src="/images/logobig.webp"
              alt="Logo"
              className="object-contain md:object-cover h-72 w-72 md:h-auto md:w-auto"
            />
          </div>
          <div className="m-8 -mt-10 md:m-0 md:mt-0">
            <h1 className="text-[28px] md:text-[48px] font-semibold mb-4">
              About Us
            </h1>

            <ul className="space-y-3">
              <li className="text-[20px] md:text-[24px]">
                - 3+ years of experience in youtube automation
              </li>
              <li className="text-[20px] md:text-[24px]">
                - Served over 150+ clients
              </li>
              <li className="text-[20px] md:text-[24px]">
                - Produced over 5000+ videos
              </li>
              <li className="text-[20px] md:text-[24px]">
                - Generated 85+ million views
              </li>
              <li className="text-[20px] md:text-[24px]">
                - Gained 8+ million subscribers overall
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mb-10 text-white mt-14 md:my-24 md:flex-row">
          <a
            href={payLink}
            className="btn px-[43px] py-[15px] md:w-60 font-bold md:h-20 hover:scale-105 duration-300 transition-all text-[24px] md:text-[28px]">
            <div className="flex items-center justify-center h-full">
              Buy Now $18
            </div>
          </a>

          <div className="mt-10 md:mt-0 md:ml-8">
            <h1 className="flex items-center justify-center space-x-3 font-medium">
              <span className="text-[28px] md:text-[50px]">$19</span>{" "}
              <span className="btn w-[116px]">Save 91%</span>{" "}
              <span className="line-through font-medium text-[24px] md:text-[40px] text-[#CECECE]">
                $197
              </span>
            </h1>
            <p className="text-[20px] font-poppins mt-4 md:mt-0">
              if ordered before <Timer targetTime={targetTime} />
            </p>
          </div>
        </div>

        <h3 className="text-[24px] md:text-[36px] font-medium text-white text-center mt-0 mx-3">
          Secure checkout with our 30-day money-back guarantee.
        </h3>
        <h4 className=" font-medium text-[20px] md:text-[36px] text-[#959595] text-center mt-4">
          Got questions?
          <span className="text-[#8B2526]">
            <a href="mailTo:ebook@elixzor.com"> Contact Us</a>
          </span>
        </h4>
      </section>
    </main>
  );
}
