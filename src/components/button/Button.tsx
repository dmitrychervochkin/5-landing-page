import "./button.scss";

interface ButtonProps {
    children: string;
    type?: "default" | "reverse" | "subscribe" | "submit";
    size?: "big" | "small";
    width?: string;
}

export const Button = ({
    children,
    size = "big",
    type = "default",
    width = "100%",
}: ButtonProps) => {
    return (
        <button
            style={{ width: width }}
            className={`button button-${type} button-${size}`}
        >
            {children}
        </button>
    );
};
