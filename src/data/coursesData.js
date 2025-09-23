import AnimationIcon from "../components/icons/AnimationIcon";
import BusinessIcon from "../components/icons/BusinessIcon";
import CryptoIcon from "../components/icons/CryptoIcon";
import DesignIcon from "../components/icons/DesignIcon";
import PhotographyIcon from "../components/icons/PhotographyIcon";

const coursesData = [
  {
    id: 1,
    title: "Animation",
    description:
      "Learn the latest animation techniques to create stunning motion design and captivate your audience.",
    icon: <AnimationIcon />,
  },
  {
    id: 2,
    title: "Design",
    description:
      "Create beautiful, usable interfaces to help shape the future of how the web looks.",
    icon: <DesignIcon />,
  },
  {
    id: 3,
    title: "Photography",
    description:
      "Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.",
    icon: <PhotographyIcon />,
  },
  {
    id: 4,
    title: "Crypto",
    description:
      "All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course.",
    icon: <CryptoIcon />,
  },
  {
    id: 5,
    title: "Business",
    description:
      "A step-by-step playbook to help you start, scale, and sustain your business without outside investment.",
    icon: <BusinessIcon />,
  },
];

export default coursesData;
