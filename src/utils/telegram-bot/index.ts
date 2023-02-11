export function telegramBot(text: string){

    //bot - DiorInordicBot
    //name - DiorInordicBot 
    // Use this token to access the HTTP API:
    // 5739392685:AAG_vFL13rHrijJdjL6PIVD-3YI5jyDIdRQ

    const bot_token = '5739392685:AAG_vFL13rHrijJdjL6PIVD-3YI5jyDIdRQ'
    const url_api_telegram = `https://api.telegram.org/bot${bot_token}`;

    const adminsArray: any = {
        'Dior': 846783317
    }

    fetch(`${url_api_telegram}/sendMessage?chat_id=${adminsArray['Dior']}&text=${text}`, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(() => {
        alert('Сообщение отправлено админинистратору')
    })

}