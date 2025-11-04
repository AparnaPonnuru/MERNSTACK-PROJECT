const express = require('express');

const router = express.Router();

// Sample company data (simulating database)
const companies = [
  {
    _id: '1',
    name: 'TechCorp',
    location: 'San Francisco',
    industry: 'Technology',
    description: 'Leading technology company specializing in AI.',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: '2',
    name: 'FinanceHub',
    location: 'New York',
    industry: 'Finance',
    description: 'Innovative financial services provider.',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: '3',
    name: 'HealthCare Plus',
    location: 'London',
    industry: 'Healthcare',
    description: 'Comprehensive healthcare solutions.',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: '4',
    name: 'EduLearn',
    location: 'Berlin',
    industry: 'Education',
    description: 'Online education platform.',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: '5',
    name: 'RetailMax',
    location: 'Tokyo',
    industry: 'Retail',
    description: 'E-commerce retail giant.',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: '6',
    name: 'GreenTech',
    location: 'San Francisco',
    industry: 'Technology',
    description: 'Sustainable technology solutions.',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: '7',
    name: 'DataFlow',
    location: 'New York',
    industry: 'Technology',
    description: 'Big data analytics platform.',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: '8',
    name: 'MediCare',
    location: 'London',
    industry: 'Healthcare',
    description: 'Telemedicine services.',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: '9',
    name: 'InnovateLabs',
    location: 'Austin',
    industry: 'Technology',
    description: 'Research and development in emerging technologies.',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: '10',
    name: 'GlobalTrade',
    location: 'Singapore',
    industry: 'Logistics',
    description: 'International shipping and logistics services.',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: '11',
    name: 'EcoBuild',
    location: 'Vancouver',
    industry: 'Construction',
    description: 'Sustainable building materials and construction.',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: '12',
    name: 'FoodieHub',
    location: 'Paris',
    industry: 'Food',
    description: 'Online food delivery and restaurant platform.',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: '13',
    name: 'AutoDrive',
    location: 'Detroit',
    industry: 'Automotive',
    description: 'Autonomous vehicle technology development.',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: '14',
    name: 'FashionForward',
    location: 'Milan',
    industry: 'Fashion',
    description: 'High-end fashion design and retail.',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: '15',
    name: 'EnergyPlus',
    location: 'Oslo',
    industry: 'Energy',
    description: 'Renewable energy solutions and consulting.',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: '16',
    name: 'TravelEase',
    location: 'Barcelona',
    industry: 'Travel',
    description: 'Travel booking and planning services.',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: '17',
    name: 'MediaWorks',
    location: 'Los Angeles',
    industry: 'Media',
    description: 'Digital media production and content creation.',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: '18',
    name: 'AgriTech',
    location: 'Sydney',
    industry: 'Agriculture',
    description: 'Agricultural technology and smart farming.',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: '19',
    name: 'PharmaCare',
    location: 'Zurich',
    industry: 'Pharmaceutical',
    description: 'Pharmaceutical research and drug development.',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: '20',
    name: 'SportZone',
    location: 'Rio de Janeiro',
    industry: 'Sports',
    description: 'Sports equipment and apparel retail.',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    "_id": "21",
    "name": "Company21",
    "location": "Cairo",
    "industry": "Logistics",
    "description": "Providing top-quality services worldwide.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "22",
    "name": "Company22",
    "location": "Amsterdam",
    "industry": "Retail",
    "description": "Pioneering research and development.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "23",
    "name": "Company23",
    "location": "Rio de Janeiro",
    "industry": "Chemicals",
    "description": "Expert in digital transformation.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "24",
    "name": "Company24",
    "location": "Bangalore",
    "industry": "E-commerce",
    "description": "Specializing in advanced technologies.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "25",
    "name": "Company25",
    "location": "Istanbul",
    "industry": "E-commerce",
    "description": "Building the future of industry.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "26",
    "name": "Company26",
    "location": "Milan",
    "industry": "Retail",
    "description": "Empowering businesses globally.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "27",
    "name": "Company27",
    "location": "Istanbul",
    "industry": "Finance",
    "description": "Pioneering research and development.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "28",
    "name": "Company28",
    "location": "Detroit",
    "industry": "Marketing",
    "description": "Delivering exceptional customer experiences.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "29",
    "name": "Company29",
    "location": "Singapore",
    "industry": "Sports",
    "description": "Providing top-quality services worldwide.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "30",
    "name": "Company30",
    "location": "Jakarta",
    "industry": "Automotive",
    "description": "Delivering exceptional customer experiences.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "31",
    "name": "Company31",
    "location": "Seoul",
    "industry": "Legal",
    "description": "Leading company in innovative solutions.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "32",
    "name": "Company32",
    "location": "Tokyo",
    "industry": "Telecom",
    "description": "Focused on sustainable development.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "33",
    "name": "Company33",
    "location": "Milan",
    "industry": "Travel",
    "description": "Specializing in advanced technologies.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "34",
    "name": "Company34",
    "location": "Austin",
    "industry": "Finance",
    "description": "Expert in digital transformation.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "35",
    "name": "Company35",
    "location": "Seoul",
    "industry": "Construction",
    "description": "Providing top-quality services worldwide.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "36",
    "name": "Company36",
    "location": "Paris",
    "industry": "Technology",
    "description": "Committed to excellence and innovation.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "37",
    "name": "Company37",
    "location": "Rio de Janeiro",
    "industry": "Automotive",
    "description": "Specializing in advanced technologies.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "38",
    "name": "Company38",
    "location": "London",
    "industry": "Construction",
    "description": "Pioneering research and development.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "39",
    "name": "Company39",
    "location": "Detroit",
    "industry": "Chemicals",
    "description": "Pioneering research and development.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "40",
    "name": "Company40",
    "location": "Singapore",
    "industry": "Entertainment",
    "description": "Building the future of industry.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "41",
    "name": "Company41",
    "location": "Austin",
    "industry": "Sports",
    "description": "Building the future of industry.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "42",
    "name": "Company42",
    "location": "Jakarta",
    "industry": "E-commerce",
    "description": "Building the future of industry.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "43",
    "name": "Company43",
    "location": "Austin",
    "industry": "Logistics",
    "description": "Committed to excellence and innovation.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "44",
    "name": "Company44",
    "location": "Zurich",
    "industry": "Pharmaceutical",
    "description": "Building the future of industry.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "45",
    "name": "Company45",
    "location": "Sao Paulo",
    "industry": "Technology",
    "description": "Specializing in advanced technologies.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "46",
    "name": "Company46",
    "location": "Detroit",
    "industry": "E-commerce",
    "description": "Committed to excellence and innovation.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "47",
    "name": "Company47",
    "location": "Rio de Janeiro",
    "industry": "Biotech",
    "description": "Building the future of industry.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "48",
    "name": "Company48",
    "location": "Dubai",
    "industry": "Agriculture",
    "description": "Pioneering research and development.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "49",
    "name": "Company49",
    "location": "Sydney",
    "industry": "Marketing",
    "description": "Pioneering research and development.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "50",
    "name": "Company50",
    "location": "Seoul",
    "industry": "Logistics",
    "description": "Committed to excellence and innovation.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "51",
    "name": "Company51",
    "location": "Beijing",
    "industry": "Manufacturing",
    "description": "Focused on sustainable development.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "52",
    "name": "Company52",
    "location": "Shanghai",
    "industry": "Agriculture",
    "description": "Building the future of industry.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "53",
    "name": "Company53",
    "location": "Zurich",
    "industry": "Retail",
    "description": "Leading company in innovative solutions.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "54",
    "name": "Company54",
    "location": "Oslo",
    "industry": "Media",
    "description": "Leading company in innovative solutions.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "55",
    "name": "Company55",
    "location": "Los Angeles",
    "industry": "Legal",
    "description": "Leading company in innovative solutions.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "56",
    "name": "Company56",
    "location": "Mumbai",
    "industry": "E-commerce",
    "description": "Empowering businesses globally.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "57",
    "name": "Company57",
    "location": "Cape Town",
    "industry": "Healthcare",
    "description": "Focused on sustainable development.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "58",
    "name": "Company58",
    "location": "London",
    "industry": "Education",
    "description": "Committed to excellence and innovation.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "59",
    "name": "Company59",
    "location": "Mexico City",
    "industry": "Technology",
    "description": "Expert in digital transformation.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "60",
    "name": "Company60",
    "location": "Austin",
    "industry": "Pharmaceutical",
    "description": "Empowering businesses globally.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "61",
    "name": "Company61",
    "location": "Istanbul",
    "industry": "Entertainment",
    "description": "Building the future of industry.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "62",
    "name": "Company62",
    "location": "Sydney",
    "industry": "Sports",
    "description": "Pioneering research and development.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "63",
    "name": "Company63",
    "location": "New York",
    "industry": "Legal",
    "description": "Delivering exceptional customer experiences.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "64",
    "name": "Company64",
    "location": "Milan",
    "industry": "Agriculture",
    "description": "Building the future of industry.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "65",
    "name": "Company65",
    "location": "Oslo",
    "industry": "Construction",
    "description": "Building the future of industry.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "66",
    "name": "Company66",
    "location": "Toronto",
    "industry": "Finance",
    "description": "Specializing in advanced technologies.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "67",
    "name": "Company67",
    "location": "New York",
    "industry": "E-commerce",
    "description": "Focused on sustainable development.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "68",
    "name": "Company68",
    "location": "Vancouver",
    "industry": "Real Estate",
    "description": "Empowering businesses globally.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "69",
    "name": "Company69",
    "location": "Sydney",
    "industry": "Sports",
    "description": "Pioneering research and development.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "70",
    "name": "Company70",
    "location": "Sydney",
    "industry": "Technology",
    "description": "Leading company in innovative solutions.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "71",
    "name": "Company71",
    "location": "Paris",
    "industry": "E-commerce",
    "description": "Empowering businesses globally.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "72",
    "name": "Company72",
    "location": "Jakarta",
    "industry": "Mining",
    "description": "Committed to excellence and innovation.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "73",
    "name": "Company73",
    "location": "Singapore",
    "industry": "Technology",
    "description": "Providing top-quality services worldwide.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "74",
    "name": "Company74",
    "location": "Rio de Janeiro",
    "industry": "Legal",
    "description": "Empowering businesses globally.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "75",
    "name": "Company75",
    "location": "Toronto",
    "industry": "Manufacturing",
    "description": "Leading company in innovative solutions.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "76",
    "name": "Company76",
    "location": "Austin",
    "industry": "Real Estate",
    "description": "Delivering exceptional customer experiences.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "77",
    "name": "Company77",
    "location": "Mumbai",
    "industry": "Insurance",
    "description": "Leading company in innovative solutions.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "78",
    "name": "Company78",
    "location": "Oslo",
    "industry": "Utilities",
    "description": "Focused on sustainable development.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "79",
    "name": "Company79",
    "location": "San Francisco",
    "industry": "Finance",
    "description": "Expert in digital transformation.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "80",
    "name": "Company80",
    "location": "Bangalore",
    "industry": "Education",
    "description": "Empowering businesses globally.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "81",
    "name": "Company81",
    "location": "Berlin",
    "industry": "Automotive",
    "description": "Empowering businesses globally.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "82",
    "name": "Company82",
    "location": "Los Angeles",
    "industry": "Automotive",
    "description": "Expert in digital transformation.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "83",
    "name": "Company83",
    "location": "San Francisco",
    "industry": "E-commerce",
    "description": "Specializing in advanced technologies.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "84",
    "name": "Company84",
    "location": "Istanbul",
    "industry": "Utilities",
    "description": "Specializing in advanced technologies.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "85",
    "name": "Company85",
    "location": "Sydney",
    "industry": "Energy",
    "description": "Delivering exceptional customer experiences.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "86",
    "name": "Company86",
    "location": "Dubai",
    "industry": "Entertainment",
    "description": "Expert in digital transformation.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "87",
    "name": "Company87",
    "location": "Rio de Janeiro",
    "industry": "Travel",
    "description": "Specializing in advanced technologies.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "88",
    "name": "Company88",
    "location": "Seoul",
    "industry": "Insurance",
    "description": "Expert in digital transformation.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "89",
    "name": "Company89",
    "location": "Dubai",
    "industry": "Marketing",
    "description": "Focused on sustainable development.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "90",
    "name": "Company90",
    "location": "Shanghai",
    "industry": "Education",
    "description": "Empowering businesses globally.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "91",
    "name": "Company91",
    "location": "San Francisco",
    "industry": "Pharmaceutical",
    "description": "Leading company in innovative solutions.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "92",
    "name": "Company92",
    "location": "Zurich",
    "industry": "Retail",
    "description": "Delivering exceptional customer experiences.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "93",
    "name": "Company93",
    "location": "Zurich",
    "industry": "Marketing",
    "description": "Specializing in advanced technologies.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "94",
    "name": "Company94",
    "location": "Shanghai",
    "industry": "Legal",
    "description": "Pioneering research and development.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "95",
    "name": "Company95",
    "location": "Berlin",
    "industry": "Energy",
    "description": "Pioneering research and development.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "96",
    "name": "Company96",
    "location": "Milan",
    "industry": "Energy",
    "description": "Providing top-quality services worldwide.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "97",
    "name": "Company97",
    "location": "Bangalore",
    "industry": "Travel",
    "description": "Specializing in advanced technologies.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "98",
    "name": "Company98",
    "location": "Mexico City",
    "industry": "Fashion",
    "description": "Building the future of industry.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "99",
    "name": "Company99",
    "location": "Milan",
    "industry": "Manufacturing",
    "description": "Empowering businesses globally.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "100",
    "name": "Company100",
    "location": "Vancouver",
    "industry": "Consulting",
    "description": "Specializing in advanced technologies.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "101",
    "name": "Company101",
    "location": "Detroit",
    "industry": "Education",
    "description": "Empowering businesses globally.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "102",
    "name": "Company102",
    "location": "Singapore",
    "industry": "Finance",
    "description": "Specializing in advanced technologies.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "103",
    "name": "Company103",
    "location": "Zurich",
    "industry": "Healthcare",
    "description": "Committed to excellence and innovation.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "104",
    "name": "Company104",
    "location": "Zurich",
    "industry": "Manufacturing",
    "description": "Pioneering research and development.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "105",
    "name": "Company105",
    "location": "Dubai",
    "industry": "Logistics",
    "description": "Providing top-quality services worldwide.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "106",
    "name": "Company106",
    "location": "Mexico City",
    "industry": "Automotive",
    "description": "Providing top-quality services worldwide.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "107",
    "name": "Company107",
    "location": "Bangalore",
    "industry": "Healthcare",
    "description": "Empowering businesses globally.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "108",
    "name": "Company108",
    "location": "Mexico City",
    "industry": "Insurance",
    "description": "Specializing in advanced technologies.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "109",
    "name": "Company109",
    "location": "Cairo",
    "industry": "Fashion",
    "description": "Focused on sustainable development.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "110",
    "name": "Company110",
    "location": "Beijing",
    "industry": "Legal",
    "description": "Committed to excellence and innovation.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "111",
    "name": "Company111",
    "location": "Detroit",
    "industry": "Chemicals",
    "description": "Providing top-quality services worldwide.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "112",
    "name": "Company112",
    "location": "Bangalore",
    "industry": "Automotive",
    "description": "Focused on sustainable development.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "113",
    "name": "Company113",
    "location": "Los Angeles",
    "industry": "Travel",
    "description": "Empowering businesses globally.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "114",
    "name": "Company114",
    "location": "Oslo",
    "industry": "Sports",
    "description": "Specializing in advanced technologies.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "115",
    "name": "Company115",
    "location": "Paris",
    "industry": "Sports",
    "description": "Expert in digital transformation.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "116",
    "name": "Company116",
    "location": "Amsterdam",
    "industry": "Construction",
    "description": "Committed to excellence and innovation.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "117",
    "name": "Company117",
    "location": "Los Angeles",
    "industry": "Pharmaceutical",
    "description": "Focused on sustainable development.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "118",
    "name": "Company118",
    "location": "New York",
    "industry": "Real Estate",
    "description": "Delivering exceptional customer experiences.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "119",
    "name": "Company119",
    "location": "Milan",
    "industry": "Retail",
    "description": "Leading company in innovative solutions.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  },
  {
    "_id": "120",
    "name": "Company120",
    "location": "Milan",
    "industry": "Mining",
    "description": "Building the future of industry.",
    "createdAt": "2025-11-04T05:28:59.165Z",
    "updatedAt": "2025-11-04T05:28:59.165Z"
  }
];

// @desc    Get all companies with optional filters
// @route   GET /api/companies
// @access  Public
router.get('/', (req, res) => {
  try {
    const { search, location, industry } = req.query;

    let filteredCompanies = companies;

    if (search) {
      filteredCompanies = filteredCompanies.filter(company =>
        company.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (location) {
      filteredCompanies = filteredCompanies.filter(company =>
        company.location.toLowerCase().includes(location.toLowerCase())
      );
    }

    if (industry) {
      filteredCompanies = filteredCompanies.filter(company =>
        company.industry.toLowerCase().includes(industry.toLowerCase())
      );
    }

    res.json(filteredCompanies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @desc    Create a new company
// @route   POST /api/companies
// @access  Public
router.post('/', (req, res) => {
  try {
    const { website, founded, ...companyData } = req.body; // Exclude website and founded
    const newCompany = {
      _id: (companies.length + 1).toString(),
      ...companyData,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    companies.push(newCompany);
    res.status(201).json(newCompany);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;