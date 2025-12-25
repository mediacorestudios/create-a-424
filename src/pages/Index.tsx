import CreatorHeader from "@/components/sections/CreatorHeader";
import CreatorHero from "@/components/sections/CreatorHero";
import FeaturedDrops from "@/components/sections/FeaturedDrops";
import WhyIRecommend from "@/components/sections/WhyIRecommend";
import SocialProofBar from "@/components/sections/SocialProofBar";
import ShopTheEdit from "@/components/sections/ShopTheEdit";
import MeetJonaca from "@/components/sections/MeetJonaca";
import CollabCTA from "@/components/sections/CollabCTA";
import JoinTheList from "@/components/sections/JoinTheList";
import CreatorFooter from "@/components/sections/CreatorFooter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <main>
        <CreatorHeader />
        <CreatorHero />
        <FeaturedDrops />
        <WhyIRecommend />
        <SocialProofBar />
        <ShopTheEdit />
        <MeetJonaca />
        <CollabCTA />
        <JoinTheList />
        <CreatorFooter />
        {/* Created with Atlas Create */}
        <footer className="py-4 text-center">
          <p className="text-[10px] text-gray-400 tracking-wide">
            created with Atlas Create · claude-opus-4.5 · runware
          </p>
        </footer>
      </main>
      <div className="grain-overlay" />
    </div>
  );
};

export default Index;
