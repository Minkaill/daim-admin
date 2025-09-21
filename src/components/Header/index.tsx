export const Header = () => {
  return (
    <header className="w-full flex items-center justify-between bg-white rounded-xl px-5 py-2">
      <img className="w-[100px]" h-2 src="/logo.png" alt="logo" />

      <div className="flex items-center gap-2">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <img
            className="w-full h-full object-center"
            src="/admin.jpg"
            alt="admin"
          />
        </div>
        <h4 className="text-lg">Абдул-Малик</h4>
      </div>
    </header>
  );
};
