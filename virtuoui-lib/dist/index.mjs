// src/components/Button/Button.jsx
import React, { useState } from "react";
var Button = ({
  text = "Click me",
  onClick = () => {
  },
  color = "#6366f1",
  textColor = "#ffffff",
  size = "md",
  variant = "filled",
  disabled = false,
  fullWidth = false,
  icon = null
}) => {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);
  const sizes = {
    sm: { padding: "7px 14px", fontSize: "13px", borderRadius: "7px" },
    md: { padding: "10px 22px", fontSize: "15px", borderRadius: "9px" },
    lg: { padding: "14px 30px", fontSize: "17px", borderRadius: "11px" }
  };
  const getVariantStyle = () => {
    if (variant === "outline") {
      return {
        background: hovered ? color + "12" : "transparent",
        color,
        border: `2px solid ${color}`
      };
    }
    if (variant === "ghost") {
      return {
        background: hovered ? color + "18" : "transparent",
        color,
        border: "none"
      };
    }
    return {
      background: hovered ? shadeColor(color, -15) : color,
      color: textColor,
      border: "none"
    };
  };
  const style = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    fontFamily: "system-ui, sans-serif",
    fontWeight: 600,
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1,
    width: fullWidth ? "100%" : "auto",
    boxShadow: variant === "filled" && !disabled && !pressed ? `0 4px 14px ${color}44` : "none",
    transform: pressed && !disabled ? "scale(0.96)" : "scale(1)",
    transition: "all 0.15s ease",
    ...sizes[size],
    ...getVariantStyle()
  };
  return /* @__PURE__ */ React.createElement(
    "button",
    {
      style,
      onClick: !disabled ? onClick : void 0,
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => {
        setHovered(false);
        setPressed(false);
      },
      onMouseDown: () => !disabled && setPressed(true),
      onMouseUp: () => setPressed(false),
      disabled
    },
    icon && /* @__PURE__ */ React.createElement("span", { style: { display: "flex", alignItems: "center" } }, icon),
    text
  );
};
function shadeColor(hex, percent) {
  const num = parseInt(hex.replace("#", ""), 16);
  const r = Math.min(255, Math.max(0, (num >> 16) + percent));
  const g = Math.min(255, Math.max(0, (num >> 8 & 255) + percent));
  const b = Math.min(255, Math.max(0, (num & 255) + percent));
  return `rgb(${r},${g},${b})`;
}

