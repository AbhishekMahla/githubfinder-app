import spinner from "../../assets/ZKZg.gif";

function Spinner() {
  return (
    <div className="w-100 mt-20">
      <img
        src={spinner}
        alt="isLoading...."
        width={180}
        className="text-center mx-auto"
      />
    </div>
  );
}

export default Spinner;
