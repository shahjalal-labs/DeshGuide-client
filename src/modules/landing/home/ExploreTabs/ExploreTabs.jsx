// 📁 src/modules/landing/home/TourismAndGuides/ExploreTabs.jsx

/* import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Packages from "../../../Packages/Packages/Packages";
import RandomGuides from "../RandomGuides/RandomGuides";
const ExploreTabs = () => {
  return (
    <section className="py-12 g-[#0f172a]">
      <div className="container mx-auto ">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white glow-text">
            Explore Our Offerings
          </h2>
          <p className="mt-2 text-gray-400 max-w-2xl mx-auto">
            Discover amazing tour packages or connect with our expert guides
          </p>
        </div>

        <Tabs className="rounded-xl overflow-hidden backdrop-blur-sm low-border bg-opacity-10 bg-gradient-to-br from-[#1e293b] to-[#0f172a] shadow-2xl">
          <TabList className="flex flex-wrap border-b border-gray-700 bg-black/30 backdrop-blur-sm">
            <Tab
              className="py-4 px-6 font-semibold text-lg cursor-pointer transition-all duration-300
            text-gray-300 hover:text-white glow-text
            ui-selected:text-white ui-selected:bg-[#4f46e5]
            hover:bg-white/5 hover:glow-effect focus:outline-none"
            >
              Tour Packages
            </Tab>
            <Tab
              className="py-4 px-6 font-semibold text-lg cursor-pointer transition-all duration-300
            text-gray-300 hover:text-white glow-text
            ui-selected:text-white ui-selected:bg-[#4f46e5]
            hover:bg-white/5 hover:glow-effect focus:outline-none"
            >
              Expert Guides
            </Tab>
          </TabList>

          <TabPanel className="p-4 md:p-6 bg-[#1e293b] bg-opacity-30 rounded-b-xl shadow-inner pulse-glow transition-all duration-300">
            <Packages apiEndpoint="packages/random" />
          </TabPanel>
          <TabPanel className="p-4 md:p-6 bg-[#1e293b] bg-opacity-30 rounded-b-xl shadow-inner jhilimili-glow transition-all duration-300">
            <RandomGuides />
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};

export default ExploreTabs; */

// 📁 src/modules/landing/home/TourismAndGuides/ExploreTabs.jsx
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Packages from "../../../Packages/Packages/Packages";
import RandomGuides from "../RandomGuides/RandomGuides";

const ExploreTabs = () => {
  return (
    <section className="py-12 bg-[#0f172a] relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white glow-text hover:scale-105 transition-transform duration-300">
            Explore Our Offerings
          </h2>
          <p className="mt-2 text-gray-400 max-w-2xl mx-auto hover:text-gray-300 transition-colors duration-300">
            Discover amazing tour packages or connect with our expert guides
          </p>
        </div>

        <Tabs className="rounded-xl overflow-hidden backdrop-blur-sm glow-border bg-opacity-10 bg-gradient-to-br from-[#1e293b] to-[#0f172a] shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 group">
          <TabList className="flex flex-wrap border-b border-gray-700 bg-black/30 backdrop-blur-sm relative overflow-hidden">
            {/* Sliding indicator background */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <Tab
              className="py-4 px-8 font-semibold text-lg cursor-pointer transition-all duration-500 relative z-10
              text-gray-300 hover:text-white glow-text
              ui-selected:text-white ui-selected:bg-gradient-to-r ui-selected:from-[#4f46e5] ui-selected:to-[#7c3aed]
              hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-purple-500/10
              hover:backdrop-blur-md hover:shadow-lg hover:shadow-cyan-500/25
              hover:scale-105 hover:border-cyan-400/50 hover:border
              focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:ring-offset-2 focus:ring-offset-gray-900
              before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/5 before:to-transparent
              before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700
              group/tab overflow-hidden"
            >
              <span className="relative z-10 drop-shadow-sm">
                Tour Packages
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/20 to-cyan-400/0 opacity-0 group-hover/tab:opacity-100 transition-opacity duration-300 blur-sm"></div>
            </Tab>

            <Tab
              className="py-4 px-8 font-semibold text-lg cursor-pointer transition-all duration-500 relative z-10
              text-gray-300 hover:text-white glow-text
              ui-selected:text-white ui-selected:bg-gradient-to-r ui-selected:from-[#4f46e5] ui-selected:to-[#7c3aed]
              hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-pink-500/10
              hover:backdrop-blur-md hover:shadow-lg hover:shadow-purple-500/25
              hover:scale-105 hover:border-purple-400/50 hover:border
              focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:ring-offset-2 focus:ring-offset-gray-900
              before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/5 before:to-transparent
              before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700
              group/tab overflow-hidden"
            >
              <span className="relative z-10 drop-shadow-sm">
                Expert Guides
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/0 via-purple-400/20 to-purple-400/0 opacity-0 group-hover/tab:opacity-100 transition-opacity duration-300 blur-sm"></div>
            </Tab>
          </TabList>

          <TabPanel className="p-4 md:p-6 bg-[#1e293b] bg-opacity-30 rounded-b-xl shadow-inner pulse-glow transition-all duration-500 hover:bg-opacity-40 hover:backdrop-blur-lg relative overflow-hidden group/panel">
            {/* Animated background overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 opacity-0 group-hover/panel:opacity-100 transition-opacity duration-500"></div>

            {/* Floating orbs */}
            <div className="absolute top-4 right-4 w-16 h-16 bg-cyan-400/10 rounded-full blur-xl opacity-0 group-hover/panel:opacity-100 transition-opacity duration-700 animate-pulse"></div>
            <div className="absolute bottom-4 left-4 w-12 h-12 bg-purple-400/10 rounded-full blur-xl opacity-0 group-hover/panel:opacity-100 transition-opacity duration-700 animate-pulse delay-300"></div>

            <div className="relative z-10">
              <Packages apiEndpoint="packages/random" />
            </div>
          </TabPanel>

          <TabPanel className="p-4 md:p-6 bg-[#1e293b] bg-opacity-30 rounded-b-xl shadow-inner jhilimili-glow transition-all duration-500 hover:bg-opacity-40 hover:backdrop-blur-lg relative overflow-hidden group/panel">
            {/* Animated background overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover/panel:opacity-100 transition-opacity duration-500"></div>

            {/* Floating orbs */}
            <div className="absolute top-4 left-4 w-20 h-20 bg-purple-400/10 rounded-full blur-xl opacity-0 group-hover/panel:opacity-100 transition-opacity duration-700 animate-pulse"></div>
            <div className="absolute bottom-4 right-4 w-14 h-14 bg-pink-400/10 rounded-full blur-xl opacity-0 group-hover/panel:opacity-100 transition-opacity duration-700 animate-pulse delay-500"></div>

            <div className="relative z-10">
              <RandomGuides />
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};

export default ExploreTabs;
