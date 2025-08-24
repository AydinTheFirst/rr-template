import {
  Button,
  Card,
  CardBody,
  Chip,
  Divider,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

import { ThemeSwitcher } from "~/components/theme-switcher";

export function meta() {
  return [
    { title: "Website Template - Modern React App" },
    {
      content:
        "Modern, responsive website template built with React Router, HeroUI and TailwindCSS",
      name: "description",
    },
  ];
}

const features = [
  {
    description:
      "Built with modern technologies for lightning-fast loading and smooth interactions.",
    icon: "lucide:rocket",
    title: "Fast Performance",
  },
  {
    description:
      "Clean, modern interface with dark/light mode support and smooth animations.",
    icon: "lucide:palette",
    title: "Beautiful Design",
  },
  {
    description:
      "Perfectly optimized for all devices from mobile phones to large desktop screens.",
    icon: "lucide:smartphone",
    title: "Fully Responsive",
  },
  {
    description:
      "TypeScript, modern React patterns, and clean code architecture for easy customization.",
    icon: "lucide:code",
    title: "Developer Friendly",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
    },
    y: 0,
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navbar isBordered>
        <NavbarBrand>
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Icon className="text-2xl text-primary" icon="lucide:zap" />
            <p className="font-bold text-xl text-inherit">WebTemplate</p>
          </motion.div>
        </NavbarBrand>
        <NavbarContent justify="end">
          <NavbarItem>
            <Link color="foreground" href="/about">
              About
            </Link>
          </NavbarItem>
          <NavbarItem>
            <ThemeSwitcher />
          </NavbarItem>
          <NavbarItem>
            <Button
              as={Link}
              color="primary"
              href="#contact"
              startContent={<Icon icon="lucide:mail" />}
              variant="flat"
            >
              Contact
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      {/* Hero Section */}
      <motion.section
        animate="visible"
        className="container mx-auto px-6 py-20 text-center"
        initial="hidden"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <Chip
            className="mb-6"
            color="primary"
            startContent={<Icon icon="lucide:sparkles" />}
            variant="flat"
          >
            Modern Web Template
          </Chip>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6"
          variants={itemVariants}
        >
          Build Amazing
          <br />
          Websites Fast
        </motion.h1>

        <motion.p
          className="text-xl text-default-500 max-w-2xl mx-auto mb-8"
          variants={itemVariants}
        >
          A modern, production-ready template built with React Router, HeroUI,
          and TailwindCSS. Perfect starting point for your next project.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={itemVariants}
        >
          <Button
            className="font-semibold"
            color="primary"
            size="lg"
            startContent={<Icon icon="lucide:play" />}
          >
            Get Started
          </Button>
          <Button
            className="font-semibold"
            size="lg"
            startContent={<Icon icon="lucide:github" />}
            variant="bordered"
          >
            View Source
          </Button>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        className="container mx-auto px-6 py-20"
        initial="hidden"
        variants={containerVariants}
        viewport={{ once: true }}
        whileInView="visible"
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-4xl font-bold mb-4">Why Choose This Template?</h2>
          <p className="text-xl text-default-500 max-w-2xl mx-auto">
            Everything you need to build modern, fast, and beautiful websites
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full hover:scale-105 transition-transform duration-300">
                <CardBody className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon
                      className="text-2xl text-primary"
                      icon={feature.icon}
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-default-500">{feature.description}</p>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="bg-gradient-to-r from-primary/5 to-secondary/5 py-20"
        initial="hidden"
        variants={containerVariants}
        viewport={{ once: true }}
        whileInView="visible"
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="text-4xl font-bold mb-6"
            variants={itemVariants}
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p
            className="text-xl text-default-500 mb-8 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Start building your next amazing project with this modern template
          </motion.p>
          <motion.div variants={itemVariants}>
            <Button
              className="font-semibold"
              color="primary"
              size="lg"
              startContent={<Icon icon="lucide:download" />}
            >
              Download Template
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Icon className="text-xl text-primary" icon="lucide:zap" />
              <span className="font-semibold">WebTemplate</span>
            </div>
            <div className="flex items-center gap-6">
              <Link color="foreground" href="#">
                <Icon className="text-xl" icon="lucide:github" />
              </Link>
              <Link color="foreground" href="#">
                <Icon className="text-xl" icon="lucide:twitter" />
              </Link>
              <Link color="foreground" href="#">
                <Icon className="text-xl" icon="lucide:linkedin" />
              </Link>
            </div>
          </div>
          <Divider className="my-6" />
          <div className="text-center text-default-500">
            <p>
              &copy; 2025 WebTemplate. Built with ❤️ using React Router & HeroUI
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
