import React, { useState } from "react";

export const LoginForm = ({
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
  onForgotClick = () => {},
  onSignupClick = () => {}
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      onSubmit(email, password);
      setIsSubmitting(false);
    }, 1000);
  };
  return (
    <div style={{
      background: bg,
      borderRadius: "16px",
      padding: "32px",
      width: "360px",
      border: "1px solid rgba(255,255,255,0.08)",
      boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
      fontFamily: "system-ui,sans-serif"
    }}>
      <div style={{ marginBottom: "28px" }}>
        <h2 style={{ fontSize: "22px", fontWeight: "700", color: "#fff", margin: "0 0 6px" }}>{title}</h2>
        <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", margin: 0 }}>{subtitle}</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "18px" }}>
          <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: "rgba(255,255,255,0.7)", marginBottom: "8px" }}>{emailLabel}</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
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
            }}
          />
        </div>
        <div style={{ marginBottom: "18px" }}>
          <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: "rgba(255,255,255,0.7)", marginBottom: "8px" }}>{passwordLabel}</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
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
            }}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
          <label style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "rgba(255,255,255,0.7)", cursor: "pointer" }}>
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              style={{
                width: "16px",
                height: "16px",
                borderRadius: "4px",
                border: "1px solid " + alpha(accent, 0.5),
                background: remember ? accent : "transparent",
                cursor: "pointer"
              }}
            />
            {rememberLabel}
          </label>
          <button
            type="button"
            onClick={onForgotClick}
            style={{
              background: "none",
              border: "none",
              color: accent,
              fontSize: "13px",
              fontWeight: "600",
              cursor: "pointer",
              padding: 0
            }}
          >
            {forgotLabel}
          </button>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          style={{
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
          }}
        >
          {isSubmitting ? "Signing in..." : submitText}
        </button>
        <div style={{ textAlign: "center", fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>
          {noAccountText} 
          <button
            type="button"
            onClick={onSignupClick}
            style={{
              background: "none",
              border: "none",
              color: accent,
              fontWeight: "600",
              cursor: "pointer",
              padding: 0,
              fontSize: "inherit"
            }}
          >
            {signupText}
          </button>
        </div>
      </form>
    </div>
  );
};