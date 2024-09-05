import { ExperienceType } from "@/constants/workExperience";

export function calculateTotalExperience(experiences:ExperienceType) {
    let totalMonths = 0;
  
    experiences.forEach(exp => {
      const { startDay, startMonth, startYear, endDay, endMonth, endYear } = exp;
      
      // Create Date objects for start and end dates
      const startDate = new Date(startYear, startMonth - 1, startDay); // Month is 0-indexed
      const endDate = endYear && endMonth && endDay
        ? new Date(endYear, endMonth - 1, endDay)
        : new Date(); // If no end date is given, assume current date
  
      // Calculate the difference in months
      const diffInYears = endDate.getFullYear() - startDate.getFullYear();
      const diffInMonths = (endDate.getMonth() - startDate.getMonth()) + (diffInYears * 12);
  
      totalMonths += diffInMonths;
    });
  
    // Convert total months to years and months
    const totalYears = Math.floor(totalMonths / 12);
    const remainingMonths = totalMonths % 12;
  
    return { totalYears, remainingMonths };
  }