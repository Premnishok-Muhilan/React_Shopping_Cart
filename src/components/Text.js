function Text() {
  const outerDivStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center", // Center horizontally
    alignItems: "center", // Center vertically
    height: "300px",
    border: "1px solid #ccc", 
    backgroundColor: "rgb(33, 37, 41)",
  };

  const innerDivStyle = {
    width: "100%", 
    height: "auto", 
    backgroundColor: "rgb(33, 37, 41)",
    textAlign: "center",
    lineHeight: "100px", 
    fontFamily:
      'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    color: "white",
    boxSizing: "border-box",
    fontWeight: "700",
    fontSize: "56px",
  };

  const innerDivStyle1 = {
    width: "200px", 
    height: "100px", 
    backgroundColor: "rgb(33, 37, 41)", 
    textAlign: "center", 
    lineHeight: "100px",
    boxSizing: "border-box",
    color: "rgb(255, 255, 255)",
    fontFamily:
      'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    fontSize: "56px",
    fontWeight: "700",
    lineHeight: "67.2px",
    marginBottom: "8px",
    marginTop: "0px",
    textAlign: "center",
  };

  return (
    <div style={outerDivStyle}>
      <div>
        <h1 style={{ color: "rgb(255, 255, 255)" }}>Shop in Style</h1>
      </div>
      <div>
        <h3 style={{ color: "rgba(255, 255, 255, 0.5)" }}>
          With this shop hompeage template
        </h3>
      </div>
    </div>

  );
}

export { Text };
