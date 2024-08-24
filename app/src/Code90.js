// code is written by Aniket Kadam
// travel from one page to another using JavaScript

const Pagetravel = () => {
    const goToAnotherPage = () => {
        window.location.href = "/another-page.html"; // replace with your target page URL
    };

    return (
        <div>
            <h1>Page Travel</h1>
            <button onClick={goToAnotherPage}>Go to Another Page</button>
        </div>
    );
};

export default Pagetravel;
