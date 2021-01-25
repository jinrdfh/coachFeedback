/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  login: async function (req, res) 
  {

	    if (req.method == "GET") 
    	{
    		//sails.log("DEBUG");
    		return res.view('user/login');
    	}

	    if (!req.body.username || !req.body.password)
	    {
	        sails.log("[req] ", req.body);
	        return res.badRequest();
	    } 

	    var user = await User.findOne({ username: req.body.username });

	    if (!user) 
		{
			
    		if (req.wantsJSON)
    		{
    			return res.ok("User not found");
    		}
    		else
    		{
    			return res.view('restaurant/msg', {msg: "User not found"});
    		}
		}

	    const match = await sails.bcrypt.compare(req.body.password, user.password);

		if (!match) 
		{
			
    		if (req.wantsJSON)
    		{
    			return res.ok("Wrong Password");
    		}
    		else
    		{
    			return res.view('restaurant/msg', {msg: "Wrong Password"});
    		}
		}
	    
	    req.session.regenerate(function (err) {

	        if (err) return res.serverError(err);

	        req.session.username = req.body.username;
	        req.session.role = user.role;
	        req.session.userId = user.id;

	        sails.log("[Session] ", req.session);
	        

    		if (req.wantsJSON)
    		{
    			return res.ok("Login successfully.");
    		}
    		else
    		{
    			return res.view('restaurant/msg', {msg: "Login successfully."});
    		}

	    });

	},
	logout: async function (req, res) 
	{
	    req.session.destroy(function (err) {
	    
	        if (err) return res.serverError(err);
	        
    		if (req.wantsJSON)
    		{
    			return res.ok("Logout successfully.");
    		}
    		else
    		{
				return res.view('restaurant/msg', {msg: "Logout successfully."});
    		}
	        
	    });
	},
	populate: async function (req, res) 
	{
	    var model = await User.findOne(req.params.id).populate("reservationList");

	    if (!model) return res.notFound();

	    // return res.json(model);
	    return res.view('restaurant/index', { restaurants: model.reservationList });

	},
	populateCourse: async function (req, res) 
	{
	    var model = await User.findOne(req.params.id).populate("courseList");

	    if (!model) return res.notFound();

	    // return res.json(model);
	    return res.view('course/indexFeed', { courses: model.courseList });

	},
	add: async function (req, res) 
	{
	    if (!await User.findOne(req.params.id)) return res.notFound();
	    
	    const thatRestaurant = await Restaurant.findOne(req.params.fk).populate("reservedBy", {id: req.params.id});

	    if (!thatRestaurant) return res.notFound();
	        
	    if (thatRestaurant.reservedBy.length)
	        return res.status(409).send("Already added.");   // conflict
	    
	    const oRes = await Restaurant.findOne(req.params.fk).populate("reservedBy");
	    const curBooking = oRes.reservedBy.length;
	    if (curBooking >= oRes.maxBooking)
	    {
	    	return res.status(401).send("The reservation is full.");
	    }
	    
	    await User.addToCollection(req.params.id, "reservationList").members(req.params.fk);
		if (req.wantsJSON)
		{
			return res.ok("Operation completed.");
		}
		else
		{
			return res.view('restaurant/msg', {msg: "Operation completed."});
		}
	},
	remove: async function (req, res) 
	{
	    if (!await User.findOne(req.params.id)) return res.notFound();
	    
	    const thatRestaurant = await Restaurant.findOne(req.params.fk).populate("reservedBy", {id: req.params.id});
	    
	    if (!thatRestaurant) return res.notFound();

	    if (!thatRestaurant.reservedBy.length)
	        return res.status(409).send("Nothing to delete.");    // conflict

	    await User.removeFromCollection(req.params.id, "reservationList").members(req.params.fk);

		if (req.wantsJSON)
		{
			return res.ok("Operation completed.");
		}
		else
		{
			return res.view('restaurant/msg', {msg: "Operation completed."});
		}

	},

};

