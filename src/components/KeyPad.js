import React from "react";

function KeyPad({ ClickHandler }) {
  return (
    <div>
      <button className="btn p-4 m-2" name="(" onClick={(e) => ClickHandler(e.target.name)}>
        (
      </button>
      <button className="btn p-4 m-2" name="CE" onClick={(e) => ClickHandler(e.target.name)}>
        CE
      </button>
      <button className="btn p-4 m-2" name=")" onClick={(e) => ClickHandler(e.target.name)}>
        )
      </button>
      <button className="btn p-4 m-2" name="C" onClick={(e) => ClickHandler(e.target.name)}>
        C
      </button>

      <br />

      <button className="btn p-4 m-2" name="1" onClick={(e) => ClickHandler(e.target.name)}>
        1
      </button>
      <button className="btn p-4 m-2" name="2" onClick={(e) => ClickHandler(e.target.name)}>
        2
      </button>
      <button className="btn p-4 m-2" name="3" onClick={(e) => ClickHandler(e.target.name)}>
        3
      </button>
      <button className="btn p-4 m-2" name="+" onClick={(e) => ClickHandler(e.target.name)}>
        +
      </button>

      <br />

      <button className="btn p-4 m-2" name="4" onClick={(e) => ClickHandler(e.target.name)}>
        4
      </button>
      <button className="btn p-4 m-2" name="5" onClick={(e) => ClickHandler(e.target.name)}>
        5
      </button>
      <button className="btn p-4 m-2" name="6" onClick={(e) => ClickHandler(e.target.name)}>
        6
      </button>
      <button className="btn p-4 m-2" name="-" onClick={(e) => ClickHandler(e.target.name)}>
        -
      </button>

      <br />

      <button className="btn p-4 m-2" name="7" onClick={(e) => ClickHandler(e.target.name)}>
        7
      </button>
      <button className="btn p-4 m-2" name="8" onClick={(e) => ClickHandler(e.target.name)}>
        8
      </button>
      <button className="btn p-4 m-2" name="9" onClick={(e) => ClickHandler(e.target.name)}>
        9
      </button>
      <button className="btn p-4 m-2" name="*" onClick={(e) => ClickHandler(e.target.name)}>
        x
      </button>

      <br />

      <button className="btn p-4 m-2" name="." onClick={(e) => ClickHandler(e.target.name)}>
        .
      </button>
      <button className="btn p-4 m-2" name="0" onClick={(e) => ClickHandler(e.target.name)}>
        0
      </button>
      <button className="btn p-4 m-2" name="=" onClick={(e) => ClickHandler(e.target.name)}>
        =
      </button>
      <button className="btn p-4 m-2" name="/" onClick={(e) => ClickHandler(e.target.name)}>
        ÷
      </button>

      <br />
    
    </div>
  );
}

export default KeyPad;
