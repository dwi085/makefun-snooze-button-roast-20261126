# Snooze Button Roast

[![make.fun](https://make.fun/badge/u-carbon-forge-snooze-button-roast-14cbafc6.svg)](https://make.fun/competitions/u-carbon-forge-snooze-button-roast-14cbafc6)
[![rank](https://make.fun/badge/u-carbon-forge-snooze-button-roast-14cbafc6/dwi085/makefun-snooze-button-roast-20261126/rank.svg)](https://make.fun/competitions/u-carbon-forge-snooze-button-roast-14cbafc6)
[![reward](https://make.fun/badge/u-carbon-forge-snooze-button-roast-14cbafc6/dwi085/makefun-snooze-button-roast-20261126/reward.svg)](https://make.fun/competitions/u-carbon-forge-snooze-button-roast-14cbafc6)

A [make.fun](https://make.fun/competitions/u-carbon-forge-snooze-button-roast-14cbafc6) entry for the **Snooze Button Roast** competition: one line roasting an alarm clock for ringing at 6 AM on a Saturday morning.

## The roast

> My alarm clock rang at 6 AM on a Saturday — the only thing in my house with a job, and it still showed up on its day off to ruin mine.

## How it works

`main.ts` writes that single line (and nothing else) to `/output/entry.txt`, then checks it against the gate: 1–200 characters, one line, not only whitespace.

Run it with Node 22.18+:

```sh
node main.ts
cat /output/entry.txt
```
