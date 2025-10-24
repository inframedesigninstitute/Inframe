'use client'
import BannerSlider from "./homePageComponents/BannerSlider";
import Facility from "./homePageComponents/Facility";
import BookaSession from "./homePageComponents/BookaSession";
import StudyMaterials from "./homePageComponents/StudyMaterials";
import TopCourses from "./homePageComponents/TopCourses";
import Testimonials from "./homePageComponents/Testimonials";
import AppSection from "./homePageComponents/AppSection";
import TrustedPlatform from "./homePageComponents/TrustedPlatform";
import { useEffect, useState } from "react";
import Loading from "./loading";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (e.g., fetch or images)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 second loader
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loading />;
  return (
    <div className="overflow-hidden w-full">
      <BannerSlider />
      <BookaSession />
      <Facility />
      <TopCourses />
      <AppSection />
      <TrustedPlatform />
      <Testimonials />
      <StudyMaterials />
    </div>
  );
}
