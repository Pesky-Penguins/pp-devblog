---
title: "$PESKY Staking Update"
excerpt: "Hey gang! We've got just a quick update this week, so I'm going to get right to it. The Pesky Penguins team is pleased to report that we've got our $PESKY staking program working and deployed to devnet! It will live there while it undergoes audit..."
coverImage: '/assets/blog/2022/devnet-staking.png'
date: '2022-01-29T20:00:00.000Z'
author:
  name: NFP
  picture: '/nfp.png'
  link: 'https://twitter.com/nonfungible_dev'
ogImage:
  url: 'https://pesky-penguins.com/assets/blog/2022/devnet-staking.png'
---

Hey gang! We've got just a quick update this week, so I'm going to get right to it.

## Staking Program: Live on devnet

The Pesky Penguins team is pleased to report that we've got our `$PESKY` staking program working and deployed to `devnet`! It will live there while it undergoes audit and while we work on the staking UI/UX.

We've got two auditors lined up; they're prominent members of the Solana ecosystem experienced in building on-chain programs.
We're cleaning up the source code this weekend and will have it over to them early next week.

For you intrepid blockchain explorers, we've done the legwork for you:

In this [first transaction](https://solscan.io/tx/2hTHK23h53qDH9ghKQKa6rYHPnEvGEvAiFx8CB49G4Sc6jEdJd81foysTv8epKspePPLboUSPz6Cth4xqtQPM5NK?cluster=devnet),
Solana account `6mLu...1ru8` stakes a devnet penguin, creating an on-chain program for storing staking data in the process.

In the [second transaction](https://solscan.io/tx/WFsSMZjsqTpJW3SsuxXLz14TX9ekaBjahKPUwGbKyEpm8Q5DkNywgrtFSR2zRhPhv3K2uZQczBiChFn3vteW3yW?cluster=devnet), you can see us "withdraw" the devnet penguin, and earn `5 $PESKY` as a result.

## Staking Details
For testing on devnet, we accelerated the accumulation rate and then capped it at `5 $PESKY`. The accumulation rate and cap are both variables that you'll be able to customize in Nootopia, so it was important to test these, but there's more testing that needs to be done.

For example, what happens if you transfer a penguin while it's staked? Can the new owner withdraw the $PESKY?
We're not currently transferring your Penguin to an escrow account;
this has the benefit of allowing it to still show up in your Phantom wallet while staked,
and does not artificially inflate our "unique holder" numbers,
but opens up a few edge cases.

Don't worry -- we're making sure your PESKY and your Penguins will be safe!

Those of you inspecting the transaction may have noticed there are three signatures on the transaction.
Our staking program will not work unless it has been signed by all three of these parties:

1. The user who is staking the Penguin
2. The `$PESKY` treasury address
3. The Nootopia server, which holds the staking variables (like accumulate rate)

This ensures that users cannot invoke the staking program with their own variables.

We remain on track for a February roll-out of mainnet `$PESKY` staking to all Pesky Penguin holders!

## Incorporation Update
The IRS is pretty backed up right now.
There's about a 60-day lead time on getting your EIN, so we're shifting our incorporation date forward by two months.
We expect to be fully incorporated in late March / early April.

This has no impact on our delivery timeline, but please throw some 🙏 in the chat for Kylie, who is paying out of pocket for health insurance until she is employed by a "company."

## Homepage Timeline Update
Did you see the new timeline that we added to the [ homepage ](https://pesky-penguins.com)?
We're keeping it up to date, so you can use that to follow along with our progress and to keep track of upcoming launches!

Thanks for nooting with us, fam! Happy to be on this journey with you!
