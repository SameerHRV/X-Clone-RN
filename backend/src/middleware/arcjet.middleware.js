import { aj } from "../config/arcjet.js";

// Arcjet middleware for rate limiting, bot protection, and security

export const arcjetMiddleware = async (req, res, next) => {
  try {
    const decision = await aj.protect(req, {
      requested: 1, // each request consumes 1 token
    });

    // Log decision for debugging
    console.log("🛡️ Arcjet decision:", {
      isDenied: decision.isDenied(),
      reason: decision.reason,
      ip: req.ip,
      userAgent: req.get("User-Agent"),
    });

    // handle denied requests
    if (decision.isDenied()) {
      if (decision.reason.isRateLimit()) {
        console.log("⚠️ Rate limit exceeded for IP:", req.ip);
        return res.status(429).json({
          error: "Too Many Requests",
          message: "Rate limit exceeded. Please try again later.",
        });
      } else if (decision.reason.isBot()) {
        // Allow mobile app user agent
        const userAgent = req.get("User-Agent") || "";
        if (userAgent.includes("X-Clone-Mobile-App")) {
          console.log("✅ Allowing mobile app despite bot detection");
          return next();
        }
        console.log("🤖 Bot detected:", userAgent);
        return res.status(403).json({
          error: "Bot access denied",
          message: "Automated requests are not allowed.",
        });
      } else {
        console.log("🚫 Access denied by security policy");
        return res.status(403).json({
          error: "Forbidden",
          message: "Access denied by security policy.",
        });
      }
    }

    // check for spoofed bots
    if (decision.results.some((result) => result.reason.isBot() && result.reason.isSpoofed())) {
      console.log("🕷️ Spoofed bot detected");
      return res.status(403).json({
        error: "Spoofed bot detected",
        message: "Malicious bot activity detected.",
      });
    }

    next();
  } catch (error) {
    console.error("Arcjet middleware error:", error);
    // allow request to continue if Arcjet fails
    next();
  }
};
