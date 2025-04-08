import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    "id": 1,
    "title": "Mastering Tailwind CSS for Scalable Design",
    "paragraph": "Learn how Tailwind CSS streamlines your workflow while maintaining consistency in large projects.",
    "image": "https://picsum.photos/seed/5235/800/600",
    "author": {
      "name": "Amy French MD",
      "image": "/images/blog/author-01.png",
      "designation": "Frontend Developer"
    },
    "tags": [
      "CSS",
      "Tailwind"
    ],
    "publishDate": "2025"
  },
  {
    "id": 2,
    "title": "WebAssembly: The Future of Fast Web Apps",
    "paragraph": "Explore how WebAssembly is revolutionizing the speed of web applications by running code closer to native.",
    "image": "https://picsum.photos/seed/1895/800/600",
    "author": {
      "name": "Cynthia Haley",
      "image": "/images/blog/author-02.png",
      "designation": "Frontend Developer"
    },
    "tags": [
      "WebAssembly",
      "Performance"
    ],
    "publishDate": "2025"
  },
  {
    "id": 3,
    "title": "How AI Is Transforming Frontend Development",
    "paragraph": "From AI-assisted coding to smart UIs, here's how artificial intelligence is changing the frontend game.",
    "image": "https://picsum.photos/seed/2738/800/600",
    "author": {
      "name": "Jill Brown",
      "image": "/images/blog/author-03.png",
      "designation": "Full Stack Engineer"
    },
    "tags": [
      "AI",
      "Frontend"
    ],
    "publishDate": "2025"
  },
  {
    "id": 4,
    "title": "Next.js 14 Features You Should Know",
    "paragraph": "Discover the powerful improvements introduced in Next.js 14 and how they affect performance and routing.",
    "image": "https://picsum.photos/seed/4603/800/600",
    "author": {
      "name": "Alexander Ramirez",
      "image": "/images/blog/author-01.png",
      "designation": "UI/UX Designer"
    },
    "tags": [
      "Next.js",
      "React"
    ],
    "publishDate": "2024"
  },
  {
    "id": 5,
    "title": "Top Tools for Web Developers in 2025",
    "paragraph": "A curated list of essential tools every web developer should have in their toolkit this year.",
    "image": "https://picsum.photos/seed/7591/800/600",
    "author": {
      "name": "Brianna Wood",
      "image": "/images/blog/author-02.png",
      "designation": "UI/UX Designer"
    },
    "tags": [
      "Tools",
      "Productivity"
    ],
    "publishDate": "2024"
  },
  {
    "id": 6,
    "title": "Demystifying Docker for Web Projects",
    "paragraph": "Understand how to containerize your web apps with Docker for easier deployment and collaboration.",
    "image": "https://picsum.photos/seed/1795/800/600",
    "author": {
      "name": "Tina Harris",
      "image": "/images/blog/author-03.png",
      "designation": "Frontend Developer"
    },
    "tags": [
      "DevOps",
      "Docker"
    ],
    "publishDate": "2024"
  },
  {
    "id": 7,
    "title": "Improving UX with Microinteractions",
    "paragraph": "Microinteractions create delightful user experiences\u2014learn how to implement them effectively.",
    "image": "https://picsum.photos/seed/8911/800/600",
    "author": {
      "name": "John Williams PhD",
      "image": "/images/blog/author-01.png",
      "designation": "Full Stack Engineer"
    },
    "tags": [
      "UX",
      "Animation"
    ],
    "publishDate": "2024"
  },
  {
    "id": 8,
    "title": "The Rise of Headless CMS: Why It Matters",
    "paragraph": "Explore the benefits of going headless with your CMS and how it enables omnichannel content delivery.",
    "image": "https://picsum.photos/seed/1396/800/600",
    "author": {
      "name": "Taylor Rowland",
      "image": "/images/blog/author-02.png",
      "designation": "UI/UX Designer"
    },
    "tags": [
      "CMS",
      "Architecture"
    ],
    "publishDate": "2024"
  },
  {
    "id": 9,
    "title": "Building Realtime Apps with Firebase",
    "paragraph": "Get started building real-time applications like chat apps or live dashboards using Firebase.",
    "image": "https://picsum.photos/seed/4726/800/600",
    "author": {
      "name": "Robert Pitts",
      "image": "/images/blog/author-03.png",
      "designation": "Full Stack Engineer"
    },
    "tags": [
      "Realtime",
      "Firebase"
    ],
    "publishDate": "2023"
  },
  {
    "id": 10,
    "title": "CSS Subgrid: What You Need to Know",
    "paragraph": "Subgrid is the missing piece in CSS layout\u2014find out how it works and when to use it.",
    "image": "https://picsum.photos/seed/8065/800/600",
    "author": {
      "name": "Caleb Edwards",
      "image": "/images/blog/author-01.png",
      "designation": "Frontend Developer"
    },
    "tags": [
      "CSS",
      "Layout"
    ],
    "publishDate": "2023"
  },
  {
    "id": 11,
    "title": "Optimizing Web Fonts for Performance",
    "paragraph": "Fonts can make or break your performance score. Here's how to load them right.",
    "image": "https://picsum.photos/seed/4370/800/600",
    "author": {
      "name": "Amanda Santiago",
      "image": "/images/blog/author-02.png",
      "designation": "Frontend Developer"
    },
    "tags": [
      "Performance",
      "Fonts"
    ],
    "publishDate": "2023"
  },
  {
    "id": 12,
    "title": "Image Optimization Best Practices",
    "paragraph": "Reduce load times and increase UX by mastering modern image formats and loading techniques.",
    "image": "https://picsum.photos/seed/7408/800/600",
    "author": {
      "name": "Matthew Mclean",
      "image": "/images/blog/author-03.png",
      "designation": "Frontend Developer"
    },
    "tags": [
      "Media",
      "Performance"
    ],
    "publishDate": "2023"
  },
  {
    "id": 13,
    "title": "How to Implement Infinite Scrolling",
    "paragraph": "Learn how to implement smooth, performant infinite scrolling on your website or blog.",
    "image": "https://picsum.photos/seed/5710/800/600",
    "author": {
      "name": "Jeffrey Summers",
      "image": "/images/blog/author-01.png",
      "designation": "Frontend Developer"
    },
    "tags": [
      "JavaScript",
      "UX"
    ],
    "publishDate": "2023"
  },
  {
    "id": 14,
    "title": "Web Animations API vs CSS Animations",
    "paragraph": "Compare Web Animations API and CSS keyframes to choose the best animation technique for your project.",
    "image": "https://picsum.photos/seed/5578/800/600",
    "author": {
      "name": "Robert Byrd",
      "image": "/images/blog/author-02.png",
      "designation": "Frontend Developer"
    },
    "tags": [
      "Animation",
      "JS"
    ],
    "publishDate": "2022"
  },
  {
    "id": 15,
    "title": "Server Components in React: Explained",
    "paragraph": "Understand how server components work in React and what they mean for SSR and hydration.",
    "image": "https://picsum.photos/seed/5015/800/600",
    "author": {
      "name": "Alexander King",
      "image": "/images/blog/author-03.png",
      "designation": "Frontend Developer"
    },
    "tags": [
      "React",
      "Performance"
    ],
    "publishDate": "2022"
  },
  {
    "id": 16,
    "title": "State Management in 2025: What's New?",
    "paragraph": "From Redux Toolkit to Recoil and Zustand, here\u2019s what\u2019s trending in state management.",
    "image": "https://picsum.photos/seed/2475/800/600",
    "author": {
      "name": "Kyle Mooney",
      "image": "/images/blog/author-01.png",
      "designation": "Tech Writer"
    },
    "tags": [
      "React",
      "State"
    ],
    "publishDate": "2022"
  },
  {
    "id": 17,
    "title": "Deploying to Vercel: Step-by-Step Guide",
    "paragraph": "Learn how to deploy your modern web app to Vercel with CI/CD pipelines.",
    "image": "https://picsum.photos/seed/9079/800/600",
    "author": {
      "name": "Stephanie Jones",
      "image": "/images/blog/author-02.png",
      "designation": "Full Stack Engineer"
    },
    "tags": [
      "Deployment",
      "Vercel"
    ],
    "publishDate": "2022"
  },
  {
    "id": 18,
    "title": "Essential VS Code Extensions for Web Devs",
    "paragraph": "Boost your productivity with these must-have extensions for web development in VS Code.",
    "image": "https://picsum.photos/seed/1865/800/600",
    "author": {
      "name": "James Hodge",
      "image": "/images/blog/author-03.png",
      "designation": "UI/UX Designer"
    },
    "tags": [
      "Tools",
      "IDE"
    ],
    "publishDate": "2022"
  },
  {
    "id": 19,
    "title": "The Role of Design Systems in Scaling",
    "paragraph": "Design systems provide consistency and speed\u2014learn how to build and maintain them.",
    "image": "https://picsum.photos/seed/3722/800/600",
    "author": {
      "name": "Elizabeth Simpson",
      "image": "/images/blog/author-01.png",
      "designation": "Tech Writer"
    },
    "tags": [
      "Design",
      "System"
    ],
    "publishDate": "2022"
  },
  {
    "id": 20,
    "title": "Exploring Web3 with JavaScript",
    "paragraph": "Get started with Ethereum, smart contracts, and decentralized apps using web technologies.",
    "image": "https://picsum.photos/seed/2217/800/600",
    "author": {
      "name": "Dana Scott",
      "image": "/images/blog/author-02.png",
      "designation": "Tech Writer"
    },
    "tags": [
      "Web3",
      "JavaScript"
    ],
    "publishDate": "2022"
  },
  {
    "id": 21,
    "title": "Accessibility Testing with Axe and Lighthouse",
    "paragraph": "Ensure your website is accessible by using automated and manual testing tools.",
    "image": "https://picsum.photos/seed/5673/800/600",
    "author": {
      "name": "Jeremy Brown",
      "image": "/images/blog/author-03.png",
      "designation": "Full Stack Engineer"
    },
    "tags": [
      "Accessibility",
      "Testing"
    ],
    "publishDate": "2021"
  },
  {
    "id": 22,
    "title": "Understanding HTTP/3 for Web Developers",
    "paragraph": "HTTP/3 is here to stay\u2014see what changes it brings and how it improves latency.",
    "image": "https://picsum.photos/seed/3509/800/600",
    "author": {
      "name": "Todd Romero",
      "image": "/images/blog/author-01.png",
      "designation": "UI/UX Designer"
    },
    "tags": [
      "Networking",
      "HTTP"
    ],
    "publishDate": "2021"
  },
  {
    "id": 23,
    "title": "Visual Regression Testing for UI",
    "paragraph": "Catch UI bugs before users do with tools like Percy and Chromatic.",
    "image": "https://picsum.photos/seed/5745/800/600",
    "author": {
      "name": "Jimmy Kirk",
      "image": "/images/blog/author-02.png",
      "designation": "UI/UX Designer"
    },
    "tags": [
      "Testing",
      "UI"
    ],
    "publishDate": "2021"
  },
  {
    "id": 24,
    "title": "Fonts in 2025: Variable, Custom, and Performance",
    "paragraph": "Stay on top of modern font practices for branding and speed.",
    "image": "https://picsum.photos/seed/5180/800/600",
    "author": {
      "name": "Lynn Black",
      "image": "/images/blog/author-03.png",
      "designation": "UI/UX Designer"
    },
    "tags": [
      "Fonts",
      "Design"
    ],
    "publishDate": "2021"
  },
  {
    "id": 25,
    "title": "The Evolution of Web Forms",
    "paragraph": "From simple inputs to complex form validation, here\u2019s how web forms evolved and improved.",
    "image": "https://picsum.photos/seed/4324/800/600",
    "author": {
      "name": "Lisa Dixon",
      "image": "/images/blog/author-01.png",
      "designation": "Frontend Developer"
    },
    "tags": [
      "Forms",
      "UX"
    ],
    "publishDate": "2021"
  },
  {
    "id": 26,
    "title": "Jamstack in 2025: Still Relevant?",
    "paragraph": "Examine how the Jamstack approach continues to shape modern frontend development.",
    "image": "https://picsum.photos/seed/9992/800/600",
    "author": {
      "name": "Margaret Ferguson",
      "image": "/images/blog/author-02.png",
      "designation": "Frontend Developer"
    },
    "tags": [
      "Jamstack",
      "Architecture"
    ],
    "publishDate": "2021"
  },
  {
    "id": 27,
    "title": "From jQuery to Vanilla JS: Making the Switch",
    "paragraph": "If you're still on jQuery, here's how to modernize your stack.",
    "image": "https://picsum.photos/seed/2153/800/600",
    "author": {
      "name": "Mrs. Rebecca Williamson",
      "image": "/images/blog/author-03.png",
      "designation": "Frontend Developer"
    },
    "tags": [
      "JavaScript",
      "Legacy"
    ],
    "publishDate": "2021"
  },
  {
    "id": 28,
    "title": "API Rate Limiting Explained",
    "paragraph": "What is rate limiting, and how do you implement it on your backend securely?",
    "image": "https://picsum.photos/seed/9792/800/600",
    "author": {
      "name": "Kenneth Turner",
      "image": "/images/blog/author-01.png",
      "designation": "Tech Writer"
    },
    "tags": [
      "API",
      "Security"
    ],
    "publishDate": "2020"
  },
  {
    "id": 29,
    "title": "Understanding Webhooks and When to Use Them",
    "paragraph": "Webhooks enable real-time communication\u2014here\u2019s how to use them right.",
    "image": "https://picsum.photos/seed/8900/800/600",
    "author": {
      "name": "Kurt Davis",
      "image": "/images/blog/author-02.png",
      "designation": "Tech Writer"
    },
    "tags": [
      "API",
      "Realtime"
    ],
    "publishDate": "2020"
  },
  {
    "id": 30,
    "title": "How to Audit Your Website with Chrome DevTools",
    "paragraph": "Step-by-step guide on using DevTools for performance, accessibility and SEO audits.",
    "image": "https://picsum.photos/seed/5538/800/600",
    "author": {
      "name": "Roger Smith",
      "image": "/images/blog/author-03.png",
      "designation": "Tech Writer"
    },
    "tags": [
      "Performance",
      "Tools"
    ],
    "publishDate": "2020"
  }
];

export default blogData;
