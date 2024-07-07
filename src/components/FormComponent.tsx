import React, {FC} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {postValidator} from "../form-validators/post-validator";
import {formSubmitHandler} from "../handlers/formSubmitHandler";
import {IFormInfo} from "../interfaces/IFormInfo";

const FormComponent: FC = () => {
    let {
        formState: {errors, isValid},
        register,
        handleSubmit
    } = useForm<IFormInfo>({mode: 'all', resolver: joiResolver(postValidator)});

    return (
        <div>
            <form onSubmit={handleSubmit(formSubmitHandler)}>
                <label htmlFor="title"> Title: </label> <br/>
                <input type="text" defaultValue="Title goes here" {...register("title")} /> <br/>
                <div style={{color: "red"}}>{errors.title?.message}</div>
                <label htmlFor="title"> Your post: </label> <br/>
                <input type="text" defaultValue="Post's body goes here" {...register("body")}
                       style={{width: "370px", height: "160px"}}/> <br/>
                <div style={{color: "red"}}>{errors.body?.message} </div>
                <button disabled={!isValid}> Send </button>
            </form>
        </div>
    );
};

export default FormComponent;