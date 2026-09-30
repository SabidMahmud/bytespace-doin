import React from "react";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-[var(--color-persian-blue-800)] w-full flex flex-col xl:justify-center min-h-[100vh] xl:min-h-[1024px] xl:h-[1024px]">
                {/* Exact 2px Stroke Grid Background from Figma [Group 4: 12:224] - Full Screen Width */}
                <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
                  <Image
                    src="/hero-grid.svg"
                    alt=""
                    fill
                    className="w-full h-full object-cover select-none"
                    priority
                    unoptimized
                  />
                </div>
      
                {/* ── 3D Decorative Shapes (Pinned to Viewport Edges) ── */}
      
                {/* 1. Top-Left Lime Coil */}
                <div className="absolute -left-[56px] top-[283px] w-[256px] h-[272px] z-30 pointer-events-none hidden xl:block">
                  <Image src="/shape-lime-blob.png" alt="" fill sizes="256px" className="object-contain" priority unoptimized />
                </div>
      
                {/* 4. Top-Right Lime Cylinder */}
                <div className="absolute right-[-3px] top-[256px] w-[164px] h-[298px] z-30 pointer-events-none hidden xl:block">
                  <Image src="/shape-lime-cylinder.png" alt="" fill sizes="164px" className="object-contain" priority unoptimized />
                </div>
      
                {/* ── Desktop Version (Exact 1440x1024 Figma Artboard Stage) ── */}
                <div className="hidden xl:block relative w-[1440px] h-[1024px] shrink-0 opacity-100 mx-auto">
      
                  {/* ── Giant Lime Circle [1:1866] -> x: 145, y: 582, w: 1149, h: 1149, stroke: 320px inside ── */}
                  <div className="absolute left-[145px] top-[582px] w-[1149px] h-[1149px] rounded-full border-[320px] border-[#D4FB20] bg-transparent z-0 pointer-events-none box-border" />
      
                  {/* ── 3D Decorative Shapes (Pinned to Content) ── */}
      
                  {/* 2. Mid-Left White Coil */}
                  <div className="absolute left-[215px] top-[506px] w-[114px] h-[121px] z-30 pointer-events-none hidden lg:block">
                    <Image src="/shape-white-coil-left.png" alt="" fill sizes="114px" className="object-contain" priority unoptimized />
                  </div>
      
                  {/* 3. Bottom-Left White Donut/Ring */}
                  <div className="absolute left-[70px] top-[741px] w-[236px] h-[216px] z-30 pointer-events-none hidden lg:block">
                    <Image src="/shape-white-ring.png" alt="" fill sizes="236px" className="object-contain" priority />
                  </div>
      
                  {/* 5. Mid-Right White Pyramid */}
                  <div className="absolute right-[183px] top-[486px] w-[124px] h-[136px] z-30 pointer-events-none hidden lg:block">
                    <Image src="/shape-white-pyramid.png" alt="" fill sizes="124px" className="object-contain" priority />
                  </div>
      
                  {/* 6. Bottom-Right White Coil */}
                  <div className="absolute right-[52px] top-[710px] w-[189px] h-[249px] z-30 pointer-events-none hidden lg:block">
                    <Image src="/shape-white-coil-right.png" alt="" fill sizes="189px" className="object-contain" priority unoptimized />
                  </div>
      
                  {/* ── Main Typography & Search [Hero 1:1769] ── */}
      
                  {/* Headline [1:1770] -> x: 252, y: 169, w: 935, h: 172 (Heading L: Poppins SemiBold 72px / 86.4px, -0.72px) */}
                  <div className="absolute left-[252px] top-[169px] w-[935px] text-center z-10 pointer-events-none">
                    <h1 className="font-heading font-semibold text-[72px] leading-[86.4px] text-white tracking-[-0.72px]">
                      Get Access to Hundreds<br />Courses Available
                    </h1>
                  </div>
      
                  {/* Subtitle [1:1771] -> x: 310, y: 373, w: 819, h: 29 (Body L: Satoshi Regular 18px / 28.8px) */}
                  <div className="absolute left-[310px] top-[373px] w-[819px] text-center z-10 pointer-events-none">
                    <p className="font-sans text-[18px] leading-[28.8px] text-[#E5E6E8] font-normal whitespace-nowrap">
                      Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
                    </p>
                  </div>
      
                  {/* Search Bar [1:1772] -> x: 430, y: 462, w: 581, h: 52 */}
                  <div className="absolute left-[430px] top-[462px] w-[581px] h-[52px] flex items-center gap-[16px] z-20">
                    {/* White Input Pill [1:1773] (w: 461px, h: 52px) */}
                    <div className="w-[461px] h-[52px] bg-white rounded-full px-6 flex items-center shadow-lg shrink-0">
                      <svg className="w-5 h-5 text-[#82868E] mr-3 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      <input
                        type="text"
                        placeholder="Course, topic, creator"
                        className="w-full bg-transparent outline-none text-[#242528] font-sans placeholder-[#82868E] text-[18px] leading-[28.8px] font-normal"
                      />
                    </div>
                    {/* Electric Lime Button Pill [1:1776] (w: 104px, h: 52px, Label L: Satoshi Medium 18px / 21.6px) */}
                    <button
                      type="button"
                      className="w-[104px] h-[52px] bg-[#D4FB20] hover:bg-[#CBFC01] text-[#242528] font-sans font-medium text-[18px] leading-[21.6px] rounded-full shadow-lg flex items-center justify-center transition-colors shrink-0 cursor-pointer"
                    >
                      Search
                    </button>
                  </div>
      
                  {/* ── Student with Laptop [1:1796] -> x: 431, y: 512, w: 578, h: 541 (Actual Figma S3 Image) ── */}
                  <div className="absolute left-[431px] top-[512px] w-[578px] h-[541px] z-10 pointer-events-none">
                    <Image
                      src="https://s3-alpha-sig.figma.com/img/29a5/2a24/e51266edcd7d57d73392ee5fc4833220?Expires=1791763200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=X4IOYdzdq-qZLjHIfmGNt~KfAudV5EU1adxHH3mvv7mikMxzuIyO3TOc1EykRcuhlqsI8iuaqFKTbjHjgco1crfl-XyCeVJcsAfEVkuJpfflGQxfSWuVbsIC~yrp6kJ88ULsI4y6TXUDlt0bUNhyqBU5kiq6zPbJlltLpcPnN512joKwUZ5Im8bAm2U2yoMlGDf7JiXJ84oEXMSUbn769D4CFHPCvtDI-I7gaRXFgLcADSKzGU4Ylk-SXefbDP3xIhzsKHgs4ShPeVSQNxVX2wLgAJzZY9qNb~OHYIKN3ogFqCL9NpfNz1WjEl4qkT3ziYhutmuFQl711lTrIxAl~g__"
                      alt="Student with laptop"
                      fill
                      sizes="578px"
                      className="w-full h-full object-contain select-none"
                      priority
                      unoptimized
                    />
                  </div>
      
                  {/* ── 3 Floating Glassmorphic Cards (Exact Figma Positions & Z-Index) ── */}
      
                  {/* Card 1: UI/UX Design [46:126] -> x: 404, y: 639, w: 208, h: 70 */}
                  <div className="absolute left-[404px] top-[639px] w-[208px] h-[70px] bg-white rounded-2xl shadow-xl z-20 px-4 py-3 text-left border border-white/80">
                    <p className="font-sans font-medium text-[#242528] text-[16px] leading-[19.2px] mb-0.5">UI/UX Design</p>
                    <p className="text-[12px] font-sans font-normal text-[#82868E] leading-[19.2px]">200 Courses &bull; 1000+ Students</p>
                  </div>
      
                  {/* Card 2: Learning Progress [1:1797] -> x: 842, y: 651, w: 232, h: 131 */}
                  <div className="absolute left-[842px] top-[651px] w-[232px] h-[131px] bg-white rounded-2xl shadow-xl z-20 p-4 text-left border border-white/80">
                    <p className="text-[14px] font-sans font-medium text-[#242528] mb-1">Learning Progress</p>
                    <p className="text-[48px] leading-[57.6px] font-heading font-semibold text-[#242528] mb-2 tracking-tight">55%</p>
                    <div className="w-[200px] h-2 bg-[#F5F5F6] rounded-full overflow-hidden">
                      <div className="w-[112px] h-full bg-[#D4FB20] rounded-full" />
                    </div>
                  </div>
      
                  {/* Card 3: Happy Students [1:1821] -> x: 328, y: 837, w: 258, h: 121 */}
                  <div className="absolute left-[328px] top-[837px] w-[258px] h-[121px] bg-white rounded-2xl shadow-xl z-20 p-4 text-left border border-white/80">
                    <p className="text-[16px] font-sans font-medium text-[#242528] leading-[19.2px] mb-1">Happy Students</p>
                    <div className="flex items-center gap-1.5 mb-2.5">
                      <span className="text-[12px] font-sans font-normal text-[#82868E] leading-[19.2px]">4.5 (240)</span>
                      <span className="text-[#D4FB20] text-sm">★</span>
                    </div>
                    {/* Overlapping Avatars Row [1:1827] - 7 Actual Figma Avatars + 2K+ Badge */}
                    <div className="flex items-center">
                      {/* 1 [1:1828] */}
                      <div className="relative w-[32px] h-[32px] rounded-full border-2 border-white overflow-hidden -mr-[10px] shrink-0">
                        <Image
                          src="https://s3-alpha-sig.figma.com/img/9ef8/cb32/9b949267cc8214b6727067c4a13af4b4?Expires=1791763200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=rLWAapr8lZtve0rRdejpjF4-tDdZ4PYTuUWQmCCzYndJglq3-iFLmO3aUr0rOo5h2I25OsBdfJjXOQQFdDD~Vc5G8BEJkn6NuSmBlWw2ul79vsHfxmBsnxAeMXCQWDvBkx~MsPh9HJGlhwg2DNbenKunuO~mRXOFWUr8F0psjL~c2ps6wZI6e3fxy8RXI2UIBKdlyAKMlxocWu998hhDHPhmVyAjYays-RB6Ekx1uT4NN9d15TLZFoBDEDYeRGFGcehJk0jMkaQPPXXIMcBnsn~aUtmwnK~wJ~QnAmyy4LCMF9SIVF~FumFB~nmyROeJnAC1Y1wEgREbEtZFVIJPzQ__"
                          alt="Student 1"
                          fill
                          sizes="32px"
                          className="object-cover"
                          unoptimized
                        />
                      </div>
                      {/* 2 [1:1829] */}
                      <div className="relative w-[32px] h-[32px] rounded-full border-2 border-white overflow-hidden -mr-[10px] shrink-0">
                        <Image
                          src="https://s3-alpha-sig.figma.com/img/b449/79e1/c98ecb3ec92ac86805fe55581fbeaa60?Expires=1791763200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fdfgjl8rvKNZnjFlvevdec1Aq4Nb9zHA9anPZQoMQ5qIDT9rbbVP0qqG~dX68dyaANzFS4XZ102osNmProGnUAqkzthKI8BFN~-9gxZJsobV3pjFEfhUIyPI67970Q5t-2v0E8DG3gTRVHa07EKrSWOHKRh~JxwL1B02~Kqvrbdkk23uSsIxU-ctORfK4dEG0o0wggXz-RDUe1VJ5FkKv8GTmmAdX3ACPkaUjWx89Y9dLiRmdygUEIjC59mqRupM~~3hLI4SI7~gSNRbC0HT7CIBDeAENN5l45I123z2cdGC9MnkJe2sMgx4r05sk39dMdNAjwPetvoaEjCjiremXA__"
                          alt="Student 2"
                          fill
                          sizes="32px"
                          className="object-cover"
                          unoptimized
                        />
                      </div>
                      {/* 3 [1:1830] */}
                      <div className="relative w-[32px] h-[32px] rounded-full border-2 border-white overflow-hidden -mr-[10px] shrink-0">
                        <Image
                          src="https://s3-alpha-sig.figma.com/img/83fb/3e04/056cc892636460bee5791aa3f243854c?Expires=1791763200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=LQzThQ4hzMfYC2O7n~qZ5cS4NqmelbCdJVIxlU~c7XSUyeC95ZlFc~EwBVnl~59ZXFaZeYVHAfCLamFxyIu8z883AeYAaG62XRSzeQR6fsi1cHaZMUtqa77UcbQM6egRW4r91R1KPgpd3~YIs~85E1rcVnT2~2q6l3jgpneLaqAX7o68v4ZnBwKGK4e4ZaZMuZ602IPw9LtzYg2EsMUdBoFM0wiITew9CUESjpVFDVAifnoteQI6wSOgA8vzBRaHRitLukcBl5eKshgagmpN3CpSYiEJ-MdTUJr8oggC0uypFD59AuBOWUyeCXHKWFur9r9seH2s4zGl5Tv7kePA0A__"
                          alt="Student 3"
                          fill
                          sizes="32px"
                          className="object-cover"
                          unoptimized
                        />
                      </div>
                      {/* 4 [1:1831] */}
                      <div className="relative w-[32px] h-[32px] rounded-full border-2 border-white overflow-hidden -mr-[10px] shrink-0">
                        <Image
                          src="https://s3-alpha-sig.figma.com/img/f3cf/29a8/fed39589ceb38423e65b26b8d6c93123?Expires=1791763200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=p~RRHxe9GzSdwfG8LsbCjTBfhcUu-OhYJfHpmvpyzRE6T3-1~5QNZhVpjXLZcTbu3Qc8PU5W3yRDn8GH648jSmZKf6L7rf1h-KQPQS5KPNtSEzEM-5m1OVrTarSFbd-l7kk5k3KbfJaRTrtjENIS8I0dZ0nYXhRsZF3n7k2h7~mgb1O8gkn1mW3Yrr6wP-8SkKJMkeRDa-p07YEys7LUqi-AdYDR6mNS22nKEN4ndLA0uT8qf~uHlmlIOhYo8aQ77nTxhCvzdxDC8bwt9ybXm7UJoeTyipd~YCUHDbbIBpybWpZjvOdMHF-UgZiABqcnrWx95p2QhVbmxusmW8403g__"
                          alt="Student 4"
                          fill
                          sizes="32px"
                          className="object-cover"
                          unoptimized
                        />
                      </div>
                      {/* 5 [1:1832] */}
                      <div className="relative w-[32px] h-[32px] rounded-full border-2 border-white overflow-hidden -mr-[10px] shrink-0">
                        <Image
                          src="https://s3-alpha-sig.figma.com/img/5824/acac/b3b76175bc84084ec18597109498f96d?Expires=1791763200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=nMD--Ed~bEpVysSKfylSns94KfJPudNlOdEm8fZoykML4gOhejs5G0wfPv~owk9w9Z8XBX0~emX~bvif-wQlPHzhMCg8HDt81QyS3BHKexWVlU8ahX7jKL~PBFreY5bv18KZad9exZx66Nc0lvdzbbD6SbKKGvJ9Xj4wd4XT6b1VbZxzorxfrg-tJgI1MFl~86Q1mI4BNY6a-HboRiv~DI16bLsfSpnDE2boWvb6VKR-IgZu0d8KBeQSLB0-gJgAB7Anw9ZY~Zeha-IeBcH23dq-NBkQi7oE3HkOr9mPojAR9w6BwX03XTiqYXL32xGhxeQK8o-SnIBOqrhFGwUwhA__"
                          alt="Student 5"
                          fill
                          sizes="32px"
                          className="object-cover"
                          unoptimized
                        />
                      </div>
                      {/* 6 [1:1833] */}
                      <div className="relative w-[32px] h-[32px] rounded-full border-2 border-white overflow-hidden -mr-[10px] shrink-0">
                        <Image
                          src="https://s3-alpha-sig.figma.com/img/7fdc/cc78/3264eedc4fb989984eecbc4058a219f2?Expires=1791763200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=gnGhsW2dxthbK4zmzS0g-cdoYAyi4Lh0EPqGOZ1GAg9l~HwsXTNQaaPxsrAYzObiVpMEmSbUPjTdlR~hs9dRB90ha2ZnZVv~6--8PpkRIhnz6VEEZsLaFIT0c~3t~02Jj9-YkkLNvOQ37ICRblkFy1~aoSIq-j7Lbg~8Gnx~gzwPDvcAuJb99t~e9j4lUbNkEj9iVTjV1AAB-W3E-JRrvfQp2KF~eNNXE2mREuNiNrxjRDkiBL63lIKE2AFe-Nf3ipVEvRj1wffiyuotBjPj3~MoXx5cp6drdxrECFjxhNvuBYbyZv0lazfJfuuo8nfDN60hFlpVee98wlDfC59Otg__"
                          alt="Student 6"
                          fill
                          sizes="32px"
                          className="object-cover"
                          unoptimized
                        />
                      </div>
                      {/* 7 [1:1834] */}
                      <div className="relative w-[32px] h-[32px] rounded-full border-2 border-white overflow-hidden -mr-[10px] shrink-0">
                        <Image
                          src="https://s3-alpha-sig.figma.com/img/1e07/8348/a54489bfd231d82fe1944770883c8d80?Expires=1791763200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fyj~cUWUdFrdeC30B2UijSjpXjIoEwSHd7K0EvS9CtGkVpH1BB2JFoc91l~K5V~INLvsU1c6bdYWkLEh7wD8EuUlwAFwKhNdsfzOAZ30eUAaBdukqV-Xzm4RXbQ~ixKcJwD-ia3CXm8Kq4yP~3R-3VyDCzjUBK6Xfdx87HZCCxdz1ORHK4seXvNLwTemdrpfr4qujxMKbYJCB5VaArBQUeeiJuxeT8ljIuaUfAV3XXgX1JgOOerpqvJYIclsyUOfbGpjGaQnBqno~2-UP5LulsAHKUVv5E49pt1n3EoW88VljtNQZLcNFTncmeVdQj6a-6G3ML9YBoQJFdMcv1bu1A__"
                          alt="Student 7"
                          fill
                          sizes="32px"
                          className="object-cover"
                          unoptimized
                        />
                      </div>
                      {/* 2K+ Badge [1:1835] */}
                      <div className="w-[32px] h-[32px] rounded-full bg-[#D4FB20] border-2 border-white flex items-center justify-center text-[10px] font-bold text-[#242528] z-10 shrink-0">
                        2K+
                      </div>
                    </div>
                  </div>
      
                </div>

                {/* ── Mobile & Tablet Version (Flexbox Layout) ── */}
                <div className="xl:hidden relative w-full flex flex-col items-center pt-24 pb-16 px-4 md:px-8 z-10 flex-1">
                  
                  {/* Headline */}
                  <div className="w-full max-w-3xl text-center mb-6">
                    <h1 className="font-heading font-semibold text-[38px] sm:text-[48px] md:text-[56px] leading-[1.2] text-white tracking-[-0.72px]">
                      Get Access to Hundreds<br />Courses Available
                    </h1>
                  </div>

                  {/* Subtitle */}
                  <div className="w-full max-w-2xl text-center mb-8">
                    <p className="font-sans text-[15px] sm:text-[17px] leading-[1.6] text-[#E5E6E8] font-normal">
                      Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
                    </p>
                  </div>

                  {/* Search Bar */}
                  <div className="w-full max-w-lg mb-10 flex flex-col sm:flex-row gap-3 sm:gap-4 items-center">
                    <div className="w-full h-[52px] bg-white rounded-full px-6 flex items-center shadow-lg shrink-0">
                      <svg className="w-5 h-5 text-[#82868E] mr-3 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      <input
                        type="text"
                        placeholder="Course, topic, creator"
                        className="w-full bg-transparent outline-none text-[#242528] font-sans placeholder-[#82868E] text-[16px] md:text-[18px] font-normal"
                      />
                    </div>
                    <button
                      type="button"
                      className="w-full sm:w-[104px] h-[52px] bg-[#D4FB20] hover:bg-[#CBFC01] text-[#242528] font-sans font-medium text-[16px] md:text-[18px] rounded-full shadow-lg flex items-center justify-center transition-colors shrink-0"
                    >
                      Search
                    </button>
                  </div>

                  {/* Student Visual with Proportional Lime Arch & Clean Badges */}
                  <div className="relative w-[300px] sm:w-[380px] aspect-[578/541] mt-4 flex items-center justify-center">
                    
                    {/* Exact Proportional Figma Lime Arch framing the student from behind */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-[16%] w-[310px] h-[310px] sm:w-[380px] sm:h-[380px] rounded-full border-[48px] sm:border-[60px] border-[#D4FB20] bg-transparent pointer-events-none -z-0 box-border" />

                    {/* Student Image */}
                    <Image
                      src="https://s3-alpha-sig.figma.com/img/29a5/2a24/e51266edcd7d57d73392ee5fc4833220?Expires=1791763200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=X4IOYdzdq-qZLjHIfmGNt~KfAudV5EU1adxHH3mvv7mikMxzuIyO3TOc1EykRcuhlqsI8iuaqFKTbjHjgco1crfl-XyCeVJcsAfEVkuJpfflGQxfSWuVbsIC~yrp6kJ88ULsI4y6TXUDlt0bUNhyqBU5kiq6zPbJlltLpcPnN512joKwUZ5Im8bAm2U2yoMlGDf7JiXJ84oEXMSUbn769D4CFHPCvtDI-I7gaRXFgLcADSKzGU4Ylk-SXefbDP3xIhzsKHgs4ShPeVSQNxVX2wLgAJzZY9qNb~OHYIKN3ogFqCL9NpfNz1WjEl4qkT3ziYhutmuFQl711lTrIxAl~g__"
                      alt="Student with laptop"
                      fill
                      sizes="(max-width: 640px) 300px, 380px"
                      className="w-full h-full object-contain select-none relative z-10"
                      priority
                      unoptimized
                    />
                    
                    {/* UI/UX Design Badge (Top-Left) */}
                    <div className="absolute -left-2 sm:-left-6 top-[18%] bg-white rounded-xl sm:rounded-2xl shadow-lg z-20 px-2.5 py-1.5 sm:px-3.5 sm:py-2.5 text-left border border-white/80">
                      <p className="font-sans font-medium text-[#242528] text-[11px] sm:text-[14px] leading-tight mb-0.5">UI/UX Design</p>
                      <p className="text-[9px] sm:text-[11px] font-sans font-normal text-[#82868E] leading-tight">200 Courses &bull; 1000+ Students</p>
                    </div>

                    {/* Learning Progress Badge (Bottom-Right) */}
                    <div className="absolute -right-2 sm:-right-6 bottom-[10%] bg-white rounded-xl sm:rounded-2xl shadow-lg z-20 px-3 py-2 sm:px-4 sm:py-3 text-left border border-white/80 w-[140px] sm:w-[190px]">
                      <p className="text-[10px] sm:text-[12px] font-sans font-medium text-[#242528] mb-0.5">Learning Progress</p>
                      <p className="text-[22px] sm:text-[32px] leading-tight font-heading font-semibold text-[#242528] mb-1 sm:mb-1.5 tracking-tight">55%</p>
                      <div className="w-full h-1.5 bg-[#F5F5F6] rounded-full overflow-hidden">
                        <div className="w-[55%] h-full bg-[#D4FB20] rounded-full" />
                      </div>
                    </div>

                  </div>
                </div>
              </section>

    </>
  );
};
