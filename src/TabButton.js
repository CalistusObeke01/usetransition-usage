import { useTransition } from "react";

export default function TabButton({ children, isActive, onClick }) {
  const [isPending, startTransition] = useTransition();

  if (isActive) {
    return <b>{children}</b>;
  }

  if (isPending) {
    return (
      <b
        style={{
          opacity: isPending ? 0.7 : 1
        }}
      >
        {children}
      </b>
    );
  }

  return (
    <button
      className="btn"
      onClick={() => {
        startTransition(() => {
          onClick();
        });
      }}
    >
      {children}
    </button>
  );
}
