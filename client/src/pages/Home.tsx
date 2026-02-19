import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import HowWeWork from '@/components/HowWeWork';
import About from '@/components/About';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import SchemaMarkup from '@/components/SchemaMarkup';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <SchemaMarkup />
      <Header />
      <main className="flex-1">
        <Hero backgroundImage="https://private-us-east-1.manuscdn.com/sessionFile/h3puXT1sIh6653Pf7CWQaM/sandbox/UOtXwaEuwUJpw5FmdkHK1r-img-1_1771314173000_na1fn_aGVyby1pbGx1c3RyYXRpb24.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvaDNwdVhUMXNJaDY2NTNQZjdDV1FhTS9zYW5kYm94L1VPdFh3YUV1d1VKcHc1Rm1ka0hLMXItaW1nLTFfMTc3MTMxNDE3MzAwMF9uYTFmbl9hR1Z5YnkxcGJHeDFjM1J5WVhScGIyNC5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=PIKNCaUBfE4QDv8RXYKnbRLeBpp4TFVvgRWD2Ce6pO8iGUSWDpK7kcTf6KKsPjWI6Zm1c8~UX0ncsxp2Ni67z-DnnXGyIfy--f6NeAG-Ioy~WKypcJDm~Jpld80UmPMVJZY00du0p7ewlTZFMzQ4jCvUUPH7V77ip8f3wwaLJShJaplvmT7YSR~yqh-R3OpP-ANvTdjOPUoWaj6IXGvIc-owK2mxeqVkkiWSnu~8vqy0GEDi0zwidti4QtejIWehJKThFUmouj6cQauSMyHILJvj3OjFFuxeo2Gbh4TgEg4TIij6TKuuvkt9U-UGoMVL1bZs1JTYS44clA-cPm5mEg__" />
        <Services />
        <HowWeWork />
        <About />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
