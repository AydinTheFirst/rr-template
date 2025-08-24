import {
  Button,
  Card,
  CardBody,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

import { ThemeSwitcher } from "~/components/theme-switcher";

export default function About() {
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
            <Link color="foreground" href="/">
              Home
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

      <div className="container mx-auto px-6 py-20">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              About This Template
            </h1>
            <p className="text-xl text-default-500 max-w-2xl mx-auto">
              A modern, production-ready React template built with the latest
              technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardBody className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <Icon
                    className="text-3xl text-primary"
                    icon="lucide:layers"
                  />
                  <h2 className="text-2xl font-semibold">Tech Stack</h2>
                </div>
                <ul className="space-y-2 text-default-600">
                  <li>• React Router v7</li>
                  <li>• TypeScript</li>
                  <li>• HeroUI Components</li>
                  <li>• TailwindCSS v4</li>
                  <li>• Framer Motion</li>
                  <li>• Vite Build Tool</li>
                </ul>
              </CardBody>
            </Card>

            <Card>
              <CardBody className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <Icon
                    className="text-3xl text-primary"
                    icon="lucide:target"
                  />
                  <h2 className="text-2xl font-semibold">Features</h2>
                </div>
                <ul className="space-y-2 text-default-600">
                  <li>• Server-side Rendering</li>
                  <li>• File-based Routing</li>
                  <li>• Dark/Light Mode</li>
                  <li>• Responsive Design</li>
                  <li>• Smooth Animations</li>
                  <li>• TypeScript Support</li>
                </ul>
              </CardBody>
            </Card>
          </div>

          <Card className="mb-8">
            <CardBody className="p-8 text-center">
              <Icon
                className="text-5xl text-primary mx-auto mb-4"
                icon="lucide:heart"
              />
              <h2 className="text-2xl font-semibold mb-4">Built with Care</h2>
              <p className="text-default-600 max-w-2xl mx-auto mb-6">
                This template was carefully crafted to provide the best
                developer experience while maintaining high performance and
                modern design patterns.
              </p>
              <Button
                as="a"
                className="font-semibold"
                color="primary"
                href="/"
                size="lg"
                startContent={<Icon icon="lucide:arrow-left" />}
              >
                Back to Home
              </Button>
            </CardBody>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

export function meta() {
  return [
    { title: "About - WebTemplate" },
    {
      content: "Learn more about this modern React template",
      name: "description",
    },
  ];
}
