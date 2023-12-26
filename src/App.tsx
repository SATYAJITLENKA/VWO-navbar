import React, { useState, useRef, useEffect } from "react";

const App = () => {
  const pages = [
    "Capabilities",
    "Pricing",
    "Solutions",
    "WhyVWO?",
    "Resources",
  ];
  const settings = ["Contact", "Login", "En"];

  const [showBox, setShowBox] = useState(false);
  const [boxWidth, setBoxWidth] = useState(0);
  const [boxLeft, setBoxLeft] = useState(0);
  const [showSecondOne, setShowSecondOne] = useState(false);
  const [BehaviorAnalytics, setBehaviorAnalytics] = useState(false);
  const [showAdditionalDiv, setShowAdditionalDiv] = useState(false);
  const [isHoveringBox, setIsHoveringBox] = useState(false);

  const logoRef = useRef(null);
  const enRef = useRef(null);
  const capabilitiesRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const capabilitiesRect = capabilitiesRef.current.getBoundingClientRect();
      const isCapabilitiesVisible =
        capabilitiesRect.top >= 0 &&
        capabilitiesRect.bottom <= window.innerHeight;

      setShowBox(isCapabilitiesVisible);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (capabilitiesRef.current && logoRef.current && enRef.current) {
      const logoRect = logoRef.current.getBoundingClientRect();
      const enRect = enRef.current.getBoundingClientRect();

      const width = enRect.right - logoRect.left;
      const left = logoRect.left;

      setBoxWidth(width);
      setBoxLeft(left);
    }
  }, [showBox]);

  const handleMouseEnter = () => {
    setShowBox(true);
  };

  const handleMouseLeave = () => {
    // Check if the mouse is not hovering over the box
    if (!isHoveringBox) {
      setShowBox(false);
    }
  };

  const handleBoxMouseEnter = () => {
    // Set flag to indicate that the mouse is hovering over the box
    setIsHoveringBox(true);
  };

  const handleBoxMouseLeave = () => {
    // Reset flag when the mouse leaves the box
    setIsHoveringBox(false);
    // Close the box only if the mouse is not over the "Solutions" button
    if (!showAdditionalDiv) {
      setShowBox(false);
    }
  };

  const handleTestingHover = () => {
    setShowSecondOne(true);
  };

  const handleTestingLeave = () => {
    setShowSecondOne(false);
  };

  const handleBehaviorAnalyticsHover = () => {
    setBehaviorAnalytics(true);
  };

  const handleBehaviorAnalyticsLeave = () => {
    setBehaviorAnalytics(false);
  };

  const handleButtonHover = () => {
    setShowAdditionalDiv(true);
  };

  const handleButtonLeave = () => {
    setShowAdditionalDiv(false);
  };

  return (
    <>
      <nav className="flex bg-[#27134d] h-16 text-white text-[12px] items-center justify-center font-bold relative">
        <img
          ref={logoRef}
          className="logo"
          src="../assets/VWO.png"
          alt="logo"
          style={{ marginRight: "8px" }}
        />
        <div className="flex gap-96">
          <div className="flex gap-2">
            {pages.map((page, index) => (
              <div
                key={index}
                className="hover:bg-[#3c2b5f] p-3 rounded-sm cursor-pointer"
                onMouseEnter={() => {
                  if (page === "Capabilities") handleMouseEnter();
                  if (page === "Solutions") handleButtonHover();
                }}
                onMouseLeave={() => {
                  if (page === "Capabilities") handleMouseLeave();
                  if (page === "Solutions") handleButtonLeave();
                }}
                ref={page === "Capabilities" ? capabilitiesRef : null}
              >
                {page}
                {page === "Capabilities" && showBox && (
                  <div
                    className="absolute top-full left-0 bg-slate-500 h-[400px]"
                    style={{ width: `${boxWidth}px`, left: `${boxLeft}px` }}
                    onMouseEnter={handleBoxMouseEnter}
                    onMouseLeave={handleBoxMouseLeave}
                  >
                    <div className="flex h-full">
                      <div className="flex flex-col pl-8 pt-8 h-full bg-[#f2ebfe] w-[400px] text-black">
                        <div>
                          <div
                            className="hover:bg-white h-16 flex items-center pl-8"
                            onMouseEnter={handleTestingHover}
                            onMouseLeave={handleTestingLeave}
                          >
                            Testing
                          </div>
                          <div
                            className="hover:bg-white h-16 flex items-center pl-8"
                            onMouseEnter={handleBehaviorAnalyticsHover}
                            onMouseLeave={handleBehaviorAnalyticsLeave}
                          >
                            Behavior Analytics
                          </div>
                          <hr className="border mt-6" />
                        </div>
                        <div className="flex flex-col pl-8 gap-4 mt-8 ">
                          <div className="hover:text-[#e20072]">
                            Personalization
                          </div>
                          <div className="hover:text-[#e20072]">
                            Web Rollouts
                          </div>
                          <div className="hover:text-[#e20072]">
                            Customer Data Platform
                          </div>
                          <div className="hover:text-[#e20072]">
                            Program Management
                          </div>
                        </div>
                      </div>
                      <div className="bg-white w-full">
                        {showSecondOne && (
                          <div className="text-black pl-12 flex flex-col gap-[30px]">
                            <div className="mt-10 flex flex-col gap-1">
                              <h6 className="text-[#e20072]">Testing Overview</h6>
                              <p>Build winning experiences across web, mobile app, and server-side</p>
                            </div>

                            <hr />

                            <div className="flex flex-col gap-7">
                              <div>
                                <h6 className="hover:text-[#e20072]">Web Testing</h6>
                                <p>Test and create web experiences</p>
                              </div>

                              <div>
                                <h6 className="hover:text-[#e20072]">Mobile App Testing</h6>
                                <p>Test and create web experiences</p>
                              </div>

                              <div>
                                <h6 className="hover:text-[#e20072]">Server-side Testing</h6>
                                <p>Test and create web experiences</p>
                              </div>

                            </div>
                          </div>
                        )}
                        {BehaviorAnalytics && (
                          <div className="text-black pl-12 flex flex-col gap-[30px]">
                            <div className="mt-10 flex flex-col gap-1">
                              <h6 className="text-[#e20072]">Behavior Analytics</h6>
                              <p>Build winning experiences across web, mobile app, and server-side</p>
                            </div>

                            <hr />

                            <div className="flex flex-col gap-7">
                              <div>
                                <h6 className="hover:text-[#e20072]">Web Insights</h6>
                                <p>Test and create web experiences</p>
                              </div>

                              <div>
                                <h6 className="hover:text-[#e20072]">Mobile App Insights</h6>
                                <p>Test and create web experiences</p>
                              </div>

                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="absolute top-full left-0 bg-[#f8f8f8] text-black p-5 w-full">
                      <p>Platform Overview</p>
                    </div>
                  </div>
                )}
                {page === "Solutions" && showAdditionalDiv && (
                  <div
                    className="top-full w-52 h-48 absolute rounded bg-white text-black pl-8 py-5 flex flex-col justify-between "
                    onMouseEnter={handleButtonHover}
                    onMouseLeave={handleButtonLeave}
                    onClick={handleButtonHover}
                  >
                    <p className="hover:text-[#e20072] ">eCommerce</p>
                    <p className="hover:text-[#e20072]">SaaS</p>
                    <p className="hover:text-[#e20072]">eLearning</p>
                    <p className="hover:text-[#e20072]">Media/Publication</p>
                    <p className="hover:text-[#e20072]">Enterprises</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div ref={enRef} className="flex gap-2">
            {settings.map((subPage, index) => (
              <div
                key={index}
                className={`hover:bg-[#3c2b5f] p-3 rounded-sm cursor-pointer ${subPage.toLowerCase()}`}
              >
                {subPage}
              </div>
            ))}
          </div>
        </div>
      </nav>
      <div className="h-[120vh] w-full  bg-[#27134d] flex flex-col items-center  pt-24 text-white">
        <h2 className="text-[70px]">Optimize digital  </h2>
        <h2 className="text-[70px]">experiences & maximize</h2>
        <h2 className="text-[70px]">conversions</h2>
        <p>Your customer is evolving every day. Decode their evolving behaviors, fine-tune with robust A/B</p>
        <p>testing, and personalize experiences that hit home. Boost conversions across your websites and</p>
        <p>mobile apps through data-driven UI and server-side enhancements.</p>
      </div>
    </>
  );
};

export default App;
