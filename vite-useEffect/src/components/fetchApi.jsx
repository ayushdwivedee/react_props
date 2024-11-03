import React, { useEffect, useState } from "react";

const FetchApi = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data = await fetch("https://jsonplaceholder.typicode.com/posts");
        let res = await data.json();
        setData(res);
        // console.log("data",res)
      } catch (error) {
        console.log("error while fetching", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data.map((item) => {
        return (
          <>
          <h4>{item.id}</h4>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </>
        );
      })}
    </div>
  );
};

export default FetchApi;
