export const hotelName = "Evansville Inn & Suites";

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
];

export const images = {
  hero:
    "/MainHotelHero2.jpg",
  parlor:
    "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1500&q=85",
  suite:
    "/Longue.png",
  kitchenette:
    "/RoomWithAmen.png",
  fitness:
    "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1400&q=85",
  lounge:
    "/DeskTable.png",
  golf:
    "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=1400&q=85",
  parking:
    "/Exterior2.jpg",
  parkingLot:
    "/Parking.png",
  pet:
    "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=1400&q=85",
  laundry:
    "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=1400&q=85",
};

export const services = [
  {
    title: "Comfortable Lodging",
    text: "Select from 31 guest rooms and suites, including well-appointed kitchenette units and a premier suite with a relaxing jetted tub.",
    image: images.suite,
  },
  {
    title: "In-Room Comforts",
    text: "Every room features free Wi-Fi, flat-screen cable TVs, a mini-fridge, coffee maker, writing desk, and clean private bathroom.",
    image: images.kitchenette,
  },
  {
    title: "24-Hour Desk Support",
    text: "Travel with peace of mind knowing our front desk operates 24 hours daily, alongside daily housekeeping and property-wide Wi-Fi.",
    image: images.lounge,
  },
  {
    title: "Free Parking",
    text: "Enjoy free self-parking with dedicated spaces for RVs, buses, and trucks, providing hassle-free access throughout your visit.",
    image: images.parkingLot,
  },
];

export const roomImages = [
  {
    title: "Comfort King Room",
    detail: "An air-conditioned guest room featuring a king bed, free Wi-Fi, writing desk, and flat-screen cable TV.",
    image: images.hero,
  },
  {
    title: "Guest Laundry Service",
    detail: "Take advantage of our convenient guest laundry facilities to keep your clothes fresh during your stay.",
    image: images.laundry,
  },
  {
    title: "Jetted Tub Suite",
    detail: "Unwind in our spacious premier suite featuring a private jetted tub, hair dryer, and premium toiletries.",
    image: "/JettedTubSuite.png",
  },
  {
    title: "Pet-Friendly Room",
    detail: "Warm, accommodating guest rooms for your pets (additional charges may apply depending on room type).",
    image: images.pet,
  },
];

export const stats = [
  { value: "31", label: "rooms & suites" },
  { value: "24/7", label: "front desk" },
  { value: "Free", label: "self & rv parking" },
  { value: "100%", label: "non-smoking rooms" },
];

