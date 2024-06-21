/*

    <div id ="parent">
        <div id="child">
            <h1>I am h1 tag </h1>
        </div>
    </div>

    React.createElement creates React Element which is at the end javascript object.
    but when we render this it converts into browser understandable html code

*/




// const heading = React.createElement(
//     "h1", 
//     {id:"heading", abc : "abcId"}, 
//     "Kushal! This React.js"
// );


const parent = React.createElement(
    "div",
    {id : "parent"},
    React.createElement(
        "div",
        {id : "child"},

        [React.createElement(
            "h1",
            {id : "heading"},
            "I am a H1 Tag "
        ),
        React.createElement(
            "h2",
            {id : "heading1"},
            "I am a H2 Tag "
        )

    ]
    )
);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);