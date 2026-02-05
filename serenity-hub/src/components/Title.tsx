interface TitleProps {
    text: string;
}

export default function Title({ text }: TitleProps) {
    return (
        <h1 style={{
            marginBottom: "20px",
            color: "#2c7a7b",
            textAlign: "center",
            fontSize: "2rem",
        }}>
            {text}
        </h1>
    );
}