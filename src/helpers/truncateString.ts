export const truncateString = (string:string,number:number) => {
    if(string.length > number) {
        return string.slice(0,number) + '...';
    }else {
        return string;
    }
}