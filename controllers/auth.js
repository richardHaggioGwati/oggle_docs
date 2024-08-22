const User = require('../models/User')
const {StatusCodes} = require('http-status-codes')
const {BadRequestError, UnauthenticatedError} = require('../errors')

const forgotPassword = async (req, res) => {
    //TODO: implement reset password
}

const register = async (req, res) => {
	try {
		const { name, email, password } = req.body;
		
		if (!name || !email || !password) {
			return res.status(StatusCodes.BAD_REQUEST).json({ error: 'All fields are required.' });
		}
		const user = await User.create({ name, email, password });
		const token = user.createJWT();
        return res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token })
	} catch (error) {
		console.error('Registration error:', error);
		return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Internal Server Error' });
	}
}

const login = async (req, res) => {
    const {email, password} = req.body

    if (!email || !password) {
        throw new BadRequestError('Please provide email and password')
    }
    const user = await User.findOne({email})
    if (!user) {
        throw new UnauthenticatedError('Invalid Credentials')
    }
    const isPasswordCorrect = await user.comparePassword(password)
    if (!isPasswordCorrect) {
        throw new UnauthenticatedError('Invalid Credentials')
    }
    
    const token = user.createJWT()
    res.status(StatusCodes.OK).json({user: {name: user.name}, token})
}

module.exports = {
    register,
    login,
    forgotPassword,
}