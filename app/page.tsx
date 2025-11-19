import Benefits from "./_components/Benefits";
import ContactForm from "./_components/ContactForm";
import FAQ from "./_components/FAQ";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import InspiringStories from "./_components/InspiringStories";
import PopularCourses from "./_components/PopularCourses";

export default function Home() {
    return (
        <main className="w-full overflow-hidden">
            <Header />
            <Hero />
            <Benefits />
            <PopularCourses />
            <InspiringStories />
            <FAQ />
            <ContactForm />

            <Footer />
        </main>
    );
}
