export default function ChildComponent({ data, setClick, goInner }) {
  return (
    <div
      className="childComponent"
      onClick={() => {
        setClick(data);
        goInner(true);
      }}
      style={{height:"200px", width: "200px"}}
    >
      {data}
    </div>
  );
}
