"use client";

type OpenSettings = () => void;

export function CookiesSettingsButton({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        const open = (window as unknown as { openCookieSettings?: OpenSettings })
          .openCookieSettings;
        open?.();
      }}
    >
      {children}
    </button>
  );
}
