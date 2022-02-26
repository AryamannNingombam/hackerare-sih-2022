import {
  NextFunction,
  Request,
  Response
} from 'express'

const UserModel = require('models/user.model');
const jwt = require('jsonwebtoken')


exports.SignIn = async (req, res, next) => {
  try {
    const {
      email,
      password
    } = req.body
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Required values not provided!',
      })
    }

    let jwtHash = process.env.JWT_TOKEN_VALUE
    const user = await UserModel.findOne({
      email,
      verified: true
    })
    const check = await user.MatchPassword(password)
    if (!check) {
      console.log('Error')

      return res.status(400).json({
        success: false,
        message: 'Unknown server error!',
      })
    }

    const userData = await user.GetUserData()
    const token = jwt.sign({
      userData
    }, jwtHash, {
      expiresIn: '10h',
    })
    return res.status(200).json({
      success: true,
      token,
      userData: userData,
    })
  } catch (err) {
    console.log("ERROR");
    console.log(err);
    return res.status(400)
      .json({
        success: false,
        message: "UNKNOWN_SERVER_ERROR"
      })
  }


}

exports.SignUp = async (
  req, res, next
) => {
  try {
    const {
      username,
      email
    } = req.body

    //checking if the username or email already exists;
    const usernameCheck = await UserModel.find({
      username,
    })
    if (usernameCheck.length !== 0) {
      return res.status(400).json({
        success: false,
        message: 'Username already exists!',
      })
    }
    const emailCheck = await UserModel.find({
      email
    })
    if (emailCheck.length !== 0) {
      return res.status(400).json({
        success: false,
        message: 'Email already exists!',
      })
    }
    const newUser = new UserModel(req.body)

    await newUser.save()

    return res.status(200).json({
      success: true,
    })
  } catch (err) {
    console.log("ERROR");
    console.log(err);
    return res.status(400)
      .json({
        success: false,
        message: "UNKNOWN_SERVER_ERROR"
      })
  }


}