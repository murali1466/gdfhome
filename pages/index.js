import Footer from "@/components/footer";
import HeroSection from "@/components/herosection";
import RegisterNow from "@/components/registernow";
import Resources from "@/components/resources";
import WorkingGroups from "@/components/working groups";

export default function App() {
  return (
    <>
      <RegisterNow />
      <HeroSection />
      <Resources />
      <WorkingGroups />
      <Footer />
    </>
  );
}
