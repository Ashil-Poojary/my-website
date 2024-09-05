
export const workExperiences = [
  {
    designation: "Software Developer - Intern", 
    companyName: "DevAppSys", 
    startDay: 1,
    startMonth: 4,
    startYear: 2023,
    endDay: 31,
    endMonth: 7,
    endYear: 2023,
  },
  { 
    designation: "Software Engineer", 
    companyName: "DevAppSys", 
    startDay: 1, 
    startMonth: 8, 
    startYear: 2023 
  },
  // Current job with no end date
];

// Defining a type for one work experience object
export type WorkExperience = {
  designation: string;
  companyName: string;
  startDay: number;
  startMonth: number;
  startYear: number;
  endDay?: number; 
  endMonth?: number; 
  endYear?: number;  
};

export type ExperienceType = typeof workExperiences;
