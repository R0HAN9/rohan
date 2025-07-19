"use client";

import { useState, useEffect, Fragment } from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import {
  FaGithub,
  FaLinkedin,
  FaBehance,
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaJsSquare,
  FaRegCopy,
  FaCheckCircle,
} from "react-icons/fa";
import {
  SiPostgresql,
  SiSpringboot,
  SiNextdotjs,
  SiFigma,
  SiLeetcode,
  SiDocker,
} from "react-icons/si";

const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const roles = [
    "UI/UX Designer",
    "Product Designer",
    "Web Designer",
    "Backend Developer",
    "Fitness Enthusiast",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  });

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("sde.rohangupta@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <main className={`${inter.className} min-h-screen bg-[#0a0b0f] text-white`}>
      {/* Invisible SEO h1 */}
      <h1 className="sr-only">
        Rohan Gupta – Full Stack Developer | UI/UX Designer | Spring Boot |
        Next.js
      </h1>

      {/* Top Right Social Icons */}
      <div className="w-full flex justify-end p-4 gap-4 text-gray-400 text-xl">
        <a href="#">
          <FaTwitter className="hover:text-white transition" />
        </a>
        <a href="#">
          <FaInstagram className="hover:text-white transition" />
        </a>
        <a href="#">
          <FaFacebook className="hover:text-white transition" />
        </a>
      </div>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-16 px-8 py-20 md:py-28">
        {/* Profile Image */}
        <div className="w-64 h-64 rounded-full overflow-hidden shadow-[0_0_60px_#7f5af0] mt-4">
          <Image
            src="/Profile.webp"
            alt="Rohan Profile"
            width={256}
            height={256}
            className="rounded-full object-cover w-full h-full"
          />
        </div>

        {/* Hero Content */}
        <div className="max-w-xl text-center md:text-left space-y-6">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
            Rohan
          </h1>
          <p className="text-lg leading-relaxed text-center md:text-left px-2 md:px-0 space-y-2">
            <span className="block font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 text-xl">
              Code Meets Creativity!
            </span>
            <span className="block text-white">
              I Build Scalable Backend Systems and Design Intuitive User
              Experiences from Microservices to Mockups.
            </span>
            <span className="block text-purple-300 font-semibold">
              A Problem solver by logic, A Designer by Instinct.
            </span>
          </p>

          <div className="text-xl font-semibold text-purple-300">
            I am a{" "}
            <span className="text-cyan-400 animate-pulse">
              {roles[roleIndex]}
            </span>
          </div>

          {/* Bottom Social Links */}
          <div className="flex gap-5 justify-center md:justify-start mt-4 text-2xl text-gray-300">
            <a
              href="https://leetcode.com/u/R0HAN_18/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <SiLeetcode />
            </a>
            <a
              href="https://github.com/R0HAN9"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/rohan-gupta-668458219/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.behance.net/rhn27"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <FaBehance />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a
              href="https://github.com/R0HAN9"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold rounded-xl hover:scale-105 transition text-center"
            >
              View My Work
            </a>

            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-3 border border-gray-600 text-white rounded-xl hover:border-purple-400 transition"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-6 md:px-24 py-8 bg-[#0b0c10] text-white">
        <div className="flex flex-wrap justify-center gap-6 text-4xl">
          <SiDocker className="text-blue-300" />
          <SiSpringboot className="text-green-400" />
          <SiPostgresql className="text-blue-400" />
          <FaJsSquare className="text-yellow-300" />
          <SiFigma className="text-pink-500" />
          <SiNextdotjs className="text-white" />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-gray-800 text-center text-gray-500 text-sm">
        &copy; 2024 Rohan — Designed & Built by Me.
      </footer>

      {/* Contact Modal */}
      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => setIsModalOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-[#1a1b1f] p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-bold leading-6 text-white mb-4"
                  >
                    Let’s Connect
                  </Dialog.Title>

                  <div className="space-y-4 text-gray-300">
                    {/* Email Copy Section */}
                    <div className="flex items-center justify-between bg-gray-800 px-4 py-2 rounded-lg">
                      <span>sde.rohangupta@gmail.com</span>
                      <button
                        onClick={handleCopy}
                        className="flex items-center gap-2"
                      >
                        {copied ? (
                          <FaCheckCircle className="text-green-400" />
                        ) : (
                          <FaRegCopy className="hover:text-white text-purple-400" />
                        )}
                      </button>
                    </div>

                    {/* Message */}
                    <div className="bg-gray-700 text-sm p-3 rounded-md">
                      Hi there! Feel free to reach out anytime. I’d love to hear
                      from you.
                    </div>
                  </div>

                  {/* Close Button */}
                  <div className="mt-6 text-right">
                    <button
                      type="button"
                      className="text-sm text-purple-400 hover:text-white"
                      onClick={() => setIsModalOpen(false)}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </main>
  );
}
