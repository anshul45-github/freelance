"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "./Badge";

interface TalentCardProps {
    name: string,
    imageUrl: string,
    description: string,
    skills: string[],
}

export const TalentCard = ({ name, imageUrl, description, skills }: TalentCardProps) => {
    return (
        <Link href={"#"}>
            <div className="group hover:shadow-sm transition overflow-hidden border rounded-lg p-3 h-full">
                <div className="relative w-full aspect-video rounded-md overflow-hidden">
                    <Image fill className="object-cover" alt={name} src={imageUrl} />
                </div>
                <div className="flex flex-col pt-2">
                    <div className="my-3 flex items-center gap-x-2 text-sm md:text-xs">
                        <div className="flex items-center gap-x-1 text-slate-500">
                            {skills.map((skill) => (
                              <Badge key={skill}>{skill}</Badge>
                            ))}
                        </div>
                    </div>
                    <div className="text-lg md:text-base font-medium group-hover:text-sky-700 transition line-clamp-2">
                        {name}
                    </div>
                    <p className="text-xs text-muted-foreground">
                        {description}
                    </p>
                </div>
            </div>
        </Link>
    )
}