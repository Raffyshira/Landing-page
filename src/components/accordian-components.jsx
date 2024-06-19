import React from "react";
import {
    Accordion,
    AccordionTrigger,
    AccordionContent,
    AccordionItem
} from "@/components/ui/accordion.jsx";

const text = [
    "This advanced technology utilizes precision sensors and data analysis to optimize every step of the agricultural process. from planting to harvest"
];

const ListAccordion = [
    { id: 1, title: "Precision Farming", content: "Halo" },
    { id: 2, title: "Smart Irrigation", content: "Halo" },
    { id: 3, title: "Crop Monitoring", content: "Halo" },
    { id: 4, title: "Predictive Analytics", content: "Halo" },
    { id: 5, title: "Mobile Accessbility", content: "Halo" }
];

export const AccordionFaq = () => {
    return (
        <>
            <Accordion type="single" collapsible>
                {ListAccordion.map((item, index) => (
                    <AccordionItem key={`value-${index}`}>
                        <AccordionTrigger>{item.title}</AccordionTrigger>
                        <AccordionContent>{item.content}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </>
    );
};
