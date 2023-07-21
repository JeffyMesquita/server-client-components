"use client";

import { DialogContext } from "@/contexts/DialogContext/DialogContext";
import { useContext } from "react";

export function Dialog() {
  const { open, toggle } = useContext(DialogContext);

  return (
    <>
      {open && <div className="w-10 h-10 bg-red-500">Dialog</div>}
      <button onClick={toggle}></button>
    </>
  );
}
