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
        observed_at: "2026-02-07T18:46:22.372Z",
        source: "onchain_scan",
        note: "Raw observation only. No trade advice."
      },
      {
        id: "bf-vol-0002",
        type: "volume_anomaly",
        description: "Unusual token transfer volume detected in a short time window",
        confidence: "low",
        observed_at: "2026-02-07T19:27:42.977Z",
        source: "onchain_scan",
        note: "Early-stage volume observation. Needs confirmation."
      },
      {
        id: "bf-ctr-0003",
        type: "contract_deployment",
        description: "New smart contract deployed on Base",
        confidence: "low",
        observed_at: "2026-02-07T20:01:26.386Z",
        source: "onchain_scan",
        note: "Raw deployment event. Contract not analyzed."
      },
      {
        id: "bf-liq-0004",
        type: "liquidity_event",
        description: "Routine liquidity activity observed on a recently deployed contract",
        confidence: "low",
        observed_at: new Date().toISOString(),
        source: "onchain_scan",
        note: "Maintenance update. Routine liquidity observation with no conclusions."
      }
    ]
  });
}
