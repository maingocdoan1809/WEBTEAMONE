import {
  useDeferredValue,
  useEffect,
  useRef,
  useState,
  useTransition,
} from "react";
import style from "./SearchInput.module.css";
function SearchInput({ handle, onsubmit }: any) {
  const spanRef = useRef<HTMLButtonElement>(null!);

  const debounceRef = useRef<number>(null!);
  const [value, setValue] = useState("");
  const onChange = function (evt: React.ChangeEvent<HTMLInputElement>) {
    setValue(evt.target.value);
    clearTimeout(debounceRef.current);
    spanRef.current.innerHTML = "";
    return () => {
      debounceRef.current = setTimeout(async () => {
        const data = await handle(evt.target.value);
        updatePromt(evt.target.value, spanRef, data);
      }, 300);
    };
  };

  return (
    <>
      <form className="d-flex" role="search">
        <span className="me-2 flex-grow-1" style={{ position: "relative" }}>
          <input
            value={value}
            onChange={(evt) => {
              onChange(evt)();
            }}
            className={`form-control ${style.completion}`}
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <span ref={spanRef} className={`${style.completionspan} hide`}></span>
        </span>
        <button
          onClick={onsubmit}
          className="btn btn-outline-success"
          type="submit"
        >
          Search
        </button>
      </form>
    </>
  );
}

async function updatePromt(
  inputValue: string,
  spanRef: React.MutableRefObject<HTMLSpanElement>,
  data: string[]
) {
  let value = inputValue;

  let newData = data.find((v) =>
    v.toLowerCase().startsWith(value.toLowerCase())
  );
  if (newData == undefined || value == "") {
    spanRef.current.innerHTML = "";
  } else {
    const hiddenSpan = document.createElement("span");
    hiddenSpan.innerHTML = value;
    hiddenSpan.style.opacity = "0";
    hiddenSpan.style.zIndex = "-1";
    spanRef.current.innerHTML = "";
    newData = newData.slice(value.length);
    spanRef.current.appendChild(hiddenSpan);
    spanRef.current.append(newData);
  }
}

export default SearchInput;
