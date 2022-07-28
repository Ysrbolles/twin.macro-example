import "twin.macro";
import { TestStyles } from "../components/Home.styles";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center ">
      <h1 className="text-3xl text-primary">Hello world!</h1>
      <h1 tw="text-3xl text-primary">Hello twin!</h1>
      <TestStyles>Hello Styled Component</TestStyles>
    </div>
  );
}
