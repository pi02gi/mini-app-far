import { NextResponse } from "next/server";
import { APP_URL } from "../../../lib/constants";

export async function GET() {



  const farcasterConfig = {
    // TODO: Add account association
 
  "accountAssociation": {
    "header": "eyJmaWQiOjg2NzAzMywidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDQ0NzE5NDlhMzEwNjBlRWFmNTBDNjA3Qjk3RWQ1NjBkNzM3MjBCNTIifQ",
    "payload": "eyJkb21haW4iOiJtaW5pLWFwcC1mYXIudmVyY2VsLmFwcCJ9",
    "signature": "MHg2YmIxNDlhMTliYTFjZmViNDE4MzRhZjQxZjA0MjVmYzdlOWQ5MmUwY2I5ODQyMGQ4ZGQwZDEzNjRhOGY2ZTIwNTg2MDkxYTE3ZTEwZWE1YTFlOTBiYjg1NGZhZjYzZWJjZGNmYTY4N2UwYTJiMjJiZGZiMDliMWMzMTUzNzQ5MDFi"
  },


    frame: {
      version: "1",
      name: "Monad Farcaster MiniApp Template",
      iconUrl: `${APP_URL}/images/icon.png`,
      homeUrl: `${APP_URL}`,
      imageUrl: `${APP_URL}/images/feed.png`,
      screenshotUrls: [],
      tags: ["monad", "farcaster", "miniapp", "template"],
      primaryCategory: "developer-tools",
      buttonTitle: "Launch Template",
      splashImageUrl: `${APP_URL}/images/splash.png`,
      splashBackgroundColor: "#ffffff",
      webhookUrl: `${APP_URL}/api/webhook`,
    },
  };

  return NextResponse.json(farcasterConfig);
}
