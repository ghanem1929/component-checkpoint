import { ProfilePhoto } from "./component/profile/ProfilePhoto";
import { FullName } from "./component/profile/FullName";
import { Address } from "./component/profile/Address";
import "./App.css";

function App() {
  return (
    <div className="container con m-4">
      <div className="row">
        <div className="col-12">
          <div className="card" style={{ width: "18rem" }}>
            <ProfilePhoto />
            <div className="card-body">
              <FullName />
              <Address />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
