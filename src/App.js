import "./App.css";
import { gql, useQuery } from "@apollo/client";

const DOGS = gql`
  query {
    dogs {
      id
      name
      thumbnail
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(DOGS);
  console.log(data);
  console.log(loading);
  if (loading) return "ロード中・・・";

  if (error) return `エラー！ ${error.message}`;

  //JSON化することで文字列として出力できる。JSON化しないとオブジェクトの状態だからHTMLとして出力されない。
  return (
    <div className="App">
      {/* {JSON.stringify(data)} */}
      {data.dogs.map((dog) => (
        <div key={dog.id}>
          <p>{dog.name}</p>
          <img src={dog.thumbnail}></img>
        </div>
      ))}
    </div>
  );
}

export default App;
