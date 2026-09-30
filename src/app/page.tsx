import React from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { CourseCard } from "@/components/CourseCard";

const courses = [
  {
    title: "Learn Figma from Basic",
    author: "by purepearl studio",
    level: "Beginner",
    image: "/courses/course-3.png",
    price: "$25",
    period: "/lifetime",
    rating: "4.5",
  },
  {
    title: "Build Digital Asset",
    author: "by purepearl studio",
    level: "Beginner",
    image: "/courses/course-1.png",
    price: "$25",
    period: "/lifetime",
    rating: "4.5",
  },
  {
    title: "the Power of Big Data",
    author: "by purepearl studio",
    level: "Beginner",
    image: "/courses/course-2.png",
    price: "$25",
    period: "/lifetime",
    rating: "4.5",
  },
  {
    title: "Balancing Productivity and Self-Care",
    author: "by purepearl studio",
    level: "Beginner",
    image: "/courses/course-4.png",
    price: "$25",
    period: "/lifetime",
    rating: "4.5",
  },
  {
    title: "Mastering Money Management",
    author: "by purepearl studio",
    level: "Beginner",
    image: "/courses/course-5.png",
    price: "$25",
    period: "/lifetime",
    rating: "4.5",
  },
  {
    title: "From Idea to Startup Success",
    author: "by purepearl studio",
    level: "Beginner",
    image: "/courses/course-6.png",
    price: "$25",
    period: "/lifetime",
    rating: "4.5",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        {/* Hero Section (Hero_Frame [1:1695]: width: 1440px, height: 1024px, opacity: 1, angle: 0deg) */}
        <section className="relative overflow-hidden bg-[var(--color-persian-blue-800)] w-full flex justify-center h-[1024px]">
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

          {/* 1440x1024 Exact Figma Artboard Stage */}
          <div className="relative w-[1440px] h-[1024px] shrink-0 opacity-100">

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
        </section>


        {/* Partners / Logos Section (Frame 2 [1:1794]) */}
        <section className="w-full bg-[#F5F5F6] py-[80px] flex items-center justify-center">
          <div className="w-full max-w-[1440px] px-6 sm:px-12 lg:px-[121px] flex items-center justify-center">
            <div className="w-full flex flex-wrap items-center justify-center gap-[72px] opacity-100">
              <Image src="/partner-1.svg" alt="Partner 1" width={167} height={42} className="h-[42px] w-auto object-contain shrink-0" unoptimized />
              <Image src="/partner-2.svg" alt="Partner 2" width={168} height={42} className="h-[42px] w-auto object-contain shrink-0" unoptimized />
              <Image src="/partner-3.svg" alt="Partner 3" width={170} height={42} className="h-[42px] w-auto object-contain shrink-0" unoptimized />
              <Image src="/partner-4.svg" alt="Partner 4" width={170} height={42} className="h-[42px] w-auto object-contain shrink-0" unoptimized />
              <Image src="/partner-5.svg" alt="Partner 5" width={169} height={42} className="h-[42px] w-auto object-contain shrink-0" unoptimized />
            </div>
          </div>
        </section>

        {/* Discover Your Passion Section (Frame 3 [12:101] + Tab_Categories [21:33] + Frame 6 [21:56] + Frame 7 [21:63]) */}
        <section className="w-full bg-white pt-[72px] pb-[77px] flex justify-center">
          <div className="w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 flex flex-col items-center">

            {/* Headline [11:65] -> Poppins 600, 44px / 52.8px, -0.44px letter spacing, #040819, max-w: 588px */}
            <h2 className="font-heading font-semibold text-3xl sm:text-4xl lg:text-[44px] lg:leading-[52.8px] text-[#040819] tracking-[-0.44px] mb-[16px] text-center max-w-[588px]">
              Discover Your Passion, Build Your Skills
            </h2>

            {/* Subtitle [11:64] -> Satoshi 400, 18px / 28.8px, #82868E, max-w: 917px */}
            <p className="font-sans text-[16px] sm:text-[18px] sm:leading-[28.8px] text-[#82868E] max-w-[1020px] text-center font-normal mb-[42px] px-4 sm:px-0">
              At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different<br className="hidden md:inline" /> fields, from technology to the arts, and make a difference in your career and life.
            </p>

            {/* 3 Rows of Category Filter Pills */}
            <div className="flex flex-col items-center gap-[21px] w-full">

              {/* Row 1 (Tab_Categories [21:33] -> w: 1086px, h: 43px, gap: 16px) */}
              <div className="flex flex-wrap justify-center items-center gap-4">
                <button
                  type="button"
                  className="h-[43px] px-4 bg-[#D4FB20] text-[#242528] rounded-[24px] font-sans font-medium text-[16px] leading-[19.2px] transition-all hover:bg-[#CBFC01] select-none cursor-pointer shrink-0"
                >
                  Featured
                </button>
                {['Music', 'Drawing & Painting', 'Marketing', 'Animation', 'Social Media', 'UI/UX Design', 'Creative Marketing'].map((cat, i) => (
                  <button
                    key={i}
                    type="button"
                    className="h-[43px] px-4 bg-[#F5F5F6] hover:bg-[#EAEBED] text-[#4B4C53] rounded-[24px] font-sans font-medium text-[16px] leading-[19.2px] transition-colors select-none cursor-pointer shrink-0"
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Row 2 (Frame 6 [21:56] -> w: 952px, h: 43px, gap: 16px) */}
              <div className="flex flex-wrap justify-center items-center gap-4">
                {['Digital Illustration', 'Film & Video', 'Crafts', 'Freelance & Entrepreneurship', 'Graphic Design', 'Photography'].map((cat, i) => (
                  <button
                    key={i}
                    type="button"
                    className="h-[43px] px-4 bg-[#F5F5F6] hover:bg-[#EAEBED] text-[#4B4C53] rounded-[24px] font-sans font-medium text-[16px] leading-[19.2px] transition-colors select-none cursor-pointer shrink-0"
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Row 3 (Frame 7 [21:63] -> w: 622px, h: 43px, gap: 16px) */}
              <div className="flex flex-wrap justify-center items-center gap-4">
                {['Productivity', 'Web Development', 'Data Science', 'Cooking'].map((cat, i) => (
                  <button
                    key={i}
                    type="button"
                    className="h-[43px] px-4 bg-[#F5F5F6] hover:bg-[#EAEBED] text-[#4B4C53] rounded-[24px] font-sans font-medium text-[16px] leading-[19.2px] transition-colors select-none cursor-pointer shrink-0"
                  >
                    {cat}
                  </button>
                ))}
                <button
                  type="button"
                  className="h-[43px] px-2 text-[#003BE2] hover:text-[#0028A3] font-sans font-medium text-[16px] leading-[19.2px] transition-colors flex items-center cursor-pointer select-none"
                >
                  + More
                </button>
              </div>

            </div>

          </div>
        </section>

        {/* Course Cards Grid Section (Frame 8 [33:683]) -> w: 1199px, h: 808px, gap: 40px, top: 1768px, left: 120px */}
        <section className="w-full bg-white pb-[72px] flex justify-center">
          <div className="w-full max-w-[1199px] px-4 xl:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] justify-items-center">
              {courses.map((course, idx) => (
                <CourseCard key={idx} {...course} />
              ))}
            </div>
          </div>
        </section>

        {/* Explore Diverse Learning Paths Section (Frame 9 [34:684] & Frame 10 [34:725]) */}
        <section className="w-full bg-white pb-[120px] flex justify-center">
          <div className="w-full max-w-[1440px] px-6 sm:px-12 lg:px-[119px] flex flex-col items-center">

            {/* Header (Frame 9 [34:684] -> w: 917px, h: 117px, gap: 16px) */}
            <div className="w-full max-w-[917px] text-center mb-[68px]">
              <h2 className="font-heading font-semibold text-3xl sm:text-4xl lg:text-[36px] lg:leading-[43.2px] text-[#040819] tracking-[-0.36px] mb-4">
                Explore Diverse Learning Paths at Bytespace
              </h2>
              <p className="font-sans text-[16px] sm:text-[18px] sm:leading-[28.8px] text-[#82868E] font-normal max-w-[917px] mx-auto">
                At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there&apos;s something for everyone. Unleash your potential and explore our carefully curated categories.
              </p>
            </div>

            {/* 6 Category Cards Grid (Frame 10 [34:725] -> w: 1202px, h: 167px, gap: 40px) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-[40px] justify-items-center w-full max-w-[1202px]">
              {[
                { name: "Design", icon: "/icons/category-design.svg" },
                { name: "Development", icon: "/icons/category-development.svg" },
                { name: "IT & Software", icon: "/icons/category-it-software.svg" },
                { name: "Business", icon: "/icons/category-business.svg" },
                { name: "Marketing", icon: "/icons/category-marketing.svg" },
                { name: "Photography", icon: "/icons/category-photography.svg" },
              ].map((cat, idx) => (
                <div
                  key={idx}
                  className="w-[167px] h-[167px] bg-white rounded-[24px] border border-[#CED0D3] flex flex-col items-center justify-center gap-3 transition-all duration-200 hover:border-[#003BE2] hover:shadow-md group cursor-pointer"
                >
                  <div className="w-[60px] h-[60px] bg-[#D4FB20] rounded-full flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
                    <Image
                      src={cat.icon}
                      alt={cat.name}
                      width={36}
                      height={36}
                      className="w-9 h-9 object-contain"
                    />
                  </div>
                  <span className="font-sans text-[20px] leading-[24px] text-[#242528] font-medium text-center px-2">
                    {cat.name}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Features Showcase Section (Frame 15 [34:1159]) -> w: 1440px, h: 1460px */}
        <section className="w-full bg-[#FAFAFA] relative overflow-hidden flex justify-center py-[120px]">
          {/* Subtle Radial Gradient Decorative Background (Ellipse 8, 9, 10, 11, 12) - Full Screen Width */}
          <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
            <Image
              src="/frame15-bg.svg"
              alt=""
              fill
              className="w-full h-full object-cover select-none"
              priority
              unoptimized
            />
          </div>

          {/* Content Container (Frame 16 [34:1160] -> w: 1258px, gap: 72px) */}
          <div className="relative z-10 w-full max-w-[1440px] px-6 xl:pl-[121px] xl:pr-[61px] flex flex-col gap-[72px]">

            {/* Block 1 (Frame 13 [34:1157] -> w: 1258px, h: 552px, gap: 63px) */}
            <div className="w-full max-w-[1258px] flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-[63px]">

              {/* Left Text (Text [34:768] -> w: 574px, h: 404px) */}
              <div className="w-full lg:w-[574px] shrink-0 text-left">
                {/* Title [34:771] -> Poppins 600, 44px / 52.8px, -0.44px letter spacing, #242528 */}
                <h2 className="font-heading font-semibold text-3xl sm:text-4xl lg:text-[44px] lg:leading-[52.8px] text-[#242528] tracking-[-0.44px] mb-[40px] max-w-[577px]">
                  Your Path to Professional<br />Growth Starts Here!
                </h2>

                {/* Subtitle [34:772] -> Satoshi 400, 18px / 28.8px, #4B4C53, max-w: 477px */}
                <p className="font-sans text-[16px] sm:text-[18px] sm:leading-[28.8px] text-[#4B4C53] font-normal mb-[40px] max-w-[477px]">
                  Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
                </p>

                {/* Stats Row (Auto Layout Horizontal [34:773] -> gap: 56px) */}
                <div className="flex items-center gap-[56px]">
                  <div>
                    <p className="font-heading font-medium text-[36px] leading-[44px] tracking-[-0.36px] text-[#003BE2]">
                      12K
                    </p>
                    <p className="font-sans text-[18px] leading-[28.8px] text-[#4B4C53] font-normal">
                      Students
                    </p>
                  </div>
                  <div>
                    <p className="font-heading font-medium text-[36px] leading-[44px] tracking-[-0.36px] text-[#003BE2]">
                      70+
                    </p>
                    <p className="font-sans text-[18px] leading-[28.8px] text-[#4B4C53] font-normal">
                      Courses
                    </p>
                  </div>
                  <div>
                    <p className="font-heading font-medium text-[36px] leading-[44px] tracking-[-0.36px] text-[#003BE2]">
                      16
                    </p>
                    <p className="font-sans text-[18px] leading-[28.8px] text-[#4B4C53] font-normal">
                      Creators
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Feature Visual (Frame 11 [34:1155] -> w: 621px, h: 552px) */}
              <div className="w-full lg:w-[621px] flex justify-center shrink-0 overflow-visible">
                <div className="relative w-[621px] h-[552px] shrink-0 transform scale-[0.52] sm:scale-75 md:scale-90 lg:scale-100 origin-top -mb-[260px] sm:-mb-[130px] md:-mb-[55px] lg:mb-0">
                  {/* Layer 1: Course Card 1 [34:1055] */}
                  <div className="absolute left-0 top-0 z-20">
                    <CourseCard
                      title="Learn Figma from Basic"
                      author="by purepearl studio"
                      level="Beginner"
                      image="/courses/course-3.png"
                      price="$25"
                      period="/lifetime"
                      rating="4.5"
                      badges={["17 Lessons", "2 hours 16 mins", "59 Comments"]}
                    />
                  </div>

                  {/* Layer 2: 3D Lime Coil [34:981] */}
                  <div className="absolute left-[406px] top-[67px] w-[215px] h-[215px] z-60 pointer-events-none">
                    <Image
                      src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/784440af-fe60-4c79-b540-bad66b296e50"
                      alt="Electric lime coil"
                      width={215}
                      height={215}
                      className="w-full h-full object-contain"
                      unoptimized
                    />
                  </div>

                  {/* Layer 3: 3D Student with Laptop [34:971] */}
                  <div className="absolute left-0 top-[12px] w-[577px] h-[540px] z-30 pointer-events-none">
                    <Image
                      src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/72c4485e-0db4-41d9-94ba-5bd0652290fc"
                      alt="Student with laptop"
                      width={673}
                      height={642}
                      className="absolute -left-[76px] -top-[35px] max-w-none"
                      priority
                      unoptimized
                    />
                  </div>

                  {/* Layer 4: Learning Progress Card [34:1031] */}
                  <div className="absolute left-[345px] top-[213px] w-[232px] h-[138px] z-40 bg-white rounded-2xl shadow-xl p-4 flex flex-col justify-between border border-white/80">
                    <p className="font-sans font-medium text-[16px] leading-6 text-[#242528]">Learning Progress</p>
                    <p className="font-heading font-semibold text-[48px] leading-[57.6px] tracking-tight text-[#242528]">55%</p>
                    <div className="w-[200px] h-2 bg-[#F5F5F6] rounded-full overflow-hidden">
                      <div className="w-[112px] h-full bg-[#D4FB20] rounded-full" />
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Block 2 (Frame 14 [34:1158] -> w: 1200px, h: 596px, gap: 79px) */}
            <div className="w-full max-w-[1200px] flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-[79px]">

              {/* Left Dashboard Visual (Frame 12 [34:1156] -> w: 541px, h: 596px) */}
              <div className="w-full lg:w-[541px] flex justify-center shrink-0 overflow-visible">
                <div className="relative w-[541px] h-[596px] shrink-0 transform scale-[0.56] sm:scale-75 md:scale-90 lg:scale-100 origin-top -mb-[260px] sm:-mb-[140px] md:-mb-[60px] lg:mb-0">
                  {/* Layer 1: Total Revenue Card [34:987] */}
                  <div className="absolute left-0 top-[44px] w-[232px] h-[119px] z-20 bg-[#003BE2] rounded-2xl shadow-lg p-4 flex flex-col justify-between text-white">
                    <div>
                      <p className="font-sans font-medium text-[16px] leading-[19.2px]">Total Revenue</p>
                      <p className="font-sans text-[10px] text-white/80">July 1-28</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-heading font-semibold text-[24px] leading-8 text-white">$120.29</span>
                      <span className="bg-[#D4FB20] text-[#242528] font-sans font-medium text-[10px] px-2 py-0.5 rounded-full">+12$</span>
                    </div>
                    <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                      <div className="w-[112px] h-full bg-[#D4FB20] rounded-full" />
                    </div>
                  </div>

                  {/* Layer 1: Year to Date Card [34:998] */}
                  <div className="absolute left-0 top-[194px] w-[134px] h-[135px] z-20 bg-[#003BE2] rounded-2xl shadow-lg p-4 flex flex-col justify-between text-white">
                    <div>
                      <p className="font-sans font-medium text-[16px] leading-[19.2px]">Year to Date</p>
                      <p className="font-sans text-[10px] text-white/80">2023</p>
                    </div>
                    <span className="font-heading font-semibold text-[24px] leading-8 text-white">$1,200.38</span>
                    <div>
                      <span className="inline-block bg-[#D4FB20] text-[#242528] font-sans font-medium text-[10px] px-2 py-0.5 rounded-full">+12$</span>
                    </div>
                  </div>

                  {/* Layer 2: 3D Lime Coil [34:1006] */}
                  <div className="absolute left-[305px] top-[114px] w-[215px] h-[215px] z-50 pointer-events-none">
                    <Image
                      src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f7a34751-401c-4dda-a343-542834509895"
                      alt="Electric lime coil"
                      width={215}
                      height={215}
                      className="w-full h-full object-contain"
                      priority
                      unoptimized
                    />
                  </div>

                  {/* Layer 3: 3D Female Instructor with Tablet [34:1011] */}
                  <div className="absolute left-[28px] top-0 w-[435px] h-[596px] z-30 pointer-events-none">
                    <Image
                      src="/images/cutouts/instructor-female.png"
                      alt="Instructor with tablet"
                      width={507}
                      height={629}
                      className="absolute -left-[45px] -top-[31px] max-w-none"
                      unoptimized
                      priority
                    />
                  </div>

                  {/* Layer 4: Happy Students Card [34:1038] */}
                  <div className="absolute left-[283px] top-[413px] w-[258px] h-[123px] z-30 bg-white rounded-2xl shadow-xl p-4 flex flex-col justify-between border border-white/80">
                    <div>
                      <p className="font-sans font-medium text-[16px] leading-[19.2px] text-[#242528] mb-1">Happy Students</p>
                      <div className="flex items-center gap-1.5 mb-2">
                        <span className="font-sans text-[10px] text-[#242528] font-normal">4.5 (240)</span>
                        <span className="text-[#D4FB20] text-sm">★</span>
                      </div>
                    </div>
                    <div className="flex items-center -space-x-4">
                      {[
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/22e03c4a-2b06-457e-a859-3ca9a95c513e",
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9835594f-25d2-450e-8f98-417543c662b5",
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4915496f-047a-474f-9ce4-2200a099135e",
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f5583e32-ab2a-4730-a1f7-adfe25065c20",
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f3e65acd-f6ed-4f37-9743-ea3975a4d92a",
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0c44f8ff-a0ac-4092-8e3d-2d65e0b67e6d",
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e5496d55-478a-4736-bc16-e4652263d210",
                      ].map((avatarUrl, i) => (
                        <Image key={i} src={avatarUrl} alt="" width={43} height={43} className="w-[43px] h-[43px] rounded-full border-0 border-white object-cover" unoptimized />
                      ))}
                      <div className="w-[43px] h-[43px] rounded-full bg-[#D4FB20] border-0 border-white flex items-center justify-center text-[12px] font-bold text-[#242528] z-10 shrink-0">
                        2K+
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Text (Text [34:897] -> w: 580px, h: 388px) */}
              <div className="w-full lg:w-[580px] shrink-0 text-left">
                {/* Title [34:900] -> Poppins 600, 44px / 52.8px, -0.44px letter spacing, #242528 */}
                <h2 className="font-heading font-semibold text-3xl sm:text-4xl lg:text-[44px] lg:leading-[52.8px] text-[#242528] tracking-[-0.44px] mb-[40px] max-w-[391px]">
                  Create &amp; Manage<br />Courses Easily.
                </h2>

                {/* Subtitle [34:901] -> Satoshi 400, 18px / 28px, #4B4C53, max-w: 574px */}
                <p className="font-sans text-[16px] sm:text-[18px] sm:leading-[28.8px] text-[#4B4C53] font-normal mb-[40px] max-w-[574px]">
                  ByteSpace supports individuals or entities in the creation, publication, and administration of educational courses.
                </p>

                {/* Checklist (Auto Layout Vertical [34:902] -> gap: 16px) */}
                <div className="flex flex-col gap-4">
                  {[
                    "Share Your Expertise",
                    "Monetize Your Passion",
                    "Flexibility and Autonomy",
                    "Build a Community",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <svg className="w-6 h-6 text-[#003BE2] shrink-0" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                      <span className="font-sans font-medium text-[18px] leading-[21.6px] text-[#242528]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full bg-[#003be2] relative min-h-[488px] flex justify-center items-center overflow-hidden">
          {/* Tiled Grid Background overlay */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <Image
              src="/hero-grid.svg"
              alt=""
              fill
              className="w-full h-full object-cover select-none"
              unoptimized
            />
          </div>

          {/* Fixed 1440px container for absolute images to ensure perfect center pinning */}
          {/* z-30 ensures abstract shapes float ON TOP of the text, matching the Figma layer order */}
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-30">
            <div className="w-[1440px] min-w-[1440px] h-[488px] relative">
              <Image
                unoptimized
                src="/images/cutouts/cta_cone_1.png"
                alt=""
                width={190}
                height={189}
                className="absolute"
                style={{ left: "1079px", top: "0px" }}
              />
              <Image
                unoptimized
                src="/images/cutouts/cta_frame_1.png"
                alt=""
                width={334}
                height={332}
                className="absolute"
                style={{ left: "1108.25px", top: "288px" }}
              />
              <Image
                unoptimized
                src="/images/cutouts/cta_frame_2.png"
                alt=""
                width={389}
                height={387}
                className="absolute"
                style={{ left: "-120px", top: "-163px" }}
              />
              <Image
                unoptimized
                src="/images/cutouts/cta_frame_3.png"
                alt=""
                width={177}
                height={176}
                className="absolute"
                style={{ left: "177px", top: "4.5px" }}
              />
              <Image
                unoptimized
                src="/images/cutouts/cta_cone_2.png"
                alt=""
                width={190}
                height={189}
                className="absolute"
                style={{ left: "-49px", top: "224.5px" }}
              />
              <Image
                unoptimized
                src="/images/cutouts/cta_cone_3.png"
                alt=""
                width={346}
                height={344}
                className="absolute"
                style={{ left: "18px", top: "298px" }}
              />
              <Image
                unoptimized
                src="/images/cutouts/cta_cone_4.png"
                alt=""
                width={374}
                height={372}
                className="absolute"
                style={{ left: "1224px", top: "5px" }}
              />
            </div>
          </div>

          {/* Content Container (z-10 so it sits behind the floating shapes but above the grid) */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-[964px] w-full px-4 py-16 md:py-0">
            <h2 className="font-heading font-semibold text-[32px] md:text-[44px] leading-[1.2] text-[#F5F5F6] max-w-[710px] mb-[40px]">
              Unlock Your Potential as a Creator with ByteSpace
            </h2>
            <p className="font-sans text-[16px] md:text-[18px] leading-[1.6] text-[#F5F5F6] mb-[40px] max-w-[964px]">
              Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
            </p>
            <button className="bg-[#d4fb20] text-[#242528] font-sans font-medium text-[18px] px-6 py-3 rounded-[24px] hover:opacity-90 transition-opacity">
              Join as Creator
            </button>
          </div>
        </section>
        {/* Testimonials Section */}
        <section className="w-full bg-[#FAFAFA] relative overflow-hidden flex justify-center py-16 md:pt-[74px] md:pb-[57px]">
          {/* Background Gradient Blobs (z-0) */}
          <div className="absolute inset-0 flex justify-center pointer-events-none z-0">
            <div className="w-[1440px] min-w-[1440px] h-full relative">
              <div
                className="absolute rounded-full blur-[40px]"
                style={{
                  width: '1137px', height: '1137px',
                  left: '842px', top: '-241px',
                  opacity: 0.40,
                  background: 'radial-gradient(circle at center, rgba(203,252,1,1) 0%, rgba(203,252,1,0.23) 53%, rgba(203,252,1,0.06) 75%, rgba(203,252,1,0) 100%)'
                }}
              />
              <div
                className="absolute rounded-full blur-[40px]"
                style={{
                  width: '672px', height: '672px',
                  left: '395px', top: '-138px',
                  opacity: 0.60,
                  background: 'radial-gradient(circle at center, rgba(203,252,1,1) 0%, rgba(203,252,1,0.23) 53%, rgba(203,252,1,0.06) 75%, rgba(203,252,1,0) 100%)'
                }}
              />
              <div
                className="absolute rounded-full blur-[40px]"
                style={{
                  width: '1137px', height: '1137px',
                  left: '-442px', top: '149px',
                  opacity: 0.24,
                  background: 'radial-gradient(circle at center, rgba(0,59,226,1) 0%, rgba(0,59,226,0.23) 53%, rgba(0,59,226,0.06) 75%, rgba(0,59,226,0) 100%)'
                }}
              />
            </div>
          </div>

          {/* Content (z-10) */}
          <div className="relative z-10 w-full max-w-[1204px] px-4 flex flex-col">
            {/* Header */}
            <div className="flex flex-col lg:flex-row justify-between items-start mb-[72px] gap-6 lg:gap-0">
              <h2 className="font-heading font-semibold text-[32px] lg:text-[44px] leading-[1.2] tracking-[-0.44px] text-black w-full lg:max-w-[577px]">
                Discover What Our Community Is Saying
              </h2>
              <p className="font-sans text-[16px] lg:text-[18px] text-[#4F4F4F] leading-[1.6] w-full lg:max-w-[580px]">
                At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
              </p>
            </div>

            {/* Cards Grid */}
            <div className="flex flex-col lg:flex-row items-start gap-[41px]">

              {/* Card 1 */}
              <div className="bg-white rounded-[24px] p-6 flex flex-col items-start w-full lg:w-[374px]">
                <Image
                  src="https://s3-alpha-sig.figma.com/img/0577/f0e9/b7fca2f32639871454da0de95f951709?Expires=1791763200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XLP3K4Ds3CGdyslVgKkb2B8~navyxP66UrJ~rVjho0xt6lqQIMVuoP6LkClOKs4WKspF8RiQ1uN0-udGucK6~3pn--K3Rvn81blsLKXnon1cTH5s~pGE~R5p-kZYd3hnuUdpxn6UHMq7439uKjchT~Qf0lIyVSa-Q3aBm1saq1HWqkeOXY3qOi-Jrscb0k0~cMzH~L1dHSC5rCqCx5bZsTWguzoWh33dC68CR5iThqtWvDXfyjrsVfZWd59s09wqVgnwKz6Rykn2YEfHhN3PIQeHmzVMUxTBffP36uRSh~P2GsCnP4r5eqBCqmpAo3ovUFwxG7xWIBnkraWKtPAI2w__"
                  width={80}
                  height={80}
                  alt="Sarah M."
                  className="rounded-full w-20 h-20 object-cover shrink-0"
                  unoptimized
                />
                <div className="mt-6 flex flex-col">
                  <h4 className="font-heading font-semibold text-[20px] leading-[1.2] tracking-[-0.2px] text-black">Sarah M.</h4>
                  <p className="font-sans text-[18px] leading-[1.6] text-[#003BE2]">Enthusiastic Learner</p>
                </div>
                <p className="mt-6 font-sans text-[18px] leading-[1.6] text-[#4F4F4F]">
                  "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-[24px] p-6 flex flex-col items-start w-full lg:w-[374px]">
                <Image
                  src="https://s3-alpha-sig.figma.com/img/63c4/be83/222c85e6c852819bc5d4b24a87a87fb6?Expires=1791763200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=YCohi-xO~puGWuvtrqiiURHxIjNMB4-06-XgTShaAPVbcCloS89RrXkeepMzEltIyR2Y4mo3FWvoTYzN1AvtR6fs8YgVqGa7u51VNGy3XNDxdIh7c5WUxxxF~UVK9XURNViAUMl-uun2O3t-JO9gnNpRIc-qpJ4DWhlnnRisXErjDm5ytJR8Kc3bDz4TfZr09EU~bzcHkXIV3fiJAtokQ7Olbf8m9eQpOnktixaA3ZQk8jDYAYpIz3KtsnGrkHrwNSRriBccblu9oknFkxVt4kwpL~CDUTR5KE6oum4DY-1nKy6fy73U4vDGi1y6tcV3qB1mA-uF0FN3cweNaxguYA__"
                  width={80}
                  height={80}
                  alt="James L."
                  className="rounded-full w-20 h-20 object-cover shrink-0"
                  unoptimized
                />
                <div className="mt-6 flex flex-col">
                  <h4 className="font-heading font-semibold text-[20px] leading-[1.2] tracking-[-0.2px] text-black">James L.</h4>
                  <p className="font-sans text-[18px] leading-[1.6] text-[#003BE2]">Lifelong Learner</p>
                </div>
                <p className="mt-6 font-sans text-[18px] leading-[1.6] text-[#4F4F4F]">
                  "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-[24px] p-6 flex flex-col items-start w-full lg:w-[374px]">
                <Image
                  src="https://s3-alpha-sig.figma.com/img/728c/3b1d/33fe647a46f9bf668322f8c1d94ed937?Expires=1791763200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=c5Cc28Lxb7J4uLgcjPm5iogfKw4lSINQluiyHrgj2rvK7ucMLsoWVLXnWSQG-2ajrrVLk3sUKgNwJ49Blrt3YsZgm2tDOyoGiHPBuafEOF0KK~8dedaoIB0uHgs3KeLh34769LMGx1U49ctBU4GsN92FcfMIJwQHiMHu0qfeUCKIW40tzhzpTMLe1TNBLl-stmVYP6t7Bk0fLU4AzLQjf-5cw95GJoFE3jGKGNmNFLPA-d6MvI2zY-8cvgQkl4c0nKWFVzh1oOctftQNkncqsOCRiHfK0pvBhJsneCR25AtBTmAkPaaqnM0hAwo-1UjDEWcMOSIGNnUXYl0RR~eC4A__"
                  width={80}
                  height={80}
                  alt="Alex B."
                  className="rounded-full w-20 h-20 object-cover shrink-0"
                  unoptimized
                />
                <div className="mt-6 flex flex-col">
                  <h4 className="font-heading font-semibold text-[20px] leading-[1.2] tracking-[-0.2px] text-black">Alex B.</h4>
                  <p className="font-sans text-[18px] leading-[1.6] text-[#003BE2]">Inspired Creator</p>
                </div>
                <p className="mt-6 font-sans text-[18px] leading-[1.6] text-[#4F4F4F]">
                  "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally."
                </p>
              </div>

            </div>
          </div>
        </section>


      </main>

      <Footer />
    </div>
  );
}