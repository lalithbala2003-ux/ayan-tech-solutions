import { motion } from "motion/react";

const YOUTUBE_VIDEO_ID = "dep5immO3qo";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <iframe
          src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${YOUTUBE_VIDEO_ID}&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1&iv_load_policy=3&fs=0&start=0`}
          allow="autoplay; fullscreen"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            width: "calc(100vw + 200px)",
            height: "calc(56.25vw + 200px)",
            minWidth: "100%",
            minHeight: "100%",
            border: "none",
          }}
          title="Background Video"
        />
      </div>

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.65) 40%, rgba(0,0,0,0.40) 100%)",
        }}
      />

      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="max-w-3xl"
        >
          <h1
            style={{
              fontFamily: "'Abril Fatface', cursive",
              fontWeight: 900,
              letterSpacing: "0.01em",
              fontSize: "100px",
              lineHeight: 1.0,
              marginBottom: "2rem",
            }}
          >
            <span className="text-white">Ayan Tech</span>
            <br />
            <span style={{ color: "#006994" }}>Solutions</span>
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