// src/components/EcommerceCard/EcommerceCard.jsx
import React2, { useState as useState2 } from "react";
var EcommerceCard = ({
  image = "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80",
  title = "Wireless Headphones",
  price = 129.99,
  currency = "$",
  discount = 0,
  rating = 4.5,
  reviewCount = 124,
  badge = "Best Seller",
  accent = "#6366f1",
  bg = "#0f172a",
  onAddToCart = () => {
  }
}) => {
  const [hovered, setHovered] = useState2(false);
  const [wishlisted, setWishlisted] = useState2(false);
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(
          /* @__PURE__ */ React2.createElement("svg", { key: i, width: "14", height: "14", viewBox: "0 0 24 24", fill: "#fbbf24", stroke: "none" }, /* @__PURE__ */ React2.createElement("polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" }))
        );
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(
          /* @__PURE__ */ React2.createElement("svg", { key: i, width: "14", height: "14", viewBox: "0 0 24 24", fill: "#fbbf24", stroke: "none" }, /* @__PURE__ */ React2.createElement("defs", null, /* @__PURE__ */ React2.createElement("linearGradient", { id: "half", x1: "0", x2: "100%", y1: "0", y2: "0" }, /* @__PURE__ */ React2.createElement("stop", { offset: "50%", stopColor: "#fbbf24" }), /* @__PURE__ */ React2.createElement("stop", { offset: "50%", stopColor: "rgba(255,255,255,0.1)" }))), /* @__PURE__ */ React2.createElement("polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2", fill: "url(#half)" }))
        );
      } else {
        stars.push(
          /* @__PURE__ */ React2.createElement("svg", { key: i, width: "14", height: "14", viewBox: "0 0 24 24", fill: "rgba(255,255,255,0.1)", stroke: "none" }, /* @__PURE__ */ React2.createElement("polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" }))
        );
      }
    }
    return stars;
  };
  return /* @__PURE__ */ React2.createElement(
    "div",
    {
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
      style: {
        background: bg,
        borderRadius: "16px",
        overflow: "hidden",
        width: "280px",
        border: "1px solid " + (hovered ? alpha(accent, 0.2) : "rgba(255,255,255,0.07)"),
        fontFamily: "system-ui,sans-serif",
        transition: "transform 0.2s, box-shadow 0.2s",
        transform: hovered ? "translateY(-4px)" : "translateY(0px)",
        boxShadow: hovered ? "0 12px 30px rgba(0,0,0,0.4)" : "0 4px 16px rgba(0,0,0,0.3)"
      }
    },
    /* @__PURE__ */ React2.createElement("div", { style: { position: "relative" } }, /* @__PURE__ */ React2.createElement(
      "img",
      {
        src: image,
        alt: title,
        style: {
          width: "100%",
          height: "200px",
          objectFit: "cover",
          transition: "transform 0.4s",
          transform: hovered ? "scale(1.05)" : "scale(1)"
        }
      }
    ), badge && /* @__PURE__ */ React2.createElement("div", { style: {
      position: "absolute",
      top: "10px",
      left: "10px",
      padding: "4px 10px",
      borderRadius: "20px",
      background: alpha(accent, 0.9),
      fontSize: "10px",
      fontWeight: "700",
      color: "#fff",
      textTransform: "uppercase",
      letterSpacing: "0.5px"
    } }, badge), /* @__PURE__ */ React2.createElement(
      "button",
      {
        onClick: () => setWishlisted(!wishlisted),
        style: {
          position: "absolute",
          top: "10px",
          right: "10px",
          width: "32px",
          height: "32px",
          borderRadius: "50%",
          background: "rgba(0,0,0,0.5)",
          border: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer"
        }
      },
      /* @__PURE__ */ React2.createElement(
        "svg",
        {
          width: "16",
          height: "16",
          viewBox: "0 0 24 24",
          fill: wishlisted ? "#ef4444" : "none",
          stroke: wishlisted ? "#ef4444" : "#fff",
          strokeWidth: "2"
        },
        /* @__PURE__ */ React2.createElement("path", { d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" })
      )
    )),
    /* @__PURE__ */ React2.createElement("div", { style: { padding: "16px" } }, /* @__PURE__ */ React2.createElement("h3", { style: {
      fontSize: "16px",
      fontWeight: "700",
      color: "#fff",
      margin: "0 0 8px",
      lineHeight: 1.4
    } }, title), /* @__PURE__ */ React2.createElement("div", { style: {
      display: "flex",
      alignItems: "center",
      gap: "6px",
      marginBottom: "12px"
    } }, /* @__PURE__ */ React2.createElement("div", { style: { display: "flex" } }, renderStars()), /* @__PURE__ */ React2.createElement("span", { style: {
      fontSize: "12px",
      color: "rgba(255,255,255,0.45)"
    } }, "(", reviewCount, ")")), /* @__PURE__ */ React2.createElement("div", { style: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      marginBottom: "16px"
    } }, /* @__PURE__ */ React2.createElement("span", { style: {
      fontSize: "20px",
      fontWeight: "800",
      color: "#fff"
    } }, currency, price.toFixed(2)), discount > 0 && /* @__PURE__ */ React2.createElement("span", { style: {
      fontSize: "14px",
      fontWeight: "500",
      color: "#86efac",
      textDecoration: "line-through"
    } }, currency, (price + price * discount / 100).toFixed(2))), /* @__PURE__ */ React2.createElement(
      "button",
      {
        onClick: onAddToCart,
        style: {
          width: "100%",
          padding: "12px",
          borderRadius: "10px",
          border: "none",
          background: "linear-gradient(135deg, " + accent + ", " + alpha(accent, 0.7) + ")",
          color: "#fff",
          fontSize: "14px",
          fontWeight: "700",
          cursor: "pointer",
          fontFamily: "inherit",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px"
        }
      },
      /* @__PURE__ */ React2.createElement("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "#fff", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React2.createElement("circle", { cx: "9", cy: "21", r: "1" }), /* @__PURE__ */ React2.createElement("circle", { cx: "20", cy: "21", r: "1" }), /* @__PURE__ */ React2.createElement("path", { d: "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" })),
      "Add to Cart"
    ))
  );
};

// src/components/ProfileCard/ProfileCard.jsx
import React3 from "react";
var ProfileCard = ({
  name = "John Doe",
  bio = "Software Engineer | Tech Enthusiast",
  avatar = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=600&q=80",
  accent = "#6366f1",
  bg = "#0f172a",
  onFollowClick = () => {
  },
  onMessageClick = () => {
  }
}) => {
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  return /* @__PURE__ */ React3.createElement("div", { style: { background: bg, borderRadius: "20px", padding: "24px", width: "280px", color: "#fff", fontFamily: "system-ui,sans-serif", boxShadow: "0 10px 40px rgba(0,0,0,0.5)", border: "1px solid " + alpha(accent, 0.25), position: "relative", overflow: "hidden" } }, /* @__PURE__ */ React3.createElement("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" } }, /* @__PURE__ */ React3.createElement("div", { style: { width: "80px", height: "80px", borderRadius: "50%", overflow: "hidden", border: "3px solid " + alpha(accent, 0.3) } }, /* @__PURE__ */ React3.createElement("img", { src: avatar, alt: name, style: { width: "100%", height: "100%", objectFit: "cover" } })), /* @__PURE__ */ React3.createElement("div", { style: { fontSize: "18px", fontWeight: "700", color: "#fff" } }, name), /* @__PURE__ */ React3.createElement("div", { style: { fontSize: "13px", color: "rgba(255,255,255,0.45)", textAlign: "center" } }, bio), /* @__PURE__ */ React3.createElement("div", { style: { display: "flex", gap: "12px", marginTop: "12px" } }, /* @__PURE__ */ React3.createElement("button", { onClick: onFollowClick, style: { padding: "8px 16px", borderRadius: "8px", border: "none", background: "linear-gradient(135deg, " + accent + ", " + alpha(accent, 0.7) + ")", color: "#fff", fontSize: "13px", fontWeight: "700", cursor: "pointer", fontFamily: "inherit" } }, "Follow"), /* @__PURE__ */ React3.createElement("button", { onClick: onMessageClick, style: { padding: "8px 16px", borderRadius: "8px", border: "1px solid " + alpha(accent, 0.3), background: "transparent", color: accent, fontSize: "13px", fontWeight: "700", cursor: "pointer", fontFamily: "inherit" } }, "Message"))));
};

