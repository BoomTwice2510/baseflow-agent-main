import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    agent: "BaseFlow Signal Agent",
    chain: "Base",
    updated_at: new Date().toISOString(),
    signals: [
      {
        id: "bf-liq-0001",
        type: "liquidity_event",
        description: "Liquidity added to a newly deployed contract",
        confidence: "low",
        observed_at: new Date().toISOString(),
        source: "onchain_scan",
        note: "Raw observation only. No trade advice."
      }
    ]
  });
}
