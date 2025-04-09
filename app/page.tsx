'use client';
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";

const MotionDiv = motion.div;

export default function Home() {
  return (
    <main className="min-h-screen bg-white p-6 grid gap-8">
      <MotionDiv
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold">Korean to English Academic Translation</h1>
        <p className="mt-4 text-lg max-w-xl mx-auto">
          Precision. Clarity. Cultural fluency. Built on two decades of experience translating academic articles, books, and university-level materials.
        </p>
      </MotionDiv>

      <section className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold">Academic Articles</h2>
            <p className="mt-2 text-sm text-gray-600">
              Peer-reviewed journal submissions, conference papers, and research articles across humanities and social sciences.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold">Books & Manuscripts</h2>
            <p className="mt-2 text-sm text-gray-600">
              Full-length books, edited volumes, and critical translations for publication or internal use.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold">University Materials</h2>
            <p className="mt-2 text-sm text-gray-600">
              Course syllabi, lecture slides, academic bios, and grant proposals — all rendered in fluent academic English.
            </p>
          </CardContent>
        </Card>
      </section>

      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center"
      >
        <Button className="text-lg px-6 py-3">Contact Me</Button>
        <p className="text-sm text-gray-500 mt-2">Let’s talk about your project — big or small.</p>
      </MotionDiv>
    </main>
  );
}
