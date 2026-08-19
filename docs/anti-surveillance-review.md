# AntiSurveillance review

The `/anti-surveillance` route currently presents scanner results, detected surveillance patterns, an active blocker, blocked tracker counts, blocklist updates, and session statistics. These are high-risk claims because this page has no verified browser extension, network proxy, request interception, telemetry source, or threat intelligence feed.

The safe replacement must state that no scan was run and no tracker or surveillance vector is detected locally. Blocker, fix, blocklist update, and clear-session controls must be no-ops with explicit unavailable status. Counts and data-saved metrics must remain unavailable rather than fabricated.
