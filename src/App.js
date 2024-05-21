import Server from "./Routing";
import Background from "./modules/Background";

export default function App() {
  return(
    <div className="wholePage" id="section0">
      <Background />
      <Server />
    </div>
  )
}