// src/components/Card/Card.jsx
import React4, { useState as useState3 } from "react";
var Card = ({
  title = "Card Title",
  description = "This is a description of the card content.",
  image = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80",
  accent = "#6366f1",
  bg = "#0f172a",
  onClick = () => {
  }
}) => {
  const [hovered, setHovered] = useState3(false);
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  return /* @__PURE__ */ React4.createElement(
    "div",
    {
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
      onClick,
      style: {
        background: bg,
        borderRadius: "20px",
        overflow: "hidden",
        width: "300px",
        border: "1px solid " + (hovered ? alpha(accent, 0.3) : "rgba(255,255,255,0.07)"),
        fontFamily: "system-ui,sans-serif",
        transition: "transform 0.25s, box-shadow 0.25s",
        transform: hovered ? "translateY(-4px)" : "translateY(0px)",
        boxShadow: hovered ? "0 16px 40px rgba(0,0,0,0.5)" : "0 4px 20px rgba(0,0,0,0.3)",
        cursor: "pointer"
      }
    },
    /* @__PURE__ */ React4.createElement("div", { style: { position: "relative", width: "100%", height: "180px", overflow: "hidden" } }, /* @__PURE__ */ React4.createElement("img", { src: image, alt: title, style: { width: "100%", height: "100%", objectFit: "cover", transform: hovered ? "scale(1.05)" : "scale(1)", transition: "transform 0.4s ease" } }), /* @__PURE__ */ React4.createElement("div", { style: { position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)" } })),
    /* @__PURE__ */ React4.createElement("div", { style: { padding: "18px" } }, /* @__PURE__ */ React4.createElement("h3", { style: { fontSize: "15px", fontWeight: "700", color: "#fff", margin: "0 0 8px", lineHeight: 1.4 } }, title), /* @__PURE__ */ React4.createElement("p", { style: { fontSize: "13px", color: "rgba(255,255,255,0.45)", lineHeight: 1.65, margin: "0 0 18px" } }, description))
  );
};

// src/components/NavBar/NavBar.jsx
import React5, { useState as useState4, useEffect } from "react";
var NavBar = ({
  logo = "VirtualAI",
  links = ["Home", "Features", "Pricing", "Blog"],
  ctaText = "Get Started",
  accent = "#6366f1",
  bg = "#0f172a",
  onCtaClick = () => {
  },
  onLinkClick = () => {
  }
}) => {
  const [active, setActive] = useState4("Home");
  const [isMobile, setIsMobile] = useState4(false);
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return /* @__PURE__ */ React5.createElement("nav", { style: { background: bg, borderBottom: "1px solid rgba(255,255,255,0.06)", fontFamily: "system-ui,sans-serif", width: "100%", boxSizing: "border-box", borderRadius: "12px" } }, /* @__PURE__ */ React5.createElement("div", { style: { maxWidth: "1100px", margin: "0 auto", padding: "0 20px", height: "60px", display: "flex", alignItems: "center", justifyContent: "space-between" } }, /* @__PURE__ */ React5.createElement("div", { style: { display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" } }, /* @__PURE__ */ React5.createElement("div", { style: { width: "28px", height: "28px", borderRadius: "8px", background: "linear-gradient(135deg, " + accent + ", " + alpha(accent, 0.6) + ")", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: "800", color: "#fff" } }, logo[0]), /* @__PURE__ */ React5.createElement("span", { style: { fontSize: "15px", fontWeight: "800", color: "#fff" } }, logo)), !isMobile && /* @__PURE__ */ React5.createElement("div", { style: { display: "flex", gap: "2px" } }, links.map((link) => /* @__PURE__ */ React5.createElement("button", { key: link, onClick: () => {
    setActive(link);
    onLinkClick(link);
  }, style: { background: active === link ? alpha(accent, 0.12) : "transparent", border: "none", padding: "7px 16px", borderRadius: "9px", fontSize: "14px", fontWeight: active === link ? "700" : "500", color: active === link ? accent : "rgba(255,255,255,0.5)", cursor: "pointer", fontFamily: "inherit" } }, link))), /* @__PURE__ */ React5.createElement("button", { onClick: onCtaClick, style: { padding: "8px 18px", borderRadius: "10px", border: "none", background: "linear-gradient(135deg, " + accent + ", " + alpha(accent, 0.75) + ")", color: "#fff", fontSize: "13px", fontWeight: "700", cursor: "pointer", fontFamily: "inherit" } }, ctaText)));
};

// src/components/SideBar/SideBar.jsx
import React6, { useState as useState5 } from "react";
var SideBar = ({
  items = ["Dashboard", "Projects", "Team", "Calendar", "Messages"],
  activeItem = "Dashboard",
  logo = "Company",
  accent = "#6366f1",
  bg = "#0f172a",
  width = "280px",
  onItemClick = () => {
  }
}) => {
  const [hoveredItem, setHoveredItem] = useState5(null);
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  return /* @__PURE__ */ React6.createElement("div", { style: {
    width,
    background: bg,
    height: "100vh",
    borderRight: "1px solid rgba(255,255,255,0.08)",
    fontFamily: "system-ui,sans-serif",
    display: "flex",
    flexDirection: "column",
    padding: "24px 0"
  } }, /* @__PURE__ */ React6.createElement("div", { style: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "0 24px",
    marginBottom: "32px"
  } }, /* @__PURE__ */ React6.createElement("div", { style: {
    width: "32px",
    height: "32px",
    borderRadius: "8px",
    background: "linear-gradient(135deg, " + accent + ", " + alpha(accent, 0.7) + ")",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontWeight: "700",
    fontSize: "14px"
  } }, logo[0]), /* @__PURE__ */ React6.createElement("div", { style: { color: "#fff", fontWeight: "700", fontSize: "16px" } }, logo)), /* @__PURE__ */ React6.createElement("div", { style: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    padding: "0 16px"
  } }, items.map((item) => /* @__PURE__ */ React6.createElement(
    "button",
    {
      key: item,
      onClick: () => onItemClick(item),
      onMouseEnter: () => setHoveredItem(item),
      onMouseLeave: () => setHoveredItem(null),
      style: {
        background: activeItem === item ? alpha(accent, 0.15) : hoveredItem === item ? "rgba(255,255,255,0.03)" : "transparent",
        border: "none",
        padding: "10px 16px",
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        cursor: "pointer",
        color: activeItem === item ? accent : "rgba(255,255,255,0.7)",
        fontWeight: activeItem === item ? "600" : "500",
        fontSize: "14px",
        transition: "all 0.2s"
      }
    },
    /* @__PURE__ */ React6.createElement("div", { style: {
      width: "24px",
      height: "24px",
      borderRadius: "6px",
      background: activeItem === item ? alpha(accent, 0.2) : "rgba(255,255,255,0.05)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    } }, /* @__PURE__ */ React6.createElement("div", { style: {
      width: "4px",
      height: "4px",
      borderRadius: "50%",
      background: activeItem === item ? accent : "rgba(255,255,255,0.3)"
    } })),
    item
  ))), /* @__PURE__ */ React6.createElement("div", { style: {
    marginTop: "auto",
    padding: "16px 24px",
    borderTop: "1px solid rgba(255,255,255,0.08)"
  } }, /* @__PURE__ */ React6.createElement("div", { style: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "8px 12px",
    borderRadius: "8px",
    background: "rgba(255,255,255,0.03)",
    cursor: "pointer"
  } }, /* @__PURE__ */ React6.createElement("div", { style: {
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    background: "rgba(255,255,255,0.1)"
  } }), /* @__PURE__ */ React6.createElement("div", null, /* @__PURE__ */ React6.createElement("div", { style: { color: "#fff", fontSize: "13px", fontWeight: "600" } }, "John Doe"), /* @__PURE__ */ React6.createElement("div", { style: { color: "rgba(255,255,255,0.4)", fontSize: "11px" } }, "Admin")))));
};

