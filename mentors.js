const { Markup } = require("telegraf");
const { Mentors } = require("../database");

module.exports = async(ctx) => {
    let mentors = await Mentors.find()

    const buttons = [];

    mentors.forEach(element => {
        console.log(element);
    });

    // return ctx.replyOrEdit(`<b>📚 Выберите наставника из списка:</b>`, {
    //     parse_mode: "HTML",
    //     reply_markup: Markup.inlineKeyboard([
    //         [
    //             Markup.callbackButton(mentor_1.username_mentor ? `1. ${mentor_1.username_mentor} 👨‍🏫` : `пусто`, "mentor_1")
    //         ],
    //         [
    //             Markup.callbackButton(mentor_2.username_mentor ? `2. ${mentor_2.username_mentor} 👨‍🏫` : `пусто`, "mentor_2")
    //         ],
    //         [
    //             Markup.callbackButton(mentor_3.username_mentor ? `3. ${mentor_3.username_mentor} 👨‍🏫` : `пусто`, "mentor_3")
    //         ],
    //         [
    //             Markup.callbackButton(mentor_4.username_mentor ? `4. ${mentor_4.username_mentor} 👨‍🏫` : `пусто`, "mentor_4")
    //         ],
    //         [
    //             Markup.callbackButton(mentor_5.username_mentor ? `5. ${mentor_5.username_mentor} 👨‍🏫` : `пусто`, "mentor_5")
    //         ]
    //     ]),
    // })
};