"use client";
import { useState, useEffect } from "react";

export default function ScreenWidthWarning() {

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 relative">
      
        <div className="absolute top-0 left-0 w-full h-full bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-md">
            <h2 className="text-2xl font-bold text-red-600 mb-3">
              ⚠️ ايكرون صغيرة
            </h2>
            <p className="text-gray-700">
              السيت هاذا مايخدمش على الايكرون اللي اصغر من{" "}
              <span className="font-semibold text-red-500">1250 بكسل </span>{" . "}
              ماللخر السيت هاذا ما يلزموش يتحل كان على البي سي
            </p>
          </div>
        </div>

    </div>
  );
}
