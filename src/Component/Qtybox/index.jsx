import React from "react";
export default function Qtybox() {
  return (
    <div className="qtybox">
      <input
        type="number"
        placeholder="qty"
        className="w-full h-[45px] text-[15px]  p-2 focus:outline-none !border border-[rgba(0,0,0,0.1)]"
      />
    </div>
  );
}
