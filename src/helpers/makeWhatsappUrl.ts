export const makeWhatsappUrl = (phone:string|undefined,message:string) => {
    return `https://api.whatsapp.com/send/?phone=${phone}&text=${message.replace(/ /g, '+')}`;
};