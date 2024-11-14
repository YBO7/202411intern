function Cusimg ({img_name, id}) {
    return (
        <div
            id={id}
            style={{
                margin: "1px",
                backgroundColor: "red",
                // width: "50px",
                // height: "50px",
            }}
        >
            <img src = {img_name}></img>
        </div>
    );
}

export default Cusimg;