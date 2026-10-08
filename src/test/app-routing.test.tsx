import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";

describe("App routing & SEO Information Architecture", () => {
  const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

  const testRoutes = [
    "/",
    "/templates",
    "/start-free",
    "/demo",
    "/how-it-works",
    "/for-brands",
    "/pricing",
    "/case-studies",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
    "/security",
    "/features",
    "/features/ugc",
    "/features/referrals",
    "/features/rewards",
    "/features/reviews",
    "/features/post-purchase-engagement",
    "/features/customer-retention",
    "/features/repeat-purchases",
    "/features/qr-experiences",
    "/features/post-purchase-analytics",
    "/industries",
    "/industries/d2c",
    "/industries/gifting",
    "/industries/beauty",
    "/industries/fashion",
    "/resources",
    "/resources/post-purchase-experience",
    "/resources/d2c-customer-retention",
    "/resources/post-purchase-strategy-for-gifting-brands",
    "/resources/how-to-get-more-ugc",
    "/q/sample-token"
  ];

  testRoutes.forEach((path) => {
    it(`matches a page for ${path} without falling back to not found`, () => {
      const matches = router.matchRoutes(path);
      expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
    });
  });
});
