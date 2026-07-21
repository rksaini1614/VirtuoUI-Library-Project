import React, { useState } from "react";

export const EcommerceCard = ({
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
  onAddToCart = () => {}
}) => {
  const [hovered, setHovered] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(
          <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#fbbf24" stroke="none">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
        );
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(
          <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#fbbf24" stroke="none">
            <defs>
              <linearGradient id="half" x1="0" x2="100%" y1="0" y2="0">
                <stop offset="50%" stopColor="#fbbf24"/>
                <stop offset="50%" stopColor="rgba(255,255,255,0.1)"/>
              </linearGradient>
            </defs>
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="url(#half)"/>
          </svg>
        );
      } else {
        stars.push(
          <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="rgba(255,255,255,0.1)" stroke="none">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
        );
      }
    }
    return stars;
  };
  
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: bg,
        borderRadius: "16px",
        overflow: "hidden",
        width: "280px",
        border: "1px solid " + (hovered ? alpha(accent, 0.2) : "rgba(255,255,255,0.07)"),
        fontFamily: "system-ui,sans-serif",
        transition: "transform 0.2s, box-shadow 0.2s",
        transform: hovered ? "translateY(-4px)" : "translateY(0px)",
        boxShadow: hovered ? "0 12px 30px rgba(0,0,0,0.4)" : "0 4px 16px rgba(0,0,0,0.3)"
      }}
    >
      <div style={{ position: "relative" }}>
        <img 
          src={image} 
          alt={title} 
          style={{ 
            width: "100%", 
            height: "200px", 
            objectFit: "cover",
            transition: "transform 0.4s",
            transform: hovered ? "scale(1.05)" : "scale(1)"
          }} 
        />
        {badge && (
          <div style={{
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
          }}>
            {badge}
          </div>
        )}
        <button
          onClick={() => setWishlisted(!wishlisted)}
          style={{
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
          }}
        >
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill={wishlisted ? "#ef4444" : "none"} 
            stroke={wishlisted ? "#ef4444" : "#fff"} 
            strokeWidth="2"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
      </div>
      
      <div style={{ padding: "16px" }}>
        <h3 style={{ 
          fontSize: "16px", 
          fontWeight: "700", 
          color: "#fff", 
          margin: "0 0 8px", 
          lineHeight: 1.4 
        }}>
          {title}
        </h3>
        
        <div style={{ 
          display: "flex", 
          alignItems: "center", 
          gap: "6px", 
          marginBottom: "12px" 
        }}>
          <div style={{ display: "flex" }}>
            {renderStars()}
          </div>
          <span style={{ 
            fontSize: "12px", 
            color: "rgba(255,255,255,0.45)"
          }}>
            ({reviewCount})
          </span>
        </div>
        
        <div style={{ 
          display: "flex", 
          alignItems: "center", 
          gap: "10px", 
          marginBottom: "16px" 
        }}>
          <span style={{ 
            fontSize: "20px", 
            fontWeight: "800", 
            color: "#fff" 
          }}>
            {currency}{price.toFixed(2)}
          </span>
          {discount > 0 && (
            <span style={{ 
              fontSize: "14px", 
              fontWeight: "500", 
              color: "#86efac", 
              textDecoration: "line-through" 
            }}>
              {currency}{(price + (price * discount / 100)).toFixed(2)}
            </span>
          )}
        </div>
        
        <button
          onClick={onAddToCart}
          style={{
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
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1"/>
            <circle cx="20" cy="21" r="1"/>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
          </svg>
          Add to Cart
        </button>
      </div>
    </div>
  );
};