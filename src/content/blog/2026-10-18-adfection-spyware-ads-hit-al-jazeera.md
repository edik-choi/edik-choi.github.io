---
title: 'Ads Used to Deliver Spyware to Al Jazeera Devices'
description: 'Citizen Lab says an Israeli ad firm helped deliver Candiru spyware through online ads, targeting at least 45 Al Jazeera devices without a single click.'
pubDate: '2026-10-18T07:11:00Z'
category: 'technology'
location: { name: 'Toronto', lat: 43.65, lon: -79.38 }
hype: { attention: 8, impact: 6 }
---

On 15 October 2026, the University of Toronto's Citizen Lab published a report describing what it calls the <mark>first public confirmation of zero-click spyware delivered through targeted ads</mark>. The researchers say the technique, which they named AdFection, was used to target devices belonging to the Al Jazeera Media Network with spyware from the Israeli vendor Candiru. Al Jazeera condemned the targeting and called for those responsible to be held accountable.

![Key figure card: at least 45 Al Jazeera devices targeted](/images/2026-10-18-adfection-spyware-ads-hit-al-jazeera/key-figure.svg)

## What happened

According to Al Jazeera and BleepingComputer, which cite the Citizen Lab findings, <mark>at least 45 Al Jazeera devices</mark> were targeted between 2024 and 2025. Some of those devices belonged to staff who reported on sensitive subjects. Al Jazeera's in-house technology team first noticed unusual patterns on some journalists' devices in 2024 and later gave network logs to Citizen Lab.

A "zero-click" attack needs no action from the user. Citizen Lab says rendering a malicious ad was enough to start the chain. According to BleepingComputer, JavaScript embedded in the ad contacted a Discover-Tech server, which checked factors such as the device's IP address and advertising identifiers. Eligible targets received more code and were redirected toward Candiru infrastructure; other devices received nothing, which helped keep the attacks hidden.

![Diagram of the three steps from ad display to spyware delivery](/images/2026-10-18-adfection-spyware-ads-hit-al-jazeera/attack-chain.svg)

Citizen Lab recovered a file from a compromised Windows system and attributed it to Candiru with high confidence, based on infrastructure and code overlaps. It did not establish that every targeted device was infected, and it did not recover the exploit that completed the infection, according to security reporting on the findings.

The report names an Israeli company, <mark>Discover-Tech</mark>, as the intermediary. It presents itself as an advertising firm, but Citizen Lab describes it as a bridge between spyware makers and the advertising ecosystem. Between March and June 2026, BleepingComputer reports, the operation placed <mark>3.77 billion ad bids</mark> and won 442 million auctions. Ads with attacker script tags appeared in <mark>75,373 mobile apps and 120,768 websites</mark>. Citizen Lab estimates that hundreds of thousands to millions of users were directed to the relevant domains, but stresses these are not infection counts.

![Bar chart of apps and websites that carried the ad scripts](/images/2026-10-18-adfection-spyware-ads-hit-al-jazeera/ad-reach.svg)

## Background

Candiru is an Israeli spyware vendor that officially sells only to governments. The US government blacklisted it in 2021, and Citizen Lab previously found it responsible for hacking at least 100 activists, journalists and political figures across 10 countries, according to Al Jazeera. Its Windows malware, known as DevilsTongue, can steal files, credentials and messages.

Until now, ad-based delivery of spyware had been described mainly in theory. BleepingComputer notes that Amnesty International documented a similar method called "Aladdin" in late 2025, based on leaked marketing files from the spyware maker Intellexa, but AdFection was observed in real attacks.

The mechanism relies on how online ad auctions work. Within a fraction of a second, bidders receive a device ID, IP address, rough location and the app or site where an ad will appear, Al Jazeera quotes Stephen O'Shaughnessy of TU Dublin Blanchardstown as explaining. Anyone with a phone or browser that shows ads can therefore be reached without a phone number or email address.

## Why it matters

Citizen Lab says the case exposes structural flaws in online advertising that failed to detect or prevent the abuse. Al Jazeera reports that Discover-Tech appeared on vendor lists kept by Google and IAB Europe, and that its ads ran on networks used by defence ministries, intergovernmental bodies and media outlets. Ad-security firm Confiant found the company's ads on networks used by the Pentagon, the IAEA and the International Criminal Court; infection there is unconfirmed, and only profiling was observed.

For most people the risk is low, O'Shaughnessy told Al Jazeera, but it is higher for journalists and officials. He recommended an ad blocker, disabling the advertising ID, keeping systems updated and enabling Lockdown Mode on iPhones or Advanced Protection on Android.

Platforms have started to respond. Following Citizen Lab's reports, <mark>Google, IAB Europe, Beeswax, Eskimi and Vungle</mark> took action to remove Discover-Tech's accounts and block access to domains, BleepingComputer reports.

![Timeline from the 2021 blacklisting of Candiru to the October 2026 reports](/images/2026-10-18-adfection-spyware-ads-hit-al-jazeera/timeline.svg)

## What to watch

- **Regulators:** Citizen Lab has called on regulators to investigate and sanction Discover-Tech, according to a security-press summary of the report.
- **Ad industry rules:** Whether exchanges begin vetting ad buyers more closely and limit the personal data sent to unknown bidders, as O'Shaughnessy urged.
- **Attribution:** The government or governments behind the Al Jazeera operation have not been named. Discover-Tech, Candiru and Al Jazeera did not respond to requests for comment in at least one report.
- **Further victims:** Citizen Lab found Discover-Tech ads far beyond Al Jazeera, but an ad appearing on a device does not mean the device was hacked.

## Sources

- [Al Jazeera: How Israeli firm's 'zero-click' malware attack poses global security risk](https://www.aljazeera.com/news/2026/10/16/how-israeli-firms-zero-click-malware-attack-poses-global-security-risk)
- [BleepingComputer: Targeted ads installed Candiru spyware in zero-click attacks](https://www.bleepingcomputer.com/news/security/zero-click-attacks-used-targeted-ads-to-deliver-candiru-spyware/)
- [Citizen Lab: How Discover-Tech Turned Targeted Ads Into a Pipeline for Zero-Click Mercenary Spyware](https://citizenlab.ca/)
- [Daily Security Review: Citizen Lab: AdFection Spyware Hit Al Jazeera Through Ad Networks](https://dailysecurityreview.com/?p=44652)
