---
title: "Incorporation"
excerpt: "They say that sometimes, you have to go slow to go fast. The past week has been one of those weeks; Nootopia is new and exciting, `$PESKY` is prepping for circulation, but we've been splitting our time with the real world to invest in the future of the project..."
coverImage: '/assets/blog/2022/nfp-accountant.png'
date: '2022-01-15T16:00:00.000Z'
author:
  name: NFP
  picture: '/nfp.png'
  link: 'https://twitter.com/nonfungible_dev'
ogImage:
  url: 'https://pesky-penguins.com/assets/blog/2022/nfp-accountant.png'
---

They say that sometimes, you have to go slow to go fast. The past week has been one of those weeks;
Nootopia is new and exciting, `$PESKY` is prepping for circulation, but we've been splitting our time
with the real world to invest in the future of the project.
We're paving the runway for longevity and a smooth takeoff.

Here's what we've been up to this week:

## Incorporation
In order to best support the project and the community for the long haul, we've begun the process of incorporation.
The last quarter of 2021 has proven that Pesky Penguins is here to stay.
This is, in large part, thanks to **YOU** and your unwavering belief in the project.

Thank you ❤️

Incorporation gives us a number of benefits that help future-proof the project, including:
+ The ability to offer retirement and healthcare benefits
```
  - Helps retain existing talent
  - Attracts new talent when we're ready to expand
```
+ Offers a vehicle for SEC registration
```
  - We're trying to avoid the SEC for now, but
  - We don't know how regulations will change;
  - ...best to be prepared!
```
+ Anti-rug insurance/assurance

Pesky Penguins will be supported by an organization that transcends its creators.
As we've said many times in the past: we're not going anywhere.
But even if life gets in the way and we *personally* need to go somewhere,
you can rest assured that the *project* isn't going anywhere;
somebody will be here to take the reins.

Over our dead bodies, of course, but still: community first!

In the past week we've secured a PO Box for the organization, registered a business phone number,
and compiled/passed the necessary information to our accounting firm to begin the incorporation process (the one helping us with taxes and tokenomics).
We anticipate we'll have our EIN by the end of the month!

For the curious, we'll be incorporating in the state of Wyoming.
It's crypto-friendly, has no state income tax, and allows you to register with an agent in order to preserve privacy.
We are not at this time planning to be a publicly-traded company due to the additional regulatory burden that places on our small team.

## Tax Season

Many of you saw the [ tweet ](https://twitter.com/nonfungible_dev/status/1480718388599181316) earlier this week about how we're working on our taxes.
We've been writing some custom code to parse the blockchain to help untangle the web of personal / business account transactions before passing the data to the accountants.
Don't want to be double-taxed!

Taxes won't be complete until after we incorporate; we'll need to continue to invest time in this periodically, but that's why we have two devs.
I (NFP) will tackle all the operational issues / interruptions like this, and we'll leave our mystery dev free to work on Nootopia.

## Staking Program
Speaking of Nootopia and our mystery dev, we're making good progress on our on-chain `$PESKY` staking program!

People keep asking, "wen staking?"
If we were to use an off-the-shelf implementation, it would definitely be much faster.
But an off-the-shelf staking contract won't allow us to meet our goals for Nootopia.

Those of you who have read our previous Tokenomics posts or spent time in Discord will know that users will be able to create their own staking opportunities through property ownership in Nootopia.
There are a number of variables to accommodate here, including:

+ Accumulation Speed (unit of time)
+ Amount of `$PESKY` (per unit of time)
+ Maximum number of penguins allowed on the property
+ Scale factor (synergy or competition; does staking more penguins increase or decrease income?)
+ Special bonuses (for penguin types, etc.)

Right now, we've got a prototype that can only be invoked when both the user *and the server* signs the transaction.
This allows us to add game-balancing functionality, such as time limits for in-game actions, and ensures that savvy individuals cannot begin staking with their own parameters (`420 PESKY` every `0.69s` would be very game-breaking).

The program in its current form accepts a staking start time, a token, its owner, and the staking parameters. Invoking it a second time (with the same parameters) will unstake the token and tell you how much PESKY has been accumulated for the duration it was staked. No $PESKY is actually transferred yet; this is the next step.

We plan to launch `$PESKY` staking *before* Nootopia. Users will be able to stake their Penguins prior to the launch of the game at the **Nootopia Welfare Center,** which will provide `1 PESKY` per Penguin per day, and allows for up to 8888 penguins to be staked simultaneously. This is how we'll seed the economy prior to the launch of the game, which will be rolled out iteratively as new features become available.

## What's Coming

Here's what our schedule looks like right now:

### Late Jan
+ Deploy website updates (new roadmap, update libraries, etc.)
+ Deploy complete staking contract to devnet
+ Begin front-end development for staking process
+ Begin smart contract audit process
+ Complete incorporation process

### Early Feb
+ Deploy complete staking experience to devnet (including site)
+ Receive smart contract audit results; iterate if necessary

### Mid/Late Feb
+ Roll out staking to mainnet and ALL PENGUINS
+ Release Nootopia Whitepaper v1


-------

Keep in mind that there are lots of other things going on right now as well!

SECRET things that we will not tell you because we love to surprise you.

INFORMATIVE things, like our regular blog posts.

FUN things like the ongoing [meme contest](https://twitter.com/peskypenguins/status/1482045392317566981).

And sometimes, just boring ol' operational stuff.
We'll be sharing these in our blog posts as well because,
even if it's not info directly related to the collection or upcoming features,
they're things we are doing because you are here nooting with us.
These details are especially for the people who are curious what it's like to run a tech company. 🙂

We've said it before, and we'll say it again: no matter what the market is doing, we are here building!

Thanks for your love and support, fam. It means the world to us.

♥️🐧
