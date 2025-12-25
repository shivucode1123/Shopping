import React from "react";
// Brands
export const brands = ["Zudio", "Zara", "Louis Vuitton"];

// Categories
export const categories = ["Mens", "Womens", "Kids"];

// Price Ranges
export const priceRanges = [
  { label: "All Prices", min: 0, max: Infinity },
  { label: "Under ₹1500", min: 0, max: 1500 },
  { label: "₹1500 - ₹5000", min: 1500, max: 5000 },
  { label: "Above ₹5000", min: 5000, max: Infinity },
];

// User Rating Ranges
export const userRatings = [
  { label: "All Ratings", min: 0, max: Infinity },
  { label: "Below 2", min: 0, max: 2 },
  { label: "Below 3", min: 2, max: 3 },
  { label: "3 Stars & Above", min: 3, max: Infinity },
];