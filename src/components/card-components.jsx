import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const CardProduct = ({ src, number, title, text }) => {
    return (
        <>
            <Card className="bg-lime-100/80 rounded-3xl mt-5 p-2.5 border-none w-72 h-full sm:w-[31rem] shrink-0">
                <div className="flex flex-col justify-center items-center sm:flex-row sm:space-x-4">
                    <figure className="shrink-0 md:p-1.5">
                        <img
                            className="rounded-2xl w-full h-full md:w-44 aspect-square object-cover md:aspect-[4/6] lg:aspect-[4/6]"
                            src={src}
                            alt="..."
                            loading="lazy"
                        />
                    </figure>
                    <article className="mt-5 sm:mt-0 p-2 md:p-0">
                        <p className="rounded-full bg-white w-fit px-3 py-2 font-Neue mb-2">
                            {number}
                        </p>
                        <h2 className="font-Neue text-2xl md:w-56 ">{title}</h2>
                        <p className="mt-5 font-Neue md:mt-2">{text}</p>
                    </article>
                </div>
            </Card>
        </>
    );
};
