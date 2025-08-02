
import Filter from "@/components/shared/TabFIlters";
import { LatestTabs } from "@/data/tabs";
import Header from "@/components/shared/Header";
import LatestCard from "@/components/latest/LatestCards";

export default function Latest() {
  return (
    <div className="min-h-screen w-full bg-background">
      <div className="flex-1 flex flex-col">
        <Header title="Latest" />
        <main className="p-3 sm:p-4 lg:p-6">
          <div className="max-w-4xl mx-auto space-y-6">
          <Filter tabs={LatestTabs}/>
            <div className="space-y-2">
              <h1 className="text-xl lg:text-3xl font-bold text-foreground mb-2">
                Latest Updates
              </h1>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-2xl">
                Stay updated with the newest developments in the React ecosystem and modern web development
              </p>
            </div>
            <LatestCard />
          </div>
        </main>
      </div>
    </div>
  );
};
