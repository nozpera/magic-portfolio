import { InlineCode } from "@/once-ui/components";
import { display } from "./config";
import HomeSubline from "@/components/HomeSubline";

const person = {
  firstName: "Ryan",
  lastName: "Permana",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Data Enthusiast",
  avatar: "/images/avatar.jpg",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Bahasa"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      Let’s connect! 
      If you’re passionate about data engineering, scientist, and cloud technologies, I’d love to hear your thoughts. 💡
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/nozpera",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/ahmadryanpermana",
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/ryandome_",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:permanaahmadryan@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>DATA ENTHUSIAST</>,
  subline: <HomeSubline />,
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://wa.link/ar12qc",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <div style={{ textAlign: "justify" }}>
        Ahmad Ryan Permana is a passionate data professional with a strong foundation in statistics and expertise spanning data engineering, data science, and data analysis. 
        He focuses on building reliable data infrastructure, mastering modern ETL and ELT processes, and interest in machine learning and data visualization.
      </div>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Empirix Research",
        timeframe: "2025 - Present",
        role: "Data Scientist",
        achievements: [
          <>
            Develop and implement high-precision machine learning models, and apply deep learning and Large Language Models (LLM) to various client business problems.
          </>,
          <>
            Cleaned, processed, and visualized large datasets to generate actionable insights for business teams 
            and clients, reducing data processing time by 30%.
          </>,
          <>
            Designed and conducted A/B testing experiments with researchers and marketing teams to optimize 
            product and marketing strategies.
          </>,
        ],
        images: [],
      },
      {
        company: "Badan Pusat Statistik",
        timeframe: "2022",
        role: "Data Entry Operator",
        achievements: [
          <>
            Collected and analyzed 200+ data points, resulting in improved urban planning insights integrated with 
            the Malang Satu Data website.
          </>,
          <>
            Compiled monographs and visualized urban village strengths to support strategic decision-making.
          </>,
        ],
        images: [],
      },
      {
        company: "Ambis Ikigai",
        timeframe: "2020 - 2021",
        role: "High School Educator Specializing",
        achievements: [
          <>
            Taught Quantitative Science and General Reasoning to high school students preparing for university 
            exams.
          </>,
          <>
            Enhanced students critical thinking and problem-solving skills through tailored learning approaches.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Brawijaya",
        timeframe: "2020 - 2024",
        description: <>Faculty of Mathematics and Natural Sciences, Statistics.</>,
      },
    ],
  },
  certifications: {
    display: true,
    title: "Certifications & Courses",
    list: [
      {
        title: "Data Engineering Zoomcamp",
        issuer: "DataTalksClub",
        description: [
          <>
            Covers setting up infrastructure and workflow automation using tools like Docker, Terraform, GCP, and Airflow/Kestra, along with batch and streaming data ingestion using Apache Spark and Kafka.
          </>,
          <>
            Involves transforming data with dbt, storing it in data warehouses like BigQuery, and creating visualizations and analytics using Metabase or Google Data Studio, while following best practices in data modeling and testing.
          </>,
        ],
        link: "https://link-to-certificate.com/zoomcamp",
      },
      {
        title: "Machine Learning Cohort",
        issuer: "Bangkit Academy Ied by Google, Tokopedia, Gojek, & Traveloka",
        description: [
          <>
            Implemented machine learning algorithms in Python and applied advanced data preprocessing 
            techniques.
          </>,
          <>
            Developed and optimized neural network models using TensorFlow for real-world scenarios.
          </>,
          <>
            Made Final Capstone Project : BreatheAir (Monitoring Air Quality Application based Android & IoT)
          </>,
        ],
        link: "https://www.linkedin.com/in/ahmadryanpermana/overlay/1720660303844/single-media-viewer/?profileId=ACoAADcSStUBrxh5-cKRwF7U1WQLw7RMD9yPbk0",
      },
      {
        title: "TensorFlow Developer Certificate",
        issuer: "TensorFlow",
        description: [
          <>
            Competent in programming with Python for machine learning model implementation.
          </>,
          <>
            Proficient in deep learning techniques, including neural networks and other complex models.
          </>,
          <>
            Validated ability to use TensorFlow to build and implement machine learning models.
          </>,
        ],
        link: "https://www.credential.net/293a4edc-1a0d-43a3-92e9-76e52ea09835#acc.JTQLdo2c",
      },
      {
        title: "Microsoft Office Desktop Application",
        issuer: "Trust Training Partners",
        description: [
          <>
            Acquired advanced skills in Microsoft Office applications, including Excel, Word, and PowerPoint.
          </>,
          <>
            Streamlined document management and data analysis using Excel functions and tools.
          </>,
          <>
            Enhanced presentation design and delivery with PowerPoint.
          </>,
        ],
        link: "https://www.linkedin.com/in/ahmadryanpermana/details/certifications/1721207929218/single-media-viewer/?profileId=ACoAADcSStUBrxh5-cKRwF7U1WQLw7RMD9yPbk0",
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "End-to-End Data Pipeline Development",
        description: <>Able to build a whole data infrastructure.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/technical/1.gif",
            alt: "Project image",
            width: 18,
            height: 9,
          },
          {
            src: "/images/technical/2.PNG",
            alt: "Project image",
            width: 18,
            height: 9,
          },
          {
            src: "/images/technical/4.PNG",
            alt: "Project image",
            width: 18,
            height: 9,
          },
          {
            src: "/images/technical/5.PNG",
            alt: "Project image",
            width: 18,
            height: 9,
          },
        ],
      },
      {
        title: "Machine Learning & Deep Learning",
        description: <>Building machine learning and deep learning models with high accuracy model.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/technical/6.png",
            alt: "Project image",
            width: 18,
            height: 9,
          },
          {
            src: "/images/technical/7.png",
            alt: "Project image",
            width: 18,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Thoughts on Data, Technology, and Everything in between.",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Projects",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My Graphic Design Gallery",
  description: `A photo collection by ${person.name}`,
  
  images: [
    {
      maxWidth: 600,
      aspectRatio: "1 / 1",
      before: "/images/gallery/before-1.png",
      after: "/images/gallery/after-1.png",
      altBefore: "Before Image 1",
      altAfter: "After Image 1",
    },
    {
      maxWidth: 1200,
      before: "/images/gallery/before-2.png",
      after: "/images/gallery/after-2.png",
      altBefore: "Before Image 2",
      altAfter: "After Image 2",
      aspectRatio: "16 / 9",
    },
  ],
};


export { person, social, newsletter, home, about, blog, work, gallery };
