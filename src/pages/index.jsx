import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignIn } from "./SignIn";

export function Pages() {
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
}