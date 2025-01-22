"use client";

import { FaLaptopCode } from "react-icons/fa6";
import { SiTaichigraphics } from "react-icons/si";
import { HiDevicePhoneMobile } from "react-icons/hi2";
import { MdOutlineTranslate } from "react-icons/md";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { IconType } from "react-icons/lib";
import { FilterItem } from "./FilterItem";

const filters = [
    {name: "Programming"},
    {name: "Graphics & Design"},
    {name: "Digital Marketing"},
    {name: "Writing & Translation"},
    {name: "Video Editing & Animation"}
]

const iconMap: Record<typeof filters[number]["name"], IconType> = {
    "Programming": FaLaptopCode,
    "Graphics & Design": SiTaichigraphics,
    "Digital Marketing": HiDevicePhoneMobile,
    "Writing & Translation": MdOutlineTranslate,
    "Video Editing & Animation": MdOutlineSlowMotionVideo,
}

export const Filters = () => {
    return (
        <div className="flex items-center gap-x-2 overflow-x-auto pb-2">
            {filters.map((filter, idx) => (
                <FilterItem
                    key={idx}
                    label={filter.name}
                    Icon={iconMap[filter.name]}
                    value={filter.name}
                />
            ))}
        </div>
    )
}