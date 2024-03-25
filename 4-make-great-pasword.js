/* 
input: info + siteName > fn: return  generate password > 

input: object > object er property's values join # @  
> return string(password)
*/

// Make A Great Password

function password(personInfo){

    const name = personInfo.name,
        birthYear = personInfo.birthYear.toString();
        siteName = personInfo.siteName;

        if(name !== " " && birthYear !== " " && siteName !== " " 
            && birthYear.length === 4){
            const updateSiteName = siteName.charAt(0).toUpperCase() + siteName.slice(1);
            let info = "#" + name + "@" + birthYear ;
            const generatePassword =  updateSiteName + info;
        
            return generatePassword;
        }
        else{
            const errorMessage = "Invalid"
            return errorMessage;
        }
   
}

// let personInfo = { 
//     name: "kolimuddin" , 
//     birthYear: 1999, 
//     siteName: "google" 
// }

// let personInfo = { 
//     name: "rahat" , 
//     birthYear: 2002, 
//     siteName: "Facebook" 
// }

// let personInfo = { 
//     name: "toky" , 
//     birthYear: 200, 
//     siteName: "Facebook" 
// }

const result4 = password(personInfo);
console.log(result4);