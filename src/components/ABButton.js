function ABButton(props) {
  return (
    <button onClick={props.btnClick}
      style={{
        backgroundColor: props.className == "abc" ? "black" : "purple",
        color: "white",
        borderRadius: 70,
        border: "none",
      }}
    >
      {props.label}
    </button>
  );
}

export default ABButton;
