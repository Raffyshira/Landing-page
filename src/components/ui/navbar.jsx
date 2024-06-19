import React from "react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport
} from "@/components/ui/navigation-menu";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import {
    Accordion,
    AccordionTrigger,
    AccordionContent,
    AccordionItem
} from "@/components/ui/accordion.jsx";
import { Button } from "@/components/ui/button.jsx";
import { AlignJustify, MoveRight, Wrench, History, Leaf } from "lucide-react";

const listSustain = [
    {
        id: 1,
        name: "Policies",
        icon: "",
        link: "#!"
    },
    {
        id: 2,
        name: "Certification",
        icon: "",
        link: "#!"
    },
    {
        id: 3,
        name: "Responsible Operations",
        icon: "",
        link: "#!"
    },
    {
        id: 4,
        name: "Smallholder Programmes",
        icon: "",
        link: "#!"
    },
    {
        id: 5,
        name: "PartnerShips & Collaborations",
        icon: "",
        link: "#!"
    },
    {
        id: 6,
        name: "Grivance Procedure",
        icon: "",
        link: "#!"
    }
];

const listAboutUs = [
    { id: 1, name: "Corporate Profile", link: "#!" },
    { id: 2, name: "History & Milestone", link: "#!" },
    { id: 3, name: "Global Presence", link: "#!" },
    { id: 4, name: "Integrated Business Model", link: "#!" },
    { id: 5, name: "Awards", link: "#!" }
];

const listNavProduct = [
    {
        id: 1,
        name: "Precision Farming Tools",
        subName: "Utilizes precision sensors and data analysis",
        icon: <Wrench className="w-4 h-4 ml-2" />,
        link: "#!"
    },
    {
        id: 2,
        name: "Smart Irrigation Systems",
        subName: "controls to regulate watering volume and schedules",
        icon: <History className="w-4 h-4 ml-2" />,
        link: "#!"
    },
    {
        id: 3,
        name: "Smart Processing Resources",
        subName: "smart processing systems use sensors",
        icon: <Leaf className="w-4 h-4 ml-2" />,
        link: "#!"
    },
    {
        id: 4,
        name: "What's New",
        link: "#!"
    }
];

const TemplateNav = ({ data }) => {
    return (
        <>
            <nav>
                {data.map((item, index) => (
                    <a key={index} href={item.link}>
                        <div className="mt-3">
                            <h2 className="text-xl inline-flex items-center hover:underline hover:underline-offset-2">
                                {item.name}
                                {item.icon}
                            </h2>
                            <p className="text-neutral-500">{item.subName}</p>
                        </div>
                    </a>
                ))}
            </nav>
        </>
    );
};

const listNav = [
    {
        id: 1,
        name: "Products",
        link: "/",
        content: <TemplateNav data={listNavProduct} />
    },
    {
        id: 2,
        name: "Sustainability",
        link: "#!",
        content: <TemplateNav data={listSustain} />
    },
    {
        id: 3,
        name: "About Us",
        link: "/",
        content: <TemplateNav data={listAboutUs} />
    },
    { id: 4, name: "Resources", link: "/" },
    { id: 5, name: "Blog", link: "/blog/" },
    { id: 6, name: "Contact Sales", link: "/" },
    { id: 7, name: "Careers", link: "/" }
];

const contentList = () => {
    return (
        <>
            {listNav.map((item, index) => (
                <>
                    {item.content ? (
                        <Accordion
                            key={index}
                            className=""
                            type="single"
                            collapsible
                        >
                            <AccordionItem
                                className=""
                                value={`value-${index}`}
                            >
                                <AccordionTrigger className="font-NeueMedium text-3xl">
                                    {item.name}
                                </AccordionTrigger>
                                <AccordionContent className="font-Neue pl-5">
                                    {item.content}
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    ) : (
                        <a
                            className="inline-flex items-center hover:underline hover:underline-offset-2 text-neutral-400 focus:text-black "
                            href={item.link}
                            key={index}
                        >
                            <h2 className="font-NeueMedium text-3xl border-b w-full py-4">
                                {" "}
                                {item.name}
                            </h2>
                        </a>
                    )}
                </>
            ))}
        </>
    );
};

const Navbar = () => {
    return (
        <>
            <div className="px-3 py-5 md:px-7 lg:px-10">
                <header className="max-w-full flex justify-between h-16 space-x-5 items-center px-5 py-5  md:px-8 md:py-8 md:h-12 lg:px-10 bg-lime-100/80 rounded-full">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                size="sm"
                                className="rounded-full font-Neue"
                            >
                                <AlignJustify className="w-4 h-4 mr-1" />
                                Menu
                            </Button>
                        </SheetTrigger>
                        <SheetContent
                            className="w-full h-full flex flex-col overflow-y-scroll"
                            side="left"
                        >
                            <div className="mt-10 flex flex-col">
                                {contentList()}
                            </div>
                        </SheetContent>
                    </Sheet>
                    <figure className="">
                        <a href="/">
                            <img
                                src="/assets/terra.png"
                                alt="logo"
                                loading="lazy"
                                className="w-20 h-full object-cover md:w-28 lg:w-52"
                            />
                        </a>
                    </figure>
                    <Button
                        size="sm"
                        className="rounded-full font-Neue"
                        asChild
                    >
                        <a href="/blog/">
                            Contact <MoveRight className="w-4 h-4 ml-1" />
                        </a>
                    </Button>
                </header>
            </div>
        </>
    );
};

export default Navbar;
