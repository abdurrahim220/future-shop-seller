import logo from "@/assets/logo.jpg";

export default function Logo({ variant = "default" }) {
  if (variant === "icon") {
    return (
      <img
        src={logo}
        alt="Logo"
        className="h-8 w-8 object-contain text-center"
      />
    );
  }

  return (
    <div className="flex items-center gap-2">
      <img src={logo} alt="Logo" className="h-4 w-8 object-contain" />
      <span className="font-bold text-lg">YourBrand</span>
    </div>
  );
}
