import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ServicesSection from "@/components/ServicesSection";

export default function ServicesPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Header/>
      <ServicesSection />
      <Footer/>
    </main>
  );
}
