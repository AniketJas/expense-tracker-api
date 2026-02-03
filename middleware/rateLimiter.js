import ratelimiter from "../configs/upstash.js";

const ratelimit = async (req, res, next) => {
  try {
    const { success } = await ratelimiter.limit(req.userId);

    if (!success) {
      return res.status(429).json({ success: 0, message: "Too many requests. Please try again later." });
    }

    next();
  } catch (error) {
    console.log('Rate Limiter Error:', error.message);
    next(error)
  }
};

export default ratelimit;