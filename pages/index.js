import FeaturedBrands from "../app/components/Home/FeaturedBrands";
import HomeCategory from "../app/components/Home/HomeCategory";
import HomeHero from "../app/components/Home/HomeHero";
import HomePoster from "../app/components/Home/HomePoster";
import TodaysDeals from "../app/components/Home/TodaysDeals";
import Products from "./products";


export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeCategory />
      <FeaturedBrands />
      <TodaysDeals />
      <HomePoster />
    </>
  )
}
