import { Label, labels } from "./labels"
import { User, users } from "./users"

export interface Email {
  id: string
  from: User
  to: User[]
  subject: string
  body: string
  date: Date
  read: boolean
  starred: boolean
  labels: Label[]
  hasAttachments: boolean
  attachments?: {
    id: string
    name: string
    size: string
    type: string
  }[]
}

export const emails: Email[] = [
  {
    id: "1",
    from: users[1],
    to: [users[0]],
    subject: "[SEV-1] Checkout API latency above 2.8s",
    body: `Trigger: p95 latency crossed 2.8s for 7 minutes in us-east-1.

Current impact:
- 14% of requests timing out
- Retries up 3.2x
- Cart updates delayed for mobile users

Primary runbook and dashboards are attached.
Please acknowledge within 5 minutes.`,
    date: new Date("2026-02-18T09:12:00"),
    read: false,
    starred: true,
    labels: [labels[2], labels[0]],
    hasAttachments: true,
    attachments: [
      {
        id: "att1",
        name: "checkout-latency-runbook.pdf",
        size: "1.1 MB",
        type: "application/pdf",
      },
      {
        id: "att2",
        name: "grafana-snapshot.png",
        size: "2.6 MB",
        type: "image/png",
      },
    ],
  },
  {
    id: "2",
    from: users[3],
    to: [users[0]],
    subject: "Mitigation applied: cache warm-up completed",
    body: `Quick update from SRE:

- Increased edge cache TTL for product metadata
- Warmed top 5,000 keys
- Error rate dropped from 5.6% to 1.2%

Continuing to monitor for the next 30 minutes before full resolution call.`,
    date: new Date("2026-02-18T09:34:00"),
    read: false,
    starred: true,
    labels: [labels[0]],
    hasAttachments: false,
  },
  {
    id: "3",
    from: users[2],
    to: [users[0]],
    subject: "CPU anomaly detected on payments-worker-04",
    body: `CloudWatch detected sustained CPU > 92% on payments-worker-04.

Timeline:
- Spike began at 08:41 UTC
- Queue depth currently 11,238 messages
- No packet loss observed

Suggested action: drain node and shift traffic to warm standby.`,
    date: new Date("2026-02-18T08:47:00"),
    read: true,
    starred: false,
    labels: [labels[1]],
    hasAttachments: true,
    attachments: [
      {
        id: "att3",
        name: "cw-metrics-export.csv",
        size: "486 KB",
        type: "text/csv",
      },
    ],
  },
  {
    id: "4",
    from: users[5],
    to: [users[0]],
    subject: "Security watch: suspicious auth bursts blocked",
    body: `SOC bot blocked 1,842 suspicious auth attempts in 12 minutes.

Notes:
- Source ASN matches previously flagged botnet
- No successful account takeover observed
- Temporary WAF rule auto-deployed

Please review the incident card for rule expiry timing.`,
    date: new Date("2026-02-18T07:58:00"),
    read: true,
    starred: false,
    labels: [labels[1], labels[0]],
    hasAttachments: true,
    attachments: [
      {
        id: "att4",
        name: "waf-rule-diff.json",
        size: "92 KB",
        type: "application/json",
      },
    ],
  },
  {
    id: "5",
    from: users[4],
    to: [users[0]],
    subject: "On-call handoff notes for Feb 18",
    body: `Good morning team,

Handoff summary:
- Active: checkout latency (SEV-1) with mitigation in progress
- Monitoring: auth burst pattern, no customer impact
- Planned: rotate Redis credentials at 14:00 UTC

Escalation tree and backup contacts attached.`,
    date: new Date("2026-02-18T07:15:00"),
    read: false,
    starred: false,
    labels: [labels[0]],
    hasAttachments: true,
    attachments: [
      {
        id: "att5",
        name: "handoff-sheet-feb18.xlsx",
        size: "214 KB",
        type: "application/vnd.ms-excel",
      },
      {
        id: "att6",
        name: "escalation-tree.pdf",
        size: "744 KB",
        type: "application/pdf",
      },
    ],
  },
  {
    id: "6",
    from: users[0],
    to: [users[3]],
    subject: "Need confirmation: rollback window at 09:45 UTC",
    body: `Kim,

Please confirm if we can safely open a rollback window at 09:45 UTC for checkout-service.
I need your go/no-go note before I notify leadership.

Thanks,
Ava`,
    date: new Date("2026-02-18T06:58:00"),
    read: true,
    starred: false,
    labels: [labels[0]],
    hasAttachments: false,
  },
  {
    id: "7",
    from: users[1],
    to: [users[0]],
    subject: "Resolved: search cluster memory pressure",
    body: `Incident RES-4821 closed.

Root cause:
- Memory leak in query expansion worker after dependency update.

Fix:
- Rolled back worker image to 2.9.14
- Added guardrail alert on heap delta > 12%

Postmortem scheduled for Friday.`,
    date: new Date("2026-02-17T18:20:00"),
    read: true,
    starred: false,
    labels: [labels[1]],
    hasAttachments: true,
    attachments: [
      {
        id: "att7",
        name: "res-4821-postmortem-draft.docx",
        size: "136 KB",
        type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      },
    ],
  },
  {
    id: "8",
    from: users[5],
    to: [users[0]],
    subject: "Credential rotation reminder: staging + production",
    body: `Reminder from Security Response Bot:

Quarterly credential rotation is due this week.
Targets:
- staging/api-gateway
- prod/redis-cache
- prod/payments-webhook

Runbook includes zero-downtime sequence.`,
    date: new Date("2026-02-17T14:05:00"),
    read: false,
    starred: true,
    labels: [labels[0]],
    hasAttachments: true,
    attachments: [
      {
        id: "att8",
        name: "credential-rotation-runbook.pdf",
        size: "928 KB",
        type: "application/pdf",
      },
    ],
  },
  {
    id: "9",
    from: users[2],
    to: [users[0]],
    subject: "Daily uptime digest",
    body: `24h platform digest:

- API availability: 99.96%
- Mean incident acknowledgment: 4m 13s
- Mean incident resolution: 31m 42s
- Error budget burn: 12.4%

No unresolved critical alerts at report generation time.`,
    date: new Date("2026-02-17T09:00:00"),
    read: true,
    starred: false,
    labels: [labels[0]],
    hasAttachments: false,
  },
  {
    id: "10",
    from: users[3],
    to: [users[0]],
    subject: "Request: add runbook step for feature flag fallback",
    body: `During yesterday's incident we lost 6 minutes deciding between rollback and feature flag fallback.

Proposal:
1. Add explicit flag fallback step after cache purge.
2. Include owner + confirmation checklist.
3. Add command snippets for both regions.

Can you review by end of day?`,
    date: new Date("2026-02-16T17:25:00"),
    read: false,
    starred: false,
    labels: [labels[1]],
    hasAttachments: false,
  },
  {
    id: "11",
    from: users[4],
    to: [users[0]],
    subject: "Coverage update: weekend on-call swap approved",
    body: `Coverage update:

- Saturday primary: Kim
- Saturday backup: Ava
- Sunday primary: Nora
- Sunday backup: Theo

Calendar and pager routing are now synced.`,
    date: new Date("2026-02-16T12:10:00"),
    read: true,
    starred: false,
    labels: [labels[0]],
    hasAttachments: true,
    attachments: [
      {
        id: "att9",
        name: "weekend-coverage.ics",
        size: "9 KB",
        type: "text/calendar",
      },
    ],
  },
  {
    id: "12",
    from: users[0],
    to: [users[1], users[3]],
    subject: "Post-incident action items approved",
    body: `Approved action items for checkout latency incident:

1. Add queue depth saturation alert at 8k.
2. Add canary gate for cache dependency changes.
3. Document fallback query path in on-call handbook.
4. Run chaos replay in staging on Wednesday.

Please confirm owners in the tracker thread.`,
    date: new Date("2026-02-16T08:42:00"),
    read: true,
    starred: true,
    labels: [labels[2], labels[1]],
    hasAttachments: true,
    attachments: [
      {
        id: "att10",
        name: "action-items-checkout.md",
        size: "22 KB",
        type: "text/markdown",
      },
    ],
  },
]
