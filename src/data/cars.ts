export interface Car {
  id: string;
  name: string;
  brand: string;
  category: "Economy" | "Sedan" | "SUV" | "Luxury" | "Sports" | "Van";
  year: number;
  seats: number;
  transmission: "Automatic" | "Manual";
  fuel: "Petrol" | "Diesel" | "Hybrid" | "Electric";
  pricePerDay: number;
  image: string;
  rating: number;
  reviewCount: number;
  features: string[];
  specs: {
    engine: string;
    power: string;
    doors: number;
    luggage: number;
  };
  available: boolean;
}

export const cars: Car[] = [
  {
    id: "1",
    name: "Toyota Camry",
    brand: "Toyota",
    category: "Sedan",
    year: 2024,
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    pricePerDay: 150,
    image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=600&h=400&fit=crop",
    rating: 4.7,
    reviewCount: 134,
    features: ["Bluetooth", "USB", "AC", "GPS", "Cruise Control", "Backup Camera"],
    specs: { engine: "2.5L 4-Cylinder", power: "203 HP", doors: 4, luggage: 3 },
    available: true,
  },
  {
    id: "2",
    name: "Mercedes-Benz S-Class",
    brand: "Mercedes-Benz",
    category: "Luxury",
    year: 2024,
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    pricePerDay: 650,
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&h=400&fit=crop",
    rating: 4.9,
    reviewCount: 89,
    features: ["Bluetooth", "USB", "AC", "GPS", "Massage Seats", "Panoramic Roof", "Night Vision"],
    specs: { engine: "3.0L Inline-6 Turbo", power: "429 HP", doors: 4, luggage: 4 },
    available: true,
  },
  {
    id: "3",
    name: "Range Rover Sport",
    brand: "Land Rover",
    category: "SUV",
    year: 2024,
    seats: 7,
    transmission: "Automatic",
    fuel: "Diesel",
    pricePerDay: 550,
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&h=400&fit=crop",
    rating: 4.8,
    reviewCount: 112,
    features: ["Bluetooth", "USB", "AC", "GPS", "4WD", "Terrain Response", "Heated Seats"],
    specs: { engine: "3.0L V6 Diesel", power: "350 HP", doors: 4, luggage: 5 },
    available: true,
  },
  {
    id: "4",
    name: "Nissan Sunny",
    brand: "Nissan",
    category: "Economy",
    year: 2024,
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    pricePerDay: 99,
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&h=400&fit=crop",
    rating: 4.3,
    reviewCount: 256,
    features: ["Bluetooth", "USB", "AC", "ABS"],
    specs: { engine: "1.5L 4-Cylinder", power: "118 HP", doors: 4, luggage: 2 },
    available: true,
  },
  {
    id: "5",
    name: "Porsche 911 Carrera",
    brand: "Porsche",
    category: "Sports",
    year: 2024,
    seats: 2,
    transmission: "Automatic",
    fuel: "Petrol",
    pricePerDay: 1200,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=400&fit=crop",
    rating: 5.0,
    reviewCount: 45,
    features: ["Bluetooth", "USB", "AC", "GPS", "Sport Chrono", "Launch Control", "PASM"],
    specs: { engine: "3.0L Flat-6 Twin Turbo", power: "379 HP", doors: 2, luggage: 1 },
    available: true,
  },
  {
    id: "6",
    name: "Toyota Land Cruiser",
    brand: "Toyota",
    category: "SUV",
    year: 2024,
    seats: 7,
    transmission: "Automatic",
    fuel: "Petrol",
    pricePerDay: 450,
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600&h=400&fit=crop",
    rating: 4.8,
    reviewCount: 198,
    features: ["Bluetooth", "USB", "AC", "GPS", "4WD", "Crawl Control", "Multi-Terrain Select"],
    specs: { engine: "3.5L V6 Twin Turbo", power: "409 HP", doors: 4, luggage: 5 },
    available: true,
  },
  {
    id: "7",
    name: "BMW 7 Series",
    brand: "BMW",
    category: "Luxury",
    year: 2024,
    seats: 5,
    transmission: "Automatic",
    fuel: "Hybrid",
    pricePerDay: 600,
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&h=400&fit=crop",
    rating: 4.9,
    reviewCount: 67,
    features: ["Bluetooth", "USB", "AC", "GPS", "Executive Lounge", "Theater Screen", "iDrive 8"],
    specs: { engine: "3.0L Inline-6 Plug-in Hybrid", power: "490 HP", doors: 4, luggage: 4 },
    available: false,
  },
  {
    id: "8",
    name: "Toyota Yaris",
    brand: "Toyota",
    category: "Economy",
    year: 2024,
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    pricePerDay: 89,
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0a7e?w=600&h=400&fit=crop",
    rating: 4.4,
    reviewCount: 312,
    features: ["Bluetooth", "USB", "AC", "Safety Sense"],
    specs: { engine: "1.5L 3-Cylinder", power: "120 HP", doors: 4, luggage: 2 },
    available: true,
  },
];

export const locations = [
  "Dubai International Airport (DXB)",
  "Abu Dhabi International Airport (AUH)",
  "Dubai Marina",
  "Downtown Dubai",
  "Sharjah City Center",
  "Ajman Free Zone",
  "Ras Al Khaimah",
  "Fujairah City",
  "Dubai Mall",
  "JBR Walk",
];
