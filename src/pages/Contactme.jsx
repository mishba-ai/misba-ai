import React from "react";

export default function Contactme() {
  return (
    <div>
      <h1 className="font-Kode text-violet-200 text-2xl font-medium "> Work with Me </h1>

      <div className="font-code text-xl font-medium">
        <p className="mt-4">I am open to full-time opportunities</p>
        <div className="flex gap-x-2 mt-2">
          <p>Feel free to reach out to me at:</p>
          <p>
            <a
              href="mailto:mishbabagban@gmail.com"
              className="hover:underline-offset-2 hover:underline text-violet-200 "
            >
              {" "}
              mishbabagban@gmail.com{" "}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
