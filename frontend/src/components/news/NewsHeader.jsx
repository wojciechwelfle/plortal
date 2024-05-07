const NewsHeader = () => {
    return (
        <>
            <h1
                className="news"
                style={{
                    padding: "10px",
                    paddingLeft: "20px",
                    animation: "backgroundChange 4s infinite alternate",
                    color: "#fff",
                    textShadow: "2px 2px 4px #000",
                }}
            >
                <b> Aktualności</b>
            </h1>
        </>
    );
};

export default NewsHeader;
