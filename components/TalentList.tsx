import { talents } from "@/lib/model/talents";
import { TalentCard } from "./TalentCard";

export const TalentList = () => {
    return (
        <div>
            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
                {talents.map((talent, idx) => (
                    <TalentCard key={idx} name={talent.name} imageUrl={talent.photo} description={talent.description} skills={talent.skills} />
                ))}
            </div>
            <div>
                {talents.length === 0 && (
                    <div className="text-center text-sm text-muted-foreground mt-10">
                        No talent found
                    </div>
                )}
            </div>
        </div>
    )
}