// src/components/LoginForm/LoginForm.jsx
import React7, { useState as useState6 } from "react";
var LoginForm = ({
  title = "Welcome back",
  subtitle = "Sign in to your account",
  emailLabel = "Email address",
  passwordLabel = "Password",
  rememberLabel = "Remember me",
  forgotLabel = "Forgot password?",
  submitText = "Sign in",
  noAccountText = "Don't have an account?",
  signupText = "Sign up",
  accent = "#6366f1",
  bg = "#1e293b",
  onSubmit = (email, password) => console.log(email, password),
  onForgotClick = () => {
  },
  onSignupClick = () => {
  }
}) => {
  const [email, setEmail] = useState6("");
  const [password, setPassword] = useState6("");
  const [remember, setRemember] = useState6(false);
  const [isSubmitting, setIsSubmitting] = useState6(false);
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      onSubmit(email, password);
      setIsSubmitting(false);
    }, 1e3);
  };
  return /* @__PURE__ */ React7.createElement("div", { style: {
    background: bg,
    borderRadius: "16px",
    padding: "32px",
    width: "360px",
    border: "1px solid rgba(255,255,255,0.08)",
    boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
    fontFamily: "system-ui,sans-serif"
  } }, /* @__PURE__ */ React7.createElement("div", { style: { marginBottom: "28px" } }, /* @__PURE__ */ React7.createElement("h2", { style: { fontSize: "22px", fontWeight: "700", color: "#fff", margin: "0 0 6px" } }, title), /* @__PURE__ */ React7.createElement("p", { style: { fontSize: "14px", color: "rgba(255,255,255,0.5)", margin: 0 } }, subtitle)), /* @__PURE__ */ React7.createElement("form", { onSubmit: handleSubmit }, /* @__PURE__ */ React7.createElement("div", { style: { marginBottom: "18px" } }, /* @__PURE__ */ React7.createElement("label", { style: { display: "block", fontSize: "13px", fontWeight: "600", color: "rgba(255,255,255,0.7)", marginBottom: "8px" } }, emailLabel), /* @__PURE__ */ React7.createElement(
    "input",
    {
      type: "email",
      value: email,
      onChange: (e) => setEmail(e.target.value),
      required: true,
      style: {
        width: "100%",
        padding: "12px 14px",
        borderRadius: "10px",
        border: "1px solid rgba(255,255,255,0.1)",
        background: "rgba(255,255,255,0.05)",
        color: "#fff",
        fontSize: "14px",
        outline: "none",
        transition: "border-color 0.2s",
        boxSizing: "border-box"
      }
    }
  )), /* @__PURE__ */ React7.createElement("div", { style: { marginBottom: "18px" } }, /* @__PURE__ */ React7.createElement("label", { style: { display: "block", fontSize: "13px", fontWeight: "600", color: "rgba(255,255,255,0.7)", marginBottom: "8px" } }, passwordLabel), /* @__PURE__ */ React7.createElement(
    "input",
    {
      type: "password",
      value: password,
      onChange: (e) => setPassword(e.target.value),
      required: true,
      style: {
        width: "100%",
        padding: "12px 14px",
        borderRadius: "10px",
        border: "1px solid rgba(255,255,255,0.1)",
        background: "rgba(255,255,255,0.05)",
        color: "#fff",
        fontSize: "14px",
        outline: "none",
        transition: "border-color 0.2s",
        boxSizing: "border-box"
      }
    }
  )), /* @__PURE__ */ React7.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" } }, /* @__PURE__ */ React7.createElement("label", { style: { display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "rgba(255,255,255,0.7)", cursor: "pointer" } }, /* @__PURE__ */ React7.createElement(
    "input",
    {
      type: "checkbox",
      checked: remember,
      onChange: (e) => setRemember(e.target.checked),
      style: {
        width: "16px",
        height: "16px",
        borderRadius: "4px",
        border: "1px solid " + alpha(accent, 0.5),
        background: remember ? accent : "transparent",
        cursor: "pointer"
      }
    }
  ), rememberLabel), /* @__PURE__ */ React7.createElement(
    "button",
    {
      type: "button",
      onClick: onForgotClick,
      style: {
        background: "none",
        border: "none",
        color: accent,
        fontSize: "13px",
        fontWeight: "600",
        cursor: "pointer",
        padding: 0
      }
    },
    forgotLabel
  )), /* @__PURE__ */ React7.createElement(
    "button",
    {
      type: "submit",
      disabled: isSubmitting,
      style: {
        width: "100%",
        padding: "14px",
        borderRadius: "10px",
        border: "none",
        background: "linear-gradient(135deg, " + accent + ", " + alpha(accent, 0.7) + ")",
        color: "#fff",
        fontSize: "14px",
        fontWeight: "700",
        cursor: "pointer",
        opacity: isSubmitting ? 0.8 : 1,
        transition: "opacity 0.2s",
        marginBottom: "20px"
      }
    },
    isSubmitting ? "Signing in..." : submitText
  ), /* @__PURE__ */ React7.createElement("div", { style: { textAlign: "center", fontSize: "13px", color: "rgba(255,255,255,0.5)" } }, noAccountText, /* @__PURE__ */ React7.createElement(
    "button",
    {
      type: "button",
      onClick: onSignupClick,
      style: {
        background: "none",
        border: "none",
        color: accent,
        fontWeight: "600",
        cursor: "pointer",
        padding: 0,
        fontSize: "inherit"
      }
    },
    signupText
  ))));
};

