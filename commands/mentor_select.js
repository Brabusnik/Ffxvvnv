const { Markup } = require("telegraf");
const { Mentors, User } = require("../database");

module.exports = async(ctx) => {
        const mentorId = ctx.match[1];

        const mentor = await Mentors.findByPk(mentorId);
        const me = await User.findOne({
            where: {
                username: ctx.from.username.replace("@", "")
            }
        })


        return ctx.replyOrEdit(`
      <b>ℹ️ Информация о наставнике ${mentor.username_mentor}:</b>
      \n👨‍🏫 Username: @${mentor.username_mentor}
      \n🧾 Описание: <code>${mentor.description}</code>
      \n\n${me.mentor_id === mentor.id ? '✅ Это ваш наставник' : '' }
      `, {
                    parse_mode: "HTML",
                    reply_markup: Markup.inlineKeyboard([
                                [
                                    Markup.callbackButton(`${me.mentor_id === mentor.id ? '↩️ Назад к списку' : '✅ Выбрать' }`, `${me.mentor_id === mentor.id ? 'mentors' : `mentor_${mentor.id}_enter` }`)
            ],
        ]),
    })
};