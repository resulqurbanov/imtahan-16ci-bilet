import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.scss";

function Mehsullar() {
  function dataget() {
    axios.get(`http://localhost:8282/categorie`).then((res) => {
      setProducts(res.data);
    });
  }

  const deleteclick = (_id) => {
    axios.delete(`http://localhost:8282/categorie/${_id}`).then(() => {
      dataget();
    });
  };

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    dataget();
  }, []);

  function handleclickplus() {
    setProducts([
      ...products.sort((a, b) =>
        a.title > b.title ? 1 : b.title > a.title ? -1 : 0
      ),
    ]);
  }
  function handleclickminus() {
    setProducts([
      ...products.sort((a, b) =>
        b.title > a.title ? 1 : a.title > b.title ? -1 : 0
      ),
    ]);
  }

  return (
    <div className="t7">
      <button className="bt2"
        onClick={() => {
          handleclickminus();
        }}
      >
        Çoxdan aza
      </button>
      <button className="bt2"
        onClick={() => {
          handleclickplus();
        }}
      >
        Coxdan aza
      </button>
      <input className="imp1"
        type={"text"}
        placeholder="search"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
     <div className="row">
     {products
        .filter((products) =>
          products.title.toLowerCase().includes(search.toLowerCase())
        )
        .map((element) => {
          return (
            <>
              <div className="m5">
                <div className="container">
                  <i class={element.description}></i>
                  <img src={element.imageUrl} alt="" />
                  <h1>{element.title}</h1>
                  <button
                    onClick={() => {
                      deleteclick(element._id);
                    }}
                  >
                    {" "}
                    delete
                  </button>
                </div>
              </div>
            </>
          );
        })}
     </div>
    </div>
  );
}

export default Mehsullar;
