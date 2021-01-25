/**
 * PersonController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

	create: async function (req, res)
	{
		if (req.method == "GET")
		{
			return res.view('person/create');
		}
		if (!req.body.Person)
		{
			return res.badRequest("Form-data not received.");
		}
		await Person.create(req.body.Person);

		return res.ok("Successfully created!");
	},

	json: async function (req, res)
	{
		var persons = await Person.find();

		return res.json(persons);
	},

	index: async function (req, res)
	{
		var models = await Person.find();
		return res.view('person/index', { persons : models });
	},

	view: async function (req, res)
	{
		var model = await Person.findOne(req.params.id);

		if (!model)
		{
			return res.notFound();
		}

		return res.view('person/view', { person : model});
	},

	delete: async function (req, res) 
	{
		if (req.method == "GET")
		{
			return res.forbidden();
		}

		var models = await Person.destroy(req.params.id).fetch();

		if (models.length == 0)
		{
			return res.notFound();
		}

		return res.ok("Person Deleted.");
	},

	update: async function (req, res)
	{
		if (req.method == "GET")
		{
			var model = await Person.findOne(req.params.id);

			if (!model)
			{
				return res.notFound();
			}

			return res.view('person/update', { person : model });
		}
		else
		{
			if (!req.body.Person)
			{
				return res.badRequest("Form-data not received.");
			}

			var models = await Person.update(req.params.id).set({
				name : req.body.Person.name,
				age : req.body.Person.age
			}).fetch();

			if (models.length == 0)
			{
				return res.notFound();
			}

			return res.ok("Record updated");
		}
	},

	search: async function (req, res)
	{
		const qName = req.query.name || "";
		const qAge = parseInt(req.query.age);

		if (isNaN(qAge))
		{
			var models = await Person.find({
				where : { name : { contains : qName } },
				sort : 'name'
			});
		}
		else
		{
			var models = await Person.find({
				where : { name : { contains : qName }, age : qAge },
				sort : 'name'
			});
		}

		return res.view('person/index', { persons : models });
	},

	paginate: async function (req, res)
	{
		const qPage = Math.max(req.query.page - 1, 0) || 0;

		const numOfItemsPerPage = 2;

		var models = await Person.find({
			limit : numOfItemsPerPage,
			skip : numOfItemsPerPage * qPage
		});

		var numOfPage = Math.ceil(await Person.count() / numOfItemsPerPage);

		return res.view('person/paginate', {persons : models, count : numOfPage });
	},
  

};
