"use client";

import React from "react";
import { UserButton } from "@clerk/nextjs";

function App() {
    return (
      <div className="flex items-center justify-center group w-full p-3 rounded-lg hover:bg-gray-50 transition-all duration-200">
        <UserButton />
      </div>
  );
}

export default App;