interface BadgeProps {
  children: React.ReactNode;
  variant?: "outline" | "solid";
}

export default function Badge({ children, variant = "solid" }: BadgeProps) {
  const baseClasses = "px-3 py-1 rounded-full text-xs font-mono font-semibold transition-colors";
  const variants = {
    solid: "bg-gray-800 text-gray-300 border border-transparent hover:bg-gray-700",
    outline: "bg-transparent text-gray-400 border border-gray-700 hover:border-gray-500",
  };

  return (
    <span className={`${baseClasses} ${variants[variant]}`}>
      {children}
    </span>
  );
}