// src/components/SearchBar/SearchBar.jsx
import React8, { useState as useState7 } from "react";
var SearchBar = ({
  placeholder = "Search...",
  accent = "#6366f1",
  bg = "#0f172a",
  width = "400px",
  onSearch = (query) => {
  },
  debounceTime = 300
}) => {
  const [query, setQuery] = useState7("");
  const [isFocused, setIsFocused] = useState7(false);
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch(query);
    }
  };
  return /* @__PURE__ */ React8.createElement("div", { style: {
    position: "relative",
    width,
    maxWidth: "100%"
  } }, /* @__PURE__ */ React8.createElement(
    "input",
    {
      type: "text",
      value: query,
      onChange: handleChange,
      onKeyDown: handleKeyDown,
      onFocus: () => setIsFocused(true),
      onBlur: () => setIsFocused(false),
      placeholder,
      style: {
        width: "100%",
        padding: "12px 16px 12px 42px",
        borderRadius: "12px",
        border: "1px solid " + (isFocused ? alpha(accent, 0.4) : "rgba(255,255,255,0.1)"),
        background: "rgba(255,255,255,0.03)",
        color: "#fff",
        fontSize: "14px",
        fontFamily: "system-ui, sans-serif",
        outline: "none",
        transition: "border 0.2s, box-shadow 0.2s",
        boxShadow: isFocused ? "0 0 0 3px " + alpha(accent, 0.15) : "none"
      }
    }
  ), /* @__PURE__ */ React8.createElement("div", { style: {
    position: "absolute",
    left: "16px",
    top: "50%",
    transform: "translateY(-50%)",
    color: isFocused ? accent : "rgba(255,255,255,0.4)",
    transition: "color 0.2s"
  } }, /* @__PURE__ */ React8.createElement("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React8.createElement("circle", { cx: "11", cy: "11", r: "8" }), /* @__PURE__ */ React8.createElement("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" }))), query && /* @__PURE__ */ React8.createElement(
    "button",
    {
      onClick: () => {
        setQuery("");
        onSearch("");
      },
      style: {
        position: "absolute",
        right: "12px",
        top: "50%",
        transform: "translateY(-50%)",
        background: "transparent",
        border: "none",
        color: "rgba(255,255,255,0.3)",
        cursor: "pointer",
        padding: "4px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "color 0.2s"
      }
    },
    /* @__PURE__ */ React8.createElement("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React8.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), /* @__PURE__ */ React8.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }))
  ));
};

// src/components/Spinner/Spinner.jsx
import React9 from "react";
var Spinner = ({
  size = "40px",
  color = "#6366f1",
  speed = "0.8s",
  thickness = "4px",
  bg = "rgba(255,255,255,0.1)"
}) => {
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  return /* @__PURE__ */ React9.createElement("div", { style: {
    width: size,
    height: size,
    borderRadius: "50%",
    border: thickness + " solid " + bg,
    borderTopColor: color,
    animation: "spin " + speed + " linear infinite",
    margin: "0 auto"
  } });
};

// src/components/DataTable/DataTable.jsx
import React10, { useState as useState8 } from "react";
var DataTable = ({
  columns = ["Name", "Email", "Status", "Role"],
  data = [
    ["Alex Johnson", "alex@example.com", "Active", "Admin"],
    ["Maria Garcia", "maria@example.com", "Pending", "User"],
    ["James Smith", "james@example.com", "Active", "Editor"],
    ["Sarah Williams", "sarah@example.com", "Inactive", "Viewer"]
  ],
  accent = "#6366f1",
  bg = "#0f172a",
  borderColor = "rgba(255,255,255,0.08)",
  onRowClick = () => {
  }
}) => {
  const [sortConfig, setSortConfig] = useState8({ key: null, direction: "asc" });
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  const sortedData = [...data];
  if (sortConfig.key !== null) {
    sortedData.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "asc" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "asc" ? 1 : -1;
      }
      return 0;
    });
  }
  const requestSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };
  return /* @__PURE__ */ React10.createElement("div", { style: {
    background: bg,
    borderRadius: "12px",
    overflow: "hidden",
    border: "1px solid " + borderColor,
    fontFamily: "system-ui, sans-serif",
    width: "100%",
    maxWidth: "800px",
    boxShadow: "0 10px 40px rgba(0,0,0,0.4)"
  } }, /* @__PURE__ */ React10.createElement("div", { style: {
    display: "grid",
    gridTemplateColumns: `repeat(${columns.length}, 1fr)`,
    background: alpha(accent, 0.05),
    borderBottom: "1px solid " + borderColor
  } }, columns.map((column, index) => /* @__PURE__ */ React10.createElement(
    "div",
    {
      key: index,
      onClick: () => requestSort(index),
      style: {
        padding: "14px 16px",
        fontWeight: "700",
        fontSize: "13px",
        color: "rgba(255,255,255,0.7)",
        textTransform: "uppercase",
        letterSpacing: "0.5px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: "6px",
        borderRight: index < columns.length - 1 ? "1px solid " + borderColor : "none"
      }
    },
    column,
    sortConfig.key === index && /* @__PURE__ */ React10.createElement("span", { style: { fontSize: "12px" } }, sortConfig.direction === "asc" ? "\u2191" : "\u2193")
  ))), sortedData.map((row, rowIndex) => /* @__PURE__ */ React10.createElement(
    "div",
    {
      key: rowIndex,
      onClick: () => onRowClick(row),
      style: {
        display: "grid",
        gridTemplateColumns: `repeat(${columns.length}, 1fr)`,
        borderBottom: rowIndex < sortedData.length - 1 ? "1px solid " + borderColor : "none",
        cursor: "pointer",
        transition: "background 0.2s",
        "&:hover": {
          background: alpha(accent, 0.03)
        }
      }
    },
    row.map((cell, cellIndex) => /* @__PURE__ */ React10.createElement(
      "div",
      {
        key: cellIndex,
        style: {
          padding: "12px 16px",
          fontSize: "14px",
          color: cellIndex === 2 ? cell === "Active" ? "#059669" : cell === "Pending" ? "#f59e0b" : "#ef4444" : "rgba(255,255,255,0.8)",
          borderRight: cellIndex < columns.length - 1 ? "1px solid " + borderColor : "none",
          fontWeight: cellIndex === 0 ? "600" : "400"
        }
      },
      cell
    ))
  )));
};

