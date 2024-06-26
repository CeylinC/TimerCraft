export default function DropdownAppearanceIcon({
  className,
}: {
  className?: string;
}) {
  return (
    <svg
      width="10"
      height="6"
      viewBox="0 0 10 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1 1L5 5L9 1"
        stroke="#0A0908"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
