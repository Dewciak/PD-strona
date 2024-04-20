import React from "react";
import { Link as RouterLink } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="pt-[150px]">
        <h1 className="text-center font-bold text-3xl py-10">
          404 Nie znaleziono
        </h1>
        <h1 className="text-center">Przykro mi, coś poszło nie tak</h1>
        <p className="text-center">
          Aby wrócić do strony kliknij{" "}
          <RouterLink to="/" className="text-blue-500">
            tutaj
          </RouterLink>
        </p>
      </div>
    </div>
  );
}

export default PageNotFound;
