import MovingComponent from "react-moving-text";
const AnimationText = () => {
  return (
    <h1 className="ah-headline d-flex">
      {`I'm`}{" "}
      <MovingComponent
        type="typewriter"
        dataText={[
          "kyi chan",
          "a front end developer",
        ]}
      />
    </h1>
  );
};
export default AnimationText;
