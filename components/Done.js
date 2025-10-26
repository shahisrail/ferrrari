import { useEffect } from "react";
import Head from "next/head";

function CalendlyWidget() {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    // Set Calendly URL with email
    const email = localStorage.getItem("userEmail");
    const calendlyWidget = document.getElementById("calendly-widget");

    if (calendlyWidget) {
      const calendlyUrl = email
        ? `https://calendly.com/gucci-careers/30min/30min?email=${encodeURIComponent(
            email
          )}`
        : "https://calendly.com/gucci-careers/30min";
      calendlyWidget.setAttribute("data-url", calendlyUrl);
    }

    // Optional cleanup
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      id="calendly-widget"
      className="calendly-inline-widget"
      style={{ minWidth: "320px", height: "930px" }}
      data-url="https://calendly.com/gucci-careers/30min"
    ></div>
  );
}

function Done() {
  return (
    <>
      <Head>
        <title>Select a Date & Time - Calendly</title>
      </Head>
      <CalendlyWidget />
    </>
  );
}

export default Done;
