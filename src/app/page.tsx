import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Hero from "@/components/Hero";

import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-20">
      <Hero />
    </div>
  );
}
