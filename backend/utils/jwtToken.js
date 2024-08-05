export const sendToken = (user, statusCode, res, message) => {
  const token = user.getJWTToken();
  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
  //options : This object defines the settings for the cookie where the token will be stored.
  //variable defining how many days the cookie should last
  //httpOnly : This flag ensures that the cookie is not accessible via JavaScript running in the browser (e.g., document.cookie). 
  //This is a security feature that helps prevent cross-site scripting (XSS) attacks.

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    message,
    token,
  });
  
};
