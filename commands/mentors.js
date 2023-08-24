const { Markup } = require("telegraf");
const { Mentors, User } = require("../database");

module.exports = async(ctx) => {
    let mentors = await Mentors.findAll()
    const me = await User.findOne({
        where: {
            username: ctx.from.username.replace("@", "")
        }
    })

    const buttons = [];

    mentors.forEach(element => {
        buttons.push([
            Markup.callbackButton(element.username_mentor ? `${me.mentor_id === element.id ? '✅' : ''} 1. ${element.username_mentor} 👨‍🏫` : `пусто`, `mentor_${element.id}`)
        ])
    });

    buttons.push([
        Markup.callbackButton("↩️ назад", "start")
    ])

    return ctx.replyOrEdit(`<b>📚 Выберите наставника из списка:</b>`, {
        parse_mode: "HTML",
        reply_markup: Markup.inlineKeyboard(buttons),
    })
};