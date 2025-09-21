import { NavLink } from "react-router-dom";
import { Users, Package, LogOut } from "lucide-react";

const links = [
  { to: "/orders", label: "Заказаы", icon: Package },
  { to: "/users", label: "Пользователи", icon: Users },
];

export const Sidebar = () => {
  return (
    <div className="w-[250px] h-[calc(100vh-130px)] top-[64px] p-5 rounded-xl bg-white flex flex-col justify-between">
      <nav className="flex flex-col gap-2">
        {links.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-md transition-colors ${
                isActive
                  ? "bg-[#344955] text-white"
                  : "bg-[#F5F6F7] text-[#344955] hover:bg-[#8E98A8] hover:text-white"
              }`
            }
          >
            <Icon size={20} />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="flex items-center border border-[#8E98A8] px-2.5 py-2 rounded-md transition-colors hover:bg-[#8E98A8] hover:text-white">
        <button className="w-full rounded-md bg-gray-200">Logout</button>
        <LogOut className="rotate-y-180" />
      </div>
    </div>
  );
};
