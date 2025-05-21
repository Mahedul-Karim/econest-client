export const NAV_LINKS = [
  {
    label: "Home",
    to: "/",
    isPrivate: false,
  },
  {
    label: "Explore Gardeners",
    to: "/gardeners",
    isPrivate: false,
  },
  {
    label: "Share a Garden Tip",
    to: "/garden-tip",
    isPrivate: true,
  },
  {
    label: "My Tips",
    to: "/my-tips",
    isPrivate: true,
  },
];

export const EVENT_SLIDES = [
  {
    id: 1,
    title: "Spring Garden Festival 2025",
    description:
      "Celebrate the season of bloom with gardeners across the country! Join live planting demos, garden walks, and workshops led by experts.",
    date: "March 21–23, 2025",
    location: "Botanical Gardens, Portland, OR",
    buttonText: "Learn More",
    image: "/assets/slide-1.avif",
  },
  {
    id: 2,
    title: "Urban Gardening Workshop",
    description:
      "Live in the city? No problem! Discover how to grow herbs and veggies in small spaces — balconies, rooftops, or even your windowsill.",
    date: "April 10, 2025",
    location: "Online & In-Person (NYC)",
    buttonText: "Reserve Your Spot",
    image: "/assets/slide-2.avif",
  },
  {
    id: 3,
    title: "Compost & Sustainability Drive",
    description:
      "Learn how composting reduces waste and helps your garden thrive. Bring your compostables and pick up a free starter kit!",
    date: "May 5, 2025",
    location: "Various Local Community Gardens",
    buttonText: "Find a Location",
    image: "/assets/slide-3.avif",
  },
];

export const difficultyColor = {
  Easy: "bg-primary/20 text-primary",
  Medium: "bg-accent/20 text-accent",
  Hard: "bg-danger/20 text-danger",
};
