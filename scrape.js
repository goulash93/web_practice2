var osmosis = require('osmosis');

osmosis
  .get('https://www.eventbrite.com/d/va--richmond/business--events/?crt=regular&sort=best')
  .set([
  	osmosis
	  .find('div.list-card-v2')
	  .follow('a@href')
	  .set({
	    title: 'h1.listing-hero-title',
	    org: 	'a.listing-organizer-name',
	    date: 	'time.clrfix p[1]',
	    time: 	'time.clrfix p[2]',
	    venue: 	'div.event-details__data[2] p[1]',
	    address1: 	'div.event-details__data[2] p[2]',
	    address2: 	'div.event-details__data[2] p[3]',
	    img: 	'div.listing-hero picture@content',

	    //price: 	'div.ticket-box__primary div.ticket-box__info'

	    //description: 	'div.has-user-generated-content'
	    //link:	'div.listing-hero-body.a', 
	    //date: 'listing-hero-header'
	  })
	  .find('div.listing-info__body div.g-cell div.g-group div.g-cell section')
	  .set({
	  		tag1: 'span[1]',
	  		tag2: 'span[2]',
	  		tag3: 'span[3]'
	  })
	  .find('div.micro-ticket-box')
	  .click('button.micro-ticket-box__btn')
	  .find('section.dialog-content')
	  .set({
	  		ticketname: 'div.ticket-box__header h2.ticket-box__name'
	  })



	 //  .then((context, data, next) => {
		// var tags = context.find('div.g-cell div.g-group div.g-cell section');
		// 	tags.forEach(a => {
		// 		next(a, data)
		// 	});
		// })
		// .set({
		// 	tag: 'span',
		// })
	  
  ])

  //.error(console.log)
  //.debug(console.log)
  .data(item => console.log(item));