// src/components/DatePicker/DatePicker.jsx
import React11, { useState as useState9, useRef, useEffect as useEffect2 } from "react";
var DatePicker = ({
  value = null,
  onChange = () => {
  },
  placeholder = "Select date",
  color = "#6366f1",
  textColor = "#1f2937",
  size = "md",
  variant = "filled",
  disabled = false,
  fullWidth = false,
  icon = null
}) => {
  const [hovered, setHovered] = useState9(false);
  const [pressed, setPressed] = useState9(false);
  const [open, setOpen] = useState9(false);
  const [viewDate, setViewDate] = useState9(value ? new Date(value) : /* @__PURE__ */ new Date());
  const [selected, setSelected] = useState9(value ? new Date(value) : null);
  const containerRef = useRef(null);
  useEffect2(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const sizes = {
    sm: { padding: "7px 14px", fontSize: "13px", borderRadius: "7px" },
    md: { padding: "10px 22px", fontSize: "15px", borderRadius: "9px" },
    lg: { padding: "14px 30px", fontSize: "17px", borderRadius: "11px" }
  };
  const getVariantStyle = () => {
    if (variant === "outline") {
      return {
        background: hovered ? color + "12" : "transparent",
        color,
        border: `2px solid ${color}`
      };
    }
    if (variant === "ghost") {
      return {
        background: hovered ? color + "18" : "transparent",
        color,
        border: "none"
      };
    }
    return {
      background: hovered ? shadeColor2(color, -15) : "#ffffff",
      color: textColor,
      border: `1.5px solid ${hovered ? shadeColor2(color, -15) : "#e5e7eb"}`
    };
  };
  const triggerStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "8px",
    fontFamily: "system-ui, sans-serif",
    fontWeight: 600,
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1,
    width: fullWidth ? "100%" : "auto",
    minWidth: "180px",
    boxShadow: variant === "filled" && !disabled && !pressed ? `0 4px 14px ${color}22` : "none",
    transform: pressed && !disabled ? "scale(0.96)" : "scale(1)",
    transition: "all 0.15s ease",
    ...sizes[size],
    ...getVariantStyle()
  };
  const formatDate = (date) => {
    if (!date) return placeholder;
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  };
  const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();
  const buildCalendarDays = () => {
    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();
    const total = daysInMonth(year, month);
    const startOffset = firstDayOfMonth(year, month);
    const days = [];
    for (let i = 0; i < startOffset; i++) days.push(null);
    for (let d = 1; d <= total; d++) days.push(d);
    return days;
  };
  const isSameDay = (a, b) => a && b && a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
  const handleSelectDay = (day) => {
    if (!day) return;
    const newDate = new Date(viewDate.getFullYear(), viewDate.getMonth(), day);
    setSelected(newDate);
    onChange(newDate);
    setOpen(false);
  };
  const changeMonth = (delta) => {
    setViewDate(
      new Date(viewDate.getFullYear(), viewDate.getMonth() + delta, 1)
    );
  };
  const monthLabel = viewDate.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric"
  });
  const weekdayLabels = ["S", "M", "T", "W", "T", "F", "S"];
  return /* @__PURE__ */ React11.createElement(
    "div",
    {
      ref: containerRef,
      style: { position: "relative", display: fullWidth ? "block" : "inline-block" }
    },
    /* @__PURE__ */ React11.createElement(
      "button",
      {
        style: triggerStyle,
        onClick: !disabled ? () => setOpen((o) => !o) : void 0,
        onMouseEnter: () => setHovered(true),
        onMouseLeave: () => {
          setHovered(false);
          setPressed(false);
        },
        onMouseDown: () => !disabled && setPressed(true),
        onMouseUp: () => setPressed(false),
        disabled
      },
      /* @__PURE__ */ React11.createElement("span", { style: { display: "flex", alignItems: "center", gap: "8px" } }, icon || /* @__PURE__ */ React11.createElement(CalendarIcon, { color: variant === "filled" ? textColor : color }), /* @__PURE__ */ React11.createElement("span", null, formatDate(selected)))
    ),
    open && !disabled && /* @__PURE__ */ React11.createElement(
      "div",
      {
        style: {
          position: "absolute",
          top: "calc(100% + 8px)",
          left: 0,
          zIndex: 20,
          background: "#ffffff",
          border: "1.5px solid #e5e7eb",
          borderRadius: "12px",
          boxShadow: "0 12px 32px rgba(0,0,0,0.12)",
          padding: "16px",
          width: "280px",
          fontFamily: "system-ui, sans-serif"
        }
      },
      /* @__PURE__ */ React11.createElement(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "12px"
          }
        },
        /* @__PURE__ */ React11.createElement(NavButton, { onClick: () => changeMonth(-1), color }, "\u2039"),
        /* @__PURE__ */ React11.createElement("span", { style: { fontWeight: 600, fontSize: "14px", color: "#1f2937" } }, monthLabel),
        /* @__PURE__ */ React11.createElement(NavButton, { onClick: () => changeMonth(1), color }, "\u203A")
      ),
      /* @__PURE__ */ React11.createElement(
        "div",
        {
          style: {
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            gap: "4px",
            marginBottom: "6px"
          }
        },
        weekdayLabels.map((w, i) => /* @__PURE__ */ React11.createElement(
          "div",
          {
            key: i,
            style: {
              textAlign: "center",
              fontSize: "11px",
              fontWeight: 600,
              color: "#9ca3af"
            }
          },
          w
        ))
      ),
      /* @__PURE__ */ React11.createElement(
        "div",
        {
          style: {
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            gap: "4px"
          }
        },
        buildCalendarDays().map((day, i) => {
          const dateObj = day ? new Date(viewDate.getFullYear(), viewDate.getMonth(), day) : null;
          const isSelected = isSameDay(dateObj, selected);
          const isToday = isSameDay(dateObj, /* @__PURE__ */ new Date());
          return /* @__PURE__ */ React11.createElement(
            "button",
            {
              key: i,
              onClick: () => handleSelectDay(day),
              disabled: !day,
              style: {
                aspectRatio: "1",
                border: "none",
                borderRadius: "7px",
                background: isSelected ? color : "transparent",
                color: isSelected ? "#ffffff" : day ? "#1f2937" : "transparent",
                fontWeight: isToday && !isSelected ? 700 : 500,
                fontSize: "13px",
                cursor: day ? "pointer" : "default",
                transition: "all 0.12s ease"
              },
              onMouseEnter: (e) => {
                if (day && !isSelected) e.currentTarget.style.background = color + "18";
              },
              onMouseLeave: (e) => {
                if (day && !isSelected) e.currentTarget.style.background = "transparent";
              }
            },
            day || ""
          );
        })
      )
    )
  );
};
var NavButton = ({ onClick, color, children }) => {
  const [hovered, setHovered] = useState9(false);
  return /* @__PURE__ */ React11.createElement(
    "button",
    {
      onClick,
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
      style: {
        border: "none",
        background: hovered ? color + "18" : "transparent",
        color,
        width: "26px",
        height: "26px",
        borderRadius: "6px",
        fontSize: "16px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "background 0.12s ease"
      }
    },
    children
  );
};
var CalendarIcon = ({ color = "#1f2937" }) => /* @__PURE__ */ React11.createElement("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, /* @__PURE__ */ React11.createElement("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2", stroke: color, strokeWidth: "2" }), /* @__PURE__ */ React11.createElement("path", { d: "M16 2v4M8 2v4M3 10h18", stroke: color, strokeWidth: "2", strokeLinecap: "round" }));
function shadeColor2(hex, percent) {
  const num = parseInt(hex.replace("#", ""), 16);
  const r = Math.min(255, Math.max(0, (num >> 16) + percent));
  const g = Math.min(255, Math.max(0, (num >> 8 & 255) + percent));
  const b = Math.min(255, Math.max(0, (num & 255) + percent));
  return `rgb(${r},${g},${b})`;
}
export {
  Button,
  Card,
  DataTable,
  DatePicker,
  EcommerceCard,
  LoginForm,
  NavBar,
  ProfileCard,
  SearchBar,
  SideBar,
  Spinner
};
