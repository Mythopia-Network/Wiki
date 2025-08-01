import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Logo"
        >
          <circle cx={12} cy={12} r={12} fill="currentColor" />
        </svg>
        Mythopia
      </>
    ),
  },
  // see https://fumadocs.dev/docs/ui/navigation/links
  links: [
    {
      text: "Discord",
      url: "https://discord.mythopia.xyz",
    },
    {
      text: "Status",
      url: "https://status.mythopia.xyz/status/default",
    },
    {
      text: "Modrinth",
      url: "https://modrinth.com/organization/mythopia",
    },
    {
      text: "Edit on GitHub",
      url: "https://github.com/Mythopia-Network/Wiki/tree/main/content/docs",
    },
  ],
};
