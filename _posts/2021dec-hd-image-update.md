---
title: "HD Image Update"
excerpt: "It's time to give these Penguins a bath! As more and more Penguins appear in the wild on clothing or as prints, people are noticing that the original image quality was less than ideal..."
coverImage: '/assets/blog/hd-assets/hd-detail.png'
date: '2021-12-10T17:00:00.000Z'
author:
  name: NFP
  picture: '/nfp.png'
  link: 'https://twitter.com/nonfungible_dev'
ogImage:
  url: '/nfp.png'
loopVideo: "/assets/blog/hd-assets/before-after.mp4"
---

It's time to give these Penguins a bath!

As more and more Penguins appear in the wild on clothing or as prints, people are noticing that the original image quality was less than ideal.
The images are blurry when you zoom in, and there are some instances where the layers don't line up perfectly, resulting in gaps.

We've been tracking this since mint, but it's had to take a back seat to more time-sensitive issues like the graveyard, the rarity page, the unmasking event, and our devblog.

At long last, we are pleased to announce our HD image update will be rolling out over the next week; just in time for the holidays! 🥳

## Image Changes

To demonstrate the issues we're talking about, [Pesky Penguin #999](https://solscan.io/token/73nvEPTbRFMyHH4PusKMCbdPHbW3LZrDB1f2n4Z7F1iH) volunteered to model "before and after" for us. Computer users without pinch-to-zoom can mouseover the image to zoom in!

<br />

@@@LOOPVIDEO@@@

<br />

The first and most obvious difference is how clear the new image is compared with the old one. Previously, in order to meet Arweave's minimum image file size, we ran all the images through [mogrify](https://imagemagick.org/script/mogrify.php) in order to enlarge them.  Unfortunately, this resulted in the blurring you see in the old image (the file size would not get larger unless noise was introduced).

Thankfully, Arweave has matured a bit since we released our original collection, and we've had no trouble uploading smaller image files in recent weeks! With no need to introduce noise into our assets, our new Penguins have super clean lines, making them ideal for prints and other real-world use cases!

The second and perhaps less-obvious thing you may notice is the alignment issue. Take a close look at the blunt in the Penguin's beak; in the old blurry image, you can see a gap between the blunt and the Penguin's beak, revealing the background and some of the Penguin's outline.

The original artwork assets were not produced using a tool specifically designed for pixel art, resulting in small alignment issues with some of the Penguin attributes. To fix this, we went back and remade every single asset using [Asperite](https://www.aseprite.org/).
After exporting these perfectly-aligned assets in HD, we regenerated the artwork for every single Pesky Penguin at a nice large resolution. The results speak for themselves:

Nice. Clean. Noots.

## Metadata Changes

The images weren't the only thing we've upgraded on your Pesky Penguins! Previously, every Penguin had an identical, nondescript `description`.

> Pesky Penguins is a fun-loving flock of feathered friends who live on an iceberg in the metaverse.

# 🥱

As part of the Battle of Nootvember, we started to better leverage the `description` field for the penguins that went off to war. The penguins who participated in the battle came back with new descriptions in addition to new attributes. For example, Skeletons now have the description:

> Pesky Penguin #624, though slain during the Battle of Nootvember, was reanimated by Gargolon to continue the fight.

Definitely more interesting than the old description, but also: unfair! How come only our Nootvember veterans get descriptions?

The Pesky Penguins team is pleased to announce that, as part of our HD image update, **all Penguins who did not participate in the war will ALSO get an updated description!**

> Pesky Penguin #625 believes in a brighter future for everybody.

> Pesky Penguin #1921 doesn't care how many followers they have on social media, because they've got great friends like YOU in their life!

> Pesky Penguin #2305 says every Noot like it's their last.

> Pesky Penguin #7777 likes to cuddle under fuzzy blankets.

We authored over a hundred different positive affirmations, silly blurbs, and small details about your penguins before randomly assigning them to every Noot with the original description. It's our sincere hope that these new descriptions put a smile on your face, a noot in your heart, and help remind you that we're all going to make it 💖.

### Attribute Name Changes
The other metadata change we made was to the names of some attributes. Previously the attributes inherited their names from the original image files, and some of them read a little awkwardly. And what's the difference between `Regular Shades`, `Big Shades`, and `Sunglasses`??

We've renamed some of the attributes to read a little less awkwardly and to reduce confusion. The complete list of attribute name changes is:

```
Big Shades => Aviators
Burning Head => Flaming
Cap Backwards => Backwards Cap
Cap Forward => Cap
Closed Eyes => Sleepy
Dog Leash => Collar
Knitted Cap => Beanie
Life Saving Tube => Inner Tube
Mohawk Thin => Fauxhawk
Relaxed => Happy
Sunglasses => Ski Goggles
```

We made a couple other small improvements to the Metadata, like removing the unused DNA field, and adding a `symbol` (NOOT). **None of these metadata changes will affect the rarity or ranking of any Penguins.**

### Deployment
We'll be announcing in Discord when we start to roll out these changes. Updating all these tokens will take between 6 and 12 hours depending on the health of the network, so expect the collection to be inconsistent for half a day or so.

## Tokenomics still in the works

Part two of our Tokenomics post is still in the works, along with _more information about Nootopia!_ We've got a lot of really exciting things in the works, but we're not yet ready to share! Thanks for sticking with us; we're making steady progress every day!

Happy Holidays and **WAGMI** from the Pesky Penguins Team! ❤️ 🐧
