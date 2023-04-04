import { useRef, useState } from "react";
import style from "./SearchInput.module.css";
function SearchInput({ data, onsubmit }: any) {
  const btnRef = useRef<HTMLButtonElement>(null!);
  const input = useRef<HTMLInputElement>(null!);
  const span = useRef<HTMLSpanElement>(null!);
  return (
    <>
      <form className="d-flex" role="search">
        <span className="me-2 flex-grow-1" style={{ position: "relative" }}>
          <input
            onChange={(evt) => {
              onInput(evt, span, data);
            }}
            ref={input}
            className={`form-control ${style.completion}`}
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <span ref={span} className={`${style.completionspan} hide`}></span>
        </span>
        <button
          onClick={onsubmit}
          ref={btnRef}
          className="btn btn-outline-success"
          type="submit"
        >
          Search
        </button>
      </form>
    </>
  );
}

function onInput(
  evt: React.FormEvent<HTMLInputElement>,
  targetSpan: React.MutableRefObject<HTMLSpanElement>,
  data: string[]
) {
  let value = (evt.target as HTMLInputElement).value;
  let newData = data.find((v) =>
    v.toLowerCase().startsWith(value.toLowerCase())
  );
  if (newData == undefined || value == "") {
    targetSpan.current.innerHTML = "";
  } else {
    newData = value + newData.slice(value.length);
    targetSpan.current.innerHTML = newData;
  }
}

export default SearchInput;
