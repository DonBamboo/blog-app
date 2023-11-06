import { TChildren } from "@/interfaces";

export default function Button({
  children,
  bgColor = "ba-bg-magenta-red",
  textColor = "ba-text-white",
}: TChildren & { bgColor?: string; textColor?: string }) {
  return (
    <button className={`ba-ml-8 ba-rounded-full ba-py-3 ${bgColor}`}>
      <span className={`${textColor} ba-px-6 `}>{children}</span>
    </button>
  );
}
