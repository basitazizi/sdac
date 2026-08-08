import {
  BookOpen,
  BriefcaseBusiness,
  CalendarDays,
  GraduationCap,
  HandHeart,
  HeartHandshake,
  Home,
  Languages,
  Landmark,
  Mail,
  MapPin,
  Newspaper,
  Phone,
  ShieldCheck,
  Trophy,
  Users,
} from "lucide-react";

export const site = {
  name: "San Diego Afghan Connections and Cultural Center",
  shortName: "SDAC",
  displayName: "San Diego Afghan Cultural Center",
  email: "info@sdaccenter.org",
  phone: "(619) 205-2912",
  address: "140 W Park Ave Unit 219, El Cajon, CA 92020",
  mapUrl: "https://maps.app.goo.gl/m38Cemnd7hNQcLcc7",
  instagram: "https://www.instagram.com/sdac_culturalcenter",
  year: "2026",
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Get Involved", href: "/get-involved" },
];

export const values = [
  {
    title: "Education",
    text: "Learning support that helps youth, women, children, and families move forward.",
    icon: GraduationCap,
  },
  {
    title: "Community",
    text: "A trusted gathering place for connection, guidance, and local support.",
    icon: Users,
  },
  {
    title: "Culture",
    text: "Programs and events that preserve Afghan heritage across generations.",
    icon: Landmark,
  },
];

export const services = [
  {
    title: "Youth Mentorship",
    text: "Mentoring, leadership, personal development, college guidance, and career support.",
    icon: Users,
    category: "Youth & Education",
    image: "/sdac-youth-workshop.png",
  },
  {
    title: "English Classes",
    text: "English-learning opportunities for women, children, and families.",
    icon: Languages,
    category: "English & Learning",
    image: "/sdac-english-class.png",
  },
  {
    title: "Family Support",
    text: "Helping families connect with food, financial assistance, and community resources.",
    icon: HandHeart,
    category: "Family & Community Support",
    image: "/sdac-children-class.png",
  },
  {
    title: "Education Navigation",
    text: "Support with schools, college, educational programs, and the U.S. education system.",
    icon: BookOpen,
    category: "Youth & Education",
    image: "/sdac-community-presentation.png",
    imagePosition: "46% 32%",
  },
  {
    title: "Immigration Navigation",
    text: "Connecting community members with information and qualified immigration resources.",
    icon: ShieldCheck,
    category: "Immigration & Navigation",
    image: "/sdac-immigration-navigation.png",
  },
  {
    title: "Sports & Recreation",
    text: "Soccer, cricket, and activities that bring youth and families together.",
    icon: Trophy,
    category: "Sports & Youth Activities",
    image: "/sdac-cricket-team.png",
  },
];

export const serviceCategories = [
  {
    title: "Youth & Education",
    icon: GraduationCap,
    image: "/sdac-community-presentation.png",
    imagePosition: "46% 32%",
    items: [
      "Youth mentorship",
      "School navigation",
      "College guidance",
      "Career guidance",
      "Personal development",
      "Leadership development",
      "Tutoring or academic assistance when available",
    ],
  },
  {
    title: "English & Learning",
    icon: Languages,
    image: "/sdac-english-class.png",
    items: [
      "English classes for women",
      "English classes for children",
      "Educational workshops",
      "Digital literacy support when available",
    ],
  },
  {
    title: "Family & Community Support",
    icon: Home,
    image: "/sdac-children-class.png",
    items: [
      "Food assistance navigation",
      "Financial and resource assistance navigation",
      "Family resource guidance",
      "Referrals to partner organizations",
      "Community support",
    ],
  },
  {
    title: "Immigration & Navigation",
    icon: ShieldCheck,
    image: "/sdac-immigration-navigation.png",
    items: [
      "General immigration resource navigation",
      "Connections to qualified organizations",
      "Help understanding available services and resources",
      "Referral support for legal providers when needed",
    ],
  },
  {
    title: "Sports & Youth Activities",
    icon: Trophy,
    image: "/sdac-cricket-team.png",
    items: [
      "Soccer team",
      "Cricket team",
      "Recreational programs",
      "Youth activities",
    ],
  },
  {
    title: "Culture & Community",
    icon: CalendarDays,
    image: "/sdac-youth-class.png",
    items: [
      "Cultural events",
      "Afghan celebrations",
      "Community gatherings",
      "Cultural education",
      "Programs preserving Afghan heritage",
    ],
  },
];

export const programs = [
  { title: "Youth Mentorship Program", image: "/sdac-youth-workshop.png" },
  { title: "Women's English Classes", image: "/sdac-english-class.png" },
  { title: "Children's English Classes", image: "/sdac-children-class.png" },
  { title: "Soccer Team", image: "/sdac-cricket-team.png" },
  { title: "Cricket Team", image: "/sdac-cricket-team.png" },
  { title: "Cultural Events", image: "/sdac-community-presentation.png" },
  { title: "Community Workshops", image: "/sdac-youth-class.png" },
];

export const newsPosts = [
  {
    title: "Registration Opens for Women's English Classes",
    category: "Program Updates",
    date: "2026",
    text: "SDAC is preparing new learning opportunities for women and families seeking English support.",
    image: "/sdac-english-class.png",
  },
  {
    title: "Youth Mentorship Program Continues to Grow",
    category: "Youth Stories",
    date: "2026",
    text: "Mentors help Afghan youth build confidence, leadership skills, and education goals.",
    image: "/sdac-youth-workshop.png",
  },
  {
    title: "Community Partnerships Expand Local Support",
    category: "Partnerships",
    date: "2026",
    text: "SDAC works with local organizations to connect families with practical resources.",
    image: "/sdac-community-presentation.png",
  },
];

export const contactMethods = [
  { label: "Phone", value: site.phone, href: "tel:+16192052912", icon: Phone },
  { label: "Email", value: site.email, href: `mailto:${site.email}`, icon: Mail },
  { label: "Office", value: site.address, href: site.mapUrl, icon: MapPin },
];

export const involvementOptions = [
  {
    title: "Volunteer",
    text: "Support classes, youth activities, events, translation, mentoring, or community outreach.",
    icon: HeartHandshake,
  },
  {
    title: "Partner",
    text: "Collaborate with SDAC to connect Afghan families with resources and opportunities.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Share a Story",
    text: "Help highlight youth, families, volunteers, and community progress through the SDAC blog.",
    icon: Newspaper,
  },
];
