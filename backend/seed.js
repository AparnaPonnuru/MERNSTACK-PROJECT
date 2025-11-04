require('dotenv').config();
const mongoose = require('mongoose');
const Company = require('./models/Company');

const companies = [
  {
    name: 'TechCorp',
    location: 'San Francisco',
    industry: 'Technology',
    description: 'Leading technology company specializing in AI.',
    website: 'https://techcorp.com',
    founded: 2010
  },
  {
    name: 'FinanceHub',
    location: 'New York',
    industry: 'Finance',
    description: 'Innovative financial services provider.',
    website: 'https://financehub.com',
    founded: 2005
  },
  {
    name: 'HealthCare Plus',
    location: 'London',
    industry: 'Healthcare',
    description: 'Comprehensive healthcare solutions.',
    website: 'https://healthcareplus.com',
    founded: 1998
  },
  {
    name: 'EduLearn',
    location: 'Berlin',
    industry: 'Education',
    description: 'Online education platform.',
    website: 'https://edulearn.com',
    founded: 2015
  },
  {
    name: 'RetailMax',
    location: 'Tokyo',
    industry: 'Retail',
    description: 'E-commerce retail giant.',
    website: 'https://retailmax.com',
    founded: 2000
  },
  {
    name: 'GreenTech',
    location: 'San Francisco',
    industry: 'Technology',
    description: 'Sustainable technology solutions.',
    website: 'https://greentech.com',
    founded: 2018
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');

    await Company.deleteMany({});
    console.log('Cleared existing companies');

    await Company.insertMany(companies);
    console.log('Sample companies added');

    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedDB();