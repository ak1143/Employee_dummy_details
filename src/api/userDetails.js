

const getUserDetails = async()=>{
    try {
        const data = await fetch(`https://dummyjson.com/users`);
        const userData = await data.json();
        return userData;
    } catch (error) {
        console.log("error in custom hook",error);
        return null;
    }
} 

export default getUserDetails