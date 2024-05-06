import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (user_id,res) => {
  const token = jwt.sign({user_id}, process.env.JWT_SECRET,{
    expiresIn: '30d',
  });

  res.cookie("jwt",token,{
    maxAge: 30*24*60*60*1000,
    httpOnly: true,
    sameSite: 'strict',
    secure: process.env.NODE_ENV !== 'development',
  });

};

export default generateTokenAndSetCookie;

