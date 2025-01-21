"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { IconType } from "react-icons/lib";
import qs from "qs";

interface FilterItemProps {
    label: string,
    Icon: IconType,
    value: string,
}

export const FilterItem = ({ label, value, Icon }: FilterItemProps) => {
    return (
        <button className={`py-2 px-3 text-sm border border-slate-200 rounded-full flex items-center gap-x-1 hover:border-sky-700 transition`}>
            <Icon size={20} />
            <div className="truncate">
                {label}
            </div>
            {/* Change style if active */}
        </button>
    )
}