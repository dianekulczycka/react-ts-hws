import Joi from "joi";

const postValidator = Joi.object(
    {
        title: Joi.string().pattern(/^.{3,62}$/)
            .required()
            .error(ers => {

                // somehow throws " fails to match the required pattern " for everything
                // except string.empty. might want to research if i have some spare time next week

                ers.forEach(e => {
                    switch (e.code) {
                        case "string.empty":
                            e.message = "Post title cannot be empty!";
                            break;
                        case "string.min":
                            e.message = "Post title should be at least 2 symbols";
                            break;
                        case "string.max":
                            e.message = "Post title can not be over 63 symbols";
                    }
                })
                return ers;
            }),
        body: Joi.string().pattern(/^.{6,126}$/)
            .required()
            .error(ers => {
                ers.forEach(e => {
                    switch (e.code) {
                        case "string.empty":
                            e.message = "Post body cannot be empty!";
                            break;
                        case "string.min":
                            e.message = "Post body should be at least 6 symbols";
                            break;
                        case "string.max":
                            e.message = "Post body can not be over 163 symbols";
                    }
                })
                return ers;
            })
    }
)

export {postValidator}