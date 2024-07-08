import Joi from "joi";

const postValidator = Joi.object(
    {
        userId: Joi.number().min(1).max(10).required().messages(
            {
                "number.min": "min user ID is 1",
                "number.max": "max user ID is 10",
            }),
        title: Joi.string().pattern(/^.{3,62}$/)
            .required()

            // somehow it ignores the following messages and logs
            // "fails to match the required pattern"
            // to any error, i tried to fix it using stackoverflow answers but
            // i didnt really understand the solution so i didnt implement it here ))

            .messages({
                "string.empty": "Post title cannot be empty!",
                "string.min": "Post title should be at least 2 symbols",
                "string.max": "Post title can not be over 63 symbols",
            })
            .error(ers => {
                ers.forEach(e => {
                    console.log(e);
                })
                return ers;
            }),
        body: Joi.string().pattern(/^.{6,127}$/)
            .required()
            .messages({
                "string.empty": "Post body cannot be empty!",
                "string.min": "Post body should be at least 6 symbols",
                "string.max": "Post body can not be over 127 symbols",
            })
            .error(ers => {
                ers.forEach(e => {
                    console.log(e);
                })
                return ers;
            }),
    }
)

export {postValidator}