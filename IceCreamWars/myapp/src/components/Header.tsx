import "../css/Header.css"


function DisplayingHeader(props: {user: string}) {
  return (
    <div className="DisplayingHeader">
      <p>Welcome {props.user}</p>
      <header className="theHeader">Ice Cream Wars</header>
    </div>
  );
}

export default DisplayingHeader;
