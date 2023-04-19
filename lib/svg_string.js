//  Variable to store new logo in


const newLogo = obj => {



    `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <${obj.shape} cx="150" cy="100" r="80" fill="${obj.shapeColor}" />
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${obj.textColor}">${obj.text}</text>
  
  </svg>`
}