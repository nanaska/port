

export default async function handler(req, res) {



    const a = await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage?chat_id=-866011843&text=Имя: ${req.body.name}%0A Email: ${req.body.email}%0A Сообщение: ${req.body.additionalInfo}`)

    res.status(200).json({ name: a })
}