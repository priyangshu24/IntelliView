import { Sparkles } from "lucide-react";
import Marquee from "react-fast-marquee";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { MarqueImg } from "@/components/marquee-img-";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex-col w-full pb-32 bg-gradient-to-b from-white to-gray-50">
      <Container>
        {/* Hero Section - Enhanced with better spacing and gradient text */}
        <div className="my-12 md:my-16">
          <h2 className="text-4xl leading-tight text-center md:text-left md:text-6xl">
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 md:text-8xl drop-shadow-sm">
              AI Superpower
            </span>
            <span className="ml-2 font-extrabold text-gray-600">
              - A better way to
            </span>
            <br />
            <span className="text-gray-800">improve your interview chances and skills</span>
          </h2>

          <p className="max-w-2xl mt-6 text-base text-gray-600">
            Boost your interview skills and increase your success rate with
            AI-driven insights. Discover a smarter way to prepare, practice, and
            stand out in today's competitive job market.
          </p>
          
          {/* Added CTA button in hero section */}
          <div className="mt-8">
            <Link to="/generate">
              <Button className="px-8 py-6 text-lg transition-all duration-300 shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:shadow-xl">
                Get Started <Sparkles className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats Section - Enhanced with cards and animations */}
        <div className="flex flex-col items-center w-full gap-6 px-4 py-8 my-12 transition-all duration-300 bg-white shadow-md md:flex-row md:gap-12 justify-evenly md:px-12 md:py-16 rounded-2xl hover:shadow-lg">
          <p className="text-4xl font-bold text-center text-gray-900 transition-all duration-300 hover:scale-105">
            250k+
            <span className="block mt-2 text-xl font-normal text-blue-600">
              Offers Received
            </span>
          </p>
          <div className="hidden w-px h-16 bg-gray-200 md:block"></div>
          <p className="text-4xl font-bold text-center text-gray-900 transition-all duration-300 hover:scale-105">
            1.2M+
            <span className="block mt-2 text-xl font-normal text-blue-600">
              Interviews Aced
            </span>
          </p>
        </div>

        {/* Image Section - Enhanced with better styling and animation */}
        <div className="w-full mt-8 rounded-2xl bg-gray-100 h-[480px] shadow-xl overflow-hidden relative group">
          <img
            src="/assets/img/hero.jpg"
            alt="Interview preparation"
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute px-5 py-3 rounded-lg shadow-md top-6 left-6 bg-white/70 backdrop-blur-md">
            <span className="font-semibold text-gray-800">Interviews Copilot&copy;</span>
          </div>

          <div className="absolute px-6 py-4 transition-all duration-300 rounded-lg shadow-lg md:block w-96 bottom-6 right-6 bg-white/80 backdrop-blur-md hover:bg-white/90">
            <h2 className="text-xl font-bold text-gray-800">Developer Interview Prep</h2>
            <p className="mt-2 text-base text-gray-600">
              Get personalized feedback, practice with AI-generated questions, and receive expert tips tailored to your skills and experience.
            </p>

            <Button className="px-6 py-2 mt-4 transition-all duration-300 bg-blue-600 hover:bg-blue-700">
              Generate <Sparkles className="ml-2" />
            </Button>
          </div>
        </div>
      </Container>

      {/* Marquee Section - Enhanced with better styling */}
      <div className="w-full py-8 my-16 bg-gradient-to-r from-gray-50 via-white to-gray-50">
        <p className="mb-6 text-sm font-medium tracking-widest text-center text-gray-500 uppercase">Trusted by companies worldwide</p>
        <Marquee pauseOnHover speed={40} className="py-4">
          <MarqueImg img="/assets/img/logo/firebase.png" />
          <MarqueImg img="/assets/img/logo/meet.png" />
          <MarqueImg img="/assets/img/logo/zoom.png" />
          <MarqueImg img="/assets/img/logo/firebase.png" />
          <MarqueImg img="/assets/img/logo/microsoft.png" />
          <MarqueImg img="/assets/img/logo/meet.png" />
          <MarqueImg img="/assets/img/logo/tailwindcss.png" />
          <MarqueImg img="/assets/img/logo/microsoft.png" />
        </Marquee>
      </div>

      <Container className="py-12 space-y-12">
        {/* Final Section - Enhanced with better layout and call-to-action */}
        <h2 className="max-w-3xl mx-auto text-2xl font-bold tracking-tight text-center text-gray-800 md:text-3xl">
          Unleash your potential with personalized AI insights and targeted
          interview practice.
        </h2>

        <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-5">
          <div className="col-span-1 overflow-hidden transition-all duration-300 shadow-lg md:col-span-3 rounded-2xl hover:shadow-xl">
            <img
              src="/assets/img/office.jpg"
              alt="Office environment"
              className="object-cover w-full transition-transform duration-700 rounded-2xl hover:scale-105 max-h-96"
            />
          </div>

          <div className="flex flex-col items-center justify-center w-full col-span-1 gap-8 px-4 md:col-span-2 max-h-96 min-h-96 md:px-8">
            <p className="text-lg text-center text-gray-600">
              Transform the way you prepare, gain confidence, and boost your
              chances of landing your dream job. Let AI be your edge in
              today's competitive job market.
            </p>

            <Link to="/generate" className="w-full max-w-xs">
              <Button className="w-full py-6 text-lg transition-all duration-300 shadow-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 hover:shadow-xl">
                Start Now <Sparkles className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Added testimonials section */}
        <div className="grid grid-cols-1 gap-8 mt-24 md:grid-cols-3">
          <div className="p-6 transition-all duration-300 bg-white shadow-md rounded-xl hover:shadow-lg">
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center w-12 h-12 font-bold text-blue-600 bg-blue-100 rounded-full">JD</div>
              <div className="ml-4">
                <p className="font-semibold">John Doe</p>
                <p className="text-sm text-gray-500">Software Engineer</p>
              </div>
            </div>
            <p className="text-gray-700">"This AI tool completely transformed my interview preparation. I landed my dream job at a top tech company!"</p>
          </div>
          
          <div className="p-6 transition-all duration-300 bg-white shadow-md rounded-xl hover:shadow-lg">
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center w-12 h-12 font-bold text-purple-600 bg-purple-100 rounded-full">AS</div>
              <div className="ml-4">
                <p className="font-semibold">Alice Smith</p>
                <p className="text-sm text-gray-500">Product Manager</p>
              </div>
            </div>
            <p className="text-gray-700">"The personalized feedback on my responses helped me identify and improve my weaknesses before the actual interviews."</p>
          </div>
          
          <div className="p-6 transition-all duration-300 bg-white shadow-md rounded-xl hover:shadow-lg">
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center w-12 h-12 font-bold text-green-600 bg-green-100 rounded-full">RJ</div>
              <div className="ml-4">
                <p className="font-semibold">Robert Jones</p>
                <p className="text-sm text-gray-500">Data Scientist</p>
              </div>
            </div>
            <p className="text-gray-700">"Practice makes perfect, and this tool gave me the perfect practice environment with realistic interview scenarios."</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;