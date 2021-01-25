/**
 * RestaurantController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

	create: async function (req, res)
	{
		var oRestaurant = req.body;

		if (req.method == "GET")
		{
			return res.view('restaurant/create');
		}
		if (!oRestaurant)
		{
			sails.log("BAD REQUEST", req.body);
			return res.badRequest("Form-data not received.");
		}
		await Restaurant.create(oRestaurant);

		if (req.wantsJSON)
		{
			return res.ok("Successfully created!");
		}
		else
		{
			return res.view('restaurant/msg', {msg: "Successfully created!"});
		}
	},

	index: async function (req, res) 
	{
	    var models = await Restaurant.find({ 
	    	where: { "highlighted": "yes" }, 
	    	sort: 'updatedAt DESC' });

	    var pageModels = models.slice(0,  Math.min(4, models.length));

	    return res.view('restaurant/index', { restaurants: pageModels });
	},

	json: async function (req, res)
	{
		var models = await Restaurant.find();

		return res.json(models);
	},

	admin: async function (req, res) 
	{
	    var models = await Restaurant.find().populate("reservedBy");
	    return res.view('restaurant/admin', { restaurants: models });
	},
	view: async function (req, res) 
	{
		var userId = 0;
		if (("session" in req) && ("role" in req.session) && ("member" == req.session.role))
		{
			userId = req.session.userId;
		}
	    var model = await Restaurant.findOne(req.params.id).populate("reservedBy", {id: userId});

	    if (!model) return res.notFound();
	    sails.log("VIEW MODEL", model);

	    return res.view('restaurant/view', { restaurant: model });

	},
	delete: async function (req, res) 
	{
	    if (req.method == "GET") 
    	{
    		return res.forbidden();
    	}

	    var models = await Restaurant.destroy(req.params.id).fetch();

	    if (models.length == 0) 
    	{
    		return res.notFound();
    	}
    	if (req.wantsJSON)
    	{
		    return res.json({message: "Restaurant deleted.", url: '/admin'});    // for ajax request
		} 
		else 
		{
		    return res.view('restaurant/msg', {msg: "Restaurant Deleted."});           // for normal request
		}
	},
	update: async function (req, res) 
	{
		var oRestaurant = req.body;
	    if (req.method == "GET") 
	    {

	        var model = await Restaurant.findOne(req.params.id);

	        if (!model) 
        	{
        		return res.notFound();
        	}

	        return res.view('restaurant/update', { restaurant: model });

	    } 
	    else 
	    {

	        if (!oRestaurant)
            {
            	return res.badRequest("Form-data not received.");
            }

	        var models = await Restaurant.update(req.params.id).set({
	            name: oRestaurant.name,
	            description: oRestaurant.description,
	            location: oRestaurant.location,
	            cuisine: oRestaurant.cuisine,
	            imageURL: oRestaurant.imageURL,
	            rating: oRestaurant.rating,
	            priceMin: oRestaurant.priceMin,
	            priceMax: oRestaurant.priceMax,
	            maxBooking: oRestaurant.maxBooking,
                highlighted: (oRestaurant.highlighted == "yes") ? "yes" : ""
	        }).fetch();
		
            sails.log(oRestaurant);

            sails.log(models);

	        if (models.length == 0) 
        	{
        		return res.notFound();
        	}
			
			if (req.wantsJSON)
			{
				return res.ok("Record updated");
			}
			else
			{
				return res.view('restaurant/msg', {msg: "Record updated"});
			}

	    }
	},
	search: async function (req, res) 
	{
	    if (req.method == "GET")
	    {
	    	var qRestaurant = {priceMin: 0,
	    					   priceMax: 10000,
	    					   ratingMin: 0,
	    					   ratingMax: 5,};
		    return res.view('restaurant/paginate', 
		    	{ restaurants: [], 
		    	restaurant: qRestaurant, 
		    	count: 1});
	    }
	    var qRestaurant = req.body;
	    const qName = qRestaurant.name || "";
	    
	    sails.log("[Session] ", qName);
	    sails.log("[Session] ", qRestaurant.priceMin, qRestaurant.priceMax);

        var models = await Restaurant.find({
            where: { name: { contains: qName },
        			 location: { contains: qRestaurant.location },
        			 cuisine: { contains: qRestaurant.cuisine },
        			 priceMin: {"<=": qRestaurant.priceMax},
        			 priceMax: {">=": qRestaurant.priceMin},
        			 rating: {">=": qRestaurant.ratingMin, "<=": qRestaurant.ratingMax}
        		},
            sort: 'name',
            // limit: 2,
            // skip: 2
        });
	    sails.log("[Session] ", models.length);

        /** paginate */
	    const qPage = Math.max(req.query.page - 1, 0) || 0;

	    const numOfItemsPerPage = 2;

	    var pageModels = models.slice(numOfItemsPerPage * qPage,  Math.min(numOfItemsPerPage * (qPage + 1), models.length));

	    var numOfPage = Math.ceil(models.length / numOfItemsPerPage);

	    return res.view('restaurant/paginate', 
	    	{ restaurants: pageModels, 
	    	restaurant: qRestaurant, 
	    	count: numOfPage});
	},
	populate: async function (req, res) 
	{
	    var model = await Restaurant.findOne(req.params.id).populate("reservedBy");

	    if (!model) return res.notFound();

	    return res.view('restaurant/booking', {users: model.reservedBy});
	},

};

