export function Reload() {
  function handleClick() {
    window.location.reload();
  }

  return <button className="reload" onClick={handleClick}>Reload</button>
}