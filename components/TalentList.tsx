import { TalentCard } from "./TalentCard";

const talents = [
    {
      id: '1',
      name: 'Winston Smith',
      photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7',
      skills: ['Manufacturing', 'Maintenance'],
      description: 'Dedicated worker with 5 years of manufacturing experience. Specializes in machinery maintenance and quality control.',
      approved: true
    },
    {
      id: '2',
      name: 'Julia Dixon',
      photo: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e',
      skills: ['Agriculture', 'Labor'],
      description: 'Agricultural specialist with expertise in sustainable farming practices and crop management.',
      approved: true
    },
    {
      id: '3',
      name: 'Thomas Anderson',
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      skills: ['Construction', 'Maintenance'],
      description: 'Skilled construction worker with experience in building maintenance and structural repairs.',
      approved: true
    }
  ];

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