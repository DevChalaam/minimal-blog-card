# Minimal Blog Card

This Project is Portfolio and Experience.

![alt text](image.png)

## Scripts Coding

Javascript Scripts

```js
// Import React
import React from "react";
// Import CSS
import "./minimal.css";

function Minimal() {
    return (
        // Main Container
        <div className="container-main">
            {/* Box Container */}
            <div className="container-second"></div>
            
            {/* Design Box */}
            <div className="container-box-design">
                <p className="text-design">Design</p>
            </div>

            {/* Embracing Box Topic */}
            <div className="container-embracing">
                <h4 className="txt-embracing">Embracing Minimalism</h4>
            </div>

            {/* From Minimalist Box */}
            <div className="container-fromminimalist">
                <p className="txt-fromminimalist">From minimalist sculptures to minimalist paintings, this blog will inspire you to appreciate the beauty that lies in simplicity.</p>
            </div>

            <hr className="container-hr" color="#E5EAF0"></hr>

            {/* Annie Box */}
            <div className="container-annie">
                <p className="txt-annie">Annie Spratt</p>
            </div>
        </div>
    )
};

export default Minimal;
```

CSS Scripts

```css
/* Import Fonts Form Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@100..800&display=swap');

* {
    margin: 0 auto;
    padding: 0 auto;
    box-sizing: border-box;
    font-family: "Sora", sans-serif;
    font-weight: 100;
    font-style: normal;
    font-optical-sizing: auto;
}

body {
    display: flex;
    flex-direction: column;
    gap: 32px;
    background-color: #FAFAF9;
}

/* Main Container */
div.container-main {
    border: #FFFFFF 1px solid;
    margin-top: 164px;
    width: 368px;
    height: auto;
    border-radius: 10px;
    background-color: #FFFFFF;

    & div.container-second {
        border: #FFFFFF 1px solid;
        border-radius: 15px;
        width: 336px;
        height: 152px;
        margin: 16px;
        background-image: url("/src/Image/cattus.jpg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    /* Design Box */
    & div.container-box-design {
        border: #E6D6FC 1px solid;
        margin: 16px;
        width: 70px;
        border-radius: 20px;
        background-color: #E6D6FC;

        & p.text-design {
            font-size: 10px;
            padding: 6px 16px;
            font-weight: 600;
            color: #883AE1;
        }
    }

    /* Embracing Box Topic */
    & div.container-embracing {
        border: #FFFFFF 1px solid;
        margin-top: 16px;
        margin-left: 16px;
        margin-right: 16px;
        height: auto;

        & h4.txt-embracing {
            font-size: 18px;
            font-weight: 600;
            color: #20293A;
        }
    }

    /* From Minimalist Box */
    & div.container-fromminimalist {
        border: #FFFFFF 1px solid;
        margin-top: 6px;
        margin-bottom: 20px;
        margin-left: 16px;
        margin-right: 16px;
        width: 300px;
        height: auto;

        & p.txt-fromminimalist {
            font-size: 14px;
            color: #6C727F;
            font-weight: 100;
        }
    }

    & hr.container-hr {
        opacity: .3;
    }

    /* Annie Box */
    & div.container-annie {
        border: #FFFFFF 1px solid;
        height: auto;
        margin-top: 20px;
        margin-bottom: 20px;
        margin-left: 16px;
        margin-right: 16px;

        & p.txt-annie {
            font-size: 12px;
            color: #6C727F;
            font-weight: 100;
        }
    }
}
```

Run Project

### `npm start`

## Result

![alt text](image-1.png)

![alt text](image-2.png)

![alt text](image-3.png)