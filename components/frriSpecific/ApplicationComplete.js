import React from "react";

const ApplicationComplete = () => {
  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8">
      <div className="md:max-w-6xl md:mx-auto">

        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          <div className="mb-6 md:mb-8">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg 
                className="w-8 h-8 md:w-10 md:h-10 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M5 13l4 4L19 7" 
                />
              </svg>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 uppercase tracking-wide text-black !font-ferrari">
            Application Complete
          </h2>
          
          <div className="text-base sm:text-lg leading-relaxed mb-8 md:mb-12 text-gray-800 sm:leading-normal !font-ferrari">
            <p className="mb-4">
              <strong>Congratulations!</strong> Your application has been successfully submitted.
            </p>
            <p className="mb-4">
              Thank you for your interest in joining the Ferrari family. We have received your application 
              and our recruitment team will review it carefully.
            </p>
            <p>
              We will contact you within the next few hours regarding the next steps in the process. 
              We appreciate your patience and look forward to potentially welcoming you to our passionate team.
            </p>
          </div>

          <div className="bg-gray-50 p-6 md:p-8 rounded-lg border-l-4 border-red-600 max-w-2xl">
            <h3 className="text-lg md:text-xl font-semibold mb-3 text-black !font-ferrari">
              What happens next?
            </h3>
            <ul className="text-sm md:text-base text-gray-700 space-y-2 text-left !font-ferrari">
              <li className="flex items-start">
                <span className="text-red-600 mr-2">•</span>
                Our HR team will review your application.
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">•</span>
                You will receive a confirmation email shortly.
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">•</span>
                We will contact you within 60-90 minutes.
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">•</span>
                Check your email regularly for updates.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationComplete; 