import React from "react";

export function Heading({label}) {
    return <div className="font-bold text-4xl pt-6 flex justify-center items-center text-white">
      {label}
    </div>
}