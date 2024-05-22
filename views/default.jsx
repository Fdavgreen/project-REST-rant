
//   const React = require('react')

// function Def(html) {
//     console.log(html.children)
//     return (
//         <html>
//             <head>
//                 <title>Title</title>
//                 {/* Bootstrap CDN link */}
//                 <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"/>
//                 <link rel="stylesheet "type="text/css" href="/css/styles.css" /> 
//             </head>
//             <body>
//                 {html.children}
//             </body>
//         </html>
//     );
// }



// module.exports = Def

const React = require('react')

function Def(html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" />
                <link rel="stylesheet" href="/css/styles.css"/>   
            </head>
            <body>
                <nav>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/places">Places</a>
                        </li>
                        <li>
                            <a href="/places/new">Add Place</a>
                        </li>
                    </ul>
                </nav>

                {html.children}
            </body>
        </html>
    )
}


module.exports = Def