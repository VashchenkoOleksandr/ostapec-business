import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Best UI components for modern websites",
    paragraph:
      "Discover the most effective and customizable UI components that can help you build stunning, user-friendly websites.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Daniel Brooks",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["creative"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "9 simple ways to improve your design skills",
    paragraph:
      "Learn practical tips and strategies to enhance your design abilities and create visually appealing websites and applications.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Sophia Carter",
      image: "/images/blog/author-02.png",
      designation: "Graphic Designer",
    },
    tags: ["computer"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Tips to quickly improve your coding speed.",
    paragraph:
      "Boost your productivity as a developer with these quick tips and techniques to write cleaner and more efficient code faster.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "John Miller",
      image: "/images/blog/author-03.png",
      designation: "Web Developer",
    },
    tags: ["design"],
    publishDate: "2025",
  },
];
export default blogData;
