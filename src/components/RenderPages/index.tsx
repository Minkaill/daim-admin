import { Navigate, Route, Routes } from "react-router-dom";
import { Orders } from "../../pages/orders";
import { Users } from "../../pages/users";

export const RenderPages = () => {
  return (
    <div className="flex-1 bg-white rounded-xl p-5 h-[calc(100vh-130px)]">
      <Routes>
        <Route path="/orders" element={<Orders />} />
        <Route path="/users" element={<Users />} />
        <Route path="*" element={<Navigate to="/orders" />} />
      </Routes>
    </div>
  );
};
