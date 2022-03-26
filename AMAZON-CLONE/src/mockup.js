import React from "react";
import { db } from "./firebase.utils";

// use each doc.id of firestore as its unique ID after fetching data from firebase

const MOCKUP_DATA = [
  {
    departmentName: "Computers and Accessories",
    routeName: "computers-and-accessories",
    products: [
      {
        title: "New Apple iPad Pro (12.9-inch, Wi-Fi, 256GB) - Space Gray",
        price: 760.35,
        seller: "Amazon",
        brand: "Apple",
        rate: 5,
        count: 100,
        imgUrl:
          "https://m.media-amazon.com/images/I/81SGb5l+lZL._AC_UY218_.jpg",
        active: true,
        upcoming: false,
        missed: false,
        featured: true,
        gallery: [
          {
            original:
              "https://images-na.ssl-images-amazon.com/images/I/81SGb5l%2BlZL._AC_SL1500_.jpg",
            thumbnail:
              "https://images-na.ssl-images-amazon.com/images/I/41PhQzleq-L._AC_SR38,50_AA50_.jpg",
          },
          {
            original:
              "https://images-na.ssl-images-amazon.com/images/I/91zyHoys2jL._AC_SL1500_.jpg",
            thumbnail:
              "https://images-na.ssl-images-amazon.com/images/I/41Amb7qeEWL._AC_SR38,50_AA50_.jpg",
          },
          {
            original:
              "https://images-na.ssl-images-amazon.com/images/I/71oxyKvOTbL._AC_SL1500_.jpg",
            thumbnail:
              "https://images-na.ssl-images-amazon.com/images/I/41UqtjhGdLL._AC_SR38,50_AA50_.jpg",
          },
          {
            original:
              "https://images-na.ssl-images-amazon.com/images/I/81gyPqvQiDL._AC_SL1500_.jpg",
            thumbnail:
              "https://images-na.ssl-images-amazon.com/images/I/41Ybicv3XuL._AC_SR38,50_AA50_.jpg",
          },
        ],
        description:
          " 12.9-inch edge-to-edge Liquid Retina display with ProMotion, True Tone, and P3 wide color;  A12Z Bionic chip with Neural Engine;12MP Wide camera, 10MP Ultra Wide camera, and LiDAR Scanner;7MP TrueDepth front camera;Face ID for secure authentication and Apple Pay;Four speaker audio and five studio- quality microphones;    802.11ax Wi- Fi 6;Up to 10 hours of battery life;USB - C connector for charging and accessories;  Support for Magic Keyboard, Smart Keyboard Folio, and Apple Pencil",
      },
      {
        title:
          "Apple MacBook Air (13-inch Retina Display, 8GB RAM, 256GB SSD Storage)",
        price: 839.99,
        seller: "Amazon",
        brand: "Apple",
        rate: 4,
        count: 280,
        imgUrl:
          "https://m.media-amazon.com/images/I/71thf1SYnGL._AC_UY218_.jpg",
        active: false,
        upcoming: true,
        missed: false,
        featured: true,
        gallery: [
          {
            original:
              "https://images-na.ssl-images-amazon.com/images/I/71thf1SYnGL._AC_SL1500_.jpg",
            thumbnail:
              "https://images-na.ssl-images-amazon.com/images/I/41Kp8-ILkYL._AC_SR38,50_AA50_.jpg",
          },
          {
            original:
              "https://images-na.ssl-images-amazon.com/images/I/81e1YAr8YlL._AC_SL1500_.jpg",
            thumbnail:
              "https://images-na.ssl-images-amazon.com/images/I/41mb7IKbevL._AC_SR38,50_AA50_.jpg",
          },
          {
            original:
              "https://images-na.ssl-images-amazon.com/images/I/71p1u5qhgmL._AC_SL1500_.jpg",
            thumbnail:
              "https://images-na.ssl-images-amazon.com/images/I/31VGv0DOdbL._AC_SR38,50_AA50_.jpg",
          },
        ],
        description:
          " Stunning 13.3-inch Retina display with True Tone technology;    Backlit Magic Keyboard and Touch ID;    Tenth-generation Intel Core i3 processor;    Intel Iris Plus Graphics;    Fast SSD storage;    8GB of memory;    Stereo speakers with wider stereo sound;    Two Thunderbolt 3 (USB-C) ports;    Up to 11 hours of battery life;    Force Touch trackpad",
      },
      {
        title:
          "Apple MacBook Pro with Intel Processor (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray",
        price: 1109.99,
        seller: "Apple",
        brand: "Apple",
        rate: 4.5,
        count: 30,
        imgUrl:
          "https://m.media-amazon.com/images/I/71HI3U9ZwZL._AC_UY218_.jpg",
        active: true,
        upcoming: false,
        missed: false,
        featured: true,
        gallery: [
          {
            original:
              "https://images-na.ssl-images-amazon.com/images/I/71HI3U9ZwZL._AC_SL1500_.jpg",
            thumbnail:
              "https://images-na.ssl-images-amazon.com/images/I/41J5KJVM3FL._AC_SR38,50_AA50_.jpg",
          },
          {
            original:
              "https://images-na.ssl-images-amazon.com/images/I/71Wl6Bv6o0L._AC_SL1500_.jpg",
            thumbnail:
              "https://images-na.ssl-images-amazon.com/images/I/31os7oouNEL._AC_SR38,50_AA50_.jpg",
          },
          {
            original:
              "https://images-na.ssl-images-amazon.com/images/I/71LY-aeAEnL._AC_SL1500_.jpg",
            thumbnail:
              "https://images-na.ssl-images-amazon.com/images/I/31Xk3NpUCfL._AC_SR38,50_AA50_.jpg",
          },
        ],
        description:
          "Eighth-generation quad-core Intel Core i5 processor;          Brilliant Retina display with True Tone technology;          Backlit Magic Keyboard;          Touch Bar and Touch ID;          Intel Iris Plus Graphics 645;          Ultrafast SSD;          Two Thunderbolt 3 (USB-C) ports;          Up to 10 hours of battery life;          802.11ac Wi-Fi;          Force Touch trackpad",
      },
      {
        title:
          "Fire TV Stick 4K streaming device with Alexa Voice Remote | Dolby Vision | 2018 release",
        price: 29.99,
        seller: "Amazon",
        brand: "Amazon",
        rate: 3,
        count: 602,
        imgUrl:
          "https://m.media-amazon.com/images/I/51CgKGfMelL._AC_UY218_.jpg",
        active: false,
        upcoming: true,
        missed: false,
        featured: true,
        gallery: [
          {
            original:
              "https://images-na.ssl-images-amazon.com/images/I/61b-Vw7i5LL._AC_SL1000_.jpg",
            thumbnail:
              "https://images-na.ssl-images-amazon.com/images/I/51-LstfxkML._AC_US40_AA50_.jpg",
          },
          {
            original:
              "https://images-na.ssl-images-amazon.com/images/I/51ZdmnHKukL._AC_SL1000_.jpg",
            thumbnail:
              "https://images-na.ssl-images-amazon.com/images/I/41SR4yCI7aL._AC_US40_AA50_.jpg",
          },
          {
            original:
              "https://images-na.ssl-images-amazon.com/images/I/51FvcXWGgHL._AC_SL1000_.jpg",
            thumbnail:
              "https://images-na.ssl-images-amazon.com/images/I/417gof%2BW2cL._AC_US40_AA50_.jpg",
          },
        ],
        description:
          "A Certified Refurbished Fire TV Stick with all-new Alexa Voice Remote is refurbished, tested, and certified to look and work like new.;  Fire TV Stick, the #1 best-selling streaming media player, with Alexa Voice Remote (2nd Gen). Use the dedicated power, volume, and mute buttons to control your TV, soundbar, and receiver.;          Launch and control content with the Alexa Voice Remote. Watch favorites from Netflix, YouTube, Prime Video, STARZ, SHOWTIME, or CBS All Access, plus stream for free with Pluto TV, IMDb TV, and others.;          Fire TV Stick devices have more storage for apps and games than any other streaming media stick.;          Experience tens of thousands of channels, apps, and Alexa skills, plus browse millions of websites like Facebook and Reddit using Firefox or Silk.;          Alexa on Fire TV provides the most comprehensive voice experience of any streaming media player—view live camera feeds, check the weather, dim the lights, and stream music.;          Amazon Prime members get unlimited access to thousands of movies and TV episodes, plus ad-free listening to millions of songs with Prime Music.",
      },
      {
        title:
          "HP 15-dy1036nr 10th Gen Intel Core i5-1035G1, 15-Inch FHD Laptop, Natural Silver",
        price: 889.99,
        seller: "Amazon",
        brand: "HP",
        rate: 3.5,
        count: 69,
        imgUrl:
          "https://m.media-amazon.com/images/I/71WSt8D7KFL._AC_UY218_.jpg",
        active: false,
        upcoming: true,
        missed: false,
        featured: true,
        gallery: [
          {
            original:
              "https://images-na.ssl-images-amazon.com/images/I/71WSt8D7KFL._AC_SX569_.jpg",
            thumbnail:
              "https://images-na.ssl-images-amazon.com/images/I/41RZjMPGN0L._AC_US40_.jpg",
          },
          {
            original:
              "https://images-na.ssl-images-amazon.com/images/I/81rSbRZ1l0L._AC_SX569_.jpg",
            thumbnail:
              "https://images-na.ssl-images-amazon.com/images/I/51GMRgAxZgL._AC_US40_.jpg",
          },
          {
            original:
              "https://images-na.ssl-images-amazon.com/images/I/71hStpySRmL._AC_SX569_.jpg",
            thumbnail:
              "https://images-na.ssl-images-amazon.com/images/I/41HyPHy4hML._AC_US40_.jpg",
          },
        ],
        description:
          "10th Gen Intel Core i7-10510U (1.8 GHz base frequency, up to 4.9 GHz base with Intel Turbo Boost Technology, 8 MB cache, 4 cores)  ;  diagonal HD SVA BrightView micro-edge WLED-backlit (1366 x 768) Display; Intel UHD Graphics;   8GB DDR4-2666MHz SDRAM Memory for full-power multitasking; 128GB SSD; Ideal for Home, Student, Professionals, Small Business, School Education, and Commercial Enterprise, Online Class, Google Classroom, Remote Learning, Zoom Ready.;   802.11b/g/n (1x1) Wi-Fi and Bluetooth 4.2 combo; 1 USB 3.1 Gen 1 Type-C (Data Transfer Only, 5 Gb/s signaling rate); 2 USB 3.1 Gen 1 Type-A (Data Transfer Only); 1 RJ-45; 1 AC smart pin; 1 HDMI 1.4b; 1 headphone/microphone combo; 1 multi-format SD media card reader;   ▌Authorized BROAGE Bundle ▌Bundled with BROAGE MousePad, Authorized Sellers ONLY. Windows 10 Home 64-Bit, Natural silver",
      },
    ],
  },
  {
    departmentName: "Camera & Photo",
    routeName: "camera-photo",
    products: [
      {
        title:
          "Panasonic LUMIX DC-FZ80GN-K 4K Bridge Hi-Zoom Point and Shoot Travel Camera, Black",
        price: 455.0,
        seller: "Amazon",
        brand: "Panasonic",
        rate: 5,
        count: 11,
        imgUrl:
          "https://images-fe.ssl-images-amazon.com/images/I/41jwbCD0khL._AC_AA160_.jpg",
        active: false,
        upcoming: false,
        missed: true,
        featured: true,
        gallery: [
          {
            original:
              "https://images-na.ssl-images-amazon.com/images/I/917LEZ%2Bit3L._AC_SL1500_.jpg",
            thumbnail:
              "https://images-na.ssl-images-amazon.com/images/I/51VWc0XqprL._AC_US40_AA50_.jpg",
          },
          {
            original:
              "https://images-na.ssl-images-amazon.com/images/I/61D1PKdrRqL._AC_.jpg",
            thumbnail:
              "https://images-na.ssl-images-amazon.com/images/I/61D1PKdrRqL._AC_US40_AA50_.jpg",
          },
          {
            original:
              "https://images-na.ssl-images-amazon.com/images/I/6150C4%2BFrmL._AC_.jpg",
            thumbnail:
              "https://images-na.ssl-images-amazon.com/images/I/6150C4%2BFrmL._AC_US40_AA50_.jpg",
          },
        ],
        description:
          "Superb DSLM image quality without the bulk and weight of traditional DSLRs; Never miss a photo with three unique 4K ultra HD video pause and save 4K photo modes; Fast and precise auto focusing tracks the subject; Focus mode AFS (single) / AFF (flexible) / AFC (continuous) / MF, AF mode face/eye detection / tracking / 49 area / custom Multi / 1 area / pinpoint; Class leading, ultra compact, interchangeable lens and accessory option; HDMI: microHDMI TypeD / VIERA Link,video: Auto / 4K / 1080p / 1080i / 720p / 480p, Audio: stereo; Unwire your creativity with integrated Wi Fi sharing",
      },
      {
        title:
          "Nikon D3500 KIT + AF-P 18-55 VR + AF-P 70-300 VR Twin Lens Kit, Black",
        price: 898.2,
        seller: "Nikon",
        brand: "Nikon",
        rate: 4,
        count: 27,
        imgUrl:
          "https://images-fe.ssl-images-amazon.com/images/I/413eVsQoYeL._AC_AA160_.jpg",
        active: true,
        upcoming: false,
        missed: false,
        featured: true,
        gallery: [
          {
            original:
              "https://images-na.ssl-images-amazon.com/images/I/61A4tg5IFhL._AC_SL1000_.jpg",
            thumbnail:
              "https://images-na.ssl-images-amazon.com/images/I/51RHexdJkUL._AC_US40_AA50_.jpg",
          },
          {
            original:
              "https://images-na.ssl-images-amazon.com/images/I/61MtcYSMoLL._AC_SL1000_.jpg",
            thumbnail:
              "https://images-na.ssl-images-amazon.com/images/I/51KNi4NJLzL._AC_US40_AA50_.jpg",
          },
          {
            original:
              "https://images-na.ssl-images-amazon.com/images/I/61a1bF0a3rL._AC_SL1000_.jpg",
            thumbnail:
              "https://images-na.ssl-images-amazon.com/images/I/51x4UIVB2gL._AC_US40_AA50_.jpg",
          },
        ],
        description:
          "This Grace Photo Camera Bundle Comes Complete With Manufacturer Supplied Accessories(U.S. Compatible) and a 1 Year Seller Provided Warranty; Package Includes:        Nikon D3500 DSLR Camera (International Version) 24.2MP DX-Format CMOS Sensor; EXPEED 4 Image Processor; No Optical Low-Pass Filter; Native ISO 100-25600; 5 fps Shooting; 3.0 921k-Dot LCD Monitor; Full HD 1080p Video Recording at 60 fps; Multi-CAM 1000 11-Point AF System; SnapBridge Bluetooth Connectivity    Nikon AF-P DX NIKKOR 18-55mm f/3.5-5.6G VR Lens - F-Mount Lens/DX Format , 27-82.5mm (35mm Equivalent) , Super Integrated Coating , Pulse Stepping Motor AF System , Nikon VR Image Stabilization , Access Lens Settings in Camera Menu , Ro",
      },
      {
        title:
          "G7X Mark II + Selphy Portable Printer + 40 Sheets of Photo Paper",
        price: 1064.8,
        seller: "Canon",
        brand: "Canon",
        rate: 4.5,
        count: 3,
        imgUrl:
          "https://images-fe.ssl-images-amazon.com/images/I/41KLEZXgg0L._AC_AA160_.jpg",
        active: true,
        upcoming: false,
        missed: false,
        featured: true,
        gallery: [
          {
            original:
              "https://images-na.ssl-images-amazon.com/images/I/416b8xNfDJL._AC_.jpg",
            thumbnail:
              "https://images-na.ssl-images-amazon.com/images/I/416b8xNfDJL._AC_US40_AA50_.jpg",
          },
          {
            original:
              "https://images-na.ssl-images-amazon.com/images/I/61Srr4ACqJL._AC_SL1500_.jpg",
            thumbnail:
              "https://images-na.ssl-images-amazon.com/images/I/416IPK%2BEVDL._AC_US40_AA50_.jpg",
          },
          {
            original:
              "https://images-na.ssl-images-amazon.com/images/I/71ef4iykr5L._AC_SL1500_.jpg",
            thumbnail:
              "https://images-na.ssl-images-amazon.com/images/I/41vjntfdIcL._AC_US40_AA50_.jpg",
          },
        ],
        description:
          "The advanced video capabilities of the Power Shot G7 X Mark II camera can capture moments in the quality they deserve   ; Features a large 1.0 inch, 20.1 Megapixel CMOS sensor that helps capture high quality images and videos with a wide dynamic range. Autofocus system features ttl autofocus and manual focus. Operating temperature is 0 to 40 degree celsius. Note charging time varies considerably depending on the remaining battery power;    An aperture value of f/1.8 at the wide angle and f/2.8 when fully zoomed to a factor of 4.2x (24 100 millimeter), this lens equipped to capture a variety of situations with precision   ;   High resolution, 3.0 inches LCD monitor that tilts up 180 degrees and down 45 degrees is ideal for self portraits and capturing pictures at high and low angles with ease        Built in Wi Fi for on the go convenience and the ability to easily post your images to select social networking and media sites   ;   With the ability to shoot continuously at up to 8 fps, it can help you capture incredible images with nearly no time wasted",
      },
      {
        title: "Ricoh Theta V 360 Spherical Camera",
        price: 599.99,
        seller: "Amazon",
        brand: "Ricoh",
        rate: 3.5,
        count: 110,
        imgUrl:
          "https://images-fe.ssl-images-amazon.com/images/I/31jNXNVKclL._AC_AA160_.jpg",
        active: false,
        upcoming: true,
        missed: false,
        featured: true,
        gallery: [
          {
            original:
              "https://images-na.ssl-images-amazon.com/images/I/61%2BGE4CgqrL._AC_SL1231_.jpg",
            thumbnail:
              "https://images-na.ssl-images-amazon.com/images/I/41ficUhE82L._AC_US40_AA50_.jpg",
          },
          {
            original:
              "https://images-na.ssl-images-amazon.com/images/I/71Y3gcvXl%2BL._AC_SL1000_.jpg",
            thumbnail:
              "https://images-na.ssl-images-amazon.com/images/I/61oTk5H9apL._AC_US40_AA50_.jpg",
          },
          {
            original:
              "https://images-na.ssl-images-amazon.com/images/I/61lUvafK6IL._AC_SL1000_.jpg",
            thumbnail:
              "https://images-na.ssl-images-amazon.com/images/I/51OWRVBrZIL._AC_US40_AA50_.jpg",
          },
        ],
        description:
          "Theta V shoots hi-def smooth 360 Degree video at 30 fps @ 3840 x 1920 pixels or 4K. It supports the H.264 file format for video recording ; Remote release: CA-3-compatible ; Hi-res 360 Degree spherical stills & video with improvements to the image quality. New Qualcomm Snapdragon processor has completely enhanced the exposure accuracy and white balance algorithm. Object distance- Approx. 10cm - ∞ (from front of lens).Lens configuration:7 elements in 6 groups        Theta has a 4-channel microphone that supports 360 Degree spatial audio recording built in Omnidirectional audio is recorded not just in the horizontal direction but also in the vertical direction. Storage temperature range - -20°C - 60°C        The world’s-first Remote Playback capable fully spherical camera allows users to wirelessly playback 360 Degree images and videos on a large-screen display Using a compatible wireless display adapter ; Wireless LAN transfer speed (WLAN, MAX): 2.4GHz, 3mm: 20Mbps; 2.4GHz, 10mm: 10Mbps; 5GHz, 3mm: 50Mbps; 5GHz, 10mm: 10Mbps. The camera can always be connected to a smartphone using Bluetooth low energy (BLE) This function provides improvements in usability and power consumption",
      },
      {
        title:
          "Olympus OM-D E-M5 Mark III Camera - Kit with 14-150mm Lens (Silver)",
        price: 1895.0,
        seller: "Olympus",
        brand: "Olympus",
        rate: 3,
        count: 7,
        imgUrl:
          "https://m.media-amazon.com/images/I/81mSUtJFdZL._AC_UL320_.jpg",
        active: true,
        upcoming: false,
        missed: false,
        featured: true,
        gallery: [
          {
            original:
              "https://images-na.ssl-images-amazon.com/images/I/71jT8sUbriL._AC_SL1500_.jpg",
            thumbnail:
              "https://images-na.ssl-images-amazon.com/images/I/41j9B76ly6L._AC_US40_.jpg",
          },
          {
            original:
              "https://images-na.ssl-images-amazon.com/images/I/81xViZ0Gm1L._AC_SL1500_.jpg",
            thumbnail:
              "https://images-na.ssl-images-amazon.com/images/I/41FoCm5aq-L._AC_US40_.jpg",
          },
          {
            original:
              "https://images-na.ssl-images-amazon.com/images/I/71BVeMB9ZqL._AC_SL1500_.jpg",
            thumbnail:
              "https://images-na.ssl-images-amazon.com/images/I/41zrlbdP%2B4L._AC_US40_.jpg",
          },
        ],
        description:
          "20MP live MOS sensor  ; Portable, weather sealed design;   121-point all-cross-type on-chip phase detection AF;   Compact, in-body 5-axis image stabilization (up to approx. 5.5 EV steps of compensation);   50MP tripod high-res shot",
      },
    ],
  },
  {
    departmentName: "Mobile Phones & Communication",
    routeName: "mobile-phones-communication",
    products: [
      {
        title:
          "Wireless Headphones Bluetooth Earbuds with Charging Case Noise Cancelling 3D Stereo Headphones",
        price: 220.0,
        seller: "Apple",
        brand: "Apple",
        rate: 5,
        count: 110,
        imgUrl:
          "https://m.media-amazon.com/images/I/51uxlKNiGAL._AC_UY218_.jpg",
        active: true,
        upcoming: false,
        missed: false,
        featured: true,
        gallery: [
          {
            original:
              "https://images-na.ssl-images-amazon.com/images/I/71FlmfMetKL._AC_SX522_.jpg",
            thumbnail:
              "https://images-na.ssl-images-amazon.com/images/I/51vDudmSP5L._AC_US40_.jpg",
          },
          {
            original:
              "https://images-na.ssl-images-amazon.com/images/I/61M5T%2BhSUpL._AC_SX522_.jpg",
            thumbnail:
              "https://images-na.ssl-images-amazon.com/images/I/41C5XBgAuPL._AC_US40_.jpg",
          },
          {
            original:
              "https://images-na.ssl-images-amazon.com/images/I/610E2mym0zL._AC_SX522_.jpg",
            thumbnail:
              "https://images-na.ssl-images-amazon.com/images/I/51Z4fUS0%2BIL._AC_US40_.jpg",
          },
        ],
        description:
          "♫【Bluetooth upgrade 5.0 technology】：Wireless earbuds adopt professional chipset and equipped with better than ordinary 5.0 chip to ensure excellent audio performance with fast, stable and efficient transmission.Offers a truly natural, authentic sound and powerful bass performance with 14mm large size speaker driver.;          ♫【Dual HD microphones】：Built-in microphones support phone calls and voice assistant with either or both earbuds. With brilliant acoustic design, earphones deliver a clean response with no distortions.CVC8.0 noise cancelling technology which can filters out external noise & enhances the sound of your voice for clear hands-free calls, allow you hear in louder environments.;;          ♫【Quality Battery Life 24 Hours】：Support fast charging, charging for 15 minutes, using for two hours.The charging case has 4 charging contacts for safer charging. The earplugs can be used for 5-6 hours in just 1 hour of charging time. The 650mAh portable magnetic charging case can charge the headset 4 times and extend the playback time for up to 20 hours.;          ♫【Comfortable & Lightweight Design】：Get rid of the shackles and the real liberation. After layer testing, After testing, we chose an ergonomically designed headset (65°), comfortable to wear, not easy to drop, and the headphones are very lightweight (3.5g) to ensure ear stability and comfort.",
      },
      {
        title: "Sony Noise Cancelling Headphones WH1000XM3",
        price: 324.8,
        seller: "Sony",
        brand: "Sony",
        rate: 4.5,
        count: 507,
        imgUrl:
          "https://m.media-amazon.com/images/I/71IIenbgEcL._AC_UY218_.jpg",
        active: true,
        upcoming: false,
        missed: false,
        featured: true,
        gallery: [
          {
            original:
              "https://images-na.ssl-images-amazon.com/images/I/71IIenbgEcL._AC_SX522_.jpg",
            thumbnail:
              "https://images-na.ssl-images-amazon.com/images/I/41xa1cPWH3L._AC_US40_.jpg",
          },
          {
            original:
              "https://images-na.ssl-images-amazon.com/images/I/518ISPl1BZL._AC_SX522_.jpg",
            thumbnail:
              "https://images-na.ssl-images-amazon.com/images/I/31Y8K%2ByUXkL._AC_US40_.jpg",
          },
          {
            original:
              "https://images-na.ssl-images-amazon.com/images/I/51CjGcEXyIL._AC_SX522_.jpg",
            thumbnail:
              "https://images-na.ssl-images-amazon.com/images/I/41n3w7DNInL._AC_US40_.jpg",
          },
        ],
        description:
          "BUNDLE INCLUDES: Sony WH-1000XM3 Wireless Noise-Canceling Over-Ear Headphones (Black) with Sony SRS-XB10 Portable Wireless Bluetooth Speaker ;          VIRTUAL SOUND: Smart Listening by Adaptive Sound Control / SENSE ENGINE for virtual surround sound;          POWERFUL DRIVERS: Hi-Res audio  LCP drivers for up to 40 kHz frequency;          CONNECTIVITY: Bluetooth 4.1 LDAC connection / Connect to the Sony Headphones Connect App;          SONY AUTHORIZED DEALER: Includes USA Manufacturer Guarantee",
      },
      {
        title:
          "Nokia 5.3 Android One Smartphone (Official Australian Version 2020)",
        price: 364.8,
        seller: "Nokia",
        brand: "Nokia",
        rate: 4,
        count: 30,
        imgUrl:
          "https://m.media-amazon.com/images/I/71M8ocFNBgL._AC_UL320_.jpg",
        active: true,
        upcoming: false,
        missed: false,
        featured: true,
        gallery: [
          {
            original:
              "https://images-na.ssl-images-amazon.com/images/I/71xFT1Yi11L._AC_SX425_.jpg",
            thumbnail:
              "https://images-na.ssl-images-amazon.com/images/I/61A1XGiyH1L._AC_US40_.jpg",
          },
          {
            original:
              "https://images-na.ssl-images-amazon.com/images/I/61HxZaQlYQL._AC_SX425_.jpg",
            thumbnail:
              "https://images-na.ssl-images-amazon.com/images/I/4102YfWF8LL._AC_US40_.jpg",
          },
          {
            original:
              "https://images-na.ssl-images-amazon.com/images/I/31CGbfSTdeL._AC_SX425_.jpg",
            thumbnail:
              "https://images-na.ssl-images-amazon.com/images/I/31CGbfSTdeL._AC_US40_.jpg",
          },
        ],
        description:
          "Go big with the Nokia 5.3 smartphone's epic-sized 6. 55-inch HD+ display and incredible quad rear camera that captures stunning pictures even in low light, helps you select your best shot, and creates professional-looking portraits.;          Capture great detail with the quad camera's 13 MP main lens, get everything in the frame with the ultra-wide, 118-degree 5 MP lens, focus in on the tiniest details with the 2 MP macro lens, and create blurred bokeh images with the 2 MP depth sensor.;          Stay in the game for longer thanks to the dynamic Qualcomm Snapdragon 665 processor's silky smooth graphics and AI-assisted Adaptive Battery that saves energy for the apps you use the most and stays charged for up to 2 days.;          The Nokia 5.3 and Google Assistant utilize AI-powered machine learning to learn and adapt to you with every use, and the dedicated Google Assistant button makes it easy to ask questions, update calendars, check traffic, and more.",
      },
      {
        title:
          "Samsung Galaxy A11 Smartphone with 2 Year Manufacturer Warranty,Black",
        price: 233.89,
        seller: "Amazon",
        brand: "Samsung",
        rate: 3,
        count: 20,
        imgUrl:
          "https://m.media-amazon.com/images/I/61aoEfQb63L._AC_UL320_.jpg",
        active: true,
        upcoming: false,
        missed: false,
        featured: true,
        gallery: [
          {
            original:
              "https://images-na.ssl-images-amazon.com/images/I/81qOdpVypzL._AC_SY550_.jpg",
            thumbnail:
              "https://images-na.ssl-images-amazon.com/images/I/4187bqrxiTL._AC_SR38,50_.jpg",
          },
          {
            original:
              "https://images-na.ssl-images-amazon.com/images/I/817ADBC6U%2BL._AC_SX466_.jpg",
            thumbnail:
              "https://images-na.ssl-images-amazon.com/images/I/41xWhSJaPQL._AC_SR38,50_.jpg",
          },
          {
            original:
              "https://images-na.ssl-images-amazon.com/images/I/712HPEtUe8L._AC_SY550_.jpg",
            thumbnail:
              "https://images-na.ssl-images-amazon.com/images/I/21z6rj-fCEL._AC_SR38,50_.jpg",
          },
        ],
        description:
          "CHARGE UP. POWER THROUGH: You need a phone you can rely on. Thanks to the long-lasting battery(Based on average battery life under typical usage conditions. Average expected performance based on typical use. Actual battery life depends on factors such as network, features selected, frequency of calls, and voice, data, and other application usage patterns. Results may vary.) of the Galaxy A11, your phone will have enough power to do almost anything. You can spend more time scrolling, texting and sharing, and less time looking for an outlet to recharge.;          TAKE YOUR ENTERTAINMENT TO THE EDGE: A 6.4” Infinity-O Display Measured diagonally, the screen size is 6.4;with accounting for the rounded corners. Actual viewable area is less due to the rounded corners and camera lens. gives you plenty of room to scroll through your feeds, see the latest news and keep up with friends and family. Colors and details look bright and bold on its HD+ screen.;          THREE LENSES. ENDLESS POTENTIAL: Getting a great photo and video is now easier with this versatile camera. In addition to portraits and videos, the A11's depth lens helps you take beautiful portraits too.;          STORE MORE: Whether you’re snapping, storing or downloading, this device can keep it all. If the built-in 32GB of memory enough, you can expand the base storage up to an amazing 512GB with a microSD card ",
      },
      {
        title:
          "Apple iPhone 11 White 128GB Physical Dual Sim [AU Seller] MWN82CH/A",
        price: 1299.0,
        seller: "Apple",
        brand: "Apple",
        rate: 5,
        count: 10,
        imgUrl:
          "https://m.media-amazon.com/images/I/61U+Xz90BAL._AC_UL320_.jpg",
        active: true,
        upcoming: false,
        missed: false,
        featured: true,
        gallery: [
          {
            original:
              "https://m.media-amazon.com/images/I/81j2j9x-KWL._FMwebp__.jpg",
            thumbnail:
              "https://m.media-amazon.com/images/I/41YQjtzk7UL._SS40_FMwebp__.jpg",
          },
          {
            original:
              "https://m.media-amazon.com/images/I/71dcUoPEBsL._FMwebp__.jpg",
            thumbnail:
              "https://m.media-amazon.com/images/I/31P1p9qLXcL._SS40_FMwebp__.jpg",
          },
          {
            original:
              "https://m.media-amazon.com/images/I/815peUj+oYL._FMwebp__.jpg",
            thumbnail:
              "https://m.media-amazon.com/images/I/41AisChzPDL._SS40_FMwebp__.jpg",
          },
        ],
        description:
          "OFFER INCLUDES: An Apple iPhone and a wireless plan with unlimited data/talk/text;          WIRELESS PLAN: Unlimited talk, text, and data with mobile hotspot, nationwide coverage, and international reach. No long-term contract required.;          PROGRAM DETAILS: When you add this offer to cart, it will reflect 3 items: the iPhone, SIM kit, and carrier subscription;          6.5-inch Super Retina XDR OLED display, water and dust resistant, with Face ID;          Triple-camera system with 12MP Ultra Wide camera, 12MP TrueDepth front camera with Portrait mode. Fast-charge and wireless charging capable;          Note: The box label simply says “iPhone” but the phone is the iPhone 11 Pro Max",
      },
    ],
  },
  {
    departmentName: "Clothing, Shoes & Accessories",
    routeName: "clothing-shoes-accessories",
    products: [
      {
        title: "Mens 21861 Extreme Motion Swope Cargo Short Cargo",
        price: 89.99,
        seller: "Perfect Clothing",
        brand: "Lee",
        rate: 5,
        count: 1038,
        imgUrl:
          "https://m.media-amazon.com/images/I/81RHhaW4SOL._AC_UL320_.jpg",
        active: true,
        upcoming: false,
        missed: false,
        featured: true,
        gallery: [
          {
            original:
              "https://images-na.ssl-images-amazon.com/images/I/81RHhaW4SOL._AC_UY500_.jpg",
            thumbnail:
              "https://images-na.ssl-images-amazon.com/images/I/415WG5oPk9L._AC_SR38,50_.jpg",
          },
          {
            original:
              "https://images-na.ssl-images-amazon.com/images/I/81XnXFCp8pL._AC_UY500_.jpg",
            thumbnail:
              "https://images-na.ssl-images-amazon.com/images/I/41XtmnSUy0L._AC_SR38,50_.jpg",
          },
          {
            original:
              "https://images-na.ssl-images-amazon.com/images/I/A1nAhaaj5KL._AC_UX466_.jpg",
            thumbnail:
              "https://images-na.ssl-images-amazon.com/images/I/51gSOYk2ptL._AC_SR38,50_.jpg",
          },
        ],
        description:
          "98% Cotton, 2% Spandex;          Imported;          Zipper closure;          Machine Wash;          Relaxed fit; hits at the knee;          Featuring an elastic waistband that moves with you;          Side cargo pockets and cell phone pocket",
      },
      {
        title: "Authentic Originals Sueded Fleece Pullover",
        price: 68.8,
        seller: "Amazon",
        brand: "Champion",
        rate: 3.5,
        count: 9,
        imgUrl:
          "https://m.media-amazon.com/images/I/91Sx6JsV9CL._AC_UL320_.jpg",
        active: true,
        upcoming: false,
        missed: false,
        featured: true,
        gallery: [
          {
            original:
              "https://images-na.ssl-images-amazon.com/images/I/91Sx6JsV9CL._AC_UX425_.jpg",
            thumbnail:
              "https://images-na.ssl-images-amazon.com/images/I/41uOGZMbBGL._AC_SR38,50_.jpg",
          },
          {
            original:
              "https://m.media-amazon.com/images/I/A1nqkyzZIPL._AC_SX425._SX._UX._SY._UY_.jpg",
            thumbnail:
              "https://m.media-amazon.com/images/I/51YC-ctGalL._AC_SR38,50_.jpg",
          },
        ],
        description:
          "80% Cotton, 20% Polyester;          Imported;          Machine Wash;          Fleece is sueded outside, incredibly soft inside;          Hood has contrasting jersey lining;          Flat woven draw cord with turned and tacked ends;         Ribbed cuffs and waistband;          Forward shoulders; relaxed waistband; pouch pocket",
      },
      {
        title: "Half Dome Hoodie, TNF",
        price: 39.8,
        seller: "Amazon",
        brand: "The North Face",
        rate: 4.5,
        count: 1020,
        imgUrl:
          "https://m.media-amazon.com/images/I/81blGg02EJL._AC_UL320_.jpg",
        active: true,
        upcoming: false,
        missed: false,
        featured: true,
        gallery: [
          {
            original:
              "https://m.media-amazon.com/images/I/81xUYaah6pL._AC_SX385._SX._UX._SY._UY_.jpg",
            thumbnail:
              "https://m.media-amazon.com/images/I/418Pf6T0yOL._AC_SR38,50_.jpg",
          },
          {
            original:
              "https://m.media-amazon.com/images/I/815Bd5SgD2L._AC_SX385._SX._UX._SY._UY_.jpg",
            thumbnail:
              "https://m.media-amazon.com/images/I/31CIoFe3lRL._AC_SR38,50_.jpg",
          },
          {
            original:
              "https://m.media-amazon.com/images/I/81IPGpibsbL._AC_SX385._SX._UX._SY._UY_.jpg",
            thumbnail:
              "https://m.media-amazon.com/images/I/31gd9FQHmlL._AC_SR38,50_.jpg",
          },
        ],
        description:
          "SIGNATURE HOODIE. This standard fit sweatshirt is made with a recycled fabric blend. With enough room for layering, this hoodie is great for getting outside and enjoying cooler weather.;          HOODED COVERAGE. An adjustable drawstring hood helps keep you covered and bundled up as the temperature cools off.;;          CLASSIC STAPLE. For an extra layer to keep the chill away, turn to your favorite hoodie. Rib cuffs and hem enhance durability for lasting wear.;          FRONT-POCKET STORAGE. A kangaroo pocket hold small items and help keep hands warm.;         THE NORTH FACE. The North Face screen print adds a signature look to your sweatshirt",
      },
      {
        title: "Modern Series Extreme Motion Straight Fit Tapered Leg Jean",
        price: 28.09,
        seller: "Lee",
        brand: "Lee",
        rate: 4.5,
        count: 3441,
        imgUrl:
          "https://m.media-amazon.com/images/I/71ZsLtQOADL._AC_UL320_.jpg",
        active: true,
        upcoming: false,
        missed: false,
        featured: true,
        gallery: [
          {
            original:
              "https://images-na.ssl-images-amazon.com/images/I/71ZsLtQOADL._AC_UX466_.jpg",
            thumbnail:
              "https://images-na.ssl-images-amazon.com/images/I/31CKI8sFYzL._AC_SR38,50_.jpg",
          },
          {
            original:
              "https://images-na.ssl-images-amazon.com/images/I/71tMzRETIBL._AC_UX466_.jpg",
            thumbnail:
              "https://images-na.ssl-images-amazon.com/images/I/41cPHoa2%2BHL._AC_SR38,50_.jpg",
          },
          {
            original:
              "https://images-na.ssl-images-amazon.com/images/I/61HW9n3VP7L._AC_UY500_.jpg",
            thumbnail:
              "https://images-na.ssl-images-amazon.com/images/I/51-xJ00LMdL._AC_SR38,50_.jpg",
          },
        ],
        description:
          "69% Cotton, 20% Polyester, 8% Rayon, 3% Spandex;          Imported;          Button closure;          Machine Wash;          STRAIGHT FIT.With a straight fit through the hip and thigh, these jeans sit just below the waist with an Extreme Flex waistband for natural comfort.; CLASSIC 5-POCKET STYLING.A classic fit jean designed with an authentic five- pocket style.Our bestselling straight fit jean is designed with a timeless five- pocket style, perfect for most occasions.;          JEANS FOR ALL. This jean is available in a midweight denim with a wide variety of washes, finishes, and fits. Add a classic denim jean to your everyday rotation or try out a new alternative wash -- there's a pair of Lee jeans to fit every style",
      },
      {
        title: "Graphic Powerblend Fleece Crew",
        price: 35.0,
        seller: "Champion",
        brand: "Champion",
        rate: 4.5,
        count: 4848,
        imgUrl:
          "https://m.media-amazon.com/images/I/91MPi4sVKLL._AC_UL320_.jpg",
        active: true,
        upcoming: false,
        missed: false,
        featured: true,
        gallery: [
          {
            original:
              "https://m.media-amazon.com/images/I/91MPi4sVKLL._AC_SY500._SX._UX._SY._UY_.jpg",
            thumbnail:
              "https://m.media-amazon.com/images/I/41-htzTiXoL._AC_SR38,50_.jpg",
          },
          {
            original:
              "https://m.media-amazon.com/images/I/9158gOHEJRL._AC_SY500._SX._UX._SY._UY_.jpg",
            thumbnail:
              "https://m.media-amazon.com/images/I/41c6wQaWm+L._AC_SR38,50_.jpg",
          },
        ],
        description:
          "50% Cotton, 50% Polyester;          Imported;          Pull On closure;          Machine Wash;          Better fit. Wider rib cuffs and hem;          Soft comfortable fabric. A percentage of recycled fibers used in making the fabric",
      },
    ],
  },
];

const Mockup = () => {
  const mockup = () => {
    MOCKUP_DATA.forEach((el) => {
      db.doc(`amazon/${el.routeName}`)
        .set({
          departmentName: el.departmentName,
          routeName: el.routeName,
        })
        .then(() => {
          el.products.forEach((product) => {
            db.collection("amazon")
              .doc(el.routeName)
              .collection("products")
              .add(product);
          });
        });
    });
  };

  return (
    <div>
      <button onClick={mockup}>Mockup</button>
    </div>
  );
};

export default Mockup;
