import { ArrowUp } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="py-8 px-4 bg-primary/10 relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between justify-items-center">
            <p className="text-sm text-muted-foreround"> &copy; {new Date().getFullYear()} ameekapatel.com, All rights reserved.</p>


            <div className="flex gap-2">
                <p>top: </p>
                <a href="#hero">
                    <ArrowUp />
                </a>
            </div>
        </footer>
    );
};