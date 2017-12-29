var osmosis = require('osmosis');

const categories = [
	'business-events',
	'health-events'
];

osmosis
	.get('https://www.eventbrite.com/directory/sitemap/')
	.find('div.panel_head2:first')
	.set({
		country: 'h2'
	})
	.then((context, data, next) => {
		var states = context.find('div.g-group:first');
		states.forEach(a => {
			next(a, data)
		});
	})
	.set({
		state: 'h3'
	})
	.then((context, data, next) => {
		var cities = context.find('div.g-cell:first');
		cities.forEach(a => {
			next(a, data)
		});
	})
	.set({
		city: 'a',
		url: 'a@href'
	})
	// .then((context, data, next, done) => {
	// 	categories.forEach(categorySlug => {
	// 		osmosis
	// 			.get(`https://www.eventbrite.com${data.url.replace('/events', '')}${categorySlug}`)
	// 			.find('div.list-card__title')
	// 			.set('title')
	// 			.then((context2, data2, next2) => {
	// 				data.events = data2;
	// 				next(context, data);
	// 			});
	// 	});
	// })
	// .error(console.log)
	.data(item => loadCityEvents(item));

function loadCityEvents(item) {
	osmosis.get(`https://www.eventbrite.com${item.url}`)
		.find('a.eds-media-card-content__action-link')
		.follow('@href')
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





		.data(event => console.log(item, event))
}

	// .follow('@href')
	// .find('header + div + div li > a')
	// .set('category')
	// .follow('@href')
	// .paginate('.totallink + a.button.next:first')
	// .find('p > a')
	// .follow('@href')
	// .set({
	//     'title':        'section > h2',
	//     'description':  '#postingbody',
	//     'subcategory':  'div.breadbox > span[4]',
	//     'date':         'time@datetime',
	//     'latitude':     '#map@data-latitude',
	//     'longitude':    '#map@data-longitude',
	//     'images':       ['img@src']
	// })
	
// .log(console.log)
// .error(console.log)
// .debug(console.log)