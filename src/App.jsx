import axios from "axios";
import { useEffect, useState } from "react";
import bg1 from "../src/assets/bg2.jpg";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?page=1&results=1&seed=abc")
      .then((response) => {
        setData(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="flex h-screen bg-[#a38fa3] w-full justify-center items-center p-4">
      {data.map((user, index) => (
        <div
          key={index}
          className="flex justify-center flex-col gap-4 p-6 border-2 border-linear-gradient(to right, rgba(0, 0, 0, 1), rgba(255, 255, 255, 1)) w-96 md:h-52"
          style={{
            backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 1), rgba(255, 255, 255, 0.9)), url(${bg1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex flex-col py-2 md:flex-row items-center justify-evenly text-[#00E0F2]">
            <div className="border-2 border-[#737d7d]  bg-green-800 overflow-hidden">
              <img
                className="w-32 h-32"
                src={user.picture.large}
                alt="pic"
              />
            </div>
            <div>
              <div className="flex gap-2 text-lg">
                <h1 className="font-light text-white">Name :</h1>
                <h1 className="font-semibold">{user.name.first}</h1>
                <h1 className="font-semibold">{user.name.last}</h1>
              </div>
              <div>
                <h1><span className="text-white">Gender : </span>{user.gender}</h1>
                <h1><span className="text-white">Ph. No. : </span>{user.phone}</h1>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
