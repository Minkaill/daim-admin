import { Sidebar } from "../Sidebar";
import { RenderPages } from "../RenderPages";

export const Layout = () => {
  return (
    <div className="w-full flex items-start gap-4">
      <Sidebar />
      <RenderPages />
    </div>
  );
};
