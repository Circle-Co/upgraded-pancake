"use client";

export default function HomePage() {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden" style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7edf3] px-10 py-3">
          <div className="flex items-center gap-4 text-[#0e151b]">
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <h2 className="text-[#0e151b] text-lg font-bold leading-tight tracking-[-0.015em]">Circle</h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <a className="text-[#0e151b] text-sm font-medium leading-normal" href="#">Templates</a>
              <a className="text-[#0e151b] text-sm font-medium leading-normal" href="#">Pricing</a>
              <a className="text-[#0e151b] text-sm font-medium leading-normal" href="#">Examples</a>
            </div>
            <div className="flex gap-2">
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#1982e5] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em]"
                onClick={() => window.location.href='/theme'}
              >
                <span className="truncate">Try for free</span>
              </button>
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#e7edf3] text-[#0e151b] text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <span className="truncate">Log in</span>
              </button>
            </div>
          </div>
        </header>
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="@container">
              <div className="@[480px]:p-4">
                <div
                  className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-lg items-center justify-center p-4"
                  style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBTUONQiSquztjtfFsuqQISafYEP1g048AH5tQtLMo1uOYqgfePrvQGV2pvpGECaaoxWrvc_xNR5kYniofUH4RYxHsSFcrGBYz9R211BOsc3SHhfc7aQmq27u377CwG3cGJBO3wqypbDF89mUTlRRsVXYgRktzz1lz6QEzrmdN2TJNBNB1TqRg-VVZzVreQLKWKTp9SGu_tatpuSQRwgwnj_5NuAKj3GN-LrR10N0xrQt2pzNUEUBUSIE12pA5VqvdbrNwh6RPo2n8")' }}
                >
                  <div className="flex flex-col gap-2 text-center">
                    <h1
                      className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
                    >
                      Create a professional website for your therapy practice
                    </h1>
                    <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                      Build a beautiful, client-attracting website in minutes. No coding or design skills required.
                    </h2>
                  </div>
                  <button
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#1982e5] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
                    onClick={() => window.location.href='/theme'}
                  >
                    <span className="truncate">Try for free</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-10 px-4 py-10 @container">
              <div className="flex flex-col gap-4">
                <h1
                  className="text-[#0e151b] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]"
                >
                  Beautiful templates designed for therapists
                </h1>
                <p className="text-[#0e151b] text-base font-normal leading-normal max-w-[720px]">
                  Choose from a variety of professionally designed templates tailored to showcase your expertise and attract your ideal clients.
                </p>
              </div>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3">
                <div className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCVMP1aDjr0dvRexSkXAO9mYSiwrWljOEDthI6T1DEipIoyXJwXRjiXjuXaEnUMHuCtATF8MOh9kvcqwx2H4MoS5ojNsBEyAsNJI48bq-ONUdE6VF2kF2aeYw3vjlPhMZESwXo_1mMtIMODWlukdcGZVqqsiizlGg6Z01rwBTBmsTKTz70hM6xTjuVkKS7SRqmm4GjEl9Y8nVUhKenTb_NYA-uVD-cpLwx4ui9mHxVA0lmRBEuWxdlScTW4TWQjTuhK4qo_wa6r8u4")' }}
                  ></div>
                  <div>
                    <p className="text-[#0e151b] text-base font-medium leading-normal">Modern &amp; professional</p>
                    <p className="text-[#4e7497] text-sm font-normal leading-normal">Templates that reflect the warmth and professionalism of your practice.</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA3hXav5FLV5puhWC2qSvJbRDpZ_NRrlahoLFTMH0Q9gW8CQXv9H5hgCxpuTFhUS8XqZN03dyb3cuIAklAp9ZH4e6Zd4Dg_bKQn60QlRxSVZAI7RjZDNaAplykC6INUsgW-HXFc9e4bloR-KHbyYLxXTd4mV5ueCyYPSnjtSHRXmPApvD48OdAxgYEmuNZtqrJyj40k_wA4Z3-vZENAYnt1s74wzAxtT0QTXUVCNspj08Znd-KkndWAxF1-DrpyQg4ivIfa8xVSLXY")' }}
                  ></div>
                  <div>
                    <p className="text-[#0e151b] text-base font-medium leading-normal">Easy to customize</p>
                    <p className="text-[#4e7497] text-sm font-normal leading-normal">Easily personalize your site with our intuitive drag-and-drop editor.</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDxrwHoGhG2SepjcD_D6BVDGq32FqLgUZ1kP34feIm1exDSw5pSAV5RdkSAq8NW7ITSbKg1fHyNHEB2fPJBkmNByFiaW8kSGup_N7MrHzwALk3X1bjDKDMnnAdWF-3smdF5Dc_anD9_fLITaBpHow17kH48TwwLHnNCNLqLr2khKwk_OOc2NVXszygVRgnddNUeJMvMtMPxGOoCnbjknwuiSdP5QMpqURaq2q0OLjQ2kHFgShPhs_h1NtWN1p4N4anRuezi9uusNVs")' }}
                  ></div>
                  <div>
                    <p className="text-[#0e151b] text-base font-medium leading-normal">Mobile-responsive</p>
                    <p className="text-[#4e7497] text-sm font-normal leading-normal">Ensure your website looks great on any device, from smartphones to desktops.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-10 px-4 py-10 @container">
              <div className="flex flex-col gap-4">
                <h1
                  className="text-[#0e151b] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]"
                >
                  Everything you need to succeed online
                </h1>
                <p className="text-[#0e151b] text-base font-normal leading-normal max-w-[720px]">
                  From scheduling to client testimonials, we provide the tools to manage and grow your practice.
                </p>
              </div>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-0">
                <div className="flex flex-1 gap-3 rounded-lg border border-[#d0dce7] bg-slate-50 p-4 flex-col">
                  <div className="text-[#0e151b]" data-icon="CursorClick" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M169.64,134.33l44.77-19.46A16,16,0,0,0,213,85.07L52.92,32.8A16,16,0,0,0,32.8,52.92L85.07,213a15.83,15.83,0,0,0,14.41,11l.79,0a15.83,15.83,0,0,0,14.6-9.59h0l19.46-44.77L184,219.31a16,16,0,0,0,22.63,0l12.68-12.68a16,16,0,0,0,0-22.63Zm-69.48,73.76.06-.05Zm95.15-.09-49.66-49.67a16,16,0,0,0-26,4.94l-19.42,44.65L48,48l159.87,52.21-44.64,19.41a16,16,0,0,0-4.94,26L208,195.31ZM88,24V16a8,8,0,0,1,16,0v8a8,8,0,0,1-16,0ZM8,96a8,8,0,0,1,8-8h8a8,8,0,0,1,0,16H16A8,8,0,0,1,8,96ZM120.85,28.42l8-16a8,8,0,0,1,14.31,7.16l-8,16a8,8,0,1,1-14.31-7.16Zm-81.69,96a8,8,0,0,1-3.58,10.74l-16,8a8,8,0,0,1-7.16-14.31l16-8A8,8,0,0,1,39.16,124.42Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#0e151b] text-base font-bold leading-tight">Easy scheduling integration</h2>
                    <p className="text-[#4e7497] text-sm font-normal leading-normal">Seamlessly integrate your scheduling system to manage appointments effortlessly.</p>
                  </div>
                </div>
                <div className="flex flex-1 gap-3 rounded-lg border border-[#d0dce7] bg-slate-50 p-4 flex-col">
                  <div className="text-[#0e151b]" data-icon="PencilSimple" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM92.69,208H48V163.31l88-88L180.69,120ZM192,108.68,147.31,64l24-24L216,84.68Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#0e151b] text-base font-bold leading-tight">Client testimonial showcase</h2>
                    <p className="text-[#4e7497] text-sm font-normal leading-normal">Build trust with potential clients by showcasing positive feedback.</p>
                  </div>
                </div>
                <div className="flex flex-1 gap-3 rounded-lg border border-[#d0dce7] bg-slate-50 p-4 flex-col">
                  <div className="text-[#0e151b]" data-icon="CurrencyDollar" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M152,120H136V56h8a32,32,0,0,1,32,32,8,8,0,0,0,16,0,48.05,48.05,0,0,0-48-48h-8V24a8,8,0,0,0-16,0V40h-8a48,48,0,0,0,0,96h8v64H104a32,32,0,0,1-32-32,8,8,0,0,0-16,0,48.05,48.05,0,0,0,48,48h16v16a8,8,0,0,0,16,0V216h16a48,48,0,0,0,0-96Zm-40,0a32,32,0,0,1,0-64h8v64Zm40,80H136V136h16a32,32,0,0,1,0,64Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#0e151b] text-base font-bold leading-tight">Affordable pricing</h2>
                    <p className="text-[#4e7497] text-sm font-normal leading-normal">Get a professional website without breaking the bank.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="@container">
              <div className="flex flex-col justify-end gap-6 px-4 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20">
                <div className="flex flex-col gap-2 text-center">
                  <h1
                    className="text-[#0e151b] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]"
                  >
                    Ready to build your online presence?
                  </h1>
                  <p className="text-[#0e151b] text-base font-normal leading-normal max-w-[720px">Join thousands of therapists who have transformed their practices with Circle.</p>
                </div>
                <div className="flex flex-1 justify-center">
                  <div className="flex justify-center">
                    <button
                      className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#1982e5] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] grow"
                      onClick={() => window.location.href='/theme'}
                    >
                      <span className="truncate">Try for free</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="flex justify-center">
          <div className="flex max-w-[960px] flex-1 flex-col">
            <footer className="flex flex-col gap-6 px-5 py-10 text-center @container">
              <div className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
                <a className="text-[#4e7497] text-base font-normal leading-normal min-w-40" href="#">About</a>
                <a className="text-[#4e7497] text-base font-normal leading-normal min-w-40" href="#">Contact</a>
                <a className="text-[#4e7497] text-base font-normal leading-normal min-w-40" href="#">Privacy Policy</a>
                <a className="text-[#4e7497] text-base font-normal leading-normal min-w-40" href="#">Terms of Service</a>
              </div>
              <p className="text-[#4e7497] text-base font-normal leading-normal">© 2023 Circle. All rights reserved.</p>
            </footer>
          </div>
        </footer>
      </div>
    </div>
  );
}

