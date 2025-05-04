function Hero() {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "4rem, 1rem",
        textAlign: "center",
        background: "linear-gradient(135deg, #e0f7fa, #fce4ec",
      }}
    >
      <img
        src="https://images.pexels.com/photos/2780762/pexels-photo-2780762.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        alt="Reisender mit Yogamatte"
        style={{ maxWidth: "100%", borderRadius: "1rem", marginBottom: "2rem" }}
      />
      <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
        Entdecke Fitness & Abenteuer auf Reisen!
      </h2>
      <p style={{ maxWidth: "600px" }}>
        Tipps, Motivation und praktische Gadgets für alle, die unterwegs aktiv
        bleiben wollen.
      </p>
      <button
        style={{
          marginTop: "2rem",
          padding: "0.75rem 1.5rem",
          fontSize: "1rem",
          backgroundColor: "#0f172a",
          color: "white",
          border: "none",
          borderRadius: "0.5rem",
          cursor: "pointer",
        }}
      >
        Jetzt Entdecken
      </button>
    </section>
  );
}

export default Hero