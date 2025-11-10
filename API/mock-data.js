// Mock Data Provider for Car Rental System
// This replaces the MySQL database functionality

const mockCars = [
    {
        id: 1,
        model: "BMW-M4",
        brand: "BMW",
        name: "BMW M4 F82",
        price: 259,
        available: true,
        category: "Luxe / Coupé sportif",
        image: "../images/M4-front.jpg",
        images: [
            "../images/M4-front.jpg",
            "../images/M4-dashbored.jpg", 
            "../images/M4-up.jpg"
        ],
        specifications: {
            engine: "3.0L 6 cylindres en ligne bi-turbo (S55)",
            power: "425 ch (standard) / 444 ch (Competition) / 503 ch (CS)",
            torque: "550 Nm (standard & Competition) / 600 Nm (CS)",
            transmission: "Manuelle à 6 rapports ou Automatique à 7 rapports (DCT)",
            traction: "Propulsion (RWD)",
            consumption: "~11 L/100 km en ville / ~8 L/100 km sur autoroute",
            seats: 4,
            features: ["Écran central avec BMW iDrive", "Apple CarPlay", "Bluetooth", "Navigation GPS", "Sièges sport en cuir", "Fibre de carbone", "Éclairage d'ambiance"],
            safety: ["Régulateur de vitesse adaptatif", "Alerte de franchissement de ligne", "Freinage haute performance M", "Assistance au stationnement", "Caméra de recul", "Capteurs de stationnement"]
        },
        description: "Le BMW M4 F82 est un coupé sportif haute performance qui allie luxe et performances exceptionnelles. Idéal pour la conduite sportive et les voyages haut de gamme."
    },
    {
        id: 2,
        model: "BMW-M8",
        brand: "BMW", 
        name: "BMW M8",
        price: 349,
        available: true,
        category: "Luxe / GT",
        image: "../images/M8-dashboard.jpg",
        images: [
            "../images/M8-dashboard.jpg",
            "../images/M8-engine.jpg",
            "../images/M8-trunk.jpg"
        ],
        specifications: {
            engine: "4.4L V8 bi-turbo",
            power: "600 ch",
            torque: "750 Nm",
            transmission: "Automatique à 8 rapports (Steptronic)",
            traction: "Intégrale (xDrive)",
            consumption: "~14 L/100 km en ville / ~9 L/100 km sur autoroute",
            seats: 4,
            features: ["Écran tactile de 12.3 pouces", "Apple CarPlay", "Android Auto", "Navigation GPS", "Sièges en cuir Nappa", "Système audio Bowers & Wilkins", "Toit panoramique"],
            safety: ["Adaptive Cruise Control", "Lane Keeping Assistant", "Parking Assistant Plus", "Surround View Camera", "Night Vision", "Active Protection"]
        },
        description: "Le BMW M8 représente le summum du luxe et de la performance BMW. Un véhicule grand tourisme exceptionnel pour les longs voyages avec un confort inégalé."
    },
    {
        id: 3,
        model: "audi-r8",
        brand: "Audi",
        name: "Audi R8",
        price: 389,
        available: false,
        category: "Supercar / Sport",
        image: "../images/R8.jpg",
        images: [
            "../images/R8.jpg",
            "../images/r81.jpg",
            "../images/r82.jpg",
            "../images/r83.jpg"
        ],
        specifications: {
            engine: "5.2L V10 FSI",
            power: "562 ch",
            torque: "550 Nm",
            transmission: "Automatique à 7 rapports (S tronic)",
            traction: "Quattro (Intégrale)",
            consumption: "~15 L/100 km en ville / ~10 L/100 km sur autoroute",
            seats: 2,
            features: ["Virtual Cockpit Audi", "Écran MMI navigation plus", "Bang & Olufsen Sound System", "Sièges sport en cuir et Alcantara", "LED Matrix headlights", "Audi drive select"],
            safety: ["Audi pre sense", "ESC with Sport Mode", "Hill Hold Assist", "Tyre Pressure Monitoring", "ISOFIX", "Airbags avant et latéraux"]
        },
        description: "L'Audi R8 est une supercar audacieuse qui combine technologie de pointe et performance extrême. Une expérience de conduite inoubliable."
    },
    {
        id: 4,
        model: "bmwserie4",
        brand: "BMW",
        name: "BMW Série 4",
        price: 229,
        available: true,
        category: "Premium / Coupé",
        image: "../images/BMW-serie4.jpg",
        images: [
            "../images/BMW-serie4.jpg",
            "../images/BMW.jpg",
            "../images/BMW2.jpg"
        ],
        specifications: {
            engine: "2.0L 4 cylindres turbo ou 3.0L 6 cylindres en ligne turbo",
            power: "184 ch - 382 ch selon version",
            torque: "300 Nm - 500 Nm",
            transmission: "Manuelle 6 rapports ou Automatique 8 rapports (Steptronic)",
            traction: "Propulsion (RWD) ou Intégrale (xDrive)",
            consumption: "~7-10 L/100 km selon moteur",
            seats: 4,
            features: ["Écran Live Cockpit Professional", "Apple CarPlay", "Bluetooth", "Navigation GPS", "Sièges confort", "Climatisation automatique", "Toit ouvrant"],
            safety: ["Active Protection", "Driving Assistant", "Parking Assistant", "Reversing Assistant", "Camera de recul", "Alerte de collision"]
        },
        description: "La BMW Série 4 allie élégance, sportivité et technologie au quotidien. Un coupé polyvalent parfait pour toutes les situations."
    },
    {
        id: 5,
        model: "gti",
        brand: "Volkswagen",
        name: "Volkswagen Golf GTI",
        price: 189,
        available: true,
        category: "Compact / Sport",
        image: "../images/gti1.jpg",
        images: [
            "../images/gti1.jpg",
            "../images/gti2.jpg", 
            "../images/gti3.jpg"
        ],
        specifications: {
            engine: "2.0L TSI",
            power: "245 ch",
            torque: "370 Nm",
            transmission: "Manuelle 6 rapports ou DSG 7 rapports",
            traction: "Traction avant",
            consumption: "~7.5 L/100 km en ville / ~5.5 L/100 km sur autoroute",
            seats: 5,
            features: ["Écran Composition Media", "Apple CarPlay", "Android Auto", "Climatisation automatique", "Sièges sport GTI", "Volant sport multifonction", "Système de sonorisation"],
            safety: ["Front Assist", "Lane Assist", "Blind Spot Monitor", "Rear Traffic Alert", "ESC Sport", "7 airbags"]
        },
        description: "La Golf GTI est une icône du compact sportif. Elle offre un équilibre parfait entre performances, confort et praticité au quotidien."
    },
    {
        id: 6,
        model: "Audi",
        brand: "Audi",
        name: "Audi A4",
        price: 179,
        available: true,
        category: "Premium / Berline",
        image: "../images/DB2025AU00189_web_1600.webp",
        images: [
            "../images/DB2025AU00189_web_1600.webp",
            "../images/dda1d489b17ec7b65a03932e6b9deba9.webp"
        ],
        specifications: {
            engine: "2.0L TFSI",
            power: "190 ch - 252 ch selon version",
            torque: "320 Nm - 370 Nm",
            transmission: "Manuelle 6 rapports ou S tronic 7 rapports",
            traction: "Traction avant ou Quattro",
            consumption: "~6-8 L/100 km selon moteur",
            seats: 5,
            features: ["Virtual Cockpit Audi", "Écran MMI touch", "Apple CarPlay", "Android Auto", "Sièges en cuir", "Climatisation automatique 3 zones", "Audi Phone Box"],
            safety: ["Audi pre sense city", "Audi pre sense basic", "Audi active lane assist", "Adaptive cruise control", "Park assist", "360° camera"]
        },
        description: "L'Audi A4 représente l'excellence de la berline premium avec une technologie sophistiquée et un confort exceptionnel."
    }
];

// Mock Database Functions
export const getCarByModel = async (model) => {
    // Simulate database delay
    await new Promise(resolve => setTimeout(resolve, 100));
    return mockCars.find(car => car.model === model);
};

export const getAllCars = async () => {
    // Simulate database delay
    await new Promise(resolve => setTimeout(resolve, 100));
    return mockCars;
};

export const getAvailableCars = async () => {
    // Simulate database delay
    await new Promise(resolve => setTimeout(resolve, 100));
    return mockCars.filter(car => car.available);
};

export const checkAvailability = async (model) => {
    // Simulate database delay
    await new Promise(resolve => setTimeout(resolve, 100));
    const car = mockCars.find(car => car.model === model);
    return { available: car ? car.available : false };
};

export default {
    getCarByModel,
    getAllCars,
    getAvailableCars,
    checkAvailability
};