// isMember.js
module.exports = async function (req, res, proceed)
{
	if ((req.session.role == 'admin') ||
	 (req.session.role == 'member'))
	{
		return proceed();
	}

	return res.forbidden();
}