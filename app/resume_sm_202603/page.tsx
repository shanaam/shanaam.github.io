"use client";
import { useEffect } from "react";

export default function ResumePage() {
  useEffect(() => {
    window.location.replace("/docs/SM_resume_short_ds.pdf");
  }, []);
  return null;
}
