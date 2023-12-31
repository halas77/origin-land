import Hero from "@/components/Hero";
import Product from "@/components/Product";
import Services from "@/components/Services";
import Tags from "@/components/Tags";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Product />
      <Tags />
    </>
  );
}
