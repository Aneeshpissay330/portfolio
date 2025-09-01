"use client";

import { useState } from "react";
import { Tabs } from "@Aneeshpissay330/components-ui";
import SkillCard from "@/components/SkillCard";
import { skills } from "@/data/skills";

export default function Skills() {
  const [activeTab, setActiveTab] = useState(skills[0].category);

  // Get unique categories from skills array
  const categories = Array.from(new Set(skills.map((s) => s.category)));

  // Build tabs from categories
  const tabs = categories.map((category) => ({
    label: category,
    value: category,
    content: (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {skills
          .filter((skill) => skill.category === category)
          .map((skill, idx) => (
            <SkillCard key={idx} icon={skill.icon} />
          ))}
      </div>
    ),
  }));

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-black">
          Technical Skills
        </h2>
        <Tabs
          tabs={tabs}
          value={activeTab}
          onChange={setActiveTab}
          activeBgColor="#1F2937" // blue-600
          activeTextColor="#fff"
          inactiveTextColor="#1F2937"
          borderColor="#e5e7eb"   // gray-200
          sectionBgColor="#FFFFFF"
        />
      </div>
    </section>
  );
}
