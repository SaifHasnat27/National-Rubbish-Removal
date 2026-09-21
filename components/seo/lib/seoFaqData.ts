export type SeoFaqItem = {
  q: string;
  a: string;
};

const Q = {
  work: 'How does your rubbish removal service work?',
  sameDay: 'Do you provide same day rubbish removal in Sydney?',
  types: 'What types of rubbish do you collect?',
  prices: 'How do you calculate your rubbish removal prices?',
  skip: 'How is rubbish removal different or better than hiring a skip bin?',
  everything: 'Do you remove absolutely everything?',
  recycle: 'What happens to the waste you collect? Is it recycled?',
  licensed: 'Are you fully licensed and insured?',
} as const;

export const SEO_FAQ: Record<string, readonly SeoFaqItem[]> = {
  'household-rubbish-removal': [
    {
      q: Q.work,
      a: 'Call or send the quote form. Once you agree the price, a crew comes to the property, loads the household junk you marked, sweeps up, and takes it away. You pay for the volume the load takes in the truck. You do not do the heavy lifting.',
    },
    {
      q: Q.sameDay,
      a: 'Yes. Same day household rubbish removal is available across Sydney metro when we can fit the run. Book in the morning and we will tell you if that afternoon is open. We will not invent a slot we cannot keep.',
    },
    {
      q: Q.types,
      a: 'This service is mixed household rubbish: bags and boxes of clutter, broken household goods, and unwanted belongings from any room. Larger pieces can ride on the same job when they are part of the same cleanout. Dedicated mattress-only or green-waste-only jobs are booked as those services.',
    },
    {
      q: Q.prices,
      a: 'Residential household jobs are volume based. The quote is the greater of $150 minimum or $80 per cubic metre. That figure includes labour, loading, transport, and disposal. Send a photo if the pile is mixed so the estimate matches the truck space.',
    },
    {
      q: Q.skip,
      a: 'A skip needs space, often a council permit, and you still carry the household junk to it. Neighbours also treat an open skip like a public bin. We pull up, load what you marked, sweep, and leave. No bin sitting on the nature strip.',
    },
    {
      q: Q.everything,
      a: 'We take most non-hazardous household junk. We do not take asbestos or fibro, food or liquid waste, hazardous or contaminated materials, chemicals, gas, oils, polystyrene or foam insulation, e-waste as a standalone dump, medical waste, wet concrete, hot ash, silica, or noxious weeds. If you are unsure, send a photo.',
    },
    {
      q: Q.recycle,
      a: 'Household loads go to licensed Sydney sorting and transfer facilities. Metals, cardboard, timber, and a lot of household material can be diverted. We quote up to 95% diversion for the streams we can sort. Not every cracked plastic toy is a recycling win.',
    },
    {
      q: Q.licensed,
      a: 'Yes. National Rubbish Removal is a licensed waste disposal carrier and carries public liability insurance while the crew is working in your home.',
    },
  ],
  'mattress-removal': [
    {
      q: Q.work,
      a: 'Call or send the quote form with how many mattresses and whether a bed base is coming too. Once you agree the price, we come in, carry the bed out, load the truck, and leave. You are not dragging a queen down the stairs.',
    },
    {
      q: Q.sameDay,
      a: 'Yes. Same day mattress removal is available across Sydney metro when the diary has a run that fits. Morning bookings are the ones most likely to land that afternoon. We confirm the window before we set off.',
    },
    {
      q: Q.types,
      a: 'Mattresses and bed bases: singles through king, ensembles, and the spare bed that has been in the hallway. If a bedside table is going with the bed, say so on the quote. A whole-house junk mix is household rubbish removal, not this page.',
    },
    {
      q: Q.prices,
      a: 'Residential mattress jobs are volume based. The quote is the greater of $150 minimum or $80 per cubic metre. Labour, loading, transport, and disposal sit inside that figure. One mattress often hits the minimum. Extra bases and extra beds add truck space.',
    },
    {
      q: Q.skip,
      a: 'A skip still needs you to manoeuvre a floppy mattress down the stairs and often needs a permit. An open skip also invites dumping. We carry the mattress out, load it, and drive off the same visit.',
    },
    {
      q: Q.everything,
      a: 'We take mattresses and bed bases that are part of a normal household collection. We do not take asbestos or fibro, food or liquid waste, chemicals, gas, oils, medical waste, or the other exclusions on this page. If the item is not a bed, tell us in the quote.',
    },
    {
      q: Q.recycle,
      a: 'Mattresses go to licensed Sydney sorting and transfer facilities. Steel, timber, and some foam streams can be diverted. We quote up to 95% diversion for the streams we can sort. A stained mattress is not always a recycling win. We still separate what we can.',
    },
    {
      q: Q.licensed,
      a: 'Yes. We are a licensed waste disposal carrier with public liability insurance covering the crew while they carry a mattress through your hallway, stairs, or lift.',
    },
  ],
  'green-waste-removal': [
    {
      q: Q.work,
      a: 'Call or send photos of the pile. Once you agree the price, the crew loads the garden waste you marked, sweeps the work area, and takes it away. You do not fork the heap into a bin.',
    },
    {
      q: Q.sameDay,
      a: 'Yes. Same day green waste removal is available across Sydney metro when we can fit the run. After a weekend prune, morning contact is the usual path to an afternoon pickup. We say yes only when the slot is real.',
    },
    {
      q: Q.types,
      a: 'Garden clippings, branches, leaves, lawn waste, hedge trimmings, and bulky garden offcuts from residential yards. Mixed household junk or a garage full of boxes is a different service. Keep the pile as green waste when you can.',
    },
    {
      q: Q.prices,
      a: 'Residential green waste jobs are volume based. The quote is the greater of $150 minimum or $80 per cubic metre, including labour, loading, transport, and disposal. Loose branches eat truck space. A photo of the pile beats a guess.',
    },
    {
      q: Q.skip,
      a: 'A green-waste skip still needs space, often a permit, and you still load it. Neighbours dump in open skips. We take the pile from the yard, sweep, and leave. No bin hire. No council permit for a skip you never wanted.',
    },
    {
      q: Q.everything,
      a: 'We take residential garden green waste. We do not take noxious weeds, asbestos or fibro, food or liquid waste, chemicals, oils, medical waste, or the other exclusions listed here. Stumps, soil, and mixed building rubble need a different conversation. Send a photo if the pile is not just clippings and branches.',
    },
    {
      q: Q.recycle,
      a: 'Green waste goes to licensed Sydney sorting and transfer facilities. Garden material is a stream we can often divert. We quote up to 95% diversion for the streams we can sort. Contaminated piles mixed with general junk are harder to process.',
    },
    {
      q: Q.licensed,
      a: 'Yes. National Rubbish Removal is a licensed waste disposal carrier and carries public liability insurance while the crew is working in your yard and driveway.',
    },
  ],
  'unwanted-furniture-removal': [
    {
      q: Q.work,
      a: 'Call or send photos of the pieces and mention stairs. Once you agree the price, we come in, lift the furniture you marked, load the truck, and leave. You are not the removalist for the sofa.',
    },
    {
      q: Q.sameDay,
      a: 'Yes. Same day furniture removal is available across Sydney metro when the run fits. If a new lounge is arriving or keys are due back, book early in the day so we can confirm an afternoon window.',
    },
    {
      q: Q.types,
      a: 'Sofas, wardrobes, tables, chairs, dining sets, and other bulky furniture no longer needed. Broken pieces count. A mixed bag-and-box household cleanout is household rubbish removal. Tell us if beds are part of the same pickup.',
    },
    {
      q: Q.prices,
      a: 'Residential furniture jobs are volume based. The quote is the greater of $150 minimum or $80 per cubic metre. Labour, loading, transport, and disposal are included. A three-seater plus a wardrobe is more truck space than a single chair. Photos help.',
    },
    {
      q: Q.skip,
      a: 'A skip does not carry a wardrobe down a walk-up. You still do the lift, and the bin often needs a permit. We handle the stairs, the tight turns, and the loading, then drive away the same visit.',
    },
    {
      q: Q.everything,
      a: 'We take most household furniture that is not hazardous. We do not take asbestos or fibro, food or liquid waste, chemicals, gas, oils, medical waste, or the other exclusions on this page. Built-in joinery that is still attached to the wall is not a furniture pickup until it is free.',
    },
    {
      q: Q.recycle,
      a: 'Furniture goes to licensed Sydney sorting and transfer facilities. Timber, metal, and some furniture streams can be diverted. We quote up to 95% diversion for the streams we can sort. Particle-board that has failed is not always recyclable. We still separate what we can.',
    },
    {
      q: Q.licensed,
      a: 'Yes. We are a licensed waste disposal carrier with public liability insurance while the crew is lifting furniture through your rooms, stairs, or lift.',
    },
  ],
  'garage-clean-out': [
    {
      q: Q.work,
      a: 'Call or send photos of the garage or shed. Once you agree the price, we sort what you marked, load the truck, sweep the floor, and leave. You can keep what you want. We take the rest.',
    },
    {
      q: Q.sameDay,
      a: 'Yes. Same day garage clean outs are available across Sydney metro when we can fit the run. Morning contact is the usual path if you need the car in that afternoon. We confirm before we roll.',
    },
    {
      q: Q.types,
      a: 'Tools, boxes, unused equipment, and mixed overflow from garages, sheds, and storage bays. Dedicated mattress-only or green-waste-only piles are better booked as those jobs. A garage that is half furniture and half bags is still a clean out: tell us what is in there.',
    },
    {
      q: Q.prices,
      a: 'Residential garage jobs are volume based. The quote is the greater of $150 minimum or $80 per cubic metre, including labour, loading, transport, and disposal. A packed double garage is a different truck fill to a few boxes by the door. Photos of the space help.',
    },
    {
      q: Q.skip,
      a: 'A skip on the driveway blocks the car you were trying to park, often needs a permit, and you still carry every box to it. Neighbours dump in open skips. We load from inside the garage, sweep, and leave with the load.',
    },
    {
      q: Q.everything,
      a: 'We take most non-hazardous garage overflow. We do not take asbestos or fibro, food or liquid waste, chemicals, gas, oils, paints as hazardous waste, e-waste as a standalone dump, medical waste, or the other exclusions listed here. Leave old paint and chemicals unless we confirm otherwise. Send a photo if you are unsure.',
    },
    {
      q: Q.recycle,
      a: 'Garage loads go to licensed Sydney sorting and transfer facilities. Metals, cardboard, timber, and a lot of household material can be diverted. We quote up to 95% diversion for the streams we can sort. Mixed garage junk is messy. We still sort when we can.',
    },
    {
      q: Q.licensed,
      a: 'Yes. National Rubbish Removal is a licensed waste disposal carrier and carries public liability insurance while the crew is working in your garage, shed, or driveway.',
    },
  ],
  'deceased-estate-clearance': [
    {
      q: Q.work,
      a: 'Call or send details of the property and the date you are working to. Once you agree the price, we come in, load what you have marked, sweep, and take it away. Keep what the family wants. We handle the rest.',
    },
    {
      q: Q.sameDay,
      a: 'Same day deceased estate clearance is available across Sydney metro when we can fit the run. Estate jobs often need a set date, not today. Ask for the window you actually need. We will not invent a slot we cannot keep.',
    },
    {
      q: Q.types,
      a: 'Furniture, boxed belongings, cupboard contents, and household items following a deceased estate. One room or the whole property. Mixed general junk without an estate context is household rubbish removal. Tell us if follow-up loads are likely.',
    },
    {
      q: Q.prices,
      a: 'Residential estate jobs are volume based. The quote is the greater of $150 minimum or $80 per cubic metre. Labour, loading, transport, and disposal are included. A full house is more than one truck more often than not. Photos and a room list keep the estimate honest.',
    },
    {
      q: Q.skip,
      a: 'An open skip on an estate street is public, slow, and often needs a permit. It also invites dumping. We load what you marked from inside the property and leave. If the house needs more than one visit, we book that on your timeline.',
    },
    {
      q: Q.everything,
      a: 'We take most household contents that are not hazardous. We do not take asbestos or fibro, food or liquid waste, chemicals, gas, oils, medical waste, e-waste as a standalone dump, or the other exclusions on this page. If a room might have fibro or chemicals, say so before we arrive.',
    },
    {
      q: Q.recycle,
      a: 'Estate loads go to licensed Sydney sorting and transfer facilities. Metals, cardboard, timber, and a lot of household material can be diverted. We quote up to 95% diversion for the streams we can sort. Estate contents are mixed. We still sort when we can rather than emptying the truck as one pile.',
    },
    {
      q: Q.licensed,
      a: 'Yes. We are a licensed waste disposal carrier with public liability insurance while the crew is working inside the property. Discretion means we do the job. We do not treat the house like a story.',
    },
  ],
};
