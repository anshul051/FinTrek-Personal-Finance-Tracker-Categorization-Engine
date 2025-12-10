import React from "react";
import {
  LayoutDashboard,
  Wallet,
  Receipt,
  PiggyBank,
  Target,
  LogOut,
  BarChart3,
  LineChart,
  CreditCard,
  Settings as SettingsIcon,
  Triangle, // Using Triangle as a placeholder for your logo
} from "lucide-react";

const Sidebar = () => {
  const navItems = [
    { icon: LayoutDashboard, label: "Dashboard" },
    { icon: Wallet, label: "Accounts" },
    { icon: Receipt, label: "Transactions" },
    { icon: PiggyBank, label: "Budgets" },
    { icon: Target, label: "Goals" },
    { icon: BarChart3, label: "Analytics" },
    { icon: LineChart, label: "Investments" },
    { icon: CreditCard, label: "Bills" },
    { icon: SettingsIcon, label: "Settings" },
  ];

  return (
    <div className="flex h-screen bg-black text-white selection:bg-gray-800 selection:text-white">
      {/* SIDEBAR */}
      <div className="group flex flex-col h-full bg-black w-20 hover:w-72 transition-[width] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden shadow-2xl">
        {/* === HEADER: LOGO + FINTREK === */}
        <div className="h-20 relative flex items-center shrink-0">
          {/* Logo Container - Fixed w-20 ensures centering when collapsed */}
          <div className="absolute left-0 top-0 w-20 h-full flex justify-center items-center z-10">
            {/* Placeholder for your transparent logo */}
            <div className="w-10 h-10 bg-gradient-to-tr from-indigo-500 to-violet-500 rounded-xl flex items-center justify-center shadow-lg">
              <Triangle
                fill="white"
                className="text-white rotate-180"
                size={20}
              />
            </div>
          </div>

          {/* Brand Name - Fades in on expand */}
          <h1 className="pl-20 text-2xl font-bold tracking-tight whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100 group-hover:translate-x-0 -translate-x-4">
            Fintrek
          </h1>
        </div>

        {/* === NAVIGATION === */}
        <div className="flex-1 flex flex-col gap-2 py-4 overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] ">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="group/item relative flex items-center h-12 cursor-pointer text-gray-500 hover:text-white transition-colors duration-200"
            >
              <div className="absolute left-0 top-0 w-20 h-full flex justify-center items-center">
                <item.icon
                  size={22}
                  className="transition-transform duration-300 group-hover/item:scale-110 group-hover/item:text-white"
                />
              </div>
              <span className="pl-20 text-md font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 delay-75 group-hover/item:translate-x-1">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* === USER BOX (BOTTOM) === */}
        {/* We use 'mt-auto' to push this to the bottom */}
        <div className="p-2 mt-auto">
          <div className="relative flex items-center h-16 rounded-2xl hover:bg-white/5 transition-colors duration-200 group/user cursor-pointer overflow-hidden">
            {/* User Avatar - Fixed Left Position */}
            <div className="absolute left-0 top-0 w-20 h-full flex justify-center items-center z-10">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop"
                alt="User"
                className="w-10 h-10 rounded-full object-cover border-2 border-transparent group-hover/user:border-gray-500 transition-all"
              />
            </div>

            {/* User Info + Logout Button Wrapper */}
            {/* pl-20 pushes content past the avatar area */}
            <div className="flex flex-1 items-center justify-between pl-20 pr-4 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100 overflow-hidden">
              {/* User Text */}
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-white leading-tight">
                  Aliya G.
                </span>
                <span className="text-xs text-gray-500">Free Plan</span>
              </div>

              {/* Logout Icon (Right Side) */}
              <button className="p-2 hover:bg-white/10 rounded-lg text-gray-400 hover:text-red-400 transition-colors">
                <LogOut size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 bg-black">{/* Dashboard Content */}</div>
    </div>
  );
};

export default Sidebar;