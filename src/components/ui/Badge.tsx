import { FC, ReactNode } from "react";

type BadgeProps = {
    children: ReactNode;
    variant?: string;
};


export const Badge: React.FC<BadgeProps> = ({ children, variant = "" }) => {
    return (
        <div className={`badge ${variant}`}>
            {children}
        </div>
    );
};