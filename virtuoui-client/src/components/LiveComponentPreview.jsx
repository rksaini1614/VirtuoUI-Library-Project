import React from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { useRef } from "react";
import { useState } from "react";
import { LiveError, LivePreview, LiveProvider } from "react-live";
import { motion } from "motion/react";
import { FiRefreshCw } from "react-icons/fi";

export const LiveComponentPreview = ({code}) => {
    const [refreshKey, setRefreshKey] = useState(0);

    const refreshPreview = () => {
        setRefreshKey((prev) => prev+1);
    }

    let sanitized = code
    .replace(/import\s+.*?from\s+["'].*?["'];?/g, "")
    .replace(/export\s+/g, "");

    sanitized = sanitized
    .replace(/posotion\s+:\s*["']fixed["']/g, 'position: "absolute"')
    .replace(/posotion\s+:\s*`fixed`/g, 'position: "absolute"')
    .replace(/\bfixed\b/g, "absolute");

    const match = sanitized.match(/const\s+([A-Z]\w+)/);
    const componentName = match ? match[1] : null;

    const wrappedCode = componentName ? `${sanitized}\n\nrender(<${componentName}/>)` : sanitized;

    return (
        <div style={{position: "relative",width: "100%", maxWidth: "100%"}}>
            <motion.button
                onClick={refreshPreview}
                whileTap={{scale:0.9, rotate:90}}
                transition={{type:"spring", stiffness:300}}
                style={{
                    position:"absolute",
                    right:"8px",
                    top:"8px",
                    background:"#1e293b",
                    color: "#94a3b8",
                    border: "none",
                    padding: "6px",
                    borderRadius: "8px",
                    cursor: "pointer",
                    zIndex: 10,
                }}>
                <FiRefreshCw size={16}/>
            </motion.button>

            <LiveProvider 
                key={refreshKey}
                code={wrappedCode}
                scope={{React, useState,useRef,useEffect, useCallback}}
                noInline>

                <motion.div
                initial={{opacity:0,y:10}}
                animate={{opacity:1,y:0}}
                transition={{delay:0.4}}
                style={{
                    position:"relative",
                    width:"100%",
                    minHeight: "300px",
                    maxWidth: "100%",
                    background:"#020617",
                    color: "#94a3b8",
                    border: "1px solid #1e293b",
                    padding: "clamp(10px, 2vw, 20px)",
                    borderRadius: "12px",
                    overflow: "hidden",
                }}>
                    <motion.div
                    style={{
                        width:"100%",
                        height: "100%",
                        position: "relative",
                        overflow: "auto",
                    }}>
                        <LivePreview/>
                    </motion.div>

                </motion.div>
                <LiveError 
                    style={{
                        marginTop: "10px",
                        padding: "10px",
                        background: "#45a0a",
                        color: "#f87171",
                        borderRadius: "6px",
                        fontSize: "clamp(12px,1.5vw,14px)",
                        overflow:"auto",
                    }}/>

                {
                    !componentName && (
                        <motion.div
                        initial={{opacity:0}}
                        anumate={{opacity:1}}
                        style={{
                            marginTop: "10px",
                            padding: "10px",
                            background: "#1e293b",
                            color: "#95a3b8",
                            borderRadius: "6px",
                            fontSize: "clamp(12px,1.5vw,14px)",
                        }}
                        >
                            Preview is not available. Copy the code and paste it into your project.
                        </motion.div>
                    )
                }
            </LiveProvider>
        </div>
